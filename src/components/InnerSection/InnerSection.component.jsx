import React from "react";

import InnerSectionContent from "./components/InnerSectionContent/InnerSectionContent.component";

import {
  InnerSectionWrapper,
  InnerSectionHeader,
  InnerSectionContentWrapper,
  InnerSectionHeaderText,
} from "./styles/InnerSection.styles";


const InnerSection = ({ header, content }) => (
  <InnerSectionWrapper>
    <InnerSectionHeader>
      <InnerSectionHeaderText>
        {header}
      </InnerSectionHeaderText>
    </InnerSectionHeader>

    <InnerSectionContentWrapper>
      {
        content.map((button) => (
          <InnerSectionContent
            key={button.id}
            {...button}
          />
        ))
      }
    </InnerSectionContentWrapper>
  </InnerSectionWrapper>
);


export default InnerSection;
