import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IndustriesPage.css';

// Import industry images
import aerospaceImage from '../assets/images/industries/aerospace.svg';
import automotiveImage from '../assets/images/industries/automotive.svg';
import medicalImage from '../assets/images/industries/medical.svg';
import energyImage from '../assets/images/industries/energy.svg';

import heroimg from '../assets/images/heroes/image.png'

const IndustriesPage = () => {
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const industries = [
    {
      name: 'Aerospace',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Precision parts for aircraft',
      description: 'We supply critical components for commercial and military aircraft, including structural parts, engine components, and landing gear systems. Our AS9100 certification ensures the highest standards of quality and traceability.'
    },
    {
      name: 'Composites',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="6" height="6" fill="currentColor" opacity="0.8"/>
          <rect x="15" y="3" width="6" height="6" fill="currentColor" opacity="0.6"/>
          <rect x="3" y="15" width="6" height="6" fill="currentColor" opacity="0.4"/>
          <rect x="15" y="15" width="6" height="6" fill="currentColor" opacity="0.2"/>
        </svg>
      ),
      subtitle: 'Advanced composite solutions',
      description: 'Specialized in cutting and machining composite materials including carbon fiber, fiberglass, and advanced polymers for aerospace, automotive, and sporting goods applications.'
    },
    {
      name: 'Electronics',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      subtitle: 'Electronic components & systems',
      description: 'Precision machining of electronic enclosures, heat sinks, and components for consumer electronics, telecommunications, and industrial control systems.'
    },
    {
      name: 'Energy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Efficient energy systems',
      description: 'Components for renewable energy systems, power generation equipment, and energy storage solutions including wind turbines, solar panels, and battery systems.'
    },
    {
      name: 'Robotics',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor" opacity="0.8"/>
          <circle cx="9" cy="5" r="2" fill="currentColor"/>
          <circle cx="15" cy="5" r="2" fill="currentColor"/>
          <path d="M9 5H15" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 11H15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      subtitle: 'Automation for robotic systems',
      description: 'Precision components for industrial robots, automation systems, and robotic arms including joints, brackets, and specialized mounting systems.'
    },
    {
      name: 'Automotive',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="7" cy="16" r="2" fill="currentColor"/>
          <circle cx="17" cy="16" r="2" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Components for vehicle manufacturing',
      description: 'High-precision parts for automotive manufacturing including engine components, transmission parts, and specialized automotive assemblies.'
    },
    {
      name: 'Medical',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'High-precision medical devices',
      description: 'Medical device components, surgical instruments, and precision parts for diagnostic equipment meeting strict FDA and ISO 13485 standards.'
    },
    {
      name: 'Defense',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="currentColor"/>
          <path d="M4 7V17L12 22L20 17V7L12 12L4 7Z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      subtitle: 'Reliable systems for defense',
      description: 'Critical components for defense applications including military vehicles, communication systems, and specialized defense equipment.'
    }
  ];

  const toggleExpanded = (industryName) => {
    setExpandedIndustry(expandedIndustry === industryName ? null : industryName);
  };

  return (
    <div className="industries-page">
      {/* Hero Section */}
     <section className="industries-hero">
  <div className="hero-background">
    <img 
      src={heroimg}
      alt="Digital Background" 
      className="hero-bg-image"
    />
    <div className="hero-overlay"></div> {/* optional dark overlay for text readability */}
  </div>
  <div className="container">
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Industries We Serve</h1>
      <p>Mercurius Dynamics provides precision engineering solutions across a diverse range of industries, ensuring quality and reliability in every application.</p>
    </motion.div>
  </div>
</section>


      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Our Expertise Across Sectors</h2>
            <p>From the skies to the operating room, our components are trusted by leaders.</p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid-section">
        <div className="container">
          <motion.div 
            className="industries-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className={`industry-card ${expandedIndustry === industry.name ? 'expanded' : ''}`}
                variants={fadeInUp}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleExpanded(industry.name);
                  }}
              >
                <div className="industry-header">
                  <div className="industry-icon">
                    {industry.icon}
                  </div>
                  <div className="industry-info">
                    <h3>{industry.name}</h3>
                    <p>{industry.subtitle}</p>
                  </div>
                  <div className="expand-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedIndustry === industry.name && (
                    <motion.div 
                      className="industry-content"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      <p>{industry.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CNC Specific Industries */}
      <section className="cnc-industries-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Industries We Serve (CNC-specific)</h2>
          </motion.div>

          <div className="row">
            <motion.div 
              className="col col-4"
              {...fadeInUp}
            >
              <div className="cnc-industry-card">
                <h3>Defence</h3>
                <div className="expand-indicator">▼</div>
                <p>We manufacture critical components for defence applications, including custom brackets, housings, and precision parts for military hardware, meeting stringent quality and durability standards.</p>
              </div>
            </motion.div>
            <motion.div 
              className="col col-4"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="cnc-industry-card">
                <h3>Aerospace</h3>
                <div className="expand-indicator">▼</div>
                <p>Precision components for aircraft and spacecraft applications, including structural elements, engine parts, and specialized aerospace assemblies.</p>
              </div>
            </motion.div>
            <motion.div 
              className="col col-4"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="cnc-industry-card">
                <h3>Automotive</h3>
                <div className="expand-indicator">▼</div>
                <p>High-precision automotive components including engine parts, transmission components, and specialized automotive assemblies for both OEM and aftermarket applications.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
