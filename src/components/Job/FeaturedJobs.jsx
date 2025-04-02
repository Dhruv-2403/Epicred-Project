import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../FeaturedJobsImages/Logo 1.png"
import img2 from "../../FeaturedJobsImages/Logo 2.png"
import img3 from "../../FeaturedJobsImages/Logo 3.png"
import img4 from "../../FeaturedJobsImages/Logo 4.png"
import img5 from "../../FeaturedJobsImages/Logo 5.png"
import img6 from "../../FeaturedJobsImages/Logo 6.png"
import img7 from "../../FeaturedJobsImages/Logo 7.png"
import img8 from "../../FeaturedJobsImages/Logo 8.png"
import img9 from "../../CategoryImages/Icon 9.png"
import './FeaturedJobs.css';

const jobListings = [
  {
    id: 1,
    company: {
      name: 'Revolut',
      logo: img1,
      location: 'Madrid, Spain'
    },
    title: 'Email Marketing',
    type: 'Full Time',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    tags: ['Marketing', 'Design']
  },
  {
    id: 2,
    company: {
      name: 'Dropbox',
      logo: img2,
      location: 'San Francisco, US'
    },
    title: 'Brand Designer',
    type: 'Full Time',
    description: 'Dropbox is looking for Brand Designer to help the team t...',
    tags: ['Design', 'Business']
  },
  {
    id: 3,
    company: {
      name: 'Pitch',
      logo: img3,
      location: 'Berlin, Germany'
    },
    title: 'Email Marketing',
    type: 'Full Time',
    description: 'Pitch is looking for Customer Manager to join marketing t...',
    tags: ['Marketing']
  },
  {
    id: 4,
    company: {
      name: 'Blinklist',
      logo: img4,
      location: 'Granada, Spain'
    },
    title: 'Visual Designer',
    type: 'Full Time',
    description: 'Blinklist is looking for Visual Designer to help team desi...',
    tags: ['Design']
  },
  {
    id: 5,
    company: {
      name: 'ClassPass',
      logo: img5,
      location: 'Manchester, UK'
    },
    title: 'Product Designer',
    type: 'Full Time',
    description: 'ClassPass is looking for Product Designer to help us...',
    tags: ['Marketing', 'Design']
  },
  {
    id: 6,
    company: {
      name: 'Canva',
      logo: img6,
      location: 'Ontario, Canada'
    },
    title: 'Lead Designer',
    type: 'Full Time',
    description: 'Canva is looking for Lead Engineer to help develop n...',
    tags: ['Design', 'Business']
  },
  {
    id: 7,
    company: {
      name: 'GoDaddy',
      logo: img7,
      location: 'Marseille, France'
    },
    title: 'Brand Strategist',
    type: 'Full Time',
    description: 'GoDaddy is looking for Brand Strategist to join the team...',
    tags: ['Marketing']
  },
  {
    id: 8,
    company: {
      name: 'Twitter',
      logo: img8,
      location: 'San Diego, US'
    },
    title: 'Data Analyst',
    type: 'Full Time',
    description: 'Twitter is looking for Data Analyst to help team desi...',
    tags: ['Technology']
  }
];

const JobCard = ({ job }) => {
  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case 'marketing':
        return 'tag-marketing';
      case 'design':
        return 'tag-design';
      case 'business':
        return 'tag-business';
      case 'technology':
        return 'tag-technology';
      default:
        return '';
    }
  };

  return (
    <Link to={`/jobs/${job.id}`} className="job-card">
      <div className="job-card-header">
        <img src={job.company.logo} alt={job.company.name} className="company-logo" />
        <span className="job-type">{job.type}</span>
      </div>
      
      <h3 className="job-title">{job.title}</h3>
      <div className="company-info">
        <span className="company-name">{job.company.name}</span>
        <span className="location">{job.company.location}</span>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className={`tag ${getTagColor(tag)}`}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

const FeaturedJobs = () => {
  return (
    <section className="featured-jobs">
      <div className="container">
        <div className="section-header">
          <h2>
            Featured <span style={{color:"#26A4FF"}} className="highlight">jobs</span>
          </h2>
          <Link to="/jobs" className="show-all">
            Show all jobs <img src={img9} alt="" />
          </Link>
        </div>

        <div className="jobs-grid">
          {jobListings.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs; 