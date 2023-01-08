import styled from 'styled-components';

import * as colors from 'constants/styles/colors';
import { fontWeights } from 'constants/styles/font';


export const FooterWrapper = styled.div`
  background-color: ${colors.colorTurquoiseGreen};
  width: 100vw;
  max-height: 3.75rem;
  padding: 1rem 0;
  margin-top: auto;
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
  font-weight: ${fontWeights.BOLD};
  font-size: 1.2rem;
`;
