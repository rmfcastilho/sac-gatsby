import { configureStore } from '@reduxjs/toolkit';

import modal from 'slices/modal.slice';
import contactType from 'slices/contactType.slice';
import questionType from 'slices/questionType.slice';
import isCustomer from 'slices/isCustomer.slice';

export const store = configureStore({
  reducer: {
    modal: modal,
    contactType: contactType,
    questionType: questionType,
    isCustomer: isCustomer,
  },
});
