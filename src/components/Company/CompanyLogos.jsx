import React from 'react';



import img1 from "../../CompanyImages/vodafone-2017-logo.png"
import img2 from "../../CompanyImages/Group.png"
import img3 from "../../CompanyImages/tesla-9 1.png"
import img4 from "../../CompanyImages/amd-logo-1.png"
import img5 from "../../CompanyImages/talkit 1.png"


import './CompanyLogos.css';

const CompanyLogos = () => {
  return (
    <section className="company-logos">
      <div className="container">
        <p className="section-title">Companies we helped grow</p>
        
        <div className="logos-container">
          <div className="logo-item-1">
            <img src={img1} alt="Vodafone" />
          </div>
          <div className="logo-item">
            <img src={img2} alt="Intel" />
          </div>
          <div className="logo-item-2">
            <img src={img3} alt="Tesla" />
          </div>
          <div className="logo-item-3">
            <img src={img4} alt="AMD" />
          </div>
          <div className="logo-item-4">
            <img src={img5}alt="Talkit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos; 