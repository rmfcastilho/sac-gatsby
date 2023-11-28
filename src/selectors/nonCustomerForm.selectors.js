import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const getState = (state) => state;

const nonCustomerFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state[FORM_NAMES.NON_CUSTOMER_FORM],
);

export const nonCustomerFormIdentificationSelector = createDraftSafeSelector(
  [nonCustomerFormSelector],
  (nonCustomerForm) => nonCustomerForm[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

export const nonCustomerFormMessageSelector = createDraftSafeSelector(
  [nonCustomerFormSelector],
  (nonCustomerForm) => nonCustomerForm[HIGH_LEVEL_CATEGORIES.MESSAGE],
);
