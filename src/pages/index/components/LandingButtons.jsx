import React from 'react';

import { LandingButtonWrapper } from './LandingButtons.styles';
import { buttonStyles, buttonTypes } from 'constants/button';
import Button from 'components/Button/Button.component';

import { routes } from "constants/routeIds";


const landingOptions = [
  {
    label: 'Sou cliente',
    target: routes.CLIENT_LANDING,
    buttonStyle: buttonStyles.PRIMARY,
  },
  {
    label: 'Não sou cliente',
    target: routes.NON_CLIENT_LANDING,
    buttonStyle: buttonStyles.SECONDARY,
  }
];

const LandingButtons = () => (
  <LandingButtonWrapper>
    {
      landingOptions.map((option) => (
        <Button
          type={buttonTypes.LINK}
          label={option.label}
          link={option.target}
          buttonStyle={option.buttonStyle}
        />)
      )
    }
  </LandingButtonWrapper>
);


export default LandingButtons;
