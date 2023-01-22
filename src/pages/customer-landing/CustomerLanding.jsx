import React from 'react';

import StandardTemplate from "templates/StandardTemplate.component";
import InnerSection from "components/InnerSection/InnerSection.component";
import Heading from "components/Heading/Heading.component";
import SectionDivider from "components/SectionDivider/SectionDivider.component";

import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";

import { currentCustomerInnerSections } from "global/data/buttons/currentCustomerInnerSections";

import { headingStyles } from "constants/heading";
import { dividerOrientation } from "constants/sectionDivider";


const CustomerLanding = () => {
  const sectionsToRender = currentCustomerInnerSections.map(
    (section) => (
      <InnerSection
        id={section.id}
        {...section}
      />
    )
  );

  return (
    <StandardTemplate>
      <Heading type={headingStyles.PRIMARY} colored>
        Central de Ajuda
      </Heading>

      <Heading type={headingStyles.SECONDARY}>
        Sou cliente
      </Heading>

      <SectionDivider type={dividerOrientation.HORIZONTAL} />

      <Heading type={headingStyles.SECONDARY} colored>
        O que aconteceu?
      </Heading>

      <InnerSectionGlobalWrapper>
        {sectionsToRender}
      </InnerSectionGlobalWrapper>
    </StandardTemplate>
  );
};


export default CustomerLanding;
