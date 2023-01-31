import React from 'react';

import Button from 'components/Button/Button.component';

import { LandingButtonWrapper } from './LandingButtons.styles';
import { BUTTON_STYLES, BUTTON_TYPES } from 'constants/button';

import { ROUTES } from "constants/routes";


const landingOptions = [
  {
    label: 'Sou cliente',
    target: ROUTES.CUSTOMER_LANDING,
    buttonStyle: BUTTON_STYLES.PRIMARY,
  },
  {
    label: 'Não sou cliente',
    target: ROUTES.NON_CUSTOMER_LANDING,
    buttonStyle: BUTTON_STYLES.SECONDARY,
  }
];

const LandingButtons = () => (
  <LandingButtonWrapper>
    {
      landingOptions.map((option) => (
        <Button
          type={BUTTON_TYPES.LINK}
          label={option.label}
          link={option.target}
          buttonStyle={option.buttonStyle}
        />)
      )
    }
  </LandingButtonWrapper>
);


export default LandingButtons;
