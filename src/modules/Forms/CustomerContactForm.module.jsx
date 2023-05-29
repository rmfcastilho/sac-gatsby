import React from 'react';
import { Form } from 'react-final-form';
import { useDispatch } from 'react-redux';

import { FormFieldsWrapper } from "./styles/Form.styles";

import { handleFormFieldChange } from './helpers/handleFormFieldChange';

import { FORM_NAMES } from './constants/FormNames.constants';
import { EXISTING_CUSTOMER_SUBSECTION } from './constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_SUBSECTION } from './constants/MessageEntryForm.constants';

import FormSubsection from './components/FormSubsection/FormSubsection.component';
import FormSubmission from './components/FormSubmission/FormSubmission.component';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => handleFormFieldChange(event, FORM_NAMES.CUSTOMER_FORM, dispatch);

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <FormFieldsWrapper>
            <FormSubsection subsectionData={EXISTING_CUSTOMER_SUBSECTION} />
            <FormSubsection subsectionData={MESSAGE_ENTRY_FORM_SUBSECTION} />
          </FormFieldsWrapper>

          <FormSubmission />
        </form>
      )}
    />
  )
};


export default CustomerContactForm;
