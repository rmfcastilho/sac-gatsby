import React from 'react';

import { MainHeading, SubHeading } from "./styles/Heading.styles";

import { HEADING_STYLES } from 'constants/heading';


const Heading = ({ children, type, colored }) => type === HEADING_STYLES.PRIMARY
  ? <MainHeading colored={colored}>{children}</MainHeading>
  : <SubHeading colored={colored}>{children}</SubHeading>;


export default Heading;
