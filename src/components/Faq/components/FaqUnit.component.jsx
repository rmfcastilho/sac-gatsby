import React, { useState } from 'react';

import {
  FAQContent,
  FAQHeader,
  FAQHeaderIcon,
  FAQWrapper
} from "components/Faq/styles/FAQ.styles";

import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";


export const FaqUnit = ({
  id,
  questionTitle,
  questionContent,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <FAQWrapper key={id}>
      <FAQHeader onClick={toggleIsActive}>
        {questionTitle}

        <FAQHeaderIcon>
          {isActive ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} /> }
        </FAQHeaderIcon>
      </FAQHeader>
      <FAQContent>{questionContent}</FAQContent>
    </FAQWrapper>
  )
};


export default FaqUnit;
