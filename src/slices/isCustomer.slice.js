import { createSlice } from '@reduxjs/toolkit';

const initialState = false;


export const isCustomerSlice = createSlice({
  name: 'isCustomer',
  initialState,
  reducers: {
    setIsCustomer: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsCustomer } = isCustomerSlice.actions;


export default isCustomerSlice.reducer;
