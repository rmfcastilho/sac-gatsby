import styled from 'styled-components';

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from "constants/styles/font";


const standardFieldStyles = `
  border: none;
  box-shadow: 0 0 1rem 0.25rem rgba(122, 122, 122, 0.1);
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

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid blue;
  overflow: visible;
  
  ${({ doubleFieldWide }) => doubleFieldWide 
    ? `width: 60%; flex-grow: 0;`
    : `max-width: 25%; flex-grow: 1;`
  }
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

export const StyledTextInput = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  width: 100%;
`;

export const StyledFieldFullWidth = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  width: 100%;
`;

export const StyledFieldWide = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  min-width: 60%;
  max-width: 70%;
`;

export const StyledDoubleFieldRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledFieldNarrow = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  flex-grow: 1;
`;

export const LoneStyledFieldNarrow = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
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
