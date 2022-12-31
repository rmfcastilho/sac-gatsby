import React from 'react';

import { StandardTemplateProps } from './types/StandardTemplate.types';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';


const StandardTemplate = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
);


export default StandardTemplate;
