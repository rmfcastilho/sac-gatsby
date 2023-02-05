import React from 'react';

import { ContentWrapper, Content } from './styles/StandardTemplate.style';
import GlobalStyle from "global/styles/global.styles";

import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import Modal from "modules/Modal/Modal.component";
import Heading from "components/Heading/Heading.component";

import { HEADING_STYLES } from "constants/heading";
import { HEADERS } from "constants/headers";

const StandardTemplate = ({ children }) => (
  <ContentWrapper>
    <GlobalStyle />
    <Modal />
    <Header />

    <Content>
        <Heading type={HEADING_STYLES.PRIMARY} colored>
            {HEADERS.HELP_CENTRAL}
        </Heading>

      {children}
    </Content>

    <Footer />
  </ContentWrapper>
);


export default StandardTemplate;
