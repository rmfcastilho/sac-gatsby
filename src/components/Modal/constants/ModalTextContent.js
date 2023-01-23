import { modalContentTypes } from "constants/modal";
import { modalTypes } from "./ModalTypes";


const modalContentResources = {
  [modalContentTypes.PRODUCT_DOUBT]: 'https://unhabonita.com.br/guia-primecuticle/',

}


export const modalTextContent = {
  [modalContentTypes.PRODUCT_DOUBT]: {
    type: modalTypes.DELAYED_RESOURCE,
    header: 'Temos uma página com todas as clarificações sobre o produto!',
    textualClarification: 'Se ainda não leu a página sobre o produto, CLIQUE AQUI.',
    resource: modalContentResources[modalContentTypes.PRODUCT_DOUBT],
  }
};
