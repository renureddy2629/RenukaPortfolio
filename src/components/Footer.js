import React from 'react';
import '../App.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ marginTop: 'auto' }} className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">Get in Contact</p>
          <div className="footer-links">
            <div className="footer-social">
              <a className='App-link' style={{ textDecoration: 'none' }} href="mailto:renukareddy442@mail.com">
                <FontAwesomeIcon icon={faGoogle} /> Email Me
              </a>
              <a className='App-link' style={{ textDecoration: 'none' }} href="www.linkedin.com/in/renukapasam.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a className='App-link' style={{ textDecoration: 'none' }} href="https://github.com/renureddy2629">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
