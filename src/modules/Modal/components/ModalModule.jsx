import React from "react";
import { MODAL_CONTENT_TYPES } from "constants/modal";

import CancelledOrderModalContent from "modules/Modal/modalSubmodules/CancelledOrderModalContent";
import ChangeShippingAddressModalContent from "modules/Modal/modalSubmodules/ChangeShippingAddressModalContent";
import DeliveryDeadlinesModalContent from "modules/Modal/modalSubmodules/DeliveryDeadlinesModalContent";
import ExportsModalContent from "modules/Modal/modalSubmodules/ExportsModalContent";
import LateOrderModalContent from "modules/Modal/modalSubmodules/LateOrderModalContent";
import NonCustomerProductDoubtModalContent from "modules/Modal/modalSubmodules/NonCustomerProductDoubtModalContent";
import OrderDoubtModalContent from "modules/Modal/modalSubmodules/OrderDoubtModalContent";
import OrderStatusModalContent from "modules/Modal/modalSubmodules/OrderStatusModalContent";
import OrderTrackingModalContent from "modules/Modal/modalSubmodules/OrderTrackingModalContent";
import PartnershipsModalContent from "modules/Modal/modalSubmodules/PartnershipsModalContent";
import ProductCompositionModalContent from "modules/Modal/modalSubmodules/ProductCompositionModalContent";
import ProductDoubtModalContent from "modules/Modal/modalSubmodules/ProductDoubtModalContent";
import ProductReturnModalContent from "modules/Modal/modalSubmodules/ProductReturnModalContent";
import ResalesModalContent from "modules/Modal/modalSubmodules/ResalesModalContent";
import TipUnderflowModalContent from "modules/Modal/modalSubmodules/TipUnderflowModalContent";
import TipOverflowModalContent from "modules/Modal/modalSubmodules/TipOverflowModalContent";


const ModalModule = ({ contentType }) => {
  if (contentType === MODAL_CONTENT_TYPES.ORDER_STATUS) {
    return <OrderStatusModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.ORDER_TRACKING) {
    return <OrderTrackingModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.DELIVERY_DEADLINES) {
    return <DeliveryDeadlinesModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.LATE_ORDER) {
    return <LateOrderModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.PRODUCT_RETURN) {
    return <ProductReturnModalContent />;
  }
  if (contentType === MODAL_CONTENT_TYPES.CHANGE_SHIPPING_ADDRESS) {
    return <ChangeShippingAddressModalContent />;
  }
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
