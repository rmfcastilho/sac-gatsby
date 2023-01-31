import React from "react";
import styled from "styled-components";

import { Link } from 'gatsby';
import { FONT_WEIGHTS } from "constants/styles/font";

import * as colors from "constants/styles/colors";


export const TextualLink = styled(props => <Link {...props} />)`
  color: ${colors.colorTurquoiseGreenDark};
  font-weight: ${FONT_WEIGHTS.BOLD};
  transition: 0.5s ease-in-out;
  max-width: fit-content;
  display: flex;
  align-content: flex-start;
  margin: 0 auto;
  padding: 1rem 0 2rem 0;
  
  :hover {
    color: ${colors.colorMauvelous};
  }
`;

export const IconContainer = styled.div`
  color: white;
  z-index: 2;
  position: absolute;
  right: 1rem;
`;

export const InnerLinkText = styled.span`
  padding-left: 0.5rem;
`;