import React, { useEffect } from 'react';
import { Form } from 'react-final-form';

import { useDispatch, useSelector } from 'react-redux';

import { updateAddressWithApiResult, setCustomerAddressFormFieldValidity } from 'slices/customerAddressForm.slice';
import { addressSubformSelector } from 'selectors/addressForm.selectors';
import { zipAddressSelector } from 'selectors/addressForm.selectors';

import { getZipData } from 'api/getZipData';

import { FormFieldsWrapper } from './styles/Form.styles';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { ADDRESS_SUBSECTION } from 'modules/Forms/constants/AddressForm.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';

import { addressFieldTransformers } from 'modules/Forms/helpers/addressFieldTransformers';
import { isZipValidValidator } from 'modules/Forms/helpers/fieldValidation';


const CustomerContactAddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => console.log('Submitted!');

  const formName = FORM_NAMES.CUSTOMER_ADDRESS_FORM;

  const handleValueChange = (event) => handleFormFieldChange(
    event,
    FORM_ACTIONS[formName],
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
          dispatch(
            updateAddressWithApiResult(addressFieldTransformers(result))
          );
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
        <form onChange={handleValueChange} onSubmit={handleSubmit}>
          <FormFieldsWrapper>
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.IDENTIFICATION,
              }}
              fieldValidationAction={setCustomerAddressFormFieldValidity}
              subsectionData={EXISTING_CUSTOMER_SUBSECTION}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.ADDRESS,
              }}
              fieldValidationAction={setCustomerAddressFormFieldValidity}
              subsectionData={ADDRESS_SUBSECTION}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.MESSAGE,
              }}
              fieldValidationAction={setCustomerAddressFormFieldValidity}
              subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION}
            />
          </FormFieldsWrapper>
          <FormSubmission isFormValid={isFormValid} />
        </form>
      )}
    />
  )
};


export default CustomerContactAddressForm;
