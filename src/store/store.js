import { configureStore } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactType from 'slices/contactType.slice';
import questionType from 'slices/questionType.slice';


export const store = configureStore({
  reducer: {
    modal: modal,
    contactType: contactType,
    questionType: questionType,
  },
});
