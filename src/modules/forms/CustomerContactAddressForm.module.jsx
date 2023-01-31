import React from 'react';
import { Form } from 'react-final-form';

import FormSubmission from "./components/FormSubmission/FormSubmission.component";
import AddressForm from "./components/AddressForm/AddressForm.component";
import MessageEntryForm from "modules/forms/components/MessageEntryForm/MessageEntryForm.component";
import ExistingCustomerIdentificationForm
  from "./components/ExistingCustomerIdentificationForm/ExistingCustomerIdentificationForm.component";

import {
  FormFieldsWrapper,
} from './styles/Form.styles';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactAddressForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <ExistingCustomerIdentificationForm />
          <AddressForm />
          <MessageEntryForm isOptional />
        </FormFieldsWrapper>

        <FormSubmission />
      </form>
    )}
  />
);


export default CustomerContactAddressForm;
