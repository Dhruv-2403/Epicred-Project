import React from 'react';
import { Link } from 'react-router-dom';

import img1 from "../../LatestJobsImages/Company Logo.png"
import img2 from "../../LatestJobsImages/Company Logo 1.png"
import img3 from "../../LatestJobsImages/Company Logo 2.png"
import img4 from "../../LatestJobsImages/Company Logo 3.png"
import img5 from "../../LatestJobsImages/Company Logo 4.png"
import img6 from "../../LatestJobsImages/Company Logo 5.png"
import img7 from "../../LatestJobsImages/Company Logo 6.png"
import img8 from "../../LatestJobsImages/Company Logo 7.png"

import img9 from "../../CategoryImages/Icon 9.png"

import img10 from "../../LatestJobsImages/Pattern.png"


import './LatestJobs.css';

const latestJobs = [
  {
    id: 1,
    company: {
      name: 'Nomad',
      logo: img8,
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 2,
    company: {
      name: 'Dropbox',
      logo: img7,
      location: 'San Francisco, USA'
    },
    title: 'Brand Designer',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 3,
    company: {
      name: 'Terraform',
      logo: img6,
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 4,
    company: {
      name: 'Packer',
      logo: img5,
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 5,
    company: {
      name: 'Netlify',
      logo: img4,
      location: 'Paris, France'
    },
    title: 'Social Media Assistant',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 6,
    company: {
      name: 'Maze',
      logo: img3,
      location: 'San Francisco, USA'
    },
    title: 'Brand Designer',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 7,
    company: {
      name: 'Udacity',
      logo: img2,
      location: 'Hamburg, Germany'
    },
    title: 'Interactive Developer',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
  },
  {
    id: 8,
    company: {
      name: 'Webflow',
      logo: img1,
      location: 'Lucern, Switzerland'
    },
    title: 'HR Manager',
    type: 'Full-Time',
    tags: ['Marketing', 'Design']
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
    <Link to={`/jobs/${job.id}`} className="latest-job-card">
      <div className="job-company">
       
        <div className="company-details">
          <h3 className="job-title">{job.title}</h3>
          <div className="company-info">
            <span className="company-name">{job.company.name}</span>
            <span className="location">{job.company.location}</span>
          </div>
        </div>
      </div>

      <div className="job-meta">
        {job.stats && (
          <div className="job-stats">
            {job.stats}
          </div>
        )}
        <div className="job-tags-type">
          <span style={{color:"#56CDAD"}} className="job-type">{job.type}</span>
          {job.tags.map((tag, index) => (
            <span  key={index} className={`tag ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
        
      </div>
      
    </Link>
  );
};

const LatestJobs = () => {
  // Split jobs into two columns
  const leftColumnJobs = latestJobs.slice(0, 4);
  const rightColumnJobs = latestJobs.slice(4, 8);

  return (
    <section className="latest-jobs">
      <div className="container">
        <div className="section-header">
          <h2>
            Latest <span style={{color:"#26A4FF"}} className="highlight">jobs open</span>
          </h2>
          <Link to="/jobs" className="show-all">
            Show all jobs <img src={img9} alt="" />
          </Link>
        </div>

        <div className="jobs-list">
          <div className="jobs-column">
            {leftColumnJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="jobs-column">
            {rightColumnJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs; 