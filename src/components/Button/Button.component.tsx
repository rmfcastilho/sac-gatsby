import React from 'react';

import { ButtonProps } from './types/Button.types';
import { Link } from "react-router-dom";


const Button: React.FC<ButtonProps> = ({ key, isDisabled, type, label, link }) => {
  const element = type === 'button'
    ? <button key={key} disabled={isDisabled}>{label}</button>
    : <Link key={key} to={link}>{label}</Link>

  return element;
}


export default Button;
