import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="./pages/LandingPage">About us</Link>
          </li>
          <li className="menu-item">
            <Link to="./pages/BreedsInfo">Breeds</Link>
          </li>
          <li className="menu-item">
            <Link to="./RandomDog">Random Dog Pic</Link>
          </li>
          <li className="menu-item">
            <Link to="./FullDogsInfo">Breeds Info</Link>
          </li>
          <li className="menu-item">
            <Link to="./pages/ContactUs">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
