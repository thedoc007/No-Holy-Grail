import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Trading Reality Check</h3>
            <p>
              Providing evidence-based insights into the realities of trading markets 
              and helping individuals make informed financial decisions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/alternatives">Alternatives</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#financial-education">Financial Education</a></li>
              <li><a href="#risk-management">Risk Management</a></li>
              <li><a href="#long-term-investing">Long-term Investing</a></li>
              <li><a href="#behavioral-finance">Behavioral Finance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:contact@tradingrealitycheck.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://twitter.com/tradingreality" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/company/trading-reality-check" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/trading-reality-check" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 No Holy Grail. All rights reserved.</p>
          <p>
            <span className="disclaimer">
              Disclaimer: This website is for educational purposes only. 
              We do not provide financial advice. Always consult with qualified professionals before making investment decisions.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
