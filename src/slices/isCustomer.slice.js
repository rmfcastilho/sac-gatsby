import { createSlice } from '@reduxjs/toolkit';

const initialState = false;


export const isCustomerSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsCustomer: (state, action) => {
      state.isCustomer = action.payload
    },
  },
});

export const { setIsCustomer } = isCustomerSlice.actions;


export default isCustomerSlice.reducer;
