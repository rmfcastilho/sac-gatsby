import React from 'react';

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
}) => (
  behavior === BUTTON_BEHAVIORS.REDIRECT
    ? (
      <InnerSectionLink key={id} to={behaviorData}>
        {label}

        <IconContainer>
          <ChevronRightIcon size={18} />
        </IconContainer>
      </InnerSectionLink>
    )
    : (
      <InnerSectionButton key={id}>
        {label}

        <IconContainer>
          <ChevronRightIcon size={18} />
        </IconContainer>
      </InnerSectionButton>
    )
);


export default InnerSectionContent;
