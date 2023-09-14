import { HIGH_LEVEL_CATEGORIES } from 'modules/Forms/constants/HighLevelCategories.constants';
import { ADDRESS_FORM_FIELDS } from 'modules/Forms/constants/AddressForm.constants';

export const addressFieldTransformers = (apiResponse) => ({
  [HIGH_LEVEL_CATEGORIES.ADDRESS]: {
    [ADDRESS_FORM_FIELDS.STREET]: apiResponse.logradouro,
    [ADDRESS_FORM_FIELDS.DISTRICT]: apiResponse.bairro,
    [ADDRESS_FORM_FIELDS.CITY]: apiResponse.localidade,
    [ADDRESS_FORM_FIELDS.STATE]: apiResponse.uf,
  }
});
