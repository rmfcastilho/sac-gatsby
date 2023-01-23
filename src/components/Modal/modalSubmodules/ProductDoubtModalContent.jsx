import React from "react";

import { ModalContentWrapper } from "./styles/modalContentWrapper.styles";
import InnerModalContent from "../components/InnerModalContent.component";

import { modalContentTypes } from "constants/modal";
import { modalTextContent } from "components/Modal/constants/ModalTextContent";


const ProductDoubtModalContent = () => {
  const targetContent = modalTextContent[modalContentTypes.PRODUCT_DOUBT];

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
