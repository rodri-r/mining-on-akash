import React from 'react';
import './MiningNews.css';

function MiningNews() {
  return (
    <div className="mining-news-container">
      <h1>Mining News</h1>
      <div className="news-cards-container">
        <div className="news-card">
          <h2>The Environmental Impact of Mining on Akash Network: A Sustainable Alternative?</h2>
          <p>Examine the environmental implications of traditional mining methods and explore how Akash Network's cloud-based approach might offer a more sustainable alternative</p>
          <a href="https://tests.arcturian.tech/articles/01" className="read-more">Read Article</a>
        </div>
        <div className="news-card">
          <h2>Mining on Akash Network: A Step-by-Step Guide for Beginners</h2>
          <p>Unlock the potential of Akash Network: a guide to mining the most valuable and in-demand tokens</p>
          <a href="https://tests.arcturian.tech/articles/02" className="read-more">Read Article</a>
        </div>
        <div className="news-card">
          <h2>Akash Network vs. Traditional Mining: A Cost-Benefit Analysis</h2>
          <p>Comparing the costs and benefits of mining on Akash Network versus traditional mining methods</p>
          <a href="https://tests.arcturian.tech/articles/03" className="read-more">Read Article</a>
        </div>
      </div>
    </div>
  );
}

export default MiningNews;
