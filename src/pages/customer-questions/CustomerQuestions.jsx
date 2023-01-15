import React from 'react';

import Button from "components/Button/Button.component";
import { buttonStyles } from 'constants/button';
import { routes } from 'constants/routeIds';
import StandardTemplate from 'templates/StandardTemplate.component';
import { ButtonContentWrappers } from 'global/styles/ButtonContentWrappers.styles';


const customerQuestionsButtons = [
  {
    id: 'sobreProduto',
    label: 'Sobre o produto',
    target: routes.CLIENT_LANDING,
    buttonStyle: buttonStyles.PRIMARY,
  },
  {
    id: 'sobrePedido',
    label: 'Sobre o pedido',
    target: routes.NON_CLIENT_LANDING,
    buttonStyle: buttonStyles.PRIMARY,
  },
  {
    id: 'sobrePagamento',
    label: 'Sobre o pagamento',
    target: routes.NON_CLIENT_LANDING,
    buttonStyle: buttonStyles.PRIMARY,
  },
];

const CustomerQuestions = () => {
  const buttonsToRender = customerQuestionsButtons.map(
    (buttonData) => (
      <Button
        key={buttonData.id}
        isDisabled={false}
        buttonStyle={buttonStyles.PRIMARY}
        label={buttonData.label}
      />
    )
  );

  return (
    <StandardTemplate>
      <ButtonContentWrappers>
        {buttonsToRender}
      </ButtonContentWrappers>
    </StandardTemplate>
  );
};


export default CustomerQuestions;
