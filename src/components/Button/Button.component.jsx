import React from 'react';

import LinkAsButton from "./components/LinkAsButton.component";

import { BUTTON_TYPES } from 'constants/button';
import { StyledButton } from 'components/Button/styles/Button.styles';

import ReactGA from 'react-ga';

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
      onClick={() => {
        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: label,
        });
        onClick();
      }}
    >
      {label}
    </StyledButton>

    : <LinkAsButton
      key={key}
      link={link}
      buttonStyle={buttonStyle}
      isDisabled={isDisabled}
      onClick={() => {
        ReactGA.event({
          category: 'Link',
          action: 'Click',
          label: label,
        });
        onClick();
      }}
      label={label}
    />
);


export default Button;
