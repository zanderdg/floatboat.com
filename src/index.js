import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./config/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import store from "./redux/store";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
reportWebVitals();
