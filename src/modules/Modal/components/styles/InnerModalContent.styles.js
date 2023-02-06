import styled from 'styled-components';

import * as colors from 'constants/styles/colors';

const commonTextStyling = `
  font-size: 1.6rem;
`;

export const InnerModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 2.5rem;
  padding: 2rem 5rem 2rem 4.1rem;
`;

export const InnerModalContentText = styled.span`
  ${commonTextStyling};
  color: ${colors.colorFormGrey};
`;

export const InnerModalContentAnchor = styled.a`
  ${commonTextStyling};
  color: ${colors.colorFormGrey};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  :hover {
    color: ${colors.colorMauvelous};
    text-decoration: underline;
  }
`;

export const InnerModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  gap: 1rem;
  padding-top: 2rem;
`;