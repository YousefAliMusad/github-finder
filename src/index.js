import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import './index.css';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);