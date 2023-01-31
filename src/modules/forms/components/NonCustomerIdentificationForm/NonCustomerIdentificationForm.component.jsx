import React from 'react';
import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth
} from "modules/forms/styles/Form.styles";


const NonCustomerIdentificationForm = () => (
  <FormSubsection>
    <FormSectionHeaderWrapper>Identificação</FormSectionHeaderWrapper>

    <StyledFieldFullWidth name="customerName" component="input" placeholder="Nome" />
    <StyledFieldFullWidth name="customerEmail" component="input" placeholder="E-mail usado na compra" />
  </FormSubsection>
);


export default NonCustomerIdentificationForm;

