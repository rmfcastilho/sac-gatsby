import React from 'react';
import { HeadingStyles } from 'constants/heading';


const Heading = ({ children, type }) => type === HeadingStyles.PRIMARY
  ? <h2>{children}</h2>
  : <h3>{children}</h3>;


export default Heading;
