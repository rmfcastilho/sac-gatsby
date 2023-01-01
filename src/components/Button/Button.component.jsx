import React from 'react';

import { Link } from 'gatsby';
import { ButtonTypes } from 'constants/button';
import { StyledButton, StyledLink } from 'components/Button/styles/Button.styles';


const Button = ({
  key,
  isDisabled = false,
  type,
  label,
  link,
  buttonStyle,
}) => (
  type === ButtonTypes.BUTTON
    ? <StyledButton
      key={key}
      disabled={isDisabled}
      buttonStyle={buttonStyle}
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
