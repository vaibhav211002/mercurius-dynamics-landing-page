import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CNCPage.css';

const CNCPage = () => {
  const [expandedIndustry, setExpandedIndustry] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const toggleIndustry = (industryName) => {
    setExpandedIndustry(expandedIndustry === industryName ? null : industryName);
  };

  const capabilities = [
    {
      title: 'Precision Machining',
      description: '5-axis CNC milling with ±0.005mm tolerance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7H21M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Waterjet Cutting',
      description: 'Up to 6" thick materials, complex geometries.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L21 9ZM3 9V7L9 5.5V7.5L3 9ZM12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8ZM12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14ZM12 20C13.1 20 14 20.9 14 22C14 23.1 13.1 24 12 24C10.9 24 10 23.1 10 22C10 20.9 10.9 20 12 20Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Advanced Manufacturing',
      description: 'EDM, grinding, and surface finishing.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Rapid Turnaround',
      description: '24-hour quoting, fast production cycles.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const materials = {
    'Metals': ['Aluminum', 'Steel', 'Stainless Steel', 'Titanium', 'Brass', 'Copper'],
    'Plastics': ['Acrylic', 'Polycarbonate', 'Delrin', 'UHMW', 'Nylon'],
    'Others': ['Carbon Fiber', 'Composites', 'Foam', 'Rubber', 'Glass']
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
            <h2 className="section-title">
              Our <span className="accent-text">Capabilities</span>
            </h2>
            
            <div className="capabilities-grid">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="capability-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="capability-icon">
                    {capability.icon}
                  </div>
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

           {/* Materials Section */}
           <motion.div 
             className="materials-section"
             {...fadeInUp}
             transition={{ delay: 0.4 }}
           >
             <h2 className="section-title">
               Materials <span className="accent-text">We Cut</span>
             </h2>
             
             <div className="materials-grid">
               {Object.entries(materials).map(([category, materialList], index) => (
                 <motion.div
                   key={category}
                   className="material-category"
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                 >
                   <h3 className="category-title">{category}</h3>
                   <ul className="material-list">
                     {materialList.map((material, materialIndex) => (
                       <li key={materialIndex} className="material-item">
                         {material}
                       </li>
                     ))}
                   </ul>
                 </motion.div>
               ))}
             </div>
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
