import React from 'react';
import styled from 'styled-components';

import { ButtonStyles } from 'constants/button';
import * as colors from 'constants/styles/colors';
import { Link } from 'gatsby';

export const StyledLink = styled(props => <Link {...props} />)`
  width: fit-content;
  max-width: 10rem;
  cursor: pointer;
  background-color: ${({ buttonStyle }) => buttonStyle === ButtonStyles.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver 
  };
  padding: 0.5rem;
  border-radius: 0.75rem;
`;

export const StyledButton = styled.button`
  width: fit-content;
  max-width: 10rem;
  cursor: pointer;
  background-color: ${({ buttonStyle }) => buttonStyle === ButtonStyles.PRIMARY 
    ? colors.colorTurquoiseGreen 
    : colors.colorSonicSilver 
  };
  padding: 0.5rem;
  border-radius: 0.75rem;
`;

