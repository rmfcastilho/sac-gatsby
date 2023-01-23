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
  onClick,
}) => (
  type !== buttonTypes.LINK
    ? <StyledButton
      key={key}
      disabled={isDisabled}
      buttonStyle={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {label}
    </StyledButton>

    : <StyledLink
        key={key}
        to={link}
        buttonStyle={buttonStyle}
        disabled={isDisabled}
      >
        {label}
      </StyledLink>
);



export default Button;
