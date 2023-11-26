import React from 'react';

import LinkAsButton from "./components/LinkAsButton.component";

import { BUTTON_TYPES } from 'constants/button';
import { StyledButton } from 'components/Button/styles/Button.styles';


const Button = ({
  key,
  isDisabled,
  type,
  label,
  link,
  buttonStyle,
  onClick,
}) => (
  type !== BUTTON_TYPES.LINK
    ? <StyledButton
      key={key}
      disabled={isDisabled}
      buttonStyle={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {label}
    </StyledButton>

    : <LinkAsButton
      key={key}
      link={link}
      buttonStyle={buttonStyle}
      isDisabled={isDisabled}
      onClick={onClick}
      label={label}
    />
);


export default Button;
