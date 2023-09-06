import styled from 'styled-components';
import { BREAKPOINT_TABLET } from 'constants/styles/sizes';


export const LandingButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 auto;
  padding-bottom: 2rem;
  width: 80%;
  justify-content: center;
  
  @media (min-width: ${BREAKPOINT_TABLET}px) {
    width: 30%;
  }
`
