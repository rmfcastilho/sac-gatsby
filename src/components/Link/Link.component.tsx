import React from 'react';

import { LinkProps } from './types/Link.types';


const Link: React.FC<LinkProps> = ({ style, link, label }) => (
  <a className={style} href={link}>{label}</a>
);


export default Link;
