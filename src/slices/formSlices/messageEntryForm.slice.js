import { createSlice } from '@reduxjs/toolkit';
import { MESSAGE_ENTRY_FORM_FIELDS } from "modules/Forms/constants/MessageEntryForm.constants";

export const initialState = {
  [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: '',
  [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: '',
};

export const messageEntrySlice = createSlice({
  name: 'messageEntry',
  initialState,
  reducers: {
    updateMessageEntryForm: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    },
  },
});

export const { updateMessageEntryForm } = messageEntrySlice.actions;

export default messageEntrySlice.reducer;
