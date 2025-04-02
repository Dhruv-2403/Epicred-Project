import React from 'react';
import Header from './components/Header/Header';
import JobSearchHero from './components/Job/JobSearchHero';
import CompanyLogos from './components/Company/CompanyLogos';
import CategoryExplorer from './components/Job/CategoryExplorer';
import JobPostingCTA from './components/Job/JobPostingCTA';
import FeaturedJobs from './components/Job/FeaturedJobs';
import LatestJobs from './components/Job/LatestJobs';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <JobSearchHero />
        <CompanyLogos />
        <CategoryExplorer />
        <JobPostingCTA />
        <FeaturedJobs />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}

export default App;