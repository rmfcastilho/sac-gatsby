import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const questionTypeSelector = createDraftSafeSelector(
  [getState],
  (state) => state.questionType,
);
