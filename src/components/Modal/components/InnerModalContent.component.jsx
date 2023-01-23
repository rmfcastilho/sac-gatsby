import React from "react";

import {
  InnerModalContentText,
  InnerModalContentWrapper,
  InnerModalContentAnchor,
} from "components/Modal/components/styles/InnerModalContent.styles";

import { modalTypes } from "components/Modal/constants/ModalTypes";

import { WarningSignIcon } from "evergreen-ui";
import { colorTurquoiseGreenDark } from "constants/styles/colors";

const InnerModalContent = ({
  header,
  textualClarification,
  type,
  resource,
  children,
}) => {
  const clarification = type === modalTypes.DELAYED_RESOURCE
    ? <InnerModalContentAnchor href={resource} target="_blank" rel="noopener noreferrer">{textualClarification}</InnerModalContentAnchor>
    : <InnerModalContentText>{textualClarification}</InnerModalContentText>;

  return (
    <InnerModalContentWrapper>
      <InnerModalContentText>{header}</InnerModalContentText>
      <WarningSignIcon size={180} color={colorTurquoiseGreenDark} />
      {clarification}

      {children}
    </InnerModalContentWrapper>
  )
};


export default InnerModalContent;
