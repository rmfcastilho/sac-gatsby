import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const getState = (state) => state;

const formValidationSelector = createDraftSafeSelector(
  [getState],
  (state) => state[FORM_NAMES.FORM_VALIDATION],
);

const customerFormValidationSelector = createDraftSafeSelector(
  [formValidationSelector],
  (formValidation) => formValidation[FORM_NAMES.CUSTOMER_FORM],
);

const customerFormIdentificationValidationSelector = createDraftSafeSelector(
  [customerFormValidationSelector],
  (customerForm) => customerForm[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

const customerFormMessageValidationSelector = createDraftSafeSelector(
  [customerFormValidationSelector],
  (customerForm) => customerForm[HIGH_LEVEL_CATEGORIES.MESSAGE],
);

const nonCustomerFormValidationSelector = createDraftSafeSelector(
  [formValidationSelector],
  (formValidation) => formValidation[FORM_NAMES.NON_CUSTOMER_FORM],
);

const nonCustomerFormIdentificationValidationSelector = createDraftSafeSelector(
  [nonCustomerFormValidationSelector],
  (nonCustomerForm) => nonCustomerForm[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

const nonCustomerFormMessageValidationSelector = createDraftSafeSelector(
  [nonCustomerFormValidationSelector],
  (nonCustomerForm) => nonCustomerForm[HIGH_LEVEL_CATEGORIES.MESSAGE],
);

const addressFormValidationSelector = createDraftSafeSelector(
  [formValidationSelector],
  (formValidation) => formValidation[FORM_NAMES.CUSTOMER_ADDRESS_FORM],
);

const addressFormIdentificationValidationSelector = createDraftSafeSelector(
  [addressFormValidationSelector],
  (addressForm) => addressForm[HIGH_LEVEL_CATEGORIES.IDENTIFICATION],
);

const addressFormAddressValidationSelector = createDraftSafeSelector(
  [addressFormValidationSelector],
  (addressForm) => addressForm[HIGH_LEVEL_CATEGORIES.ADDRESS],
);

const addressFormMessageValidationSelector = createDraftSafeSelector(
  [addressFormValidationSelector],
  (addressForm) => addressForm[HIGH_LEVEL_CATEGORIES.MESSAGE],
);

export {
  formValidationSelector,
  customerFormIdentificationValidationSelector,
  customerFormMessageValidationSelector,
  nonCustomerFormIdentificationValidationSelector,
  nonCustomerFormMessageValidationSelector,
  addressFormIdentificationValidationSelector,
  addressFormAddressValidationSelector,
  addressFormMessageValidationSelector,
  addressFormValidationSelector,
  nonCustomerFormValidationSelector,
  customerFormValidationSelector
}
