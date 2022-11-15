import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const AppProps = {
  offersAmount: 111,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App errorsCount={AppProps.offersAmount}/>
  </React.StrictMode>,
);
