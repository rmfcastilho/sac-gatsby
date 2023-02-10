import React from 'react';
import { useDispatch } from "react-redux";

import { updateExistingCustomerIdForm } from "slices/formSlices/existingCustomerIdentificationForm.slice";

import {
  EXISTING_CUSTOMER_ID_FORM_HEADER,
  EXISTING_CUSTOMER_ID_FORM_FIELDS,
  EXISTING_CUSTOMER_ID_FORM_LABELS,
} from "modules/Forms/constants/ExistingCustomerIdentificationForm.constants";

import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth
} from "modules/Forms/styles/Form.styles";


const ExistingCustomerIdentificationForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(
    updateExistingCustomerIdForm({
      name: e.target.name,
      value: e.target.value,
    }),
  );

  return (
    <FormSubsection onChange={handleChange}>
      <FormSectionHeaderWrapper>
        {EXISTING_CUSTOMER_ID_FORM_HEADER}
      </FormSectionHeaderWrapper>

      <StyledFieldFullWidth
        name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ID}
        component="input"
        placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
          EXISTING_CUSTOMER_ID_FORM_FIELDS.ID
          ]
        }
      />
      <StyledFieldFullWidth
        name={EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME}
        component="input"
        placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
          EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME
          ]
        }
      />
      <StyledFieldFullWidth
        name={EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL}
        component="input"
        placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
          EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL
          ]
        }
      />
      <StyledFieldFullWidth
        name={EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER}
        component="input"
        placeholder={EXISTING_CUSTOMER_ID_FORM_LABELS[
          EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER
          ]
        }
      />
    </FormSubsection>
  );
}


export default ExistingCustomerIdentificationForm;

