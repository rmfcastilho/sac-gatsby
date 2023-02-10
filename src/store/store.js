import { configureStore, combineReducers } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactReason from 'slices/contactReason.slice';
import isCustomer from 'slices/isCustomer.slice';
import addressForm from 'slices/innerFormSlices/addressForm.slice';


const formReducers = combineReducers({
  addressForm: addressForm,
});

export const store = configureStore({
  reducer: {
    modal: modal,
    contactReason: contactReason,
    isCustomer: isCustomer,
    form: formReducers,
  },
});
