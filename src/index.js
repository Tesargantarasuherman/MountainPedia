import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "intro.js/introjs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "flatpickr/dist/themes/material_green.css";
import '../src/fonts/GT-Eesti-Display-Regular.otf'
import '../src/fonts/GT-Eesti-Display-Bold.otf'
import 'react-spring-bottom-sheet/dist/style.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import './i18n'
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import store from '../src/store'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
