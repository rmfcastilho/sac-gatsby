import { createSlice } from '@reduxjs/toolkit';

import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
  },
  [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
    [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
  },
};


export const customerFormSlice = createSlice({
  name: FORM_NAMES.CUSTOMER_FORM,
  initialState,
  reducers: {
    setCustomerFormContent: (state, action) => {
      const { category, field, value } = action.payload;

      const categoryState = state[category];

      state = {
        ...state,
        [category]: {
          ...categoryState,
          [field]: {
            ...categoryState[field],
            value: value,
          }
        },
      }

      return state;
    },
    setCustomerFormFieldValidity: (state, action) => {
      const { category, field, isValid } = action.payload;

      state = {
        ...state,
        [category]: {
          ...{...state[category]},
          [field]: {
            ...field,
            isValid: isValid,
          }
        },
      }

      return state;
    },
  },
});

export const { setCustomerFormContent, setCustomerFormFieldValidity } = customerFormSlice.actions;


export default customerFormSlice.reducer;
