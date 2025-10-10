import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SparesPage.css';

const SparesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const brands = {
    'A': ['ABB', 'Allen Bradley', 'Amphenol', 'Atlas Copco', 'Autonics'],
    'B': ['B&R (ABB Group)', 'Balluff', 'Banner', 'Beckhoff Automation', 'Bosch Rexroth'],
    'C': ['Camozzi', 'Carlo Gavazzi', 'Cloostermans', 'Cognex', 'Connectwell', 'Control Techniques'],
    'D': ['Danfoss', 'Delta Electronics'],
    'E': ['Eaton', 'Emerson', 'Endress+Hauser', 'EPCOS'],
    'F': ['Fanuc (GE Fanuc)', 'Finder'],
    'G': ['General Electric (GE)', 'GE Fanuc'],
    'H': ['Harting', 'Havells', 'Hensel', 'Honeywell'],
    'I': ['IFM Electronic', 'I&S Instrumentations and Systems'],
    'J': ['Janatics'],
    'K': ['Karam Safety', 'Keyence'],
    'L': ['Lauritz Knudsen', 'Leuze'],
    'M': ['Mennekes', 'Mitsubishi Electric', 'Modicron', 'Molex', 'Murr Elektronik'],
    'N': ['Nordson'],
    'O': ['Omron'],
    'P': ['Panasonic', 'Panduit', 'Patlite', 'Parker', 'Pepperl+Fuchs', 'Phoenix Contact', 'Pilz', 'Pizzato', 'PC Electric (PCE)'],
    'R': ['Raychem', 'Rittal', 'ROPEX', 'Rockwell Automation', 'RPG'],
    'S': ['Salzer', 'Schmersal', 'Schneider Electric', 'Schneider / Modicon', 'SEW Eurodrive', 'SICK', 'Siemens', 'SMC Corporation'],
    'T': ['Turck'],
    'W': ['WAGO', 'Weidmüller', 'Wenglor'],
    'Y': ['Yaskawa', 'Yokogawa'],
    'Z': ['Zephyr', 'Zimmer Group']
  };

  const categories = ['All', 'Automation', 'Electrical', 'Mechanical'];

  const filteredBrands = Object.entries(brands).filter(([letter, brandList]) => {
    if (searchTerm) {
      return brandList.some(brand => 
        brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div className="spares-page">
      {/* Hero Section */}
      <section className="spares-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1 className="hero-title">
              <span className="title-main">Industrial </span>
              <span className="title-accent"> Spares & Components</span>
            </h1>
            <p className="hero-description">
              Top-quality parts from the world's leading manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="spares-content">
        <div className="container">
          {/* Introduction */}
          {/* Why Choose Us */}
          <motion.div 
            className="why-choose-section"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3>Why Choose Us?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>100% Genuine OEM Certified Components</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7H7C5.89543 7 5 7.89543 5 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Wide Multi-Brand Availability</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h4>Quick Sourcing & Delivery</h4>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h4>Expert Guidance on Replacements</h4>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            className="search-filter-section"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="search-bar">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Brands Section */}
          <motion.div 
            className="brands-section"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <h3>Brands We Support (A–Z)</h3>
            
            <div className="brands-listing">
              {filteredBrands.map(([letter, brandList], index) => (
                <div
                  key={letter}
                  className="brand-letter-section"
                >
                  <div className="letter-header">
                    <div className="letter-badge">{letter}</div>
                    <div className="letter-line"></div>
                  </div>
                  
                  <div className="brands-grid">
                    {brandList.map((brand, brandIndex) => (
                      <div
                        key={brand}
                        className="brand-card"
                      >
                        <span className="brand-name">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SparesPage;
