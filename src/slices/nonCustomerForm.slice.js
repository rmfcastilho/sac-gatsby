import { createSlice } from '@reduxjs/toolkit';

import { NON_CUSTOMER_FORM_FIELDS } from 'modules/Forms/constants/NonCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [NON_CUSTOMER_FORM_FIELDS.NAME]: '',
    [NON_CUSTOMER_FORM_FIELDS.EMAIL]: '',
  },
  [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
    [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: '',
    [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: '',
  },
};


export const nonCustomerFormSlice = createSlice({
  name: FORM_NAMES.NON_CUSTOMER_FORM,
  initialState,
  reducers: {
    setNonCustomerFormContent: (state, action) => {
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

export const { setNonCustomerFormContent } = nonCustomerFormSlice.actions;


export default nonCustomerFormSlice.reducer;
