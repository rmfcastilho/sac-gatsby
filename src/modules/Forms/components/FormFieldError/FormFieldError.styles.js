import styled from 'styled-components';
import * as colors from 'constants/styles/colors';

export const StyledFieldError = styled.span`
  color: ${colors.colorAntiFlashWhite};
  font-size: 0.8rem;
  font-weight: bold;
`;

export const StyledFieldErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background-color: ${colors.colorMauvelous};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-top: -0.2rem;
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
`;

