import React from "react";

import StandardTemplate from "templates/StandardTemplate.component";
import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";

import InnerSection from "components/InnerSection/InnerSection.component";
import { nonCustomerInnerSections } from "global/data/nonCustomerInnerSections";
import Heading from "components/Heading/Heading.component";
import {headingStyles} from "constants/heading";
import SectionDivider from "components/SectionDivider/SectionDivider.component";
import {dividerOrientation} from "constants/sectionDivider";
import Link from "components/Link/Link.component";


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
      <Heading type={headingStyles.PRIMARY} colored>
        Central de Ajuda
      </Heading>

      <Heading type={headingStyles.SECONDARY}>
        Não sou cliente
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


export default NonCustomerLanding;
