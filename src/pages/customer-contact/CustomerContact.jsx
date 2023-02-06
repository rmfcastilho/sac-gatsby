import React from 'react';
import { useSelector } from "react-redux";

import CustomerContactForm from 'modules/Forms/CustomerContactForm.module';
import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { ROUTES } from "constants/routes";
import { HEADERS } from "constants/headers";
import { BACKLINK_LABEL } from "constants/backlink";
import {FormSubheader} from "global/styles/FormSubheader.styles";
import { FORM_SUBHEADER_TEXT } from "constants/form";
import { contactReasonSelector } from "selectors/contactReason.selectors";

const CustomerContact = () => {
  const contactReason = useSelector(contactReasonSelector);

  return (
    <React.Fragment>
      <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.EXISTING_CUSTOMER}
      </Heading>

      <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL}/>

      <Heading type={HEADING_STYLES.SECONDARY}>
        {contactReason}
      </Heading>

      <FormSubheader>
        {FORM_SUBHEADER_TEXT}
      </FormSubheader>

      <CustomerContactForm/>

      <Link isBackLink link={ROUTES.CUSTOMER_LANDING}>
        {BACKLINK_LABEL}
      </Link>
    </React.Fragment>
  );
}

export default CustomerContact;
