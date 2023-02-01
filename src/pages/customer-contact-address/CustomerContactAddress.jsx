import React from 'react';

import CustomerContactAddressForm from 'modules/Forms/CustomerContactAddressForm.module';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { ROUTES } from "constants/routes";


const CustomerContactAddress = () => (
  <React.Fragment>
    <Heading type={HEADING_STYLES.SECONDARY}>Sou cliente</Heading>

    <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

    <CustomerContactAddressForm />

    <Link isBackLink link={ROUTES.CUSTOMER_LANDING}>
      Voltar ao menu anterior
    </Link>
  </React.Fragment>
);


export default CustomerContactAddress;
