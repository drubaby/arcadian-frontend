import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux";
import "semantic-ui-css/semantic.min.css"
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import "./index.css";
import store from './redux/store'
import App from "./App";



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
