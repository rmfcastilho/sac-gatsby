import React from 'react';

import StandardTemplate from 'templates/StandardTemplate.component';

import Heading from 'components/Heading/Heading.component';
import SectionDivider from 'components/SectionDivider/SectionDivider.component';
import Client from 'pages/Client';
import NonClient from 'pages/NonClient';

import { ButtonTypes, ButtonStyles } from 'constants/button';
import { dividerOrientation } from 'constants/sectionDivider';

import Button from 'components/Button/Button.component';


const landingOptions = [
  {
    label: 'Sou cliente',
    target: Client,
    buttonStyle: ButtonStyles.PRIMARY,
  },
  {
    label: 'Não sou cliente',
    target: NonClient,
    buttonStyle: ButtonStyles.SECONDARY,
  }
];

const LandingPage = () => (
  <StandardTemplate>
    <Heading>Central de Ajuda</Heading>
    <SectionDivider type={dividerOrientation.HORIZONTAL} />
    {
      landingOptions.map((option) => (
        <Button
          type={ButtonTypes.LINK}
          label={option.label}
          link={option.target}
          buttonStyle={option.buttonStyle}
        />)
      )
    }
  </StandardTemplate>
);


export default LandingPage;
