import React from 'react';
import styled from 'styled-components';

import { BUTTON_STYLES } from 'constants/button';
import * as colors from 'constants/styles/colors';
import { Link } from 'gatsby';
import { FONT_WEIGHTS } from 'constants/styles/font';

const commonStyling = `
  color: white;
  padding: 0.75rem 3rem;
  border-radius: 0.75rem;
  width: 100%;
  text-align: center;
  transition: 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: ${FONT_WEIGHTS.BOLD};
  box-sizing: border-box;
`;

const activeElementsStyling = `
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.colorMauvelous};
  }
`;


export const StyledButton = styled.button`
  background-color: ${({ buttonStyle }) => buttonStyle === BUTTON_STYLES.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver 
  };
  
  ${commonStyling};
  ${activeElementsStyling};
  
  border: none;
  box-sizing: content-box;
  
  :disabled {
    background-color: ${colors.colorFormGrey};
    cursor: not-allowed;
    animation: none;
    
    &:hover {
      transform: none;
    }
  }
`;

export const StyledLink = styled(props => <Link {...props} />)`
  background-color: ${({ buttonStyle }) => buttonStyle === BUTTON_STYLES.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver
  };
  
  ${commonStyling};
  ${activeElementsStyling};
`;

export const StyledDisabledLink = styled(props => <Link {...props} />)`
  ${commonStyling};
  background-color: ${colors.colorFormGrey};
  cursor: not-allowed;
`;
