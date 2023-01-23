import React from 'react';

import { Provider } from "react-redux";
import { store } from "store/store";

import StandardTemplate from "templates/StandardTemplate.component";

export const wrapPageElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <StandardTemplate {...props}>{element}</StandardTemplate>
    </Provider>
  )
}
