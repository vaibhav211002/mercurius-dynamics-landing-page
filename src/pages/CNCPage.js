import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CNCPage.css';

const CNCPage = () => {
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const toggleIndustry = (industryName) => {
    setExpandedIndustry(expandedIndustry === industryName ? null : industryName);
  };

  return (
    <div className="cnc-page">
      {/* Hero Section */}
      <section className="cnc-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1 className="hero-title">
              <span className="title-main">Precision </span>
              <span className="title-accent">CNC & Waterjet Cutting</span>
            </h1>
            <p className="hero-description">
              Delivering high-quality precision-cut parts with industry-leading turnaround times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="cnc-content">
        <div className="container">
          {/* Capabilities Section */}
          <motion.div 
            className="capabilities-section"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2>
              <span className="heading-normal">Our </span>
              <span className="heading-accent">Capabilities</span>
            </h2>
            <p>A comprehensive suite of tools designed for scalability, security, and superior operational control.</p>

            <div className="row">
              <motion.div 
                className="col col-6"
                {...fadeInUp}
              >
                <div className="capability-card">
                  <h3>Machining Services</h3>
                  <p>Milling, Turning, Tooling, Jigs & Fixtures</p>
                </div>
              </motion.div>
              <motion.div 
                className="col col-6"
                {...fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <div className="capability-card">
                  <h3>Cutting Services</h3>
                  <p>Waterjet, Laser, Composites, Sheet Metal</p>
                </div>
              </motion.div>
              <motion.div 
                className="col col-6"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <div className="capability-card">
                  <h3>Advanced Manufacturing</h3>
                  <p>3D Printing, Die Casting, Surface Finishing, QA</p>
                </div>
              </motion.div>
              <motion.div 
                className="col col-6"
                {...fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="capability-card">
                  <h3>Custom Solutions</h3>
                  <p>Prototyping, On-Demand, R&D Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Materials Section */}
          <motion.div 
            className="materials-section"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h2>
              <span className="heading-normal">Materials We </span>
              <span className="heading-accent">Cut</span>
            </h2>

            <motion.div 
              className="materials-card"
              {...fadeInUp}
            >
              <div className="row">
                <div className="col col-4">
                  <h3 className="material-category">Metals</h3>
                  <ul className="material-list">
                    <li>Aluminum</li>
                    <li>Steel (Stainless, Carbon, Tool)</li>
                    <li>Titanium</li>
                    <li>Brass & Copper</li>
                    <li>Inconel</li>
                  </ul>
                </div>
                <div className="col col-4">
                  <h3 className="material-category">Plastics & Composites</h3>
                  <ul className="material-list">
                    <li>Carbon Fiber</li>
                    <li>Fiberglass</li>
                    <li>G10 / FR-4</li>
                    <li>Acrylic & Polycarbonate</li>
                    <li>ABS, Nylon, Delrin</li>
                  </ul>
                </div>
                <div className="col col-4">
                  <h3 className="material-category">Other Materials</h3>
                  <ul className="material-list">
                    <li>Stone (Granite, Marble)</li>
                    <li>Glass</li>
                    <li>Ceramics</li>
                    <li>Foam</li>
                    <li>Rubber & Gaskets</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

           {/* Industries Section */}
           <motion.div 
             className="industries-section"
             {...fadeInUp}
             transition={{ delay: 0.6 }}
           >
             <h2 className="section-title">
               Industries <span className="accent-text">We Serve</span>
             </h2>
             
             <div className="industries-accordion">
               {[
                 { 
                   name: 'Defence', 
                   description: 'Critical components for defense systems requiring highest precision and quality standards. We maintain strict security protocols and ITAR compliance.',
                   icon: (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                       <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="currentColor"/>
                       <path d="M4 7V17L12 22L20 17V7L12 12L4 7Z" fill="currentColor" opacity="0.6"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Aerospace', 
                   description: 'Lightweight, high-strength parts for aircraft and spacecraft applications. AS9100 certified manufacturing processes ensure reliability.',
                   icon: (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                       <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Automotive', 
                   description: 'Prototypes, tooling, and production parts for automotive industry. From concept to production, we support every phase.',
                   icon: (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                       <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
                       <circle cx="7" cy="16" r="2" fill="currentColor"/>
                       <circle cx="17" cy="16" r="2" fill="currentColor"/>
                     </svg>
                   )
                 }
               ].map((industry, index) => (
                 <div 
                   key={index}
                   className="industry-accordion-item"
                 >
                   <div 
                     className="industry-header"
                     onClick={() => toggleIndustry(industry.name)}
                   >
                     <div className="industry-title-section">
                       <div className="industry-icon">{industry.icon}</div>
                       <span className="industry-name">{industry.name}</span>
                     </div>
                     <div className="industry-chevron">
                       <svg 
                         width="20" 
                         height="20" 
                         viewBox="0 0 24 24" 
                         fill="none"
                         className={expandedIndustry === industry.name ? 'rotated' : ''}
                       >
                         <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                   </div>
                   
                   <AnimatePresence>
                     {expandedIndustry === industry.name && (
                       <motion.div
                         className="industry-content"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ 
                           duration: 0.3, 
                           ease: 'easeInOut'
                         }}
                         style={{ overflow: 'hidden' }}
                       >
                         <p className="industry-description">{industry.description}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               ))}
             </div>
           </motion.div>

           {/* CTA Section */}
        </div>
      </section>
    </div>
  );
};

export default CNCPage;
