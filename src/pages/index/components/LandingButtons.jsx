import React from 'react';

import { LandingButtonWrapper } from './LandingButtons.styles';
import {ButtonStyles, ButtonTypes} from 'constants/button';
import Button from 'components/Button/Button.component';

import { Routes } from "constants/routeIds";


const landingOptions = [
  {
    label: 'Sou cliente',
    target: Routes.CLIENT_LANDING,
    buttonStyle: ButtonStyles.PRIMARY,
  },
  {
    label: 'Não sou cliente',
    target: Routes.NON_CLIENT_LANDING,
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
