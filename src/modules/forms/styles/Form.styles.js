import styled from 'styled-components';
import { Field } from 'react-final-form';

import * as colors from 'constants/styles/colors';


export const FormSubsection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const StyledField = styled(Field)`
  border: 0.2px solid rgba(122, 122, 122, 0.6);
  border-radius: 5px;
  color: ${colors.colorFormGrey};
  padding: 0.5rem;

  ::placeholder {
    color: ${colors.colorTurquoiseGreen};
  }
`;

export const FieldGroupWrapper = styled.div`
  width: 80%;
`;

export const FieldPlaceholder = styled.span`
  color: ${colors.colorTurquoiseGreen};
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  z-index: 200;
  
  :focus, 
  :not(:focus):valid {
    top: 8px;
    bottom: 10px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
  };
`;