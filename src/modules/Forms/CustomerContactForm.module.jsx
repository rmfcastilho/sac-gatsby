import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { handleFormFieldChange } from './helpers/handleFormFieldChange';

import { FORM_NAMES } from './constants/FormNames.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from './constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import { customerFormValidationSelector } from 'selectors/formValidation.selectors';

import { customerFormSelector } from 'selectors/formSelectors.selectors';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';
import { submitNewRequest } from 'api/submitNewRequest';

const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const formName = FORM_NAMES.CUSTOMER_FORM;
  const formData = useSelector(customerFormSelector);

  const formValidator = useSelector(customerFormValidationSelector);
  const areAllCategoriesValid = Object.values(formValidator).every(
    category => Object.values(category).every(field => field === true)
  );

  useEffect(() => {
    setIsFormValid(areAllCategoriesValid);
  }, [areAllCategoriesValid])

  const handleValueChange = (event) => handleFormFieldChange(
    event,
    FORM_ACTIONS[formName],
    dispatch
  );

  return (
    <Form
      onSubmit={() => submitNewRequest('new-request', formData)}
      render={() => (
        <form onChange={handleValueChange}>
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


export default CustomerContactForm;
