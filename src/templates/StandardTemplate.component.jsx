import React from 'react';

import { ContentWrapper } from './styles/StandardTemplate.style';
import GlobalStyle from "global/styles/global.styles";

import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import { store } from 'store/store';
import { Provider } from 'react-redux';


const StandardTemplate = ({ children }) => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Header />

      <ContentWrapper>
        {children}
      </ContentWrapper>

      <Footer />
    </>
  </Provider>
);


export default StandardTemplate;
