import { configureStore } from '@reduxjs/toolkit';

import { toggleModal } from 'slices/modal.slice';
import { setContactType } from 'slices/contactType.slice';


export const store = configureStore({
  reducer: {
    modal: toggleModal,
    contactType: setContactType,
  },
});
