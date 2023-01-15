import React from 'react';

import CustomerContactAddressForm from 'modules/forms/CustomerContactAddressForm';
import StandardTemplate from 'templates/StandardTemplate.component';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';

import { headingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';


const CustomerContactAddress = () => (
  <StandardTemplate>
    <Heading type={headingStyles.PRIMARY}>Central de Ajuda</Heading>
    <Heading type={headingStyles.SECONDARY}>Sou cliente</Heading>

    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <CustomerContactAddressForm />
  </StandardTemplate>
);


export default CustomerContactAddress;
