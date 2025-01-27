import React from 'react';

function MiningDashboard() {
  return (
    <div>
      <h1>Mining Dashboard</h1>
      <p>Welcome to your mining dashboard!</p>
      <div className="mining-stats">
        <h2>Hash Rate: 100 MH/s</h2>
        <h2>Block Reward: 10 BTC</h2>
        <h2>Difficulty: 1000</h2>
      </div>
    </div>
  );
}

export default MiningDashboard;
