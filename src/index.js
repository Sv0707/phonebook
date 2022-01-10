import React from "react";
import { Suspense } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App/App";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import './i18n';
// import { PersistGate } from 'redux-persist/integration/react';


ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Suspense fallback='Loading...'>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
