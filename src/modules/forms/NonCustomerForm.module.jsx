import React from 'react';
import { Form } from 'react-final-form';

import MessageEntryForm from "./components/MessageEntryForm/MessageEntryForm.component";
import FormSubmission from "./components/FormSubmission/FormSubmission.component";
import NonCustomerIdentificationForm
  from "./components/NonCustomerIdentificationForm/NonCustomerIdentificationForm.component";

import { FormFieldsWrapper } from "./styles/Form.styles";


const handleSubmit = () => console.log('Submitted!');

const NonCustomerForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <NonCustomerIdentificationForm />
          <MessageEntryForm isOptional={false} />
        </FormFieldsWrapper>

        <FormSubmission />
      </form>
    )}
  />
);


export default NonCustomerForm;
