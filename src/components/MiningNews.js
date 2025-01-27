import React from 'react';
import './MiningNews.css';

function MiningNews() {
  return (
    <div className="mining-news-container">
      <h1>Mining News</h1>
      <div className="news-cards-container">
        <div className="news-card">
          <h2>Bitcoin Price Surges to New High</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="news-card">
          <h2>New Mining Rig Released</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="news-card">
          <h2>Mining Difficulty Increases</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default MiningNews;
