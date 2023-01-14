import React from 'react';
import { Form, Field } from 'react-final-form';


const handleSubmit = () => console.log('Submitted!');

const ClientFormWithAddress = () => (
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

        2. Novo endereço
        <div>
          <Field name="zipCode" component="input" placeholder="CEP" />
        </div>
        <div>
          <Field name="streetAddress" component="input" placeholder="Logradouro" />
        </div>
        <div>
          <Field name="streetNumber" component="input" placeholder="Número" />
        </div>
        <div>
          <Field name="additionalAddressInfo" component="input" placeholder="Complemento" />
        </div>
        <div>
          <Field name="borough" component="input" placeholder="Bairro" />
        </div>
        <div>
          <Field name="city" component="input" placeholder="Cidade" />
        </div>
        <div>
          <Field name="state" component="input" placeholder="UF" />
        </div>

        3. Mensagem
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


export default ClientFormWithAddress;
