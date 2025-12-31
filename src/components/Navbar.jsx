import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="Book Here" style={{ height: '50px', width: 'auto' }} />
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="navbar-link">Home</a>
          <a onClick={() => scrollToSection('features')} className="navbar-link">Features</a>
          <a onClick={() => scrollToSection('about')} className="navbar-link">About</a>
          <a onClick={() => scrollToSection('services')} className="navbar-link">Services</a>
          <a onClick={() => scrollToSection('contact')} className="navbar-link">Contact</a>
          
          <button className="navbar-download-btn" onClick={() => scrollToSection('download')}>
            Download Now 
          </button>
        </div>

        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
