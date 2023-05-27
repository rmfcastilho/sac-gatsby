import { requiredValidator } from 'modules/Forms/helpers/fieldValidation';
import { FIELDS_RENDER_METHOD } from 'modules/Forms/constants/FieldsRenderMethod.constants';

export const ADDRESS_FORM_HEADER = 'Novo endereço';

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
      id: 'zipCode',
      mask: '99999-999',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'CEP',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
      maxLength: 9,
    },
    {
      id: 'streetAddress',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Logradouro',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: 'number',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Número',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: 'complement',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Complemento',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: 'district',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Bairro',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
   {
      id: 'city',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'Cidade',
     renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
    {
      id: 'state',
      validators: [requiredValidator],
      type: 'text',
      placeholder: 'UF',
      renderMethod: FIELDS_RENDER_METHOD.FULL_WIDTH,
    },
  ],
}

export const ADDRESS_FORM_LABELS = {
  [ADDRESS_FORM_FIELDS.ZIP]: 'CEP *',
  [ADDRESS_FORM_FIELDS.STREET]: 'Logradouro *',
  [ADDRESS_FORM_FIELDS.NUMBER]: 'Número *',
  [ADDRESS_FORM_FIELDS.COMPLEMENT]: 'Complemento *',
  [ADDRESS_FORM_FIELDS.DISTRICT]: 'Bairro *',
  [ADDRESS_FORM_FIELDS.CITY]: 'Cidade *',
  [ADDRESS_FORM_FIELDS.STATE]: 'UF *',
};

export const ADDRESS_FIELD_MASKS = {
  [ADDRESS_FORM_FIELDS.ZIP]: '99999-999',
};
