import React from 'react';

import {
  FooterWrapper,
  FooterContent,
  FooterText,
} from './styles/Footer.styles';


const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>UB Beauty Cosméticos © {currentYear}</FooterText>
        <FooterText>Todos os direitos reservados</FooterText>
      </FooterContent>
    </FooterWrapper>
  )
};


export default Footer;
