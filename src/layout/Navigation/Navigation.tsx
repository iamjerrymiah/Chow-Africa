import React from "react";

import "./Navigation.scss";
import Logo from "../../assets/Img/Logo.png";
import { useNavigate } from "react-router";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

interface NavigationProps {
	isMobile: boolean;
	menuOpen: boolean;
	toggleMenu: () => void;
  }
  
  const Navigation: React.FC<NavigationProps> = ({ isMobile, menuOpen, toggleMenu }) => {
	const navigate = useNavigate();

	return (
	  <nav
		className={`nav ${isMobile ? "mobile" : "desktop"} ${menuOpen && isMobile ? "open" : ""}`}
	  >
		{!isMobile && (
			<div className="logo">
				<img src={Logo} alt="Chow Africa Logo" />
			</div>
		)}
		<ul>
		  <li onClick={ () => navigate('/') } className="li-normal active">Home</li>
		  <li onClick={ () => {navigate('/waitlist')} } className="li-normal">Join Waitlist</li>
		</ul>
		
		<div className="social">
			<a href="https://web.facebook.com/Hostel1.ng/" target="_blank" rel="noreferrer" className=''><FaFacebookSquare size={26} color="#D87023"/></a>
			<a href="https://twitter.com/HostelNg" target="_blank" rel="noreferrer" className=''><FaSquareTwitter size={26} color="#D87023"/></a>
			<a href="https://www.instagram.com/hostel.ng/" target="_blank" rel="noreferrer" className=''><FaInstagramSquare size={26} color="#D87023"/></a>
		</div>

		{isMobile && (
		  <button className="closeMenu" onClick={toggleMenu}>
			✖
		  </button>
		)}
	  </nav>
	);
  };
  
  export default Navigation;