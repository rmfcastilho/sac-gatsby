import styled from 'styled-components';

import * as colors from 'constants/styles/colors';


const commonTextStyling = `
  font-size: 1.6rem;
  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.4);
`;

export const InnerModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 3.5rem;
  padding: 5rem;
  color: ${colors.colorTurquoiseGreenDark};
  text-shadow: 1px 0.5px rgba(255, 255, 255, 0.2);
`;

export const InnerModalContentText = styled.span`
  ${commonTextStyling};
`;

export const InnerModalContentAnchor = styled.a`
  ${commonTextStyling};
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  :hover {
    color: ${colors.colorMauvelous};
    text-decoration: underline;
  }
`;