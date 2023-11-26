import React from 'react';
import { Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { handleFormFieldChange } from './helpers/handleFormFieldChange';

import { FORM_NAMES } from './constants/FormNames.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from './constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import { setCustomerFormFieldValidity } from 'slices/customerContactForm.slice';

import { customerFormSelector } from 'selectors/formSelectors.selectors';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';
import { submitNewRequest } from 'api/submitNewRequest';

const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => {
  const dispatch = useDispatch();

  const formName = FORM_NAMES.CUSTOMER_FORM;
  const formData = useSelector(customerFormSelector);

  const handleValueChange = (event) => handleFormFieldChange(
    event,
    FORM_ACTIONS[formName],
    dispatch
  );

  const isFormValid = false;

  return (
    <Form
      onSubmit={() => submitNewRequest('new-request', formData)}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleValueChange}>
          <FormFieldsWrapper>
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.IDENTIFICATION,
              }}
              fieldValidationAction={setCustomerFormFieldValidity}
              subsectionData={EXISTING_CUSTOMER_SUBSECTION}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.MESSAGE,
              }}
              fieldValidationAction={setCustomerFormFieldValidity}
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
