import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const getState = (state) => state;

export const addressFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state[FORM_NAMES.CUSTOMER_ADDRESS_FORM],
);

export const addressIdentificationSubformSelector = createDraftSafeSelector(
  [addressFormSelector],
  (address) => address[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

export const addressSubformSelector = createDraftSafeSelector(
  [addressFormSelector],
  (address) => address[HIGH_LEVEL_CATEGORIES.ADDRESS],
);

export const addressMessageSubformSelector = createDraftSafeSelector(
  [addressFormSelector],
  (address) => address[HIGH_LEVEL_CATEGORIES.MESSAGE],
);

export const streetAddressSelector = createDraftSafeSelector(
  [addressSubformSelector],
  (address) => address.streetAddress,
);

export const zipAddressSelector = createDraftSafeSelector(
  [addressSubformSelector],
  (address) => address.zipCode,
);
