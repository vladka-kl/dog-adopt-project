import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';
import Details from '../../pages/BreedsInfo';
import Contact from '../../pages/ContactUs';
import CongratulationsPage from '../../pages/Congratulations';

const AppRoutes = ({ data = null }) => {
  // console.log(data);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/breed-info' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/congrats' element={<CongratulationsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;