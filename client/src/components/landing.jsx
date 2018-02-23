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
      <section className="no-more-roommates">
        <h1>No More Crappy Rommmates!</h1>
        <h3>Rate Past Roommates</h3>
        <p><em>&quot;He was ok, but kept roundhouse kicking me in the face...&quot;</em></p>
        <div className="stars-landing">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <h3>Check Out Other People's Rating</h3>
        <img src="chucky.jpg"></img>
        <div className="person-rating">
          <p>Chuck</p>
          <i class="fas fa-star"></i>
          4.7
        </div>
      </section>
  </div>
  );
};

export default Landing;
