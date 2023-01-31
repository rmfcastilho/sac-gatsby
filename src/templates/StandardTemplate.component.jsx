import React from 'react';

import { ContentWrapper, Content } from './styles/StandardTemplate.style';
import GlobalStyle from "global/styles/global.styles";

import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import Modal from "components/Modal/Modal.component";
import Heading from "components/Heading/Heading.component";

import { HEADING_STYLES } from "constants/heading";


const StandardTemplate = ({ children }) => (
  <ContentWrapper>
    <GlobalStyle />
    <Modal />
    <Header />

    <Content>
        <Heading type={HEADING_STYLES.PRIMARY} colored>
            Central de Ajuda
        </Heading>

      {children}
    </Content>

    <Footer />
  </ContentWrapper>
);


export default StandardTemplate;
