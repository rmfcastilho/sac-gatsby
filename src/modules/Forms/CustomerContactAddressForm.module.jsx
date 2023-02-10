import React from 'react';
import { useDispatch } from "react-redux";

import { Form } from 'react-final-form';

import FormSubmission from "./components/FormSubmission/FormSubmission.component";
import AddressForm from "./components/AddressForm/AddressForm.component";
import MessageEntryForm from "modules/Forms/components/MessageEntryForm/MessageEntryForm.component";
import ExistingCustomerIdentificationForm
  from "./components/ExistingCustomerIdentificationForm/ExistingCustomerIdentificationForm.component";

import {
  FormFieldsWrapper,
} from './styles/Form.styles';

import { updateAddressForm } from "slices/innerFormSlices/addressForm.slice";


const CustomerContactAddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => console.log('Submitted!');

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit}>
          <FormFieldsWrapper>
            <ExistingCustomerIdentificationForm />
            <AddressForm />
            <MessageEntryForm isOptional />
          </FormFieldsWrapper>

          <FormSubmission/>
        </form>
      )}
    />
  )
};


export default CustomerContactAddressForm;
