import React from 'react';

import StandardTemplate from "templates/StandardTemplate.component";
import { ButtonContentWrappers } from 'global/styles/ButtonContentWrappers.styles';

import InnerSection from "components/InnerSection/InnerSection.component";
import { currentCustomerInnerSections } from "global/data/buttons/currentCustomerInnerSections";


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
      <ButtonContentWrappers>
        {sectionsToRender}
      </ButtonContentWrappers>
    </StandardTemplate>
  );
};


export default CustomerLanding;
