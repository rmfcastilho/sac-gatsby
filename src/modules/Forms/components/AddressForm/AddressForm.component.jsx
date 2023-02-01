import React from 'react';

import {
  StyledFieldFullWidth,
  StyledFieldNarrow,
  StyledFieldWide,
  FormSectionHeaderWrapper,
  FormSubsection,
  LoneStyledFieldNarrow
} from "modules/Forms/styles/Form.styles";


const AddressForm = () => (
  <FormSubsection>
    <FormSectionHeaderWrapper>Novo endereço</FormSectionHeaderWrapper>

    <LoneStyledFieldNarrow name="zipCode" component="input" placeholder="CEP" />

    <StyledFieldWide name="streetAddress" component="input" placeholder="Logradouro" />
    <StyledFieldNarrow name="streetNumber" component="input" placeholder="Número" />

    <StyledFieldFullWidth name="additionalAddressInfo" component="input" placeholder="Complemento" />

    <StyledFieldFullWidth name="borough" component="input" placeholder="Bairro" />

    <StyledFieldWide name="city" component="input" placeholder="Cidade" />
    <StyledFieldNarrow name="state" component="input" placeholder="UF" />
  </FormSubsection>
);


export default AddressForm;
