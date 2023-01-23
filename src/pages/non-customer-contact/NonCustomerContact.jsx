import React from 'react';

import NonCustomerForm from 'modules/forms/NonCustomerForm.module';
import StandardTemplate from 'templates/StandardTemplate.component';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { headingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';
import { routes } from "constants/routeIds";


const NonCustomerContact = () => (
  <StandardTemplate>
    <Heading type={headingStyles.PRIMARY}>Central de Ajuda</Heading>
    <Heading type={headingStyles.SECONDARY}>Não sou cliente</Heading>

    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <NonCustomerForm />

    <Link isBackLink link={routes.NON_CUSTOMER_LANDING}>
      Voltar ao menu anterior
    </Link>
  </StandardTemplate>
);


export default NonCustomerContact;
