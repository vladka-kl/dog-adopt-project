import React from 'react';
import { Congratulations } from '../components/Congratulations/congratulations';
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/index";

const CongratulationsPage = () => (
  <div className='LandingPage'>
    <Header />
    <Congratulations />
    <Footer />
  </div>
);

export default CongratulationsPage;
