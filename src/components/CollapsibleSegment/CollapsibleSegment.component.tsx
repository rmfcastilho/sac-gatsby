import React from 'react';

import { CollapsibleSegmentProps } from './types/CollapsibleSegment.types';


const CollapsibleSegment: React.FC<CollapsibleSegmentProps> = ({ 
  question,
  answer,
}) => (
  <details>
    <summary>{question}</summary>
    <p className="faq-answer">{answer}</p>
  </details>
);


export default CollapsibleSegment;
