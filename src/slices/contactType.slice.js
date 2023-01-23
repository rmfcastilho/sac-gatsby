import { createSlice } from '@reduxjs/toolkit';

const initialState = false;


export const contactTypeSlice = createSlice({
  name: 'contactType',
  initialState,
  reducers: {
    setContactType: (state, action) => {
      state.contactType = action.payload
    },
  },
});

export const { setContactType } = contactTypeSlice.actions;


export default contactTypeSlice.reducer;
