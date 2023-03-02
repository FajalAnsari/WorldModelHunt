import React from 'react';
import logo from "../Components/Images/Logo-header.png";
import '../App.css';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand" >
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='navbar-nav'>
                <li className='"nav-item'>
                  <a href="/" className='nav-link m-2 Home'>Home</a>
                </li>
                <li className='"nav-item'>
                  <a href='/' className='nav-link m-2'>Print</a>
                </li>
                <li className='"nav-item'>
                  <a href='/'  className='nav-link m-2'>Digital</a>
                </li>
                <li className='"nav-item'>
                  <a href='/' className='nav-link m-2'>Contact Us</a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
