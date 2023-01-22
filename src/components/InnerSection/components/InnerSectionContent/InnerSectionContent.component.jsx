import React from 'react';

import { buttonBehaviors } from "constants/button";

import {
  InnerSectionButton,
  InnerSectionLink
} from "./styles/InnerSectionContent.styles";


const InnerSectionContent = ({
  id,
  label,
  behavior,
  behaviorData,
}) => (
  behavior === buttonBehaviors.REDIRECT
    ? (
      <InnerSectionLink key={id} to={behaviorData}>
        {label}
      </InnerSectionLink>
    )
    : (
      <InnerSectionButton key={id}>
        {label}
      </InnerSectionButton>
    )
);


export default InnerSectionContent;
