import React from 'react';

import styled from "styled-components";
import { Link } from 'gatsby';

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from 'constants/styles/font';


const commonStyling = `
  white-space: no-wrap;
  background-color: ${colors.colorTurquoiseGreen};
  color: ${colors.colorStandardWhite};
  text-align: left;
  padding: 0.8rem 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  width: 100%;
  transition: 0.5s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: flex-start;
  
  &:hover {
    background-color: ${colors.colorMauvelous};
    transform: scale(1.02);
  }
`;

export const InnerSectionButton = styled.button`
  border: none;
  box-sizing: content-box;
  ${commonStyling};
`;

export const InnerSectionLink = styled(props => <Link {...props} />)`
  ${commonStyling};
`;