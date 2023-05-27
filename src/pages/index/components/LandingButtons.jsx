import React from 'react';
import { useDispatch } from "react-redux";

import { setIsCustomer } from "slices/isCustomer.slice";

import Button from 'components/Button/Button.component';

import { LandingButtonWrapper } from './LandingButtons.styles';

import { BUTTON_TYPES } from 'constants/button';
import { LANDING_PAGE_BUTTONS } from "constants/landingPageButtons";


const LandingButtons = () => {
  const dispatch = useDispatch();

  const buttons = LANDING_PAGE_BUTTONS.map((option) => {
    const { isCustomer, label, target, buttonStyle } = option;

    const handleClick = () => dispatch(
      setIsCustomer(isCustomer)
    );

    return (
      <Button
        type={BUTTON_TYPES.LINK}
        label={label}
        link={target}
        buttonStyle={buttonStyle}
        onClick={handleClick}
      />
    )
  });

  return (
    <LandingButtonWrapper>
      {buttons}
    </LandingButtonWrapper>
  )
};


export default LandingButtons;
