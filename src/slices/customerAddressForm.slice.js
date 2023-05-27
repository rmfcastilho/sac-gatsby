import { createSlice } from '@reduxjs/toolkit';

import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { ADDRESS_FORM_FIELDS } from 'modules/Forms/constants/AddressForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: '',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: '',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: '',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: '',
  },
  [HIGH_LEVEL_CATEGORIES.ADDRESS]: {
    [ADDRESS_FORM_FIELDS.ZIP]: '',
    [ADDRESS_FORM_FIELDS.STREET]: '',
    [ADDRESS_FORM_FIELDS.NUMBER]: '',
    [ADDRESS_FORM_FIELDS.COMPLEMENT]: '',
    [ADDRESS_FORM_FIELDS.DISTRICT]: '',
    [ADDRESS_FORM_FIELDS.CITY]: '',
    [ADDRESS_FORM_FIELDS.STATE]: '',

  },
  [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
    [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: '',
    [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: '',
  },
};


export const customerAddressFormSlice = createSlice({
  name: FORM_NAMES.CUSTOMER_ADDRESS_FORM,
  initialState,
  reducers: {
    setCustomerAddressFormContent: (state, action) => {
      const { category, field, value } = action.payload;

      state = {
        ...state,
        [category]: {
          ...{...state[category]},
          [field]: value
        },
      }

      return state;
    }
  },
});

export const { setCustomerAddressFormContent } = customerAddressFormSlice.actions;


export default customerAddressFormSlice.reducer;
