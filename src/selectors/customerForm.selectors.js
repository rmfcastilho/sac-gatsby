import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const getState = (state) => state;

const customerFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state[FORM_NAMES.CUSTOMER_FORM],
);

export const customerFormIdentificationSelector = createDraftSafeSelector(
  [customerFormSelector],
  (customerForm) => customerForm[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

export const customerFormMessageSelector = createDraftSafeSelector(
  [customerFormSelector],
  (customerForm) => customerForm[HIGH_LEVEL_CATEGORIES.MESSAGE],
);
