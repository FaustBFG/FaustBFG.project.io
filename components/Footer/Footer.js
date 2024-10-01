import React from 'react';
import logo from '../../assets/images/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>Support</h4>
          <a href="/">Contact Customer Service</a>
          <a href="/">FAQs</a>
          <a href="/">Help</a>
        </div>
        <div>
          <h4>About</h4>
          <a href="/">Contacts</a>
        </div>
        <div>
          <h4>Partners</h4>
          <a href="/">List your property</a>
        </div>
      </div>
      <div className="footer-logo">
      <img src={logo} alt="Logo" className="logo" />
      </div>
    </footer>
  );
}

export default Footer;
