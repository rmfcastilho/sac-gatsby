import React from 'react';

import { AppWrapper, ContentWrapper } from './styles/StandardTemplate.style';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';


const StandardTemplate = ({ children }) => (
  <AppWrapper>
    <Header />

    <ContentWrapper>
      {children}
    </ContentWrapper>

    <Footer />
  </AppWrapper>
);


export default StandardTemplate;
