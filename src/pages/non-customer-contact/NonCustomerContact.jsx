import React from 'react';

import NonCustomerForm from 'modules/forms/NonCustomerForm.module';
import StandardTemplate from 'templates/StandardTemplate.component';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';

import { headingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';


const NonCustomerContact = () => (
  <StandardTemplate>
    <Heading type={headingStyles.PRIMARY}>Central de Ajuda</Heading>
    <Heading type={headingStyles.SECONDARY}>Não sou cliente</Heading>

    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <NonCustomerForm />
  </StandardTemplate>
);


export default NonCustomerContact;
