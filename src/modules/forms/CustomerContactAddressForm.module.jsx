import React from 'react';
import Button from 'components/Button/Button.component';
import { Form } from 'react-final-form';

import FormFooterComponent from './components/FormFooter.component';
import { buttonStyles } from 'constants/button';

import { FormSectionHeaderWrapper } from './styles/FormSectionHeader.styles';

import {
  SingleFieldRow,
  DoubleFieldRow,
  StyledFieldNarrow,
  StyledFieldWide,
  FormWrapper,
  StyledFieldFullWidth,
  FormSubsection,
  FormFieldsWrapper,
  FormSubmissionWrapper,
} from './styles/Form.styles';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactAddressForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormFieldsWrapper>
          <FormSubsection>
            <FormSectionHeaderWrapper>1. Identificação</FormSectionHeaderWrapper>
            
            <StyledFieldFullWidth name="customerName" component="input" placeholder="Nome" />
            <StyledFieldFullWidth name="orderNumber" component="input" placeholder="Número do pedido" />
            <StyledFieldFullWidth name="customerEmail" component="input" placeholder="E-mail usado na compra" />
            <StyledFieldFullWidth name="customerID" component="input" placeholder="CPF" />
          </FormSubsection>
          
          <FormSubsection>
            <FormSectionHeaderWrapper>2. Novo endereço</FormSectionHeaderWrapper>

            <DoubleFieldRow>
              <StyledFieldNarrow name="zipCode" component="input" placeholder="CEP" />
            </DoubleFieldRow>

            <DoubleFieldRow>
              <StyledFieldWide name="streetAddress" component="input" placeholder="Logradouro" />
              <StyledFieldNarrow name="streetNumber" component="input" placeholder="Número" />
            </DoubleFieldRow>

            <StyledFieldFullWidth name="additionalAddressInfo" component="input" placeholder="Complemento" />
            <StyledFieldFullWidth name="borough" component="input" placeholder="Bairro" />

            <DoubleFieldRow>
              <StyledFieldWide name="city" component="input" placeholder="Cidade" />
              <StyledFieldNarrow name="state" component="input" placeholder="UF" />
            </DoubleFieldRow>
          </FormSubsection>

          <FormSubsection>
            <FormSectionHeaderWrapper>3. Mensagem (opcional)</FormSectionHeaderWrapper>

            <StyledFieldFullWidth name="message" component="textarea" placeholder="Mensagem" />
          </FormSubsection>
        </FormFieldsWrapper>

        <FormSubmissionWrapper>
          <Button
            type="submit"
            isDisabled={false}
            buttonStyle={buttonStyles.PRIMARY}
            label="Enviar solicitação"
            key="submitForm"
          />

          <FormFooterComponent />
        </FormSubmissionWrapper>
      </form>
    )}
  />
);


export default CustomerContactAddressForm;
