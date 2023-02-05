import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "components/Button/Button.component";
import { BUTTON_STYLES, BUTTON_TYPES } from "constants/button";
import { toggleModal } from "slices/modal.slice";


const TimedButton = ({ targetRoute }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleModal());

  useEffect(() => {
    timeRemaining > 0 && setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
  }, [timeRemaining]);

  const buttonLabel = timeRemaining > 0
    ? `${timeRemaining}s`
    : 'Li a página, mas meu problema persiste';

  return <Button
    type={BUTTON_TYPES.LINK}
    link={targetRoute}
    isDisabled={timeRemaining > 0}
    buttonStyle={BUTTON_STYLES.PRIMARY}
    label={buttonLabel}
    onClick={handleClick}
  />
}


export default TimedButton;
