import './App.css';
import React from 'react';
import { LandingPage } from './pages/LandingPage';

function App() {
  // here we fatch the data from the api and render it.
  return (
    <div className='App'>
      <h1></h1> 
      <LandingPage />
    </div>
  );
}

export default App;
