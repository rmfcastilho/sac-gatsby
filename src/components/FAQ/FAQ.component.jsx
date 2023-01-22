import React from "react";

import { landingFaqContent } from "global/data/faq";

import {
  FAQContainer,
  FAQWrapper,
  FAQHeader,
  FAQContent,
} from "components/FAQ/styles/FAQ.styles";

const FAQ = () => {
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


export default FAQ;
