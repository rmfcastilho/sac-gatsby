import { alerts } from "constants/alerts";
import { buttonBehaviors, buttonStyles } from "constants/button";
import { routes } from "constants/routes";


export const currentCustomerInnerSections = [
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
    ],
  },
  {
    id: 'aboutOrder',
    header: 'Sobre um pedido',
    content: [
      {
        id: "wrongOrder",
        label: "Meu pedido veio incorreto",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.CUSTOMER_CONTACT,
      },
      {
        id: "returnProduct",
        label: "Preciso trocar ou devolver o produto",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "deliveryDeadlines",
        label: "Prazos e condições de entrega",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "orderTracking",
        label: "Quero rastrear meu pedido",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "orderStatus",
        label: "Quero saber o status do meu pedido",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "lateOrder",
        label: "Minha entrega está atrasada",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "changeShippingAddress",
        label: "Quero alterar o endereço de entrega",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_CONTACT,
      },
      {
        id: "cancelledOrder",
        label: "Minha compra foi cancelada",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
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
      {
        id: "noFlowToTip",
        label: "O produto não flui para a ponta",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
      },
      {
        id: "tipOverflow",
        label: "A ponta está soltando muito produto",
        behavior: buttonBehaviors.REDIRECT,
        behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
      },
    ],
  },
];
