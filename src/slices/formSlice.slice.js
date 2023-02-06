import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state[action.payload.formName] = action.payload.values
    },
  },
});

export const { updateForm } = formSlice.actions;


export default formSlice.reducer;
