import React from 'react';

import { buttonTypes } from 'constants/button';
import { StyledButton, StyledLink } from 'components/Button/styles/Button.styles';


const Button = ({
  key,
  isDisabled = false,
  type,
  label,
  link,
  buttonStyle,
}) => (
  type !== buttonTypes.LINK
    ? <StyledButton
      key={key}
      disabled={isDisabled}
      buttonStyle={buttonStyle}
      type={type}
    >
      {label}
    </StyledButton>

    : <StyledLink
        key={key}
        to={link}
        buttonStyle={buttonStyle}
      >
        {label}
      </StyledLink>
);



export default Button;
