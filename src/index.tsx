import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const appState = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount = {appState.OFFERS_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
