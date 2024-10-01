import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-background">
      <img src={logo} alt="Logo" className="logo" />
        <nav className="nav ms-auto">  {/* Сдвиг навигации вправо */}
          <a href="/">Home</a>
          <a href="/">Help</a>
          <a href="/">My Account</a>
          <a href="/">Sign Up</a>
          <a href="/">Log out</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
