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
        <p><em>&quot;He was ok, but he kept roundhouse kicking me in the face...&quot;</em></p>
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
      <section className="similar-interests-landing">
        <h1>Find People With Similar Interests</h1>
        <h3>Fill out survey with your interests</h3>
        <i class="fab fa-wpforms"></i>
        <h3>We match you according to your interests</h3>
        <img src="biebs.jpg"></img>
        <div className="person-match">
          <p>Biebs</p>
          <p style={{color: "green"}}>97% Match!</p>
        </div>
      </section>
  </div>
  );
};

export default Landing;
