//import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/* Router is the core of every react router component */

const selectedEle = document.getElementById('root');
// @ts-ignore
const root = ReactDOM.createRoot(selectedEle);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
