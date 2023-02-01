import React, { useState, useEffect } from "react";

import Button from "components/Button/Button.component";
import { BUTTON_TYPES } from "constants/button";


const TimedButton = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
  }, [timeRemaining]);

  return <Button
    type={BUTTON_TYPES.LINK}
    isDisabled={timeRemaining > 0}
    buttonStyle={BUTTON_STYLES.PRIMARY}
    label={`${timeRemaining}s`}
  />
}