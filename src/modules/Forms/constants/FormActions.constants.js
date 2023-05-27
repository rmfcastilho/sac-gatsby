import { setNonCustomerFormContent } from 'slices/nonCustomerForm.slice';
import { setCustomerFormContent } from 'slices/customerContactForm.slice';
import { setCustomerAddressFormContent } from 'slices/customerAddressForm.slice';

import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';


export const FORM_ACTIONS = {
  [FORM_NAMES.NON_CUSTOMER_FORM]: setNonCustomerFormContent,
  [FORM_NAMES.CUSTOMER_FORM]: setCustomerFormContent,
  [FORM_NAMES.CUSTOMER_ADDRESS_FORM]: setCustomerAddressFormContent,
};
