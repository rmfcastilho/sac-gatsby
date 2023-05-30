import styled from 'styled-components';

import * as colors from 'constants/styles/colors';
import { FONT_WEIGHTS } from "constants/styles/font";

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


export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 0.1rem;
  width: 70%;
  margin: 0 auto;
  padding-top: 2rem;
  min-width: 23.75rem;
  max-width: 32rem;
`;

export const StyledFormSubsection = styled.div`
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
  min-height: 10rem;
  resize: vertical;

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

export const StyledTextInput = styled.input`
  ${standardFieldStyles};
  ${({ hasError }) => hasError && errorStyling}
  
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
