import React from 'react';

import Button from "components/Button/Button.component";
import { ButtonStyles } from 'constants/button';
import { Routes } from 'constants/routeIds';
import StandardTemplate from 'templates/StandardTemplate.component';
import { ButtonContentWrappers } from 'global/styles/ButtonContentWrappers.styles';


const customerQuestionsButtons = [
  {
    id: 'sobreProduto',
    label: 'Sobre o produto',
    target: Routes.CLIENT_LANDING,
    buttonStyle: ButtonStyles.PRIMARY,
  },
  {
    id: 'sobrePedido',
    label: 'Sobre o pedido',
    target: Routes.NON_CLIENT_LANDING,
    buttonStyle: ButtonStyles.PRIMARY,
  },
  {
    id: 'sobrePagamento',
    label: 'Sobre o pagamento',
    target: Routes.NON_CLIENT_LANDING,
    buttonStyle: ButtonStyles.PRIMARY,
  },
];

const CustomerQuestions = () => {
  const buttonsToRender = customerQuestionsButtons.map(
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
    <StandardTemplate>
      <ButtonContentWrappers>
        {buttonsToRender}
      </ButtonContentWrappers>
    </StandardTemplate>
  );
};


export default CustomerQuestions;
