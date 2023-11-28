import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

import {
  customerFormIdentificationValidationSelector,
  customerFormMessageValidationSelector,
  nonCustomerFormIdentificationValidationSelector,
  nonCustomerFormMessageValidationSelector,
  addressFormIdentificationValidationSelector,
  addressFormAddressValidationSelector,
  addressFormMessageValidationSelector,
} from 'selectors/formValidation.selectors';


export const VALIDATION_SELECTORS_PER_FORM = {
  [FORM_NAMES.CUSTOMER_FORM]: {
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: customerFormIdentificationValidationSelector,
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: customerFormMessageValidationSelector,
  },
  [FORM_NAMES.NON_CUSTOMER_FORM]: {
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: nonCustomerFormIdentificationValidationSelector,
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: nonCustomerFormMessageValidationSelector,
  },
  [FORM_NAMES.CUSTOMER_ADDRESS_FORM]: {
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: addressFormIdentificationValidationSelector,
    [HIGH_LEVEL_CATEGORIES.ADDRESS]: addressFormAddressValidationSelector,
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: addressFormMessageValidationSelector,
  },
};
