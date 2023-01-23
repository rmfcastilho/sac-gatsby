import React from 'react';

import { ContentWrapper, Content } from './styles/StandardTemplate.style';
import GlobalStyle from "global/styles/global.styles";

import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import { store } from 'store/store';
import { Provider } from 'react-redux';


const StandardTemplate = ({ children }) => (
  <Provider store={store}>
    <ContentWrapper>
      <GlobalStyle />
      <Header />

      <Content>
        {children}
      </Content>

      <Footer />
    </ContentWrapper>
  </Provider>
);


export default StandardTemplate;
