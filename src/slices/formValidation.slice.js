import { createSlice } from '@reduxjs/toolkit';

import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';
import { NON_CUSTOMER_FORM_FIELDS } from 'modules/Forms/constants/NonCustomerIdentificationForm.constants';
import { ADDRESS_FORM_FIELDS } from 'modules/Forms/constants/AddressForm.constants';

const initialState = {
  [FORM_NAMES.CUSTOMER_FORM]:{
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: false,
    },
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
      [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: false,
      [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: false,
    },
  },
  [FORM_NAMES.NON_CUSTOMER_FORM]: {
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
      [NON_CUSTOMER_FORM_FIELDS.NAME]: false,
      [NON_CUSTOMER_FORM_FIELDS.EMAIL]: false,
    },
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
      [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: false,
      [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: false,
    },
  },
  [FORM_NAMES.CUSTOMER_ADDRESS_FORM]: {
    [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: false,
      [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: false,
    },
    [HIGH_LEVEL_CATEGORIES.ADDRESS]: {
      [ADDRESS_FORM_FIELDS.ZIP]: false,
      [ADDRESS_FORM_FIELDS.STREET]: false,
      [ADDRESS_FORM_FIELDS.NUMBER]: false,
      [ADDRESS_FORM_FIELDS.DISTRICT]: false,
      [ADDRESS_FORM_FIELDS.CITY]: false,
      [ADDRESS_FORM_FIELDS.STATE]: false,
    },
    [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
      [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: false,
      [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: false,
    },
  }
};


export const formValidationSlice = createSlice({
  name: FORM_NAMES.FORM_VALIDATION,
  initialState,
  reducers: {
    setFormFieldValidity: (state, action) => {
      const { category, targetForm, field, isValid } = action.payload;

      state = {
        ...state,
        [targetForm]: {
          ...state[targetForm],
          [category]: {
            ...{...state[targetForm][category]},
            [field]: isValid,
          },
        },
      };

      return state;
    },
  },
});

export const {
  setFormFieldValidity,
} = formValidationSlice.actions;


export default formValidationSlice.reducer;
