import { configureStore } from '@reduxjs/toolkit';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

import modal from 'slices/modal.slice';
import contactReason from 'slices/contactReason.slice';
import isCustomer from 'slices/isCustomer.slice';
import nonCustomerForm from 'slices/nonCustomerForm.slice';
import customerForm from 'slices/customerContactForm.slice';
import customerAddressForm from 'slices/customerAddressForm.slice';
import formValidation from 'slices/formValidation.slice';

export const store = configureStore({
  reducer: {
    modal: modal,
    contactReason: contactReason,
    isCustomer: isCustomer,
    [FORM_NAMES.CUSTOMER_FORM]: customerForm,
    [FORM_NAMES.CUSTOMER_ADDRESS_FORM]: customerAddressForm,
    [FORM_NAMES.NON_CUSTOMER_FORM]: nonCustomerForm,
    [FORM_NAMES.FORM_VALIDATION]: formValidation,
  },
});
