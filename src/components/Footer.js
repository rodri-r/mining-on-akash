import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <p>Made with ❤️  by Rodri</p>
      <a href="https://akash.network" target="_blank" rel="noopener noreferrer">
      <img src="/powered-by-akash-white.b57aa33b.svg" alt="Powered by Akash Logo" />
      </a>
       <div>
         <a href="https://discord.gg/akash" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faDiscord} />
         </a>
       </div>
    </div>
  );
}

export default Footer;
