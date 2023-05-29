import { requiredValidator, isCpfValidValidator, isEmailValidValidator } from 'modules/Forms/helpers/fieldValidation';
import { FIELDS_RENDER_METHOD } from 'modules/Forms/constants/FieldsRenderMethod.constants';

export const EXISTING_CUSTOMER_ID_FORM_FIELDS = {
  ID: 'customerId',
  NAME: 'customerName',
  ORDER_NUMBER: 'orderNumber',
  EMAIL: 'customerEmail',
}

export const EXISTING_CUSTOMER_SUBSECTION = {
  title: 'Identificação',
  fields: [
    {
      id: EXISTING_CUSTOMER_ID_FORM_FIELDS.ID,
      mask: '999.999.999-99',
      validators: [requiredValidator, isCpfValidValidator],
      type: 'text',
      placeholder: 'CPF *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      maxLength: 14,
    },
    {
      id: EXISTING_CUSTOMER_ID_FORM_FIELDS.NAME,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Nome *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: EXISTING_CUSTOMER_ID_FORM_FIELDS.ORDER_NUMBER,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Número do pedido *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: EXISTING_CUSTOMER_ID_FORM_FIELDS.EMAIL,
      validators: [requiredValidator, isEmailValidValidator],
      type: 'text',
      placeholder: 'E-mail usado na compra *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
  ],
};
