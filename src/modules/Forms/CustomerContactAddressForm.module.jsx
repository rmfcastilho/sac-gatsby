import React, { useEffect } from 'react';
import { Form } from 'react-final-form';

import { useDispatch, useSelector } from 'react-redux';

import { zipAddressSelector } from 'selectors/addressForm.selectors';

import { getZipData } from 'api/getZipData';

import { FormFieldsWrapper } from './styles/Form.styles';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { ADDRESS_SUBSECTION } from 'modules/Forms/constants/AddressForm.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from 'modules/Forms/constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';

import { updateAddressWithApiResult } from 'slices/customerAddressForm.slice';
import { addressFieldTransformers } from 'modules/Forms/helpers/addressFieldTransformers';

import { isZipValidValidator } from 'modules/Forms/helpers/fieldValidation';

import { addressSubformSelector } from 'selectors/addressForm.selectors';

const CustomerContactAddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => console.log('Submitted!');
  const handleChange = (event) => handleFormFieldChange(
    event,
    FORM_NAMES.CUSTOMER_ADDRESS_FORM,
    dispatch
  );

  const zipCode = useSelector(zipAddressSelector);
  const stateAddressData = useSelector(addressSubformSelector);

  useEffect(() => {
    const zipChecker = zipCode && !isZipValidValidator(zipCode);

    if (zipChecker) {
      const fetchAddressData = async () => {
        try {
          return await getZipData(zipCode);
        } catch (error) {
          console.error('Error fetching zip data', error);
          return null;
        }
      }

      fetchAddressData().then((result) => {
        if (result) {
          dispatch(updateAddressWithApiResult(addressFieldTransformers(result)));
        }
      });
    }
  }, [zipCode]);

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={stateAddressData}
      keepDirtyOnReinitialize
      render={() => (
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <FormFieldsWrapper>
            <FormSubsection subsectionData={EXISTING_CUSTOMER_SUBSECTION} />
            <FormSubsection subsectionData={ADDRESS_SUBSECTION} />
            <FormSubsection subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION} />
          </FormFieldsWrapper>
          <FormSubmission />
        </form>
      )}
    />
  )
};


export default CustomerContactAddressForm;
