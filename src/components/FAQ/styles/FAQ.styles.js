import styled from "styled-components";

import { FONT_WEIGHTS } from "constants/styles/font";


export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 1rem 0;
  cursor: pointer;
  margin: 0 auto;
`;

export const FAQWrapper = styled.details`
  summary {
    list-style-type: none;
  }
  
  text-align: left;
  margin-bottom: 1rem;
`;

export const FAQHeader = styled.summary`
  background-color: rgba(240, 222, 206, 0.8);
  padding:  0.75rem;
  font-weight: ${FONT_WEIGHTS.BOLD};
`;

export const FAQContent = styled.div`
  background-color: rgba(240, 222, 206, 0.3);
  padding:  1.75rem 0.75rem;
`;