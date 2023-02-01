import { MODAL_CONTENT_TYPES } from "constants/modal";
import { modalTypes } from "modules/Modal/constants/ModalTypes";


const modalContentResources = {
  [MODAL_CONTENT_TYPES.PRODUCT_DOUBT]: 'https://unhabonita.com.br/guia-primecuticle/',

}


export const modalTextContent = {
  [MODAL_CONTENT_TYPES.PRODUCT_DOUBT]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: 'Temos uma página com todas as clarificações sobre o produto!',
    textualClarification: 'Se ainda não leu a página sobre o produto, CLIQUE AQUI.',
    resource: modalContentResources[MODAL_CONTENT_TYPES.PRODUCT_DOUBT],
  }
};
