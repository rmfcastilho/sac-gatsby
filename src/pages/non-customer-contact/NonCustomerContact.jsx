import React from 'react';
import { useSelector } from "react-redux";

import NonCustomerForm from 'modules/Forms/NonCustomerForm.module';

import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Link from "components/Link/Link.component";

import { FormWrapper } from 'global/styles/Form.styles';

import { contactReasonSelector } from "selectors/contactReason.selectors";

import { FormSubheader } from "global/styles/FormSubheader.styles";
import { FORM_SUBHEADER_TEXT } from "constants/form";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { ROUTES } from "constants/routes";
import { HEADERS } from "constants/headers";
import { BACKLINK_LABEL } from "constants/backlink";


const NonCustomerContact = () => {
  const contactReason = useSelector(contactReasonSelector);

  return (
    <React.Fragment>
      <Heading type={HEADING_STYLES.SECONDARY}>
          {HEADERS.NON_CUSTOMER}
      </Heading>

      <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL}/>

      <Heading type={HEADING_STYLES.SECONDARY}>
        {contactReason}
      </Heading>

      <FormSubheader>
          {FORM_SUBHEADER_TEXT}
      </FormSubheader>

      <FormWrapper>
        <NonCustomerForm/>
      </FormWrapper>

      <Link isBackLink link={ROUTES.NON_CUSTOMER_LANDING}>
          {BACKLINK_LABEL}
      </Link>
    </React.Fragment>
  )
};


export default NonCustomerContact;
