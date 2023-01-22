import React from "react";

import InnerSectionButton from "./components/InnerSectionButton/InnerSectionButton.component";

import {
  InnerSectionWrapper,
  InnerSectionHeader,
  InnerSectionContent,
} from "./styles/InnerSection.styles";


const InnerSection = ({ header, content }) => (
  <InnerSectionWrapper>
    <InnerSectionHeader>{header}</InnerSectionHeader>

    <InnerSectionContent>
      {
        content.map((button) => (
          <InnerSectionButton
            key={button.id}
            {...button}
          />
        ))
      }
    </InnerSectionContent>
  </InnerSectionWrapper>
);


export default InnerSection;
