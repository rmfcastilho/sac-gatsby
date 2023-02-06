import { configureStore } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactReason from 'slices/contactReason.slice';
import isCustomer from 'slices/isCustomer.slice';
import form from 'slices/formSlice.slice';


export const store = configureStore({
  reducer: {
    modal: modal,
    contactReason: contactReason,
    isCustomer: isCustomer,
    form: form,
  },
});
