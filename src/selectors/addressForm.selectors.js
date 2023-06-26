import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const addressFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state.customerAddressForm,
);

export const addressSubformSelector = createDraftSafeSelector(
  [addressFormSelector],
  (address) => address.address,
);

export const streetAddressSelector = createDraftSafeSelector(
  [addressSubformSelector],
  (address) => address.streetAddress,
);

export const zipAddressSelector = createDraftSafeSelector(
  [addressSubformSelector],
  (address) => address.zipCode,
);
