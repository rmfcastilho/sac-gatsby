import { modalTypes } from "modules/Modal/constants/ModalTypes";

import { MODAL_CONTENT_TYPES } from "constants/modal";
import { RESOURCE_URLS } from "constants/resourceUrls";
import { ROUTES } from "constants/routes";

const UNREAD_PAGE_CTA = 'CLIQUE AQUI se ainda não leu a página';
const THANK_YOU_HEADER = 'Agradecemos o interesse';
const HEADER_STANDARD_BEGINNING = 'Temos uma página com todas as explicações sobre';

export const modalTextContent = {
  [MODAL_CONTENT_TYPES.PARTNERSHIPS]: {
    type: modalTypes.SIMPLE_ALERT,
    header: THANK_YOU_HEADER,
    textualClarification: 'Mas não trabalhamos com parcerias.',
    resource: null,
    targetRoute: null,
    ctaContent: '',
  },
  [MODAL_CONTENT_TYPES.PAYMENT_METHODS]: {
    type: modalTypes.SIMPLE_ALERT,
    header: `Métodos de pagamento aceitos`,
    textualClarification: 'São aceitos exclusivamente pagamentos por cartão de crédito ou PIX.',
    resource: null,
    targetRoute: null,
    ctaContent: '',
  },
  [MODAL_CONTENT_TYPES.RESALES]: {
    type: modalTypes.SIMPLE_ALERT,
    header: THANK_YOU_HEADER,
    textualClarification: 'Mas não trabalhamos com revendas.',
    resource: null,
    targetRoute: null,
    ctaContent: '',
  },
  [MODAL_CONTENT_TYPES.EXPORTS]: {
    type: modalTypes.SIMPLE_ALERT,
    header: THANK_YOU_HEADER,
    textualClarification: 'Mas atendemos apenas o território nacional.',
    resource: null,
    targetRoute: null,
    ctaContent: '',
  },
  [MODAL_CONTENT_TYPES.PRODUCT_COMPOSITION]: {
    type: modalTypes.SIMPLE_ALERT,
    header: `${HEADER_STANDARD_BEGINNING} o produto!`,
    textualClarification: '',
    resource: RESOURCE_URLS.PRODUCT_COMPOSITION,
    targetRoute: null,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.LOOSE_TIP]: {
    type: modalTypes.SIMPLE_ALERT,
    header: `${HEADER_STANDARD_BEGINNING} a ponta!`,
    textualClarification: '',
    resource: RESOURCE_URLS.LOOSE_TIP,
    targetRoute: null,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.TIP_OVERFLOW]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} a ponta!`,
    textualClarification: '',
    resource: RESOURCE_URLS.TIP_QUERIES,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.TIP_UNDERFLOW]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} a ponta!`,
    textualClarification: '',
    resource: RESOURCE_URLS.TIP_QUERIES,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.CANCELLED_ORDER]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} cancelamentos`,
    textualClarification: '',
    resource: RESOURCE_URLS.CANCELLED_TRANSACTION,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.PRODUCT_DOUBT]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} o produto!`,
    textualClarification: '',
    resource: RESOURCE_URLS.PRODUCT_QUERIES,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.NON_CUSTOMER_PRODUCT_DOUBT]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} o produto!`,
    textualClarification: '',
    resource: RESOURCE_URLS.PRODUCT_QUERIES,
    targetRoute: ROUTES.NON_CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.ORDER_DOUBT]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} pedidos!`,
    textualClarification: '',
    resource: RESOURCE_URLS.ORDER_QUERIES,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.PRODUCT_RETURN]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} trocas de devoluções!`,
    textualClarification: '',
    resource: RESOURCE_URLS.RETURNS,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.DELIVERY_DEADLINES]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} prazos e condições de entrega!`,
    textualClarification: '',
    resource: RESOURCE_URLS.DELIVERY,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.ORDER_TRACKING]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} rastreamento!`,
    textualClarification: '',
    resource: RESOURCE_URLS.TRACKING,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.ORDER_STATUS]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} status do pedido!`,
    textualClarification: '',
    resource: RESOURCE_URLS.TRACKING,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.LATE_ORDER]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} atrasos na entrega!`,
    textualClarification: '',
    resource: RESOURCE_URLS.DELIVERY,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.CANCELLED_TRANSACTION]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: `${HEADER_STANDARD_BEGINNING} cancelamentos`,
    textualClarification: '',
    resource: RESOURCE_URLS.CANCELLED_TRANSACTION,
    targetRoute: ROUTES.CUSTOMER_CONTACT,
    ctaContent: UNREAD_PAGE_CTA,
  },
  [MODAL_CONTENT_TYPES.CHANGE_SHIPPING_ADDRESS]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: 'Somente podemos trocar o endereço de entrega se o pedido ainda não tiver sido enviado.',
    textualClarification: `
      SOMENTE se o status do seu pedido for "Pago" ou "Emitindo Nota Fiscal", 
      você pode prosseguir`,
    resource: RESOURCE_URLS.TRACKING,
    targetRoute: ROUTES.CUSTOMER_CONTACT_ADDRESS,
    ctaContent: 'CLIQUE AQUI PARA VER O STATUS DO PEDIDO',
    timedButtonLabel: 'Sim, o status de meu pedido é PAGO ou EMITINDO NOTA FISCAL, ' +
      'portanto, desejo alterar meu endereço de entrega.',
  },
  [MODAL_CONTENT_TYPES.CHANGE_ORDER]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: 'Somente podemos alterar o pedido se ele ainda não tiver sido enviado.',
    textualClarification: `
      SOMENTE se o status do seu pedido for "Pago" ou "Emitindo Nota Fiscal", 
      você pode prosseguir`,
    resource: RESOURCE_URLS.TRACKING,
    targetRoute: ROUTES.CUSTOMER_CONTACT_ADDRESS,
    ctaContent: 'CLIQUE AQUI PARA VER O STATUS DO PEDIDO',
    timedButtonLabel: 'Sim, o status de meu pedido é PAGO ou EMITINDO NOTA FISCAL, ' +
      'portanto, desejo alterar meu pedido.',
  }
};
