import React from 'react';

import { StyledTextInput, StyledTextArea } from 'modules/Forms/styles/Form.styles';


const StyledField = ({ type, renderMethod, hasError, placeholder, input }) => type === 'text'
    ? <StyledTextInput
      hasError={hasError}
      placeholder={placeholder}
      renderMethod={renderMethod}
      {...input}
    />
    : <StyledTextArea
      hasError={hasError}
      placeholder={placeholder}
      renderMethod={renderMethod}
      {...input}
    />;


export default StyledField;
