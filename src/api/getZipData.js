import { isZipValidValidator } from 'modules/Forms/helpers/fieldValidation';

export const getZipData = async (zipCode) => {

  const options = {
    method: 'GET',
    cache: 'default',
  };

  if (!isZipValidValidator(zipCode)) {
    return Promise.reject('CEP inválido');
  }

  return await fetch(`https://viacep.com.br/ws/${zipCode.replace('-', '')}/json/`, options)
    .then((response) => response.json());
};
