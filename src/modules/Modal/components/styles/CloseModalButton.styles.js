import styled from "styled-components";

import * as colors from 'constants/styles/colors';


export const StyledCloseModalButton = styled.button`
  display: flex;
  box-sizing: content-box;
  background-color: transparent;
  color: ${colors.colorTurquoiseGreenDark};
  border-radius: 0.25rem;
  margin-left: auto;
  cursor: pointer;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  border: 1px solid ${colors.colorTurquoiseGreenDark};
  position: absolute;
  top: 1rem;
  right: 0.75rem;

  &:hover {
    border: none;
    background-color: ${colors.colorMauvelous};
    color: ${colors.colorStandardWhite};
  }
`;
