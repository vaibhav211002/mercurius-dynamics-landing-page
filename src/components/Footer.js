import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="md-text">MD</div>
              <div className="md-bar"></div>
              <div className="logo-text-container">
                <div className="logo-lines-1">MERCURIUS</div>
                <div className="logo-lines-2">DYNAMICS</div>
              </div>
            </div>
            <p className="footer-description">
              Driving innovation in industrial solutions with decades of engineering excellence and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-section-centered">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links-grid">
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-section-centered">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-info">
              <p>A-67 Ground Floor, Sector 67, Noida </p>
              <p>Uttar Pradesh 201309, India</p>
              <p>
                    Email:{" "}
                    <a
                      href="mailto:info@mercuriusdynamics.com"
                      className="text-indigo-400 hover:underline"
                    >
                      info@mercuriusdynamics.com
                    </a>
              </p>              
              <p>
              Phone:{" "}
              <a
                href="tel:+917838167696"
                className="text-indigo-400 hover:underline"
              >
                +91 7838167696
              </a>
            </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Mercurius Dynamics. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;