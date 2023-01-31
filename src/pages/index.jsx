import React from 'react';

import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import FAQ from "components/FAQ/FAQ.component";

import { HEADING_STYLES } from 'constants/heading';
import { DIVIDER_ORIENTATION } from 'constants/sectionDivider';

import LandingButtons from './index/components/LandingButtons';


const Index = () => (
  <React.Fragment>
    <Heading type={HEADING_STYLES.SECONDARY}>Veja soluções rápidas</Heading>

    <FAQ />

    <SectionDivider type={DIVIDER_ORIENTATION.HORIZONTAL} />

    <Heading type={HEADING_STYLES.SECONDARY}>Ou abra uma nova solicitação</Heading>

    <LandingButtons />
  </React.Fragment>
);


export default Index;
