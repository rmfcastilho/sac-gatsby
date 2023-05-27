import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;


export const nonCustomerFormSelector = createDraftSafeSelector(
  [getState],
  (state) => state.nonCustomerForm,
);

