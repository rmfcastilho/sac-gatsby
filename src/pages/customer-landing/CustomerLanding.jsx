import React from 'react';

import { customerButtonData } from 'global/data/buttons/buttons';
import Button from 'components/Button/Button.component';
import { ButtonBehaviors, ButtonStyles } from 'constants/button';

import StandardTemplate from "templates/StandardTemplate.component";
import { ButtonContentWrappers } from 'global/styles/ButtonContentWrappers.styles';


const CustomerLanding = () => {
  const buttonsToRender = customerButtonData.map((buttonData) => (
    <Button
      key={buttonData.id}
      isDisabled={false}
      type={
        buttonData.behavior === ButtonBehaviors.REDIRECT ? "link" : "button"
      }
      label={buttonData.label}
      link={buttonData.behaviorData}
      buttonStyle={ButtonStyles.PRIMARY}
    />
  ));

  return (
    <StandardTemplate>
      <ButtonContentWrappers>
        {buttonsToRender}
      </ButtonContentWrappers>
    </StandardTemplate>
  );
};


export default CustomerLanding;