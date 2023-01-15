import React from 'react';

import CustomerContactForm from 'modules/forms/CustomerContactForm.module';
import StandardTemplate from 'templates/StandardTemplate.component';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';

import { HeadingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';


const CustomerContact = () => (
  <StandardTemplate>
    <Heading type={HeadingStyles.PRIMARY}>Central de Ajuda</Heading>
    <Heading type={HeadingStyles.SECONDARY}>Sou cliente</Heading>

    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <CustomerContactForm />
  </StandardTemplate>
);


export default CustomerContact;
