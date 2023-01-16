import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCustomer: false,
};


export const isCustomerSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsCustomer: (state, payload) => {
      state.isCustomer = payload
    },
  },
});

export const { setIsCustomer } = isCustomerSlice.actions;


export default isCustomerSlice.reducer;
