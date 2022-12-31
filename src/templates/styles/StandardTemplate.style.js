import styled from 'styled-components';

import {
  breakpointTablet,
  breakpointDesktop
} from '../../constants/styles/sizes';

export const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  
  @media (min-width: ${breakpointTablet}) {
    max-width: 31.25rem;
  }
  
  @media (min-width: ${breakpointDesktop}) {
    max-width: 50rem;
  }
`;
