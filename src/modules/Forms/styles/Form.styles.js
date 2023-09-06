import styled from 'styled-components';

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from 'constants/styles/font';

import { Field } from 'react-final-form';

import { FIELDS_RENDER_METHODS_WIDTHS } from 'modules/Forms/constants/FieldsRenderMethod.constants';

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

const getWidth = (targetProperty, sizingProperties) => sizingProperties[targetProperty];

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: ${({ hasError }) => hasError ? 'column' : 'row'};
  gap: 0.5rem;
  align-items: flex-start;

  ${({ renderMethod }) => {
    const desktopWidth = getWidth('desktop', FIELDS_RENDER_METHODS_WIDTHS[renderMethod]);
    const mobileWidth = getWidth('mobile', FIELDS_RENDER_METHODS_WIDTHS[renderMethod]);

    return `
      min-width: ${desktopWidth};
      max-width: ${desktopWidth};
      
      @media (max-width: 1200px) {
        min-width: ${mobileWidth};
        max-width: ${mobileWidth};
      }
    `
  }}
`;

export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  max-width: 32rem;
`;

export const StyledFormSubsection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

export const StyledTextArea = styled.textarea`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  min-height: 10rem;
  resize: vertical;
  width: 100%;
`;

export const StyledTextInput = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  width: 100%;
  max-width: ${({ hasError }) => hasError ? '93%' : '100%'};
  max-height: 1rem;
`;

export const FormSubmissionWrapper = styled.div`
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
