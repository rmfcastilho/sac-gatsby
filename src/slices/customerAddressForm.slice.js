import { createSlice } from '@reduxjs/toolkit';

import { EXISTING_CUSTOMER_ID_FORM_FIELDS } from 'modules/Forms/constants/ExistingCustomerIdentificationForm.constants';
import { ADDRESS_FORM_FIELDS } from 'modules/Forms/constants/AddressForm.constants';
import { MESSAGE_ENTRY_FORM_FIELDS } from 'modules/Forms/constants/MessageEntryForm.constants';
import { FORM_NAMES } from 'modules/Forms/constants/FormNames.constants';
import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';

const initialState = {
  [HIGH_LEVEL_CATEGORIES.IDENTIFICATION]: {
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ID]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
  },
  [HIGH_LEVEL_CATEGORIES.ADDRESS]: {
    [ADDRESS_FORM_FIELDS.ZIP]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [ADDRESS_FORM_FIELDS.STREET]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [ADDRESS_FORM_FIELDS.NUMBER]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [ADDRESS_FORM_FIELDS.COMPLEMENT]: {
      value: '',
      isValid: true,
      isRequired: false,
    },
    [ADDRESS_FORM_FIELDS.DISTRICT]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [ADDRESS_FORM_FIELDS.CITY]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [ADDRESS_FORM_FIELDS.STATE]: {
      value: '',
      isValid: false,
      isRequired: true,
    },

  },
  [HIGH_LEVEL_CATEGORIES.MESSAGE]: {
    [MESSAGE_ENTRY_FORM_FIELDS.SUBJECT]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
    [MESSAGE_ENTRY_FORM_FIELDS.MESSAGE]: {
      value: '',
      isValid: false,
      isRequired: true,
    },
  },
};


export const customerAddressFormSlice = createSlice({
  name: FORM_NAMES.CUSTOMER_ADDRESS_FORM,
  initialState,
  reducers: {
    setCustomerAddressFormContent: (state, action) => {
      const { category, field, value } = action.payload;

      state = {
        ...state,
        [category]: {
          ...{...state[category]},
          [field]: {
            ...field,
            value: value,
          }
        },
      }

      return state;
    },
    setCustomerAddressFormFieldValidity: (state, action) => {
      const { category, field, value } = action.payload;

      const categoryState = state[category];

      state = {
        ...state,
        [category]: {
          ...categoryState,
          [field]: {
            ...categoryState[field],
            value: value,
          }
        },
      }

      return state;
    },
    updateAddressWithApiResult: (state, action) => {
      const { address } = action.payload;

      state = {
        ...state,
        [HIGH_LEVEL_CATEGORIES.ADDRESS]: {
          ...{...state[HIGH_LEVEL_CATEGORIES.ADDRESS]},
          ...address,
        },
      }

      return state;
    }
  },
});

export const {
  setCustomerAddressFormContent,
  updateAddressWithApiResult ,
  setCustomerAddressFormFieldValidity,
} = customerAddressFormSlice.actions;


export default customerAddressFormSlice.reducer;
