import React from 'react';

import CustomerContactForm from 'modules/forms/CustomerContactForm.module';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';

import { headingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';
import Link from "components/Link/Link.component";
import { routes } from "constants/routeIds";


const CustomerContact = () => (
  <React.Fragment>
    <Heading type={headingStyles.PRIMARY}>Central de Ajuda</Heading>
    <Heading type={headingStyles.SECONDARY}>Sou cliente</Heading>

    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <CustomerContactForm />

    <Link isBackLink link={routes.CUSTOMER_LANDING}>
      Voltar ao menu anterior
    </Link>
  </React.Fragment>
);


export default CustomerContact;
