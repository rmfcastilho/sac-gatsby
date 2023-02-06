import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const contactReasonSelector = createDraftSafeSelector(
  [getState],
  (state) => state.contactReason,
);
