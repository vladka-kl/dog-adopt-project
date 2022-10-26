import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import App from '../../App';
import Details from '.././details/Details';
import Contact from '../contact/Contact';
import Congrats from '../congrats/Congrats';


const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dog-details' element={<Details />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/congrats' element={<Congrats />} />
    </Routes>
  </Router>
);

export default AppRoutes;
