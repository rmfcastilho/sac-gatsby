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

import { updateForm } from "slices/formSlice.slice";


const CustomerContactAddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => console.log('Submitted!');

  const handleChange = (event) => {
    dispatch(updateForm({
      formName: 'customerContactAddress',
      test: event.target.value,
    }));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={() => (
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <FormFieldsWrapper>
            <ExistingCustomerIdentificationForm/>
            <AddressForm/>
            <MessageEntryForm isOptional/>
          </FormFieldsWrapper>

          <FormSubmission/>
        </form>
      )}
    />
  )
};


export default CustomerContactAddressForm;
