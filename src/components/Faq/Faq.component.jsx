import React from "react";

import { landingFaqContent } from "global/data/faq";

import {
  FAQContainer,
  FAQWrapper,
  FAQHeader,
  FAQContent,
} from "components/FAQ/styles/FAQ.styles";

const Faq = () => {
  return (
    <FAQContainer>
      {landingFaqContent.map((faq) => (
        <FAQWrapper key={faq.id}>
          <FAQHeader>{faq.questionTitle}</FAQHeader>
          <FAQContent>{faq.questionContent}</FAQContent>
        </FAQWrapper>
      ))}
    </FAQContainer>
  );
};


export default Faq;
