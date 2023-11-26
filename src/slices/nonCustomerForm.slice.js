import { createSlice } from '@reduxjs/toolkit';

import { NON_CUSTOMER_FORM_FIELDS } from 'modules/Forms/constants/NonCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [NON_CUSTOMER_FORM_FIELDS.NAME]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [NON_CUSTOMER_FORM_FIELDS.EMAIL]: {
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


export const nonCustomerFormSlice = createSlice({
  name: FORM_NAMES.NON_CUSTOMER_FORM,
  initialState,
  reducers: {
    setNonCustomerFormContent: (state, action) => {
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
    }
  },
  setNonCustomerFormFieldValidity: (state, action) => {
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
});

export const {
  setNonCustomerFormContent,
  setNonCustomerFormFieldValidity,
} = nonCustomerFormSlice.actions;


export default nonCustomerFormSlice.reducer;
