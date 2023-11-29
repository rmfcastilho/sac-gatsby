import styled from 'styled-components';
import * as colors from 'constants/styles/colors';

export const FormSubmissionModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const FormSubmissionModalTitle = styled.h2`
  font-size: 2rem;
  margin: 2.5rem 0;
  font-weight: 700;
  color: ${colors.colorTurquoiseGreenDark};
`;

export const FormSubmissionModalText = styled.p`
  color: ${colors.colorTurquoiseGreenDark};
  margin: 2.5rem 0 3.5rem 0;
  font-size: 1.5rem;
  text-align: center;
`;