import { createSlice } from '@reduxjs/toolkit';

import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]:'',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: '',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: '',
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: '',
  },
  [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
    [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: '',
    [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: '',
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
          [field]: value,
        },
      }

      return state;
    },
  },
});

export const { setCustomerFormContent } = customerFormSlice.actions;


export default customerFormSlice.reducer;
