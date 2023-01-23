import React from 'react';

import { ContentWrapper, Content } from './styles/StandardTemplate.style';
import GlobalStyle from "global/styles/global.styles";

import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import Modal from "components/Modal/Modal.component";


const StandardTemplate = ({ children }) => (
  <ContentWrapper>
    <GlobalStyle />
    <Modal />
    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </ContentWrapper>
);


export default StandardTemplate;
