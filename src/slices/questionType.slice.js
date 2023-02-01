import { createSlice } from '@reduxjs/toolkit';

import { QUESTION_TYPES } from 'constants/questionTypes';


const initialState = QUESTION_TYPES.PRODUCT;


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
