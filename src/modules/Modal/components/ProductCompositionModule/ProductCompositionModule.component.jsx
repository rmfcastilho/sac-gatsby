import React, { useState } from 'react';
import { PRODUCT_COMPOSITION_ITEMS } from "./constants/ProductComposition.constants";

import { ProductCompositionModuleWrapper } from './styles/ProductCompositionModule.styles';

import ProductCompositionIndex from "./ProductCompositionIndex.component";
import ProductCompositionDetails from "./ProductCompositionDetails.component";

import { MODAL_INDEX } from "./constants/ProductCompositionModal.constants";


const ProductCompositionModule = () => {
  const [activeModule, setActiveModule] = useState(MODAL_INDEX);

  const resetActiveModule = () => setActiveModule(MODAL_INDEX);
  const changeActiveModule = (id) => setActiveModule(id);

  const activeModuleData = (
    activeModule !== MODAL_INDEX &&
    PRODUCT_COMPOSITION_ITEMS.find((item) => item.id === activeModule)
  );

  return (
    <ProductCompositionModuleWrapper>
      {
        activeModule === MODAL_INDEX
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
