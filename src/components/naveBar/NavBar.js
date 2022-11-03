import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './navBar.css';

const NavBar = () => {
  const navEle = ['Home', 'About', 'Adopt', 'Contact', 'Login'];

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo-img' />
        <div className='logo-text'>
          <h6 className=''>ADOPTS</h6>
          <p>ADOPT BREED</p>
        </div>
      </div>
      <nav className='nav-elements'>
        <ul>
          {navEle.map((ele, i) => (
            <li className='li-ele' key={i}>
              <Link to={''}>{ele}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
