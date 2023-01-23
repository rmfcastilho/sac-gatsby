import React, { useState, useEffect } from "react";

import Button from "components/Button/Button.component";
import { buttonTypes } from "constants/button";


const TimedButton = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
  }, [timeRemaining]);

  return <Button
    type={buttonTypes.LINK}
    isDisabled={timeRemaining > 0}
    buttonStyle={buttonStyles.PRIMARY}
    label={`${timeRemaining}s`}
  />
}