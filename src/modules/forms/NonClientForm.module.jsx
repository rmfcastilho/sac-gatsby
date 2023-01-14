import React from 'react';
import { Form, Field } from 'react-final-form';


const handleSubmit = () => console.log('Submitted!');

const NonClientForm = () => (
  <Form
    onSubmit={handleSubmit}
    render={() => (
      <form onSubmit={handleSubmit}>
        1. Identificação
        <div>
          <Field name="customerName" component="input" placeholder="Nome" />
        </div>
        <div>
          <Field name="customerEmail" component="input" placeholder="E-mail usado na compra" />
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


export default NonClientForm;
