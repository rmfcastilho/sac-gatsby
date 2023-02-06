import React from "react";

import { landingFaqContent } from "global/data/faq";

import FaqUnit from "./components/FaqUnit.component";

import { FAQContainer } from "components/FAQ/styles/FAQ.styles";

const Faq = () => (
  <FAQContainer>
    {landingFaqContent.map((faq) => (
      <FaqUnit {...faq} />
    ))}
  </FAQContainer>
);


export default Faq;
