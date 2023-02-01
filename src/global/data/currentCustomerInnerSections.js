import { BUTTON_BEHAVIORS } from "constants/button";
import { ROUTES } from "constants/routes";
import { MODAL_CONTENT_TYPES } from "constants/modal";


export const currentCustomerInnerSections = [
  {
    id: 'generalQuestions',
    header: 'Dúvidas gerais',
    content: [
      {
        id: 'sobreProduto',
        label: 'Sobre o produto',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PRODUCT_DOUBT,
      },
      {
        id: 'sobrePedido',
        label: 'Sobre o pedido',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_DOUBT,
      },
      {
        id: 'sobrePagamento',
        label: 'Sobre o pagamento',
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
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
      },
      {
        id: "suggestion",
        label: "Quero fazer uma sugestão",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
      },
      {
        id: "complaint",
        label: "Quero fazer uma reclamação",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
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
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.CUSTOMER_CONTACT,
      },
      {
        id: "returnProduct",
        label: "Preciso trocar ou devolver o produto",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PRODUCT_RETURN,
      },
      {
        id: "deliveryDeadlines",
        label: "Prazos e condições de entrega",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.DELIVERY_DEADLINES,
      },
      {
        id: "orderTracking",
        label: "Quero rastrear meu pedido",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_TRACKING,
      },
      {
        id: "orderStatus",
        label: "Quero saber o status do meu pedido",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.ORDER_STATUS,
      },
      {
        id: "lateOrder",
        label: "Minha entrega está atrasada",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.LATE_ORDER,
      },
      {
        id: "changeShippingAddress",
        label: "Quero alterar o endereço de entrega",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.CHANGE_SHIPPING_ADDRESS,
      },
      {
        id: "cancelledOrder",
        label: "Minha compra foi cancelada",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.CANCELLED_ORDER,
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
        id: "noFlowToTip",
        label: "O produto não flui para a ponta",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.TIP_UNDERFLOW,
      },
      {
        id: "tipOverflow",
        label: "A ponta está soltando muito produto",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.TIP_OVERFLOW,
      },
    ],
  },
];
