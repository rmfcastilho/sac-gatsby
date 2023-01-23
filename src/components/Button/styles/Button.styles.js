import React from 'react';
import styled from 'styled-components';

import { buttonStyles } from 'constants/button';
import * as colors from 'constants/styles/colors';
import { Link } from 'gatsby';
import { fontWeights } from 'constants/styles/font';


const commonStyling = `
  color: white;
  width: fit-content;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 28rem;
  text-align: center;
  transition: 0.5s ease-in-out;
  font-size: 1rem;
  font-weight: ${fontWeights.BOLD};
  
  &:hover {
    transform: scale(1.05);
    background-color: ${colors.colorMauvelous};
  }
`

export const StyledButton = styled.button`
  background-color: ${({ buttonStyle }) => buttonStyle === buttonStyles.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver 
  };
  
  ${commonStyling};
  
  border: none;
  box-sizing: content-box;
`;

export const StyledLink = styled(props => <Link {...props} />)`
  background-color: ${({ buttonStyle }) => buttonStyle === buttonStyles.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver 
  };
  
  ${commonStyling};
`;
