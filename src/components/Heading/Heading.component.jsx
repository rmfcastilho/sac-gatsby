import React from 'react';


const Heading = ({ children, type }) => type === 'main'
  ? <h2>{children}</h2>
  : <h3>{children}</h3>;


export default Heading;
