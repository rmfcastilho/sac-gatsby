import React from 'react';

import { StyledLink, StyledDisabledLink } from "../styles/Button.styles";


const LinkAsButton = ({
  key,
  isDisabled = false,
  label,
  link,
  buttonStyle,
  onClick,
}) => (
   isDisabled
    ? <StyledDisabledLink
      key={key}
      buttonStyle={buttonStyle}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </StyledDisabledLink>
    : <StyledLink
      key={key}
      to={link}
      buttonStyle={buttonStyle}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </StyledLink>
 );



export default LinkAsButton;
