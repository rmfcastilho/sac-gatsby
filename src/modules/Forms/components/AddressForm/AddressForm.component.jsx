import React from 'react';
import { useDispatch } from "react-redux";

import { updateAddressForm } from "slices/formSlices/addressForm.slice";
import { composeValidators } from "modules/Forms/helpers/composeValidators";

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

import { requiredValidator, isNumberValidator } from "modules/Forms/helpers/fieldValidation";


const AddressForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(
    updateAddressForm({
      name: e.target.name,
      value: e.target.value,
    })
  );

  return (
    <FormSubsection onChange={handleChange}>
      <FormSectionHeaderWrapper>
        {ADDRESS_FORM_HEADER}
      </FormSectionHeaderWrapper>

      <LoneStyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.ZIP}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.ZIP]}
        maxLength={9}
        validate={composeValidators(requiredValidator, isNumberValidator)}
        type="number"
      />

      <StyledFieldWide
        name={ADDRESS_FORM_FIELDS.STREET}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STREET]}
        validate={requiredValidator}
      />
      <StyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.NUMBER}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.NUMBER]}
        validate={composeValidators(requiredValidator, isNumberValidator)}
      />

      <StyledFieldFullWidth
        name={ADDRESS_FORM_FIELDS.COMPLEMENT}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.COMPLEMENT]}
        validate={requiredValidator}
      />

      <StyledFieldFullWidth
        name={ADDRESS_FORM_FIELDS.DISTRICT}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.DISTRICT]}
        validate={requiredValidator}
      />

      <StyledFieldWide
        name={ADDRESS_FORM_FIELDS.CITY}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.CITY]}
        validate={requiredValidator}
      />

      <StyledFieldNarrow
        name={ADDRESS_FORM_FIELDS.STATE}
        component="input"
        placeholder={ADDRESS_FORM_LABELS[ADDRESS_FORM_FIELDS.STATE]}
        validate={requiredValidator}
      />
    </FormSubsection>
  );
}

export default AddressForm;
