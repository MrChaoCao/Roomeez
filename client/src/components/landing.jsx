import React from 'react';

const Landing = () => {
  return (
    <div>
      <section className="masthead">
        <div className="masthead-image">
        </div>
        <div className="masthead-box">
          <h1>Find Your Next Roommate(s)</h1>
        </div>
        <a href="#how-it-works">Learn More</a>
      </section>
      <section id="how-it-works">
        <h1>How It Works</h1>
        <div className="search-for-individuals-box">
          <i class="fas fa-user-circle"></i>
          <p>Search for Individuals Who Need a Place</p>
        </div>
        <div className="search-for-groups-box">
          <i class="fas fa-users"></i>
          <p>Search for Groups That Need Roommates</p>
        </div>
      </section>
  </div>
  );
};

export default Landing;
