import React from 'react';
import { Form, Field } from 'react-final-form';

import FormFooter from './components/FormFooter';

import { FormSectionHeaderWrapper } from './styles/FormSectionHeader.styles';


const handleSubmit = () => console.log('Submitted!');

const NonCustomerForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        <FormSectionHeaderWrapper>1. Identificação</FormSectionHeaderWrapper>
        <div>
          <Field name="customerName" component="input" placeholder="Nome" />
        </div>
        <div>
          <Field name="customerEmail" component="input" placeholder="E-mail usado na compra" />
        </div>

        <FormSectionHeaderWrapper>2. Mensagem</FormSectionHeaderWrapper>
        <div>
          <Field name="subject" component="input" placeholder="Assunto" />
        </div>
        <div>
          <Field name="message" component="textarea" placeholder="Mensagem" />
        </div>

        <button type="submit">Submit</button>
        
        <FormFooter />
      </form>
    )}
  />
);


export default NonCustomerForm;
