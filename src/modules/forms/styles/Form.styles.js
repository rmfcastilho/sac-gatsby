import styled from 'styled-components';
import { Field } from 'react-final-form';

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from "constants/styles/font";


const standardFieldStyles = `
  border: 0.2px solid rgba(122, 122, 122, 0.6);
  border-radius: 5px;
  color: ${colors.colorFormGrey};
  padding: 0.5rem;
  flex-grow: 1;

  ::placeholder {
    color: ${colors.colorTurquoiseGreen};
  }
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  width: 70%;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const FormSubsection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 1rem 0 2rem 0;
  flex-wrap: wrap;
`;

export const StyledFieldFullWidth = styled(Field)`
  ${standardFieldStyles};
  width: 100%;
`;

export const StyledFieldWide = styled(Field)`
  ${standardFieldStyles};
  width: 65%;
`;

export const StyledFieldNarrow = styled(Field)`
  ${standardFieldStyles};
  flex-grow: 1;
`;

export const LoneStyledFieldNarrow = styled(Field)`
  ${standardFieldStyles};
  width: 35%;
  flex-grow: 0;
`;

export const FormSubmissionWrapper = styled.button`
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  align-items: center;
  border: none;
  margin: 0 auto;
`;

export const FormSectionHeaderWrapper = styled.div`
  margin-top: 0.5rem;
  text-align: left;
  width: 100%;
  color: ${colors.colorTurquoiseGreenDark};
  font-weight: ${FONT_WEIGHTS.BOLD};
`;
