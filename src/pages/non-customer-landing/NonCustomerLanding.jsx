import React from "react";

import InnerSection from "components/InnerSection/InnerSection.component";
import Heading from "components/Heading/Heading.component";
import SectionDivider from "components/SectionDivider/SectionDivider.component";
import Link from "components/Link/Link.component";

import { InnerSectionGlobalWrapper } from "global/styles/InnerSectionGlobalWrapper.styles";
import { nonCustomerInnerSections } from "global/data/nonCustomerInnerSections";

import { DIVIDER_ORIENTATION } from "constants/sectionDivider";
import { HEADING_STYLES } from "constants/heading";
import { HEADERS } from "constants/headers";
import { BACKLINK_LABEL } from "constants/backlink";

import { Helmet } from 'react-helmet';
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
    <React.Fragment>
      <Helmet>
        <title>SAC UBBeauty | Não sou cliente</title>
      </Helmet>

      <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.NON_CUSTOMER}
      </Heading>

      <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

      <Heading type={HEADING_STYLES.SECONDARY} colored>
        {HEADERS.WHAT_HAPPENED}
      </Heading>

      <InnerSectionGlobalWrapper>
        {sectionsToRender}
      </InnerSectionGlobalWrapper>

      <Link isBackLink link="/">
        {BACKLINK_LABEL}
      </Link>
    </React.Fragment>
  );
};


export default NonCustomerLanding;
