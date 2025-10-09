import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/spares', label: 'Spares' },
    { path: '/industries', label: 'Industries' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path 
                  d="M16 2L20 8H28L24 14L28 20H20L16 26L12 20H4L8 14L4 8H12L16 2Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="logo-text">Mercurius Dynamics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => {
                  // Scroll to top when navigating
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Link 
              to="/request-quote" 
              className="btn btn-primary"
              onClick={() => {
                // Scroll to top when navigating
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              ref={mobileMenuRef}
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1,
                height: 'auto'
              }}
              exit={{ 
                opacity: 0,
                height: 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              style={{
                overflow: 'hidden'
              }}
            >
              {/* Mobile Menu Header */}
              <div className="mobile-nav-header">
                <div className="mobile-nav-logo">
                  <div className="logo-icon">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                      <path 
                        d="M16 2L20 8H28L24 14L28 20H20L16 26L12 20H4L8 14L4 8H12L16 2Z" 
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="logo-text">Mercurius Dynamics</span>
                </div>
                <button 
                  className="mobile-nav-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M18 6L6 18M6 6L18 18" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Scroll to top when navigating
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/request-quote" 
                className="btn btn-primary mobile-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  // Scroll to top when navigating
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                Get Quote
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;