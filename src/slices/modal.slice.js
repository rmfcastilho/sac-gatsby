import { createSlice } from '@reduxjs/toolkit';

import { modalContentTypes } from "constants/modal";


const initialState = {
  isOpen: false,
  content: modalContentTypes.PRODUCT_DOUBT,
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
    },
    setModalContent: (state, action) => {
      state.content = action.payload
    }
  },
});

export const { toggleModal, setModalContent } = modalSlice.actions;


export default modalSlice.reducer;
