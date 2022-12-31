import React from 'react';

import StandardTemplate from '../templates/StandardTemplate.component';

import Heading from '../components/Heading/Heading.component';
import SectionDivider from '../components/SectionDivider/SectionDivider.component';
import { dividerOrientation } from '../constants/sectionDivider';


const landingOptions = [
  {
    label: 'Sou cliente',

  }
];

const LandingPage = () => (
  <StandardTemplate>
    <Heading>Central de Ajuda</Heading>
    <SectionDivider type={dividerOrientation.HORIZONTAL} />

  </StandardTemplate>
);


export default LandingPage;
