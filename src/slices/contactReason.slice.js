import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const contactReasonSlice = createSlice({
  name: 'contactReason',
  initialState,
  reducers: {
    setContactReason: (state, action) => {
      return action.payload
    },
  },
});

export const { setContactReason } = contactReasonSlice.actions;


export default contactReasonSlice.reducer;
