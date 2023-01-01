import styled from 'styled-components';

import * as colors from 'constants/styles/colors';


export const FooterWrapper = styled.div`
  background-color: ${colors.colorTurquoiseGreen};
  width: 100vw;
  max-height: 3.75rem;
  padding: 1rem 0;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.5rem;
  width: fit-content;
`;

export const FooterText = styled.span`
  color: ${colors.colorStandardWhite};
  text-align: center;
`;
