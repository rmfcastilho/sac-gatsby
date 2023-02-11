import React from 'react';

import {
  ProductCompositionModuleWrapper,
  ProductCompositionItemWrapper,
  ProductCompositionItemName,
  ProductCompositionItemImageWrapper,
} from "./styles/ProductCompositionModule.styles";

import { PRODUCT_COMPOSITION_ITEMS } from "modules/Modal/components/ProductCompositionModule/constants/ProductComposition.constants";

import Heading from "components/Heading/Heading.component";
import { HEADING_STYLES } from "constants/heading";


const ProductCompositionIndex = ({ onSelectProduct }) => {

  return (
    <ProductCompositionModuleWrapper>
      <Heading style={HEADING_STYLES.SECONDARY}>Composição dos produtos</Heading>

      {
        PRODUCT_COMPOSITION_ITEMS.map((item) => (
          <ProductCompositionItemWrapper key={item.id}>
            <ProductCompositionItemImageWrapper>
              <img src={item.image} alt={item.name} />
            </ProductCompositionItemImageWrapper>

            <ProductCompositionItemName>
              {item.name}
            </ProductCompositionItemName>
          </ProductCompositionItemWrapper>
        ))
      }
    </ProductCompositionModuleWrapper>
  );
};


export default ProductCompositionIndex;
