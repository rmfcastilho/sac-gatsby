import { createSlice } from '@reduxjs/toolkit';
import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from "modules/Forms/constants/ExistingCustomerIdentificationForm.constants";


export const initialState = {
  [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: '',
  [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: '',
  [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: '',
  [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: '',
};

export const existingCustomerIdSlice = createSlice({
  name: 'existingCustomerId',
  initialState,
  reducers: {
    updateExistingCustomerAddressForm: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
  },
});

export const { updateExistingCustomerAddressForm } = existingCustomerIdSlice.actions;

export default existingCustomerIdSlice.reducer;
