import { alerts } from "constants/alerts";
import { buttonBehaviors } from "constants/button";
import { routes } from "constants/routeIds";


export const customerButtonData = [
  {
    id: "wrongOrder",
    label: "Meu pedido veio incorreto",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_CONTACT,
  },
  {
    id: "compliment",
    label: "Quero fazer um elogio",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_CONTACT,
  },
  {
    id: "suggestion",
    label: "Quero fazer uma sugestão",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_CONTACT,
  },
  {
    id: "complaint",
    label: "Quero fazer uma reclamação",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_CONTACT,
  },
  {
    id: "doubt",
    label: "Tenho uma dúvida",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_QUESTIONS,
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
];


export const nonCustomerButtonData = [
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
    id: "doubt",
    label: "Tenho uma dúvida",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.CUSTOMER_QUESTIONS,
  },
  {
    id: "productComposition",
    label: "O produto não flui para a ponta",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
  },
  {
    id: "cancelledOrder",
    label: "Minha compra foi cancelada",
    behavior: buttonBehaviors.REDIRECT,
    behaviorData: routes.READING_SUGGESTION_NON_CONTACT,
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
];
