import React from "react";

import { ModalContentWrapper } from "./styles/modalContentWrapper.styles";
import InnerModalContent from "../components/InnerModalContent.component";

import { MODAL_CONTENT_TYPES } from "constants/modal";
import { modalTextContent } from "components/Modal/constants/ModalTextContent";


const ProductDoubtModalContent = () => {
  const targetContent = modalTextContent[MODAL_CONTENT_TYPES.PRODUCT_DOUBT];

  return (
    <ModalContentWrapper>
      <InnerModalContent
        {...targetContent}
      >
        :)
      </InnerModalContent>
    </ModalContentWrapper>
  )
};


export default ProductDoubtModalContent;
