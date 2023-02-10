import { createSlice } from '@reduxjs/toolkit';
import { ADDRESS_FORM_FIELDS } from "modules/Forms/constants/AddressForm.constants";


export const initialState = {
  [ADDRESS_FORM_FIELDS.ZIP]: '',
  [ADDRESS_FORM_FIELDS.STREET]: '',
  [ADDRESS_FORM_FIELDS.NUMBER]: '',
  [ADDRESS_FORM_FIELDS.COMPLEMENT]: '',
  [ADDRESS_FORM_FIELDS.DISTRICT]: '',
  [ADDRESS_FORM_FIELDS.CITY]: '',
  [ADDRESS_FORM_FIELDS.STATE]: '',
};

export const addressFormSlice = createSlice({
  name: 'addressForm',
  initialState,
  reducers: {
    updateAddressForm: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
  },
});

export const { updateAddressForm } = addressFormSlice.actions;

export default addressFormSlice.reducer;
