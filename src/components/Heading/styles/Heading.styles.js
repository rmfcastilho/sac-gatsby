import styled from "styled-components";

import * as colors from 'constants/styles/colors';


export const MainHeading = styled.h2`
  color: ${(props) => props.colored 
    ? colors.colorMauvelous 
    : colors.colorStandardBlack};
  
  font-size: 2.75rem;
  margin: 3.75rem 0 1rem 0;
  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.2)
`;

export const SubHeading = styled.h3`
  color: ${(props) => props.colored 
    ? colors.colorMauvelous 
    : colors.colorStandardBlack};

  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.2);
  margin: 1.5rem 0;
  font-size: 1.5rem;
`;
