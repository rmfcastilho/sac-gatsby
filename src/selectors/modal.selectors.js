import { createDraftSafeSelector } from "@reduxjs/toolkit";


const getState = (state) => state;

const getModalState = createDraftSafeSelector(
  [getState],
  (state) => state.modal,
);


export const isModalOpenSelector = createDraftSafeSelector(
  [getModalState],
  (modal) => modal.isOpen,
);

export const getModalContentSelector = createDraftSafeSelector(
  [getModalState],
  (modal) => modal.content,
);