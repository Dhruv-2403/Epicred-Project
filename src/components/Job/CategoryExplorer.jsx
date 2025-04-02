import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../CategoryImages/Icon.png"
import img2 from "../../CategoryImages/ Icon 2.png"
import img3 from "../../CategoryImages/Icon 3.png"
import img4 from "../../CategoryImages/Icon 4.png"
import img5 from "../../CategoryImages/Icon 5.png"
import img6 from "../../CategoryImages/Icon 6.png"
import img7 from "../../CategoryImages/Icon 7.png"
import img8 from "../../CategoryImages/Icon 8.png"
import img9 from "../../CategoryImages/Icon 9.png"
import './CategoryExplorer.css';

const categories = [
  {
    id: 1,
    icon: 'design',
    title: 'Design',
    available: '235 jobs available',
   
    link: '/jobs/design',

  },
  {
    id: 2,
    icon: 'sales',
    title: 'Sales',
    available: '756 jobs available',
    link: '/jobs/sales',
    
  },
  {
    id: 3,
    icon: 'marketing',
    title: 'Marketing',
    available: '140 jobs available',
    link: '/jobs/marketing',
    
    featured: true
  },
  {
    id: 4,
    icon: 'finance',
    title: 'Finance',
    available: '325 jobs available',
    link: '/jobs/finance',

  },
  {
    id: 5,
    icon: 'technology',
    title: 'Technology',
    available: '436 jobs available',
    link: '/jobs/technology',
  
  },
  {
    id: 6,
    icon: 'engineering',
    title: 'Engineering',
    available: '542 jobs available',
    link: '/jobs/engineering',

  },
  {
    id: 7,
    icon: 'business',
    title: 'Business',
    available: '211 jobs available',
    link: '/jobs/business',
    
  },
  {
    id: 8,
    icon: 'hr',
    title: 'Human Resource',
    available: '346 jobs available',
    link: '/jobs/hr',
  
  }
];

const CategoryIcon = ({ type }) => {
  switch (type) {
    case 'design':
      return <img src={img1} alt="Design" />;
    case 'sales':
      return <img src={img2} alt="Sales" />;
    case 'marketing':
      return <img src={img3} alt="Marketing" />;
    case 'finance':
      return <img src={img5} alt="Engineering" />;
    case 'technology':
      return <img src={img4} alt="Finance" />;
    case 'engineering':
      return <img src={img6} alt="Engineering" />;
    case 'business':
      return <img src={img8} alt="Business" />;
    case 'hr':
      return <img src={img7} alt="Business" />;
    default:
      return 
  }
};

const CategoryExplorer = () => {
  return (
    <section className="category-explorer">
      <div className="container">
        <div className="section-header">
          <h2> 
            Explore by <span style={{color:"#26A4FF"}} className="highlight">category</span>
          </h2>
          <Link to="/jobs" className="show-all">
            Show all jobs <img src={img9} alt="" />
          </Link>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id} 
              className={`category-card ${category.featured ? 'featured' : ''}`}>

              <div className="category-icon">
                <CategoryIcon type={category.icon} />
              </div>
              <h3>{category.title}</h3>


              <div className="para">
                <p>{category.available}</p>
        
                <img className="image" src={img9} alt="" />
         
              </div>
              
            </Link>
            
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default CategoryExplorer; 