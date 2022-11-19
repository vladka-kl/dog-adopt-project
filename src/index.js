//import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

<<<<<<< HEAD
/* Router is the core of every react router component */

const selectedEle = document.getElementById('root');
// @ts-ignore
const root = ReactDOM.createRoot(selectedEle);
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> Test
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
