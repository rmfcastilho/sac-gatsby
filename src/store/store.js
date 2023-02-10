import { configureStore, combineReducers } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactReason from 'slices/contactReason.slice';
import isCustomer from 'slices/isCustomer.slice';

import addressForm from 'slices/formSlices/addressForm.slice';
import existingCustomerId from 'slices/formSlices/existingCustomerIdentificationForm.slice';
import nonCustomerId from 'slices/formSlices/nonCustomerIdentificationForm.slice';
import messageEntry from 'slices/formSlices/messageEntryForm.slice';


const formReducers = combineReducers({
  addressForm: addressForm,
  existingCustomerId: existingCustomerId,
  nonCustomerId: nonCustomerId,
  messageEntry: messageEntry,
});

export const store = configureStore({
  reducer: {
    modal: modal,
    contactReason: contactReason,
    isCustomer: isCustomer,
    form: formReducers,
  },
});
