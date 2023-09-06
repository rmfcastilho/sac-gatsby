import styled from "styled-components";

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from "constants/styles/font";

export const InnerSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  flex: 1 1 0;
  width: 100%;
  gap: 0.1rem
`;

export const InnerSectionHeader = styled.div`
  padding: 1rem 0;
  width: 100%;
  
  background-color: ${colors.colorTurquoiseGreenDark};
  color: ${colors.colorAntiFlashWhite};
  font-weight: ${FONT_WEIGHTS.EXTRA_BOLD};
  font-size: 1.25rem;
  text-align: left;
  text-shadow: 1px 0.5px rgba(0, 0, 0, 0.3);
`;

export const InnerSectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerSectionHeaderText = styled.span`
  padding-left: 0.5rem;
`
