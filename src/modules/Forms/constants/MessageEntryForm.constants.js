import { FIELDS_RENDER_METHOD } from 'modules/Forms/constants/FieldsRenderMethod.constants';
import { requiredValidator } from 'modules/Forms/helpers/fieldValidation';

export const MESSAGE_ENTRY_FORM_FIELDS = {
  SUBJECT: 'subject',
  MESSAGE: 'message',
};

export const MESSAGE_ENTRY_FORM_SUBSECTION = {
  title: 'Mensagem',
  fields: [
    {
      id: MESSAGE_ENTRY_FORM_FIELDS.SUBJECT,
      type: 'text',
      validators: [requiredValidator],
      placeholder: 'Assunto *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      isRequired: true,
    },
    {
      id: MESSAGE_ENTRY_FORM_FIELDS.MESSAGE,
      type: 'textarea',
      validators: [requiredValidator],
      placeholder: 'Mensagem *',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      isRequired: true,
    },
  ],
};
