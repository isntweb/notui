import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { ThemeProvider } from "react-jss";
import { NotUIThemeProvider } from "./components";

// import theme from "./theme";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NotUIThemeProvider>
    <App />
    </NotUIThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
