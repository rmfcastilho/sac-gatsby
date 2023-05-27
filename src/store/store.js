import { configureStore, combineReducers } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactReason from 'slices/contactReason.slice';
import isCustomer from 'slices/isCustomer.slice';
import nonCustomerForm from 'slices/nonCustomerForm.slice';
import customerForm from 'slices/customerContactForm.slice';
import customerAddressForm from 'slices/customerAddressForm.slice';

export const store = configureStore({
  reducer: {
    modal: modal,
    contactReason: contactReason,
    isCustomer: isCustomer,
    customerForm: customerForm,
    customerAddressForm: customerAddressForm,
    nonCustomerForm: nonCustomerForm,
  },
});
