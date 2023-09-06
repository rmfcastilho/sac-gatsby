import styled from "styled-components";

import * as colors from 'constants/styles/colors';
import { BREAKPOINT_TABLET } from "constants/styles/sizes";


export const MainHeading = styled.h2`
  color: ${({ colored }) => colored 
    ? colors.colorMauvelous 
    : colors.colorStandardBlack};
  
  font-size: 2rem;
  margin: 3.75rem 0 0.5rem 0;
  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.2);
  max-width: 100%;

  @media (min-width: ${BREAKPOINT_TABLET}){
    font-size: 2.75rem;
  }
`;

export const SubHeading = styled.h3`
  color: ${({ colored }) => colored 
    ? colors.colorMauvelous 
    : colors.colorStandardBlack};

  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.2);
  margin: 1rem 0 2.25rem 0;
  font-size: 1.25rem;
  max-width: 100%;

  @media (min-width: ${BREAKPOINT_TABLET}){
    font-size: 1.5rem;
  }
`;
