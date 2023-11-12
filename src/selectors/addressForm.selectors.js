import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';

const getState = (state) => state;

export const addressFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state[FORM_NAMES.CUSTOMER_ADDRESS_FORM],
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
