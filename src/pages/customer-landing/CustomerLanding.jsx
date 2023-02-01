import React from 'react';

import InnerSection from "components/InnerSection/InnerSection.component";
import Heading from "components/Heading/Heading.component";
import SectionDivider from "components/SectionDivider/SectionDivider.component";
import Link from "components/Link/Link.component";

import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";
import { currentCustomerInnerSections } from "global/data/currentCustomerInnerSections";

import { HEADING_STYLES } from "constants/heading";
import { DIVIDER_ORIENTATION } from "constants/sectionDivider";
import { BACKLINK_LABEL } from "constants/backlink";
import { HEADERS } from "constants/headers";


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
    <React.Fragment>
      <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.EXISTING_CUSTOMER}
      </Heading>

      <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

      <Heading type={HEADING_STYLES.SECONDARY} colored>
        {HEADERS.WHAT_HAPPENED}
      </Heading>

      <InnerSectionGlobalWrapper>
        {sectionsToRender}
      </InnerSectionGlobalWrapper>

      <Link isBackLink link="/">
        { BACKLINK_LABEL }
      </Link>
    </React.Fragment>
  );
};


export default CustomerLanding;
