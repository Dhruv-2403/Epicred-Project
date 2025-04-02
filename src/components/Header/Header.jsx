import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../FooterImages/Frame 3.png"


import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
  
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          
        </button>

        <div className={`header-content ${isMenuOpen ? 'active' : ''}`}>
  
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="JobHuntly" />

           
            <h className="logo-text">JobHuntly</h>
            <nav className="nav-links">
              <Link to="/jobs" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Find Jobs
              </Link>
              <Link to="/companies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Browse Companies
              </Link>
            </nav>
          </Link>

    
          

      
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="btn btn-signup" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;