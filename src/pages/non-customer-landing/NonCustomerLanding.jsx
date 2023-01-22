import React from "react";

import StandardTemplate from "templates/StandardTemplate.component";
import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";

import InnerSection from "components/InnerSection/InnerSection.component";
import { nonCustomerInnerSections } from "global/data/buttons/nonCustomerInnerSections";


const NonCustomerLanding = () => {
  const sectionsToRender = nonCustomerInnerSections.map(
    (section) => (
      <InnerSection
        id={section.id}
        {...section}
      />
    )
  );

  return (
    <StandardTemplate>
      <InnerSectionGlobalWrapper>
        {sectionsToRender}
      </InnerSectionGlobalWrapper>
    </StandardTemplate>
  );
};


export default NonCustomerLanding;
