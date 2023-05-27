import React from 'react';

import { useDispatch } from "react-redux";

import { updateNonCustomerAddressForm } from "slices/formSlices/nonCustomerIdentificationForm.slice";

import {
  NON_CUSTOMER_FORM_HEADER,
  NON_CUSTOMER_FORM_FIELDS,
  NON_CUSTOMER_FORM_LABELS,
} from "modules/Forms/constants/NonCustomerIdentificationForm.constants";

import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth
} from "modules/Forms/styles/Form.styles";


const NonCustomerIdentificationForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(
    updateNonCustomerAddressForm(({
      name: e.target.name,
      value: e.target.value,
    }),
  ));

  return (
    <FormSubsection>
      <FormSectionHeaderWrapper>
        {NON_CUSTOMER_FORM_HEADER}
      </FormSectionHeaderWrapper>

      <StyledFieldFullWidth
        name={NON_CUSTOMER_FORM_FIELDS.NAME}
        component="input"
        placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.NAME]}
      />
      <StyledFieldFullWidth
        name={NON_CUSTOMER_FORM_FIELDS.EMAIL}
        component="input"
        placeholder={NON_CUSTOMER_FORM_LABELS[NON_CUSTOMER_FORM_FIELDS.EMAIL]}
      />
    </FormSubsection>
  );
}

export default NonCustomerIdentificationForm;

