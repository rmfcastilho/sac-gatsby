import React from "react";
import { MODAL_CONTENT_TYPES } from "constants/modal";

import PartnershipsModalContent from "../modalSubmodules/PartnershipsModalContent";
import ResalesModalContent from "../modalSubmodules/ResalesModalContent";
import ExportsModalContent from "../modalSubmodules/ExportsModalContent";
import ProductDoubtModalContent from "../modalSubmodules/ProductDoubtModalContent";
import TipOverflowModalContent from "../modalSubmodules/TipOverflowModalContent";
import TipUnderflowModalContent from "../modalSubmodules/TipUnderflowModalContent";
import CancelledOrderModalContent from "../modalSubmodules/CancelledOrderModalContent";
import ProductCompositionModalContent from "../modalSubmodules/ProductCompositionModalContent";
import OrderDoubtModalContent from "../modalSubmodules/OrderDoubtModalContent";
import NonCustomerProductDoubtModalContent from "../modalSubmodules/NonCustomerProductDoubtModalContent";


const ModalModule = ({ contentType }) => {
  if (contentType === MODAL_CONTENT_TYPES.PARTNERSHIPS) {
    return <PartnershipsModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.RESALES) {
    return <ResalesModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.EXPORTS) {
    return <ExportsModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.PRODUCT_COMPOSITION) {
    return <ProductCompositionModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.TIP_OVERFLOW) {
    return <TipOverflowModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.TIP_UNDERFLOW) {
    return <TipUnderflowModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.CANCELLED_ORDER) {
    return <CancelledOrderModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.PRODUCT_DOUBT) {
    return <ProductDoubtModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.NON_CUSTOMER_PRODUCT_DOUBT) {
    return <NonCustomerProductDoubtModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.ORDER_DOUBT) {
    return <OrderDoubtModalContent />;
  }

  return null;
};


export default ModalModule;
