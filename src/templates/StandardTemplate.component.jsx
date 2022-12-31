import React from 'react';

import { ContentWrapper } from './styles/StandardTemplate.style';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';


const StandardTemplate = ({ children }) => (
  <>
    <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    <Footer />
  </>
);


export default StandardTemplate;
