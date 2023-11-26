import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const nonCustomerFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state.nonCustomerForm,
);

export const customerFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state.customerForm,
);

export const customerAddressFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state.customerAddressForm,
);