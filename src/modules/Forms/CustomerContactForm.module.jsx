import React from 'react';
import { Form } from 'react-final-form';

import MessageEntryForm from "./components/MessageEntryForm/MessageEntryForm.component";
import ExistingCustomerIdentificationForm
  from "./components/ExistingCustomerIdentificationForm/ExistingCustomerIdentificationForm.component";
import FormSubmission from "./components/FormSubmission/FormSubmission.component";

import { FormFieldsWrapper } from "./styles/Form.styles";


const handleSubmit = () => console.log('Submitted!');

const CustomerContactForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <ExistingCustomerIdentificationForm />
          <MessageEntryForm isOptional={false} />
          <FormSubmission />
        </FormFieldsWrapper>
      </form>
    )}
  />
);


export default CustomerContactForm;
