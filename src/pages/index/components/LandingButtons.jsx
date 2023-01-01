import React from 'react';

import { LandingButtonWrapper } from './LandingButtons.styles';
import Client from 'pages/client';
import {ButtonStyles, ButtonTypes} from 'constants/button';
import NonClient from 'pages/non-client';
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

const LandingButtons = () => (
  <LandingButtonWrapper>
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
  </LandingButtonWrapper>
);


export default LandingButtons;
