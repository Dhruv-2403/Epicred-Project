import React from 'react';
import { Link } from 'react-router-dom';

import img from "../../FooterImages/Facebook.png"
import img2 from "../../FooterImages/Instagram.png"
import img3 from "../../FooterImages/Twitter.png"
import img4 from "../../FooterImages/LinkedIn.png"
import img5 from "../../FooterImages/Dribbble.png"
import img6 from "../../FooterImages/Frame 3.png"


import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand-info">
            <div className="logo">
            <img src={img6} alt="Frame" />
              
              <span>JobHuntly</span>
            </div>
            <p className="description">
              Great platform for job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3>About</h3>
              <ul>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/advice">Advice</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Resources</h3>
              <ul>
                <li><Link to="/help">Help Docs</Link></li>
                <li><Link to="/guide">Guide</Link></li>
                <li><Link to="/updates">Updates</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <h3>Get job notifications</h3>
            <p>The latest job news, articles, sent to your inbox weekly.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
    

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JobHuntly. All rights reserved.</p>
          <div className="social-links">
            <img src={img} alt="Facebook" />
            <img src={img2} alt="Instagram" />
            <img src={img3} alt="Twitter" />
            <img src={img4} alt="Linkedin" />
            <img src={img5} alt="Dribbble" />
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
