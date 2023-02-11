import React, { useState } from 'react';
import { PRODUCT_COMPOSITION_ITEMS } from "./constants/ProductComposition.constants";

import { ProductCompositionModuleWrapper } from './styles/ProductCompositionModule.styles';

import ProductCompositionIndex from "./ProductCompositionIndex.component";
import ProductCompositionDetails from "./ProductCompositionDetails.component";


const ProductCompositionModule = () => {
  const [activeModule, setActiveModule] = useState('index');

  const resetActiveModule = () => setActiveModule('index');
  const changeActiveModule = (id) => setActiveModule(id);

  const activeModuleData = (
    activeModule !== 'index' &&
    PRODUCT_COMPOSITION_ITEMS.find((item) => item.id === activeModule)
  );

  return (
    <ProductCompositionModuleWrapper>
      {
        activeModule === 'index'
          ? <ProductCompositionIndex onSelectProduct={changeActiveModule} />
          : <ProductCompositionDetails
              name={activeModuleData.name}
              compositionDetails={activeModuleData.compositionDetails}
              howToUse={activeModuleData.howToUse}
              onBack={resetActiveModule}
            />
      }
    </ProductCompositionModuleWrapper>
  );
}

export default ProductCompositionModule;
