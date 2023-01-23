import React from 'react';

import StandardTemplate from "templates/StandardTemplate.component";
import InnerSection from "components/InnerSection/InnerSection.component";
import Heading from "components/Heading/Heading.component";
import SectionDivider from "components/SectionDivider/SectionDivider.component";
import Link from "components/Link/Link.component";

import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";

import { currentCustomerInnerSections } from "global/data/currentCustomerInnerSections";

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

      <Link isBackLink link="/">
        Voltar ao menu anterior
      </Link>
    </StandardTemplate>
  );
};


export default CustomerLanding;
