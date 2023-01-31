import React from 'react';

import { HorizontalLine, VerticalLine } from './styles/SectionDivider.styles'
import { DIVIDER_ORIENTATION } from '../../constants/sectionDivider';

const SectionDivider = ({ type }) => type === DIVIDER_ORIENTATION.HORIZONTAL
  ? <HorizontalLine />
  : <VerticalLine />;


export default SectionDivider;
