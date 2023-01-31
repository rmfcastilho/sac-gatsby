import React from 'react';
import {
  FormSectionHeaderWrapper,
  FormSubsection,
  StyledFieldFullWidth
} from "modules/forms/styles/Form.styles";


const ExistingCustomerIdentificationForm = () => (
  <FormSubsection>
    <FormSectionHeaderWrapper>Identificação</FormSectionHeaderWrapper>

    <StyledFieldFullWidth name="customerID" component="input" placeholder="CPF" />
    <StyledFieldFullWidth name="customerName" component="input" placeholder="Nome" />
    <StyledFieldFullWidth name="orderNumber" component="input" placeholder="Número do pedido" />
    <StyledFieldFullWidth name="customerEmail" component="input" placeholder="E-mail usado na compra" />
  </FormSubsection>
);


export default ExistingCustomerIdentificationForm;

