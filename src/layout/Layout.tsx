import React, { useEffect, useState } from "react";

import "./Layout.scss";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

interface LayoutProps {
  }
  
  
  const Layout: React.FC<LayoutProps> = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <div className="layout">
        {!isMobile && <Navigation isMobile={false} menuOpen={menuOpen} toggleMenu={toggleMenu} />}
        <Header isMobile={isMobile} menuOpen={menuOpen} toggleMenu={toggleMenu} />
        {isMobile && (
          <Navigation isMobile={true} menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
        <main className="mainContent"><Outlet /></main>
      </div>
    );
  };
  
  export default Layout;