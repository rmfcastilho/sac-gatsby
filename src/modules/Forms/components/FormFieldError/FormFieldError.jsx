import React from 'react';

import { WarningSignIcon } from 'evergreen-ui';

import { StyledFieldErrorWrapper, StyledFieldError } from './FormFieldError.styles';


const FormFieldError = ({ error }) => (
  <StyledFieldErrorWrapper>
    <WarningSignIcon size={14} color="red" />
    <StyledFieldError>{error}</StyledFieldError>
  </StyledFieldErrorWrapper>
);


export default FormFieldError;
