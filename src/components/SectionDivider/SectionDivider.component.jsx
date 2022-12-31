import React from 'react';

import { HorizontalLine, VerticalLine } from './styles/SectionDivider.styles'
import { dividerOrientation } from '../../constants/sectionDivider';

const SectionDivider = ({ type }) => type === dividerOrientation.HORIZONTAL
  ? <HorizontalLine />
  : <VerticalLine />;


export default SectionDivider;
