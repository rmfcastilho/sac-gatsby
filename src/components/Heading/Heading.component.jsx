import React from 'react';

import { MainHeading, SubHeading } from "./styles/Heading.styles";

import { headingStyles } from 'constants/heading';


const Heading = ({ children, type, colored }) => type === headingStyles.PRIMARY
  ? <MainHeading colored={colored}>{children}</MainHeading>
  : <SubHeading colored={colored}>{children}</SubHeading>;


export default Heading;
