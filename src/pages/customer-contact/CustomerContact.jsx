import React from 'react';
import { useSelector } from "react-redux";

import CustomerContactForm from 'modules/Forms/CustomerContactForm.module';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { FormWrapper } from 'global/styles/Form.styles';

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { ROUTES } from "constants/routes";
import { HEADERS } from "constants/headers";
import { BACKLINK_LABEL } from "constants/backlink";
import {FormSubheader} from "global/styles/FormSubheader.styles";
import { FORM_SUBHEADER_TEXT } from "constants/form";
import { contactReasonSelector } from "selectors/contactReason.selectors";
import { REQUEST_TYPE_LABELS } from 'constants/requestTypes.constants';
import { Helmet } from 'react-helmet';

const CustomerContact = () => {
  const contactReason = useSelector(contactReasonSelector);

  return (
    <React.Fragment>
      <Helmet>
        <title>SAC UBBeauty | Formulário de Contato | Sou cliente</title>
      </Helmet>

      <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.EXISTING_CUSTOMER}
      </Heading>

      <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL}/>

      <Heading type={HEADING_STYLES.SECONDARY}>
        {REQUEST_TYPE_LABELS[contactReason]}
      </Heading>

      <FormSubheader>
        {FORM_SUBHEADER_TEXT}
      </FormSubheader>

      <FormWrapper>
        <CustomerContactForm />
      </FormWrapper>

      <Link isBackLink link={ROUTES.CUSTOMER_LANDING}>
        {BACKLINK_LABEL}
      </Link>
    </React.Fragment>
  );
}

export default CustomerContact;
