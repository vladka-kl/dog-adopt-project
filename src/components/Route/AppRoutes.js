import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Details from '.././details/Details';
import Contact from '../contact/Contact';
import Congrats from '../congrats/Congrats';
import LandingPage from '../../pages/LandingPage';

const AppRoutes = ({ data = null }) => {
  // console.log(data);

  return (
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dog-details' element={<Details />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/congrats' element={<Congrats />} />
    </Routes>
  </Router>
)};

export default AppRoutes;