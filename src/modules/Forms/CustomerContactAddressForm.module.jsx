import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';

import { useDispatch, useSelector } from 'react-redux';

import { updateAddressWithApiResult } from 'slices/customerAddressForm.slice';
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

import { addressFormValidationSelector } from 'selectors/formValidation.selectors';

import { setFormFieldValidity } from 'slices/formValidation.slice';
import { submitNewRequest } from 'api/submitNewRequest';
import { customerAddressFormSelector } from 'selectors/formSelectors.selectors';
import { contactReasonSelector } from 'selectors/contactReason.selectors';


const CustomerContactAddressForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const formValidator = useSelector(addressFormValidationSelector);
  const areAllCategoriesValid = Object.values(formValidator).every(
    category => Object.values(category).every(field => field === true)
  );

  const formName = FORM_NAMES.CUSTOMER_ADDRESS_FORM;
  const formData = useSelector(customerAddressFormSelector);
  const contactReason = useSelector(contactReasonSelector);

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
          const transformedAddress = addressFieldTransformers(result);

          dispatch(updateAddressWithApiResult(transformedAddress));
          Object.keys(
            transformedAddress[HIGH_LEVEL_CATEGORIES.ADDRESS]
          ).forEach((fieldName) => {
            dispatch(setFormFieldValidity({
              category: HIGH_LEVEL_CATEGORIES.ADDRESS,
              targetForm: formName,
              field: fieldName,
              isValid: !!transformedAddress[HIGH_LEVEL_CATEGORIES.ADDRESS][fieldName],
            }));
          });
        }
      });
    }
  }, [zipCode]);

  useEffect(() => {
    setIsFormValid(areAllCategoriesValid);
  }, [areAllCategoriesValid])

  const handleSubmit = () => submitNewRequest(contactReason, formData);

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
              subsectionData={EXISTING_CUSTOMER_SUBSECTION}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.ADDRESS,
              }}
              subsectionData={ADDRESS_SUBSECTION}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.MESSAGE,
              }}
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
