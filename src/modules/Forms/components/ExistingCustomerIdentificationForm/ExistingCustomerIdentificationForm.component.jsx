import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import { FORM_MODULES } from "../../constants/FormModules.constants";

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

  return (
    <FormSubsection>
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

