import { BUTTON_BEHAVIORS } from "constants/button";
import { ROUTES } from "constants/routes";
import { MODAL_CONTENT_TYPES } from "constants/modal";
import { REQUEST_TYPES } from 'constants/requestTypes.constants';

export const currentCustomerInnerSections = [
  {
    id: 'generalQuestions',
    header: 'Dúvidas gerais',
    content: [
      {
        id: 'sobreProduto',
        label: 'Dúvida sobre o produto',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PRODUCT_DOUBT,
        contactType: REQUEST_TYPES.PRODUCT_DOUBT,
      },
      {
        id: 'sobrePedido',
        label: 'Dúvida sobre o pedido',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_DOUBT,
        contactType: REQUEST_TYPES.ORDER_DOUBT,
      },
      {
        id: 'sobrePagamento',
        label: 'Dúvida sobre o pagamento',
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.PAYMENT_DOUBT,
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
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.COMPLIMENT,
      },
      {
        id: "suggestion",
        label: "Quero fazer uma sugestão",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.SUGGESTION,
      },
      {
        id: "complaint",
        label: "Quero fazer uma reclamação",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.COMPLAINT,
      },
    ],
  },
  {
    id: 'aboutOrder',
    header: 'Sobre um pedido',
    content: [
      {
        id: "wrongOrder",
        label: "Minha compra veio incorreta",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.WRONG_PRODUCT,
      },
      {
        id: "returnProduct",
        label: "Preciso trocar ou devolver o produto",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PRODUCT_RETURN,
        contactType: REQUEST_TYPES.PRODUCT_RETURN,
      },
      {
        id: "deliveryDeadlines",
        label: "Prazos e condições de entrega",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.DELIVERY_DEADLINES,
        contactType: REQUEST_TYPES.DELIVERY_DEADLINES,
      },
      {
        id: "orderTracking",
        label: "Quero rastrear meu pedido",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_TRACKING,
        contactType: REQUEST_TYPES.ORDER_TRACKING,
      },
      {
        id: "orderStatus",
        label: "Quero saber o status do meu pedido",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_STATUS,
        contactType: REQUEST_TYPES.ORDER_STATUS,
      },
      {
        id: "lateOrder",
        label: "Minha entrega está atrasada",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.LATE_ORDER,
        contactType: REQUEST_TYPES.LATE_DELIVERY,
      },
      {
        id: "changeShippingAddress",
        label: "Quero alterar o endereço de entrega",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.CHANGE_SHIPPING_ADDRESS,
        contactType: REQUEST_TYPES.ADDRESS_CHANGE,
      },
      {
        id: "cancelledOrder",
        label: "Minha compra foi cancelada",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.CANCELLED_ORDER,
        contactType: REQUEST_TYPES.CANCELLED_ORDER,
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
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PRODUCT_COMPOSITION,
      },
      {
        id: "tipOverflow",
        label: "A ponta está soltando NENHUM, POUCO ou MUITO produto",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.TIP_OVERFLOW,
        contactType: REQUEST_TYPES.TIP_OVERFLOW,
      },
    ],
  },
];
