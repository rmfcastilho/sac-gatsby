import styled from 'styled-components';

import {
  BREAKPOINT_TABLET,
  BREAKPOINT_DESKTOP,
} from 'constants/styles/sizes';


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  flex-wrap: wrap;
  width: 90%;
  
  @media (min-width: ${BREAKPOINT_TABLET}) {
    width: 80%;
    max-width: 31.25rem;
  }
  
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    max-width: 50rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
