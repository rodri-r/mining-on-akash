import React from 'react';
import './MiningNews.css';
import { Link } from 'react-router-dom';

function MiningNews() {
  return (
    <div className="mining-news-container">
      <h1>Mining News</h1>
      <div className="news-cards-container">
        <div className="news-card">
          <h2>The Environmental Impact of Mining on Akash Network: A Sustainable Alternative?</h2>
          <p>Examine the environmental implications of traditional mining methods and explore how Akash Network's cloud-based approach might offer a more sustainable alternative</p>
          <Link to="/articles/01" className="read-more">Read Article</Link>
        </div>
        <div className="news-card">
          <h2>Mining on Akash Network: A Step-by-Step Guide for Beginners</h2>
          <p>Unlock the potential of Akash Network: a guide to mining the most valuable and in-demand tokens</p>
          <Link to="/articles/02" className="read-more">Read Article</Link>
        </div>
        <div className="news-card">
          <h2>Akash Network vs. Traditional Mining: A Cost-Benefit Analysis</h2>
          <p>Comparing the costs and benefits of mining on Akash Network versus traditional mining methods</p>
          <Link to="/articles/03" className="read-more">Read Article</Link>
        </div>
      </div>
    </div>
  );
}

export default MiningNews;
