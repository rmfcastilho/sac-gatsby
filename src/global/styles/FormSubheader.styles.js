import styled from "styled-components";

import { colorSonicSilver } from "constants/styles/colors";
import { FONT_WEIGHTS } from "constants/styles/font";
import { BREAKPOINT_TABLET } from 'constants/styles/sizes';

export const FormSubheader = styled.span`
  font-size: 1.5rem;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  color: ${colorSonicSilver};
  font-weight: ${FONT_WEIGHTS.BOLD};

  @media (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 18rem;
  }
`;
