import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LandingPage } from './pages/LandingPage';

function App() {
  // here we fatch the data from the api and render it.
  return (
    <div className='App'>
      <LandingPage />
    </div>
  );
}

export default App;
