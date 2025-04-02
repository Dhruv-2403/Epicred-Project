import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../JobPostingImages/3.1 Dashboard Company.png"
import './JobPostingCTA.css';

const JobPostingCTA = () => {
  return (
    <div className="job-posting-cta-container">
    <section className="job-posting-cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Start posting<br />jobs today</h2>
            <p>Start posting jobs for only $10.</p>
            <Link to="/signup" className="cta-button">
              Sign Up For Free
            </Link>
          </div>
          
          <div className="dashboard-preview">
            <img 
              src={img}
              className="dashboard-image"
            />
          </div>
        </div>
      </div>
      
      {/* Background shape */}
      <div className="background-shape"></div>
    </section>
    </div>
  );
};

export default JobPostingCTA; 