import React, { useState } from 'react';
import personImg from '../../HeaderImage/Person.png';
import patternImg from '../../HeaderImage/Pattern.png';

import img from "../../HeaderImage/Icon.png"
import img1 from "../../HeaderImage/Frame 1063.png"
import img2 from "../../HeaderImage/Icon 2.png"
import './JobSearchHero.css';

const JobSearchHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Florence, Italy');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', { searchQuery, location });
  };

  return (
    <>
      <section className="job-search-hero">
       
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Discover<br />
                more than<br />
                <span style={{color:"#26A4FF"}} className="highlight">5000+ Jobs</span>
              </h1>
              
              <p className="hero-description">
                Great platform for the job seeker that searching for
                new career heights and passionate about startups.
              </p>

              <form onSubmit={handleSearch} className="search-form">
                <div className="search-inputs">
                  <img src={img} alt="" class="image"/>
                  <img src={img1} alt="" />
            
                 <img class="image-2" src={img2} alt="" />
                  <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
        
                  <button type="submit" className="search-button">
                    Search my job
                  </button>
        
                </div>
              </form>

              <div className="popular-searches">
                <span>Popular : </span>
                <div className="popular-tags">
                  <span>UI Designer</span>
                  <span>UX Researcher</span>
                  <span>Android</span>
                  <span>Admin</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img src={personImg} alt="" className="person-image" />
              
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default JobSearchHero; 