import React from 'react';

import StandardTemplate from 'templates/StandardTemplate.component';

import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import { HeadingStyles } from 'constants/heading';
import { dividerOrientation } from 'constants/sectionDivider';

import LandingButtons from './index/components/LandingButtons';


const Index = () => (
  <StandardTemplate>
    <Heading type={HeadingStyles.PRIMARY}>Central de Ajuda</Heading>
    <SectionDivider type={dividerOrientation.HORIZONTAL} />

    <Heading type={HeadingStyles.SECONDARY}>Ou abra uma nova solicitação</Heading>
    <LandingButtons />
  </StandardTemplate>
);


export default Index;
