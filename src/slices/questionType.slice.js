import { createSlice } from '@reduxjs/toolkit';

import { questionTypes } from 'constants/questionTypes';


const initialState = {
  questionType: questionTypes.PRODUCT,
};


export const questionTypeSlice = createSlice({
  name: 'questionType',
  initialState,
  reducers: {
    setQuestionType: (state, payload) => {
      state.questionType = payload
    },
  },
});

export const { setQuestionType } = questionTypeSlice.actions;


export default questionTypeSlice.reducer;
