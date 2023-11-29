import React from 'react';

import { useDispatch } from "react-redux";
import { setModalContent, toggleModal } from "slices/modal.slice";
import { setContactReason } from "slices/contactReason.slice";

import { BUTTON_BEHAVIORS } from "constants/button";

import {
  InnerSectionButton,
  InnerSectionLink,
  InnerSectionLabel,
} from "./styles/InnerSectionContent.styles";

import { ChevronRightIcon } from "evergreen-ui";
import { IconContainer } from "components/Link/styles/Link.styles";


const InnerSectionContent = ({
  id,
  label,
  behavior,
  behaviorData,
  contactType,
}) => {
  const dispatch = useDispatch();

  const handleContactReason = () => {
    dispatch(setContactReason(contactType || 'NA'));
  };

  const handleClick = () => {
    handleContactReason();
    dispatch(setModalContent(behaviorData));
    dispatch(toggleModal());
  }

  return (
    behavior === BUTTON_BEHAVIORS.REDIRECT
      ? (
        <InnerSectionLink key={id} to={behaviorData} onClick={handleContactReason}>
          <InnerSectionLabel>{label}</InnerSectionLabel>

          <IconContainer>
            <ChevronRightIcon size={18}/>
          </IconContainer>
        </InnerSectionLink>
      )
      : (
        <InnerSectionButton key={id} onClick={handleClick}>
          <InnerSectionLabel>{label}</InnerSectionLabel>

          <IconContainer>
            <ChevronRightIcon size={18}/>
          </IconContainer>
        </InnerSectionButton>
      )
  )
};


export default InnerSectionContent;
