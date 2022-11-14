import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  ERROR_COUNT: 111,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App errorsCount={Setting.ERROR_COUNT}/>
  </React.StrictMode>,
);
