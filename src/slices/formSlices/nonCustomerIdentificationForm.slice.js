import { createSlice } from '@reduxjs/toolkit';
import { NON_CUSTOMER_FORM_FIELDS } from "modules/Forms/constants/NonCustomerIdentificationForm.constants";


export const initialState = {
  [NON_CUSTOMER_FORM_FIELDS.NAME]: '',
  [NON_CUSTOMER_FORM_FIELDS.EMAIL]: '',
};

export const nonCustomerIdSlice = createSlice({
  name: 'nonCustomerId',
  initialState,
  reducers: {
    updateNonCustomerAddressForm: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
  },
});

export const { updateNonCustomerAddressForm } = nonCustomerIdSlice.actions;

export default nonCustomerIdSlice.reducer;
