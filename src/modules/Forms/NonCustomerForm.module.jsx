import React from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { handleFormFieldChange } from 'modules/Forms/helpers/handleFormFieldChange';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { NON_CUSTOMER_SUBSECTION } from './constants/NonCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';
import { FORM_ACTIONS } from 'modules/Forms/constants/FormActions.constants';

import { setNonCustomerFormFieldValidity } from 'slices/nonCustomerForm.slice';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const handleSubmit = () => console.log('Submitted!');

const NonCustomerForm = () => {
  const dispatch = useDispatch();

  const formName = FORM_NAMES.NON_CUSTOMER_FORM;

  const handleValueChange = (event) => handleFormFieldChange(
    event,
    FORM_ACTIONS[formName],
    dispatch
  );

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleValueChange}>
          <FormFieldsWrapper>
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.IDENTIFICATION,
              }}
              subsectionData={NON_CUSTOMER_SUBSECTION}
              fieldValidationAction={setNonCustomerFormFieldValidity}
            />
            <FormSubsection
              formNamingData={{
                formName: formName,
                subsectionName: HIGH_LEVEL_CATEGORIES.MESSAGE,
              }}
              subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION}
              fieldValidationAction={setNonCustomerFormFieldValidity}
            />
          </FormFieldsWrapper>

          <FormSubmission isFormValid={isFormValid} />
        </form>
      )}
    />
  );
};


export default NonCustomerForm;
