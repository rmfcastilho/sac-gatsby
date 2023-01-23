import React from "react";
import styled from "styled-components";

import { Link } from 'gatsby';
import { fontWeights } from "constants/styles/font";

import * as colors from "constants/styles/colors";


export const TextualLink = styled(props => <Link {...props} />)`
  color: ${colors.colorTurquoiseGreenDark};
  font-weight: ${fontWeights.BOLD};
  transition: 0.5s ease-in-out;
  padding-bottom: 0.1rem;
  max-width: fit-content;
  display: flex;
  align-content: flex-start;
  margin: 0 auto;
  padding: 1rem 0 2rem 0;
  
  :hover {
    color: ${colors.colorMauvelous};
  }
`;

export const InnerLinkText = styled.span`
  padding-left: 0.5rem;
`;