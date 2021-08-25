import React from 'react';
import ReactDOM from 'react-dom';
import './propets.space-HTML-CSS-main/app/css/main.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import {store} from './store/store'
import './propets.space-HTML-CSS-main/app/fonts/icons-fonts/icons.css'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);


