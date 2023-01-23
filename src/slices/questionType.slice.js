import { createSlice } from '@reduxjs/toolkit';

import { questionTypes } from 'constants/questionTypes';


const initialState = questionTypes.PRODUCT;


export const questionTypeSlice = createSlice({
  name: 'questionType',
  initialState,
  reducers: {
    setQuestionType: (state, action) => {
      state.questionType = action.payload
    },
  },
});

export const { setQuestionType } = questionTypeSlice.actions;


export default questionTypeSlice.reducer;
