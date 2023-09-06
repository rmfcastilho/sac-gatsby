import styled from 'styled-components';
import { BREAKPOINT_TABLET } from 'constants/styles/sizes';


export const InnerSectionGlobalWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 85%;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    width: 100%;
`;
