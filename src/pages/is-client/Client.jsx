import React from 'react';

import { clientButtonData } from 'global/data/buttons/buttons';
import Button from 'components/Button/Button.component';
import { ButtonBehaviors  } from 'constants/button';

import StandardTemplate from "templates/StandardTemplate.component";


const Client = () => {
  const buttonsToRender = clientButtonData.map((buttonData) => (
    <Button
      key={buttonData.id}
      isDisabled={false}
      type={
        buttonData.behavior === ButtonBehaviors.REDIRECT ? "link" : "button"
      }
      label={buttonData.label}
      link={buttonData.behaviorData}
    />
  ));

  return <StandardTemplate>{buttonsToRender}</StandardTemplate>;
};


export default Client;
