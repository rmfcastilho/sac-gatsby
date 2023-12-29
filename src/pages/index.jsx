import React from 'react';

import Heading from 'components/Heading/Heading.component';
import { HEADING_STYLES } from 'constants/heading';
import { HEADERS } from "constants/headers";

import LandingButtons from 'components/LandingButtons';

import { Helmet } from 'react-helmet';


const Index = () => (
  <React.Fragment>
    <Helmet>
      <title>SAC UBBeauty</title>
    </Helmet>

    <Heading type={HEADING_STYLES.SECONDARY}>
      {HEADERS.QUICK_SOLUTIONS}
    </Heading>

    <LandingButtons />
  </React.Fragment>
);


export default Index;
