import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Mining on Akash</h1>
      <p>
        This app provides you with the latest mining stats and news.
      </p>
      <div className="features-container">
        <div className="feature">
          <Link to="/stats">
            <img src="https://peach-net-dolphin-661.mypinata.cloud/ipfs/bafkreibyvf6vhzhcn37rc7z7ijlf3zojvyvgmehwitf2vd6lgcsoqek6ni" alt="Mining Stats" />
          </Link>
          <Link to="/stats"><h2>Real-time Mining Stats</h2></Link>
          <p>
            Get the latest mining stats and stay up-to-date with the market.
          </p>
          </div>
          <div className="feature">
          <Link to="/news">
            <img src="https://peach-net-dolphin-661.mypinata.cloud/ipfs/bafkreihcg22dwako2fllihgmbzhvdxtl5rrp45r2mr7vkj4hehvx7h6dqy" alt="Mining News" />
          </Link>
          <Link to="/news"><h2>Mining News and Updates</h2></Link>
          <p>
            Stay informed with the latest mining news and updates.
          </p>
        </div>
        <div className="feature">
          <a href="https://discord.gg/9fw5h6fSPp" target="_blank" rel="noopener noreferrer">
            <img src="https://peach-net-dolphin-661.mypinata.cloud/ipfs/bafkreibtlr3ezohhpncha3lvi5unc6dl2ihpof5xhwcsckdbyzgr5h3uhe" alt="Community Support" />
          </a>
          <Link to="https://discord.gg/9fw5h6fSPp"><h2>Community Support</h2></Link>
          <p>
            Join our Discord and get support from other miners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
