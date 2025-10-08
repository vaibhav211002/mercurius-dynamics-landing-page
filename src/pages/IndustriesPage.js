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
      icon: aerospaceImage,
      subtitle: 'Precision parts for aircraft',
      description: 'We supply critical components for commercial and military aircraft, including structural parts, engine components, and landing gear systems. Our AS9100 certification ensures the highest standards of quality and traceability.'
    },
    {
      name: 'Composites',
      icon: '📦',
      subtitle: 'Advanced composite solutions',
      description: 'Specialized in cutting and machining composite materials including carbon fiber, fiberglass, and advanced polymers for aerospace, automotive, and sporting goods applications.'
    },
    {
      name: 'Electronics',
      icon: '🔌',
      subtitle: 'Electronic components & systems',
      description: 'Precision machining of electronic enclosures, heat sinks, and components for consumer electronics, telecommunications, and industrial control systems.'
    },
    {
      name: 'Energy',
      icon: energyImage,
      subtitle: 'Efficient energy systems',
      description: 'Components for renewable energy systems, power generation equipment, and energy storage solutions including wind turbines, solar panels, and battery systems.'
    },
    {
      name: 'Robotics',
      icon: '🤖',
      subtitle: 'Automation for robotic systems',
      description: 'Precision components for industrial robots, automation systems, and robotic arms including joints, brackets, and specialized mounting systems.'
    },
    {
      name: 'Automotive',
      icon: automotiveImage,
      subtitle: 'Components for vehicle manufacturing',
      description: 'High-precision parts for automotive manufacturing including engine components, transmission parts, and specialized automotive assemblies.'
    },
    {
      name: 'Medical',
      icon: medicalImage,
      subtitle: 'High-precision medical devices',
      description: 'Medical device components, surgical instruments, and precision parts for diagnostic equipment meeting strict FDA and ISO 13485 standards.'
    },
    {
      name: 'Defense',
      icon: '🛡️',
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
                    {typeof industry.icon === 'string' && industry.icon.startsWith('/') ? (
                      <img src={industry.icon} alt={industry.name} />
                    ) : typeof industry.icon === 'string' ? (
                      industry.icon
                    ) : (
                      <img src={industry.icon} alt={industry.name} />
                    )}
                  </div>
                  <div className="industry-info">
                    <h3>{industry.name}</h3>
                    <p>{industry.subtitle}</p>
                  </div>
                  <div className="expand-icon">
                    {expandedIndustry === industry.name ? '▲' : '▼'}
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
