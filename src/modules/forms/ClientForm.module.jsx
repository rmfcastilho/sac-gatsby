import React from 'react';
import { Form, Field } from 'react-final-form';


const handleSubmit = () => console.log('Submitted!');

const ClientForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        1. Identificação
        <div>
          <Field name="customerName" component="input" placeholder="Nome" />
        </div>
        <div>
          <Field name="orderNumber" component="input" placeholder="Número do pedido" />
        </div>
        <div>
          <Field name="customerEmail" component="input" placeholder="E-mail usado na compra" />
        </div>
        <div>
          <Field name="customerID" component="input" placeholder="CPF" />
        </div>

        2. Mensagem
        <div>
          <Field name="subject" component="input" placeholder="Assunto" />
        </div>
        <div>
          <Field name="message" component="textarea" placeholder="Mensagem" />
        </div>

        <button type="submit">Submit</button>
        Campos com * são obrigatórios
      </form>
    )}
  />
);


export default ClientForm;
