import React from 'react';
import { useDispatch } from "react-redux";

import { updateAddressForm } from "slices/formSlices/addressForm.slice";

import {
  ADDRESS_FORM_HEADER,
  ADDRESS_FORM_FIELDS,
  ADDRESS_FORM_LABELS,
} from "modules/Forms/constants/AddressForm.constants";

import {
  StyledFieldFullWidth,
  StyledFieldNarrow,
  StyledFieldWide,
  FormSectionHeaderWrapper,
  FormSubsection,
  LoneStyledFieldNarrow
} from "modules/Forms/styles/Form.styles";


const AddressForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(
    updateAddressForm({
      name: e.target.name,
      value: e.target.value,
    })
  )

  return (
    <FormSubsection onChange={handleChange}>
      <FormSectionHeaderWrapper>
        {ADDRESS_FORM_HEADER}
      </FormSectionHeaderWrapper>

      <LoneStyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.ZIP}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.ZIP]}
      />

      <StyledFieldWide
        name={ADDRESS_FORM_FIELDS.STREET}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STREET]}
      />
      <StyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.NUMBER}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.NUMBER]}
      />

      <StyledFieldFullWidth
        name={ADDRESS_FORM_FIELDS.COMPLEMENT}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.COMPLEMENT]}
      />

      <StyledFieldFullWidth
        name={ADDRESS_FORM_FIELDS.DISTRICT}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.DISTRICT]}
      />

      <StyledFieldWide
        name={ADDRESS_FORM_FIELDS.CITY}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.CITY]}
      />

      <StyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.STATE}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STATE]}
      />
    </FormSubsection>
  );
}

export default AddressForm;
