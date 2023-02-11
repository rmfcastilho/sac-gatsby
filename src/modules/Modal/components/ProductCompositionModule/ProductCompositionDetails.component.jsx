import React from 'react';

import Link from "components/Link/Link.component";

import {
  ProductCompositionDetailsWrapper,
  ProductCompositionDetailsTitle,
  ProductCompositionSubsectionWrapper,
  ProductCompositionSubsectionTitle,
  ProductCompositionSubsectionContent,
} from './styles/ProductCompositionModule.styles';

const ProductCompositionDetails = ({
  name,
  compositionDetails,
  howToUse,
  onBack,
}) => (
  <ProductCompositionDetailsWrapper>
    <Link onClick={onBack}>Voltar</Link>

    <ProductCompositionDetailsTitle>
      {name}
    </ProductCompositionDetailsTitle>

    {
      Boolean(compositionDetails) && compositionDetails.map((details) => (
        <ProductCompositionSubsectionWrapper key={details.language}>
          <ProductCompositionSubsectionTitle>
            {details.sectionTitle}
          </ProductCompositionSubsectionTitle>

          <ProductCompositionSubsectionContent>
            {details.compositionDetails}
          </ProductCompositionSubsectionContent>
        </ProductCompositionSubsectionWrapper>
      ))
    }

    {
      Boolean(howToUse) && howToUse.map((details) => (
        <ProductCompositionSubsectionWrapper key={details.id}>
          <ProductCompositionSubsectionTitle>
            {details.sectionTitle}
          </ProductCompositionSubsectionTitle>

          <ProductCompositionSubsectionContent>
            {details.sectionContent}
          </ProductCompositionSubsectionContent>
        </ProductCompositionSubsectionWrapper>
      ))
    }

  </ProductCompositionDetailsWrapper>
);


export default ProductCompositionDetails;
