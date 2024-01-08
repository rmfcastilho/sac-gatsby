import React from 'react';

import { Provider } from "react-redux";
import { store } from "store/store";

import StandardTemplate from "templates/StandardTemplate.component";

import ReactGA from 'react-ga';

ReactGA.initialize('G-HLC3S9GTJX');

export const wrapRootElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <StandardTemplate {...props}>{element}</StandardTemplate>
    </Provider>
  )
}
