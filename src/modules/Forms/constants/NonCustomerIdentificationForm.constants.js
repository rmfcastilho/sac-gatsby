import { requiredValidator, isEmailValidValidator } from 'modules/Forms/helpers/fieldValidation';
import { FIELDS_RENDER_METHOD } from 'modules/Forms/constants/FieldsRenderMethod.constants';

export const NON_CUSTOMER_FORM_FIELDS = {
  NAME: 'name',
  EMAIL: 'email',
}

export const NON_CUSTOMER_SUBSECTION = {
  title: 'Identificação',
  fields: [
    {
      id: NON_CUSTOMER_FORM_FIELDS.NAME,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Nome *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      isRequired: true,
    },
    {
      id: NON_CUSTOMER_FORM_FIELDS.EMAIL,
      validators: [requiredValidator, isEmailValidValidator],
      type: 'text',
      placeholder: 'E-mail para contato *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      isRequired: true,
    }
  ],
};
