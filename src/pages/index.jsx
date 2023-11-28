import React from 'react';

import Heading from 'components/Heading/Heading.component';
import { HEADING_STYLES } from 'constants/heading';
import { HEADERS } from "constants/headers";

import LandingButtons from 'components/LandingButtons';


const Index = () => (
  <React.Fragment>
    <Heading type={HEADING_STYLES.SECONDARY}>
      {HEADERS.QUICK_SOLUTIONS}
    </Heading>

    <Heading type={HEADING_STYLES.SECONDARY}>
      {HEADERS.NEW_REQUEST}
    </Heading>

    <LandingButtons />
  </React.Fragment>
);


export default Index;
