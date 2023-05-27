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

const errorStyling = `border: 1px solid red; color: red; ::placeholder { color: red; }`;

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

export const StyledTextArea = styled.textarea`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  width: 100%;
  min-height: 10rem;
`;

export const StyledFieldFullWidth = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  width: 100%;
`;

export const StyledFieldWide = styled.input`
  ${({ hasError }) => hasError && errorStyling}
  ${standardFieldStyles};
  width: 65%;
`;

export const StyledFieldNarrow = styled.input`
  ${({ hasError }) => hasError && errorStyling}
  ${standardFieldStyles};
  flex-grow: 1;
`;

export const LoneStyledFieldNarrow = styled.input`
  ${({ hasError }) => hasError && errorStyling}
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

export const FormFooterWrapper = styled.span`
  
`;
