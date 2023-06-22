import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AppProvider } from './utils/data';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { StateProvider } from './context/StateProvider';
// import { initialState } from './context/initialState';
// import reducer from './context/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  {/* <StateProvider initialState={initialState} reducer={reducer}> */}
  <AppProvider>
    <App />
  </AppProvider>
    {/* </StateProvider> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
