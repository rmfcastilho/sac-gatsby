import { alerts } from "constants/alerts";
import {buttonBehaviors, buttonStyles} from "constants/button";
import { routes } from "constants/routeIds";


export const notCustomerInnerSections = [
  {
    id: 'generalQuestions',
    header: 'Dúvidas gerais',
    content: [
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
    ],
  },
  {
    id: 'aboutCompany',
    header: 'Sobre a UB Beauty',
    content: [
      {
        id: "compliment",
        label: "Quero fazer um elogio",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.NON_CUSTOMER_CONTACT,
      },
      {
        id: "suggestion",
        label: "Quero fazer uma sugestão",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.NON_CUSTOMER_CONTACT,
      },
      {
        id: "complaint",
        label: "Quero fazer uma reclamação",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.NON_CUSTOMER_CONTACT,
      },
      {
        id: "partnerships",
        label: "Sobre parcerias",
        behavior: buttonBehaviors.ALERT,
        behaviorData: alerts.PARTNERSHIPS,
      },
      {
        id: "resales",
        label: "Sobre revendas",
        behavior: buttonBehaviors.ALERT,
        behaviorData: alerts.RESALES,
      },

      {
        id: "exports",
        label: "Envios para o exterior",
        behavior: buttonBehaviors.ALERT,
        behaviorData: alerts.EXPORTS,
      },
    ],
  },
  {
    id: 'aboutProduct',
    header: 'Sobre o produto',
    content: [
      {
        id: "productComposition",
        label: "Qual a composição do produto?",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
      },
    ],
  },
  {
    id: 'aboutOrder',
    header: 'Sobre um pedido',
    content: [
      {
        id: "cancelledOrder",
        label: "Minha compra foi cancelada",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
      },
    ],
  },
];