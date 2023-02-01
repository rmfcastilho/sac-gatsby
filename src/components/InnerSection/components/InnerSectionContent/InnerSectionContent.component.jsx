import React from 'react';

import { useDispatch } from "react-redux";
import { setModalContent, toggleModal } from "slices/modal.slice";

import { BUTTON_BEHAVIORS } from "constants/button";

import {
  InnerSectionButton,
  InnerSectionLink
} from "./styles/InnerSectionContent.styles";

import { ChevronRightIcon } from "evergreen-ui";
import { IconContainer } from "components/Link/styles/Link.styles";


const InnerSectionContent = ({
  id,
  label,
  behavior,
  behaviorData,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModalContent(behaviorData));
    dispatch(toggleModal());
  }

  return (
    behavior === BUTTON_BEHAVIORS.REDIRECT
      ? (
        <InnerSectionLink key={id} to={behaviorData}>
          {label}

          <IconContainer>
            <ChevronRightIcon size={18}/>
          </IconContainer>
        </InnerSectionLink>
      )
      : (
        <InnerSectionButton key={id} onClick={handleClick}>
          {label}

          <IconContainer>
            <ChevronRightIcon size={18}/>
          </IconContainer>
        </InnerSectionButton>
      )
  )
};


export default InnerSectionContent;
