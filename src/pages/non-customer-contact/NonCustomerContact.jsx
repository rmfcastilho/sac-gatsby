import React from 'react';

import NonCustomerForm from 'modules/Forms/NonCustomerForm.module';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { ROUTES } from "constants/routes";


const NonCustomerContact = () => (
  <React.Fragment>
    <Heading type={HEADING_STYLES.SECONDARY}>Não sou cliente</Heading>

    <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

    <NonCustomerForm />

    <Link isBackLink link={ROUTES.NON_CUSTOMER_LANDING}>
      Voltar ao menu anterior
    </Link>
  </React.Fragment>
);


export default NonCustomerContact;
