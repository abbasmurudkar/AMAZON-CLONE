import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StateProvider } from './CONTEXT/ContextApi';
import reducer, { initialState } from './CONTEXT/Reducer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>
    <StateProvider  initialState = {initialState} reducer = {reducer}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StateProvider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
