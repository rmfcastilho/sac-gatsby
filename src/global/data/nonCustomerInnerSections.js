import { BUTTON_BEHAVIORS } from "constants/button";
import { ROUTES } from "constants/routes";
import { MODAL_CONTENT_TYPES } from "constants/modal";
import { REQUEST_TYPES } from 'constants/requestTypes.constants';

export const nonCustomerInnerSections = [
  {
    id: 'generalQuestions',
    header: 'Dúvidas gerais',
    content: [
      {
        id: 'sobreProduto',
        label: 'Dúvida sobre o produto',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.NON_CUSTOMER_PRODUCT_DOUBT,
        contactType: REQUEST_TYPES.PRODUCT_DOUBT,
      },
      {
        id: 'paymentMethods',
        label: 'Quais os métodos de pagamento aceitos?',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PAYMENT_METHODS,
      },
      {
        id: 'cancelledTransaction',
        label: 'Minha transação foi cancelada',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.CANCELLED_TRANSACTION,
        contactType: REQUEST_TYPES.CANCELLED_TRANSACTION,
      },
      {
        id: 'coupon',
        label: 'Tem cupom de desconto para primeira compra?',
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.COUPON,
      }
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
        behaviorData: ROUTES.NON_CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.COMPLIMENT,
      },
      {
        id: "suggestion",
        label: "Quero fazer uma sugestão",
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.NON_CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.SUGGESTION,
      },
      {
        id: "partnerships",
        label: "Sobre parcerias",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.PARTNERSHIPS,
      },
      {
        id: "resales",
        label: "Sobre revendas",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.RESALES,
      },

      {
        id: "exports",
        label: "Envios para o exterior",
        behavior: BUTTON_BEHAVIORS.ALERT,
        behaviorData: MODAL_CONTENT_TYPES.EXPORTS,
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
    ],
  },
  {
    id: 'aboutOrder',
    header: 'Sobre um pedido',
    content: [
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
    id: 'other',
    header: 'Outras questões',
    content: [
      {
        id: 'noneOfTheAbove',
        label: 'Nenhum dos itens acima corresponde à minha dúvida',
        behavior: BUTTON_BEHAVIORS.REDIRECT,
        behaviorData: ROUTES.NON_CUSTOMER_CONTACT,
        contactType: REQUEST_TYPES.NOTA,
      }
    ]
  },
];