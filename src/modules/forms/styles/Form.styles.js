import styled from 'styled-components';
import { Field } from 'react-final-form';

import * as colors from 'constants/styles/colors';


const standardFieldStyles = `
  border: 0.2px solid rgba(122, 122, 122, 0.6);
  border-radius: 5px;
  color: ${colors.colorFormGrey};
  padding: 0.5rem;

  ::placeholder {
    color: ${colors.colorTurquoiseGreen};
  }
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  align-items: flex-start;
`;

export const FormSubsection = styled.div`
  min-width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0 2rem 0;
  flex-wrap: wrap;
`;

export const StyledFieldFullWidth = styled(Field)`
  width: 100%;
  ${standardFieldStyles};
`;

export const DoubleFieldRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SingleFieldRow = styled.div`
  width: 100%;
`;

export const StyledFieldNarrow = styled(Field)`
  width: 35%;
  ${standardFieldStyles};
`;

export const StyledFieldWide = styled(Field)`
  width: 60%;
  ${standardFieldStyles};
`;

export const FormSubmissionWrapper = styled.button`
  display: flex;
  margin: 2rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  border: none;
`;