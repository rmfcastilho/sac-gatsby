export const requiredValidator = (value) => {
  if (!value) {
    return 'Campo obrigatório';
  }

  return undefined;
}

export const maxLengthValidator = (max) => (value) => {
  if (value && value.length > max) {
    return `Máximo de ${max} caracteres`;
  }

  return undefined;
};

export const minLengthValidator = (min) => (value) => {
  if (value && value.length < min) {
    return `Mínimo de ${min} caracteres`;
  }

  return undefined;
}

export const isNumberValidator = (value) => {
  if (value && isNaN(Number(value))) {
    return 'Deve ser um número';
  }

  return undefined;
}

export const isEmailValidValidator = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Deve ser um e-mail válido';
  }

  return undefined;
}

export const isCpfValidValidator = (value) => {
  if (value && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/i.test(value)) {
    return 'Deve ser um CPF válido';
  }

  return undefined;
}

export const isZipValidValidator = (value) => {
  if (value && !/^\d{5}-\d{3}$/i.test(value)) {
    return 'Deve ser um CEP válido';
  }

  return undefined;
}

