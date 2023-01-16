import React from 'react';
import { Form } from 'react-final-form';

import FormFooter from './components/FormFooter';

import { FormSectionHeaderWrapper } from './styles/FormSectionHeader.styles';
import {
  StyledField,
  FormSubsection,
  FieldGroupWrapper,
  FieldPlaceholder,
} from './styles/Form.styles';


const handleSubmit = () => console.log('Submitted!');

const CustomerContactAddressForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>

        <FormSectionHeaderWrapper>1. Identificação</FormSectionHeaderWrapper>
        <FormSubsection>
            <FieldGroupWrapper>
              <StyledField name="customerName" component="input" />
            
            </FieldGroupWrapper>
            <StyledField name="orderNumber" component="input" placeholder="Número do pedido" />
            <StyledField name="customerEmail" component="input" placeholder="E-mail usado na compra" />
            <StyledField name="customerID" component="input" placeholder="CPF" />
        </FormSubsection>
        

        <FormSectionHeaderWrapper>2. Novo endereço</FormSectionHeaderWrapper>
        <FormSubsection>
            <StyledField name="zipCode" component="input" placeholder="CEP" />
            <StyledField name="streetAddress" component="input" placeholder="Logradouro" />
            <StyledField name="streetNumber" component="input" placeholder="Número" />
            <StyledField name="additionalAddressInfo" component="input" placeholder="Complemento" />
            <StyledField name="borough" component="input" placeholder="Bairro" />
            <StyledField name="city" component="input" placeholder="Cidade" />
            <StyledField name="state" component="input" placeholder="UF" />
        </FormSubsection>

        <FormSectionHeaderWrapper>3. Mensagem</FormSectionHeaderWrapper>
          <FormSubsection>
            <StyledField name="subject" component="input" placeholder="Assunto" />
            <StyledField name="message" component="textarea" placeholder="Mensagem" />
        </FormSubsection>

        <button type="submit">Submit</button>
        
        <FormFooter />

      </form>
    )}
  />
);


export default CustomerContactAddressForm;
