import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const contactTypeSelector = createDraftSafeSelector(
  [getState],
  (state) => state.contactType,
);
