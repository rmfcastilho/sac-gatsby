import React from 'react';

import { clientButtonData } from "global/data/buttons/buttons";
import Button from "components/Button/Button.component";
import { ButtonStyles } from 'constants/button';


const ClientDoubts = () => {
  const buttonsToRender = clientButtonData.map(
    (buttonData) => (
      <Button
        key={buttonData.id}
        isDisabled={false}
        buttonStyle={ButtonStyles.PRIMARY}
        label={buttonData.label}
      />
    )
  );

  return (
    <>
      {buttonsToRender}
    </>
  );
};


export default ClientDoubts;
