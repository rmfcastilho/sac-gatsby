import React from "react";
import { modalContentTypes } from "constants/modal";

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
  if (contentType === modalContentTypes.PARTNERSHIPS) {
    return <PartnershipsModalContent />;
  }
  if (contentType === modalContentTypes.RESALES) {
    return <ResalesModalContent />;
  }
  if (contentType === modalContentTypes.EXPORTS) {
    return <ExportsModalContent />;
  }
  if (contentType === modalContentTypes.PRODUCT_COMPOSITION) {
    return <ProductCompositionModalContent />;
  }
  if (contentType === modalContentTypes.TIP_OVERFLOW) {
    return <TipOverflowModalContent />;
  }
  if (contentType === modalContentTypes.TIP_UNDERFLOW) {
    return <TipUnderflowModalContent />;
  }
  if (contentType === modalContentTypes.CANCELLED_ORDER) {
    return <CancelledOrderModalContent />;
  }
  if (contentType === modalContentTypes.PRODUCT_DOUBT) {
    return <ProductDoubtModalContent />;
  }
  if (contentType === modalContentTypes.NON_CUSTOMER_PRODUCT_DOUBT) {
    return <NonCustomerProductDoubtModalContent />;
  }
  if (contentType === modalContentTypes.ORDER_DOUBT) {
    return <OrderDoubtModalContent />;
  }

  return null;
};


export default ModalModule;
