import React from 'react';
import { headingStyles } from 'constants/heading';


const Heading = ({ children, type }) => type === headingStyles.PRIMARY
  ? <h2>{children}</h2>
  : <h3>{children}</h3>;


export default Heading;
