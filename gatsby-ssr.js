import React from "react";
import { Provider } from "react-redux";
import { store } from "store/store";

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
