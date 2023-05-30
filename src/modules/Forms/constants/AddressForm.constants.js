import { requiredValidator } from 'modules/Forms/helpers/fieldValidation';
import { FIELDS_RENDER_METHOD } from 'modules/Forms/constants/FieldsRenderMethod.constants';

export const ADDRESS_FORM_FIELDS = {
  ZIP: 'zipCode',
  STREET: 'streetAddress',
  NUMBER: 'number',
  COMPLEMENT: 'complement',
  DISTRICT: 'district',
  CITY: 'city',
  STATE: 'state',
};

export const ADDRESS_SUBSECTION = {
  title: 'Novo endereço',
  fields: [
    {
      id: ADDRESS_FORM_FIELDS.ZIP,
      mask: '99999-999',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'CEP',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_WIDTH_SINGLE,
      maxLength: 9,
    },
    {
      id: ADDRESS_FORM_FIELDS.STREET,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Logradouro',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_WIDTH_WIDE,
    },
    {
      id: ADDRESS_FORM_FIELDS.NUMBER,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Número',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_WIDTH_COMPACT,
    },
    {
      id: ADDRESS_FORM_FIELDS.COMPLEMENT,
      type: 'text',
      placeholder: 'Complemento',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_EQUAL,
    },
    {
      id: ADDRESS_FORM_FIELDS.DISTRICT,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Bairro',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_EQUAL,
    },
   {
      id: ADDRESS_FORM_FIELDS.CITY,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Cidade',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_WIDTH_WIDE,
    },
    {
      id: ADDRESS_FORM_FIELDS.STATE,
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'UF',
      renderMethod: FIELDS_RENDER_METHOD.PARTIAL_WIDTH_COMPACT,
    },
  ],
};
