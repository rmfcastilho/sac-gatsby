import React from 'react';

import { Link } from 'gatsby';


const Button = ({ key, isDisabled, type, label, link }) => {
  return type === 'button'
    ? <button key={key} disabled={isDisabled}>{label}</button>
    : <Link key={key} to={link}>{label}</Link>;
}


export default Button;
