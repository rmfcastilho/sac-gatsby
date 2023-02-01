import React from 'react';

import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Faq from "components/Faq/Faq.component";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';
import { HEADERS } from "constants/headers";

import LandingButtons from './index/components/LandingButtons';


const Index = () => (
  <React.Fragment>
    <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.QUICK_SOLUTIONS}
    </Heading>

    <Faq />

    <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

    <Heading type={HEADING_STYLES.SECONDARY}>
        {HEADERS.NEW_REQUEST}
    </Heading>

    <LandingButtons />
  </React.Fragment>
);


export default Index;
