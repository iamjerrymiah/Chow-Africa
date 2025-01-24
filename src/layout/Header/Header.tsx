import React from "react";

import "./Header.scss";
import Logo from "../../assets/Img/Logo.png";

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu, isMobile }) => {

  return (
    <div style={{ display: !isMobile ? 'none' : 'block' }}>
    <header className="header" >
      <img src={Logo} alt="Chow Africa Logo" />
      <div style={{ display: 'flex' }}>
        <button className="joinButton">JOIN WAITLIST</button>
        <button className="menuToggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      
    </header>
    </div>
  );
};

export default Header;