import { alerts } from "constants/alerts";
import { ButtonBehaviors } from "constants/button";
import { Routes } from "constants/routeIds";


export const clientButtonData = [
  {
    id: "wrongOrder",
    label: "Meu pedido veio incorreto",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_FORM,
  },
  {
    id: "compliment",
    label: "Quero fazer um elogio",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_FORM,
  },
  {
    id: "suggestion",
    label: "Quero fazer uma sugestão",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_FORM,
  },
  {
    id: "complaint",
    label: "Quero fazer uma reclamação",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_FORM,
  },
  {
    id: "doubt",
    label: "Tenho uma dúvida",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_DOUBTS,
  },
  {
    id: "returnProduct",
    label: "Preciso trocar ou devolver o produto",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "deliveryDeadlines",
    label: "Prazos e condições de entrega",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "orderTracking",
    label: "Quero rastrear meu pedido",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "orderStatus",
    label: "Quero saber o status do meu pedido",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "lateOrder",
    label: "Minha entrega está atrasada",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "changeShippingAddress",
    label: "Quero alterar o endereço de entrega",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_CONTACT,
  },
  {
    id: "cancelledOrder",
    label: "Minha compra foi cancelada",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },
  {
    id: "noFlowToTip",
    label: "O produto não flui para a ponta",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },
  {
    id: "tipOverflow",
    label: "A ponta está soltando muito produto",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },
  {
    id: "productComposition",
    label: "O produto não flui para a ponta",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },
];


export const nonClientButtonData = [
  {
    id: "compliment",
    label: "Quero fazer um elogio",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.NON_CLIENT_FORM,
  },
  {
    id: "suggestion",
    label: "Quero fazer uma sugestão",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.NON_CLIENT_FORM,
  },
  {
    id: "complaint",
    label: "Quero fazer uma reclamação",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.NON_CLIENT_FORM,
  },
  {
    id: "doubt",
    label: "Tenho uma dúvida",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.CLIENT_DOUBTS,
  },
  {
    id: "productComposition",
    label: "O produto não flui para a ponta",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },
  {
    id: "cancelledOrder",
    label: "Minha compra foi cancelada",
    behavior: ButtonBehaviors.REDIRECT,
    behaviorData: Routes.READING_SUGGESTION_NON_CONTACT,
  },

  {
    id: "partnerships",
    label: "Sobre parcerias",
    behavior: ButtonBehaviors.ALERT,
    behaviorData: alerts.PARTNERSHIPS,
  },

  {
    id: "resales",
    label: "Sobre revendas",
    behavior: ButtonBehaviors.ALERT,
    behaviorData: alerts.RESALES,
  },

  {
    id: "exports",
    label: "Envios para o exterior",
    behavior: ButtonBehaviors.ALERT,
    behaviorData: alerts.EXPORTS,
  },
];
