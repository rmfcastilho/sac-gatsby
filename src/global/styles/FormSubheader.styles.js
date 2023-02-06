import styled from "styled-components";

import { colorSonicSilver } from "constants/styles/colors";
import { FONT_WEIGHTS } from "constants/styles/font";

export const FormSubheader = styled.span`
  font-size: 1.5rem;
  text-align: center;
  max-width: 18rem;
  margin: auto;
  padding: 1rem 0;
  color: ${colorSonicSilver};
  font-weight: ${FONT_WEIGHTS.BOLD};
`;
