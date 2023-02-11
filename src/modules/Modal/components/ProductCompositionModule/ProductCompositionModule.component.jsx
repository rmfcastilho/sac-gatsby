import React, { useState } from 'react';
import { PRODUCT_COMPOSITION_ITEMS } from "./constants/ProductComposition.constants";

import { ProductCompositionModuleWrapper } from './ProductCompositionModule.styles';

import ProductCompositionIndex from "./ProductCompositionIndex.component";



const ProductCompositionModule = () => {
  const [activeModule, setActiveModule] = useState('index');

  const resetActiveModule = () => setActiveModule('index');
  const changeActiveModule = (id) => setActiveModule(id);

  return (
    <ProductCompositionModuleWrapper>
      {
        activeModule === 'index'
          ? 'index'
          : 'not index'
      }
    </ProductCompositionModuleWrapper>
  );
}

export default ProductCompositionModule;
