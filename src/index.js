import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./store/reducers/reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
