import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CNCPage.css';

const CNCPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const handleCardClick = (industry) => {
    setSelectedIndustry(selectedIndustry === industry ? null : industry);
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
            <h1>
              <span className="heading-normal">Our </span>
              <span className="heading-normal">Capabilities</span>
            </h1>
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

          {/* Key Benefits Section */}
          <motion.div 
            className="key-benefits-section"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h1>
              <span className="heading-normal">Key </span>
              <span className="heading-normal">Benefits</span>
            </h1>
            
            <div className="benefits-grid">
              {[
                {
                  title: "High Precision Cutting",
                  description: "Tolerances of ±0.003\""
                },
                {
                  title: "Burr-Free Edges",
                  description: "No secondary finishing required"
                },
                {
                  title: "Low Contact Force",
                  description: "Ideal for delicate or complex parts"
                },
                {
                  title: "Exceptional Positional Accuracy",
                  description: "±0.003\" precision"
                },
                {
                  title: "Zero Heat-Affected Zone (HAZ)",
                  description: "No thermal distortion"
                },
                {
                  title: "Versatile Material Capability",
                  description: "Suitable for nearly all materials"
                },
                {
                  title: "Minimal Kerf Width",
                  description: "Maximizes material efficiency"
                },
                {
                  title: "No Distortion or Warping",
                  description: "Maintains geometric accuracy"
                },
                {
                  title: "Minimal Fixturing Required",
                  description: "Faster setup, lower cost"
                },
                {
                  title: "Superior Composite Results",
                  description: "No delamination, no fraying"
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="benefit-card"
                  {...fadeInUp}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="benefit-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="benefit-content">
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
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
            <h1>
              <span className="heading-normal">Materials We </span>
              <span className="heading-normal">Cut</span>
            </h1>

            <motion.div 
              className="materials-card"
              {...fadeInUp}
            >
              <div className="row">
                <div className="col col-6">
                  <h3 className="material-category">Metals & Alloys</h3>
                  <ul className="material-list">
                    <li>Stainless Steel</li>
                    <li>Mild Steel</li>
                    <li>AR500 Sheets</li>
                    <li>Titanium</li>
                    <li>Inconel</li>
                    <li>Aluminium Alloys</li>
                    <li>Brass</li>
                    <li>Copper</li>
                    <li>Bronze</li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Composites & Advanced Materials</h3>
                  <ul className="material-list">
                    <li>Carbon Fiber</li>
                    <li>Kevlar</li>
                    <li>Aramid</li>
                    <li>Dyneema</li>
                    <li>Fiberglass</li>
                    <li>FRP Panels</li>
                    <li>Hybrid Carbon-Kevlar</li>
                    <li>High-performance composite laminates</li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Plastics & Polymers</h3>
                  <ul className="material-list">
                    <li>Acrylic</li>
                    <li>Polycarbonate</li>
                    <li>PTFE (Teflon)</li>
                    <li>Nylon</li>
                    <li>Delrin (POM)</li>
                    <li>UHMWPE</li>
                    <li>ABS</li>
                    <li>PVC</li>
                    <li>Rubber</li>
                    <li>Foam</li>
                    <li>Gasket Materials</li>
                    <li>Insulation</li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Natural & Engineered Stone</h3>
                  <ul className="material-list">
                    <li>Granite</li>
                    <li>Marble</li>
                    <li>Quartz</li>
                    <li>Slate</li>
                    <li>Corian</li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Glass & Ceramics</h3>
                  <ul className="material-list">
                    <li>Glass</li>
                    <li>Laminated Glass</li>
                    <li>Porcelain</li>
                    <li>Ceramic Composites</li>
                    <li>Silicon</li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Others (Custom & Specialty Materials)</h3>
                  <ul className="material-list">
                    <li>Wood</li>
                    <li>MDF</li>
                    <li>Leather</li>
                    <li>Laminates</li>
                    <li>ACP (Aluminium Composite Panels)</li>
                    <li>Phenolic Boards</li>
                    <li>Bakelite</li>
                    <li>Technical Fabrics</li>
                    <li>Specialty Materials</li>
                  </ul>
                </div>
              </div>
              
              <div className="materials-note">
                <p><strong>Note:</strong> We can cut almost any material tailored precisely to your project's design, tolerance, and performance requirements.</p>
              </div>
            </motion.div>
          </motion.div>

           {/* Industries Section */}
           <motion.div 
             className="industries-section"
             {...fadeInUp}
             transition={{ delay: 0.6 }}
           >
             <h1 className="section-title">
               Industrial <span className="heading-normal">Application</span>
             </h1>
             
             <div className="industries-grid">
               {[
                 { 
                   name: 'Defence', 
                   subtitle: 'Mission-critical control',
                   applications: 'Armour plates, ballistic panels, Kevlar®/Dyneema® components, tactical housings, and transparent armour systems.',
                   services: 'High-pressure waterjet cutting for armour-grade metals and composites, CNC machining of structural parts, and rapid prototyping for defence assemblies.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="currentColor"/>
                       <path d="M4 7V17L12 22L20 17V7L12 12L4 7Z" fill="currentColor" opacity="0.6"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Automotive & Rail', 
                   subtitle: 'Motion and test systems',
                   applications: 'Brake discs, calipers, chassis and mounting brackets, aluminium prototypes, and automotive glass.',
                   services: 'CNC machining and waterjet profiling for precision mechanical parts, rapid prototyping, and high-accuracy production for EV, metro, and rail systems.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
                       <circle cx="7" cy="16" r="2" fill="currentColor"/>
                       <circle cx="17" cy="16" r="2" fill="currentColor"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Aerospace & Aeronautics', 
                   subtitle: 'High-precision manufacturing',
                   applications: 'Titanium housings, propulsion components, carbon/Kevlar® dampers, alloy brackets, and actuation systems.',
                   services: 'Cold-cut waterjet and CNC machining of thin-wall titanium, Inconel, and composites — delivering zero heat-affected zones and aerospace-grade precision.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Composites & Advanced Materials', 
                   subtitle: 'Specialized profiling and tooling',
                   applications: 'Carbon fiber, Kevlar, Dyneema, FRP/CFRP/GFRP laminates, honeycomb panels, and hybrid composites.',
                   services: 'Precision CNC and waterjet cutting with no delamination or fraying; specialized profiling and tooling for lightweight structural components.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7H21M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Renewable Energy', 
                   subtitle: 'Coordinated controls',
                   applications: 'Hydrogen fuel cell plates, solar glass panels, wind turbine blades, and composite housings.',
                   services: 'High-precision CNC machining and waterjet cutting for clean-energy systems including bipolar plates, flow channels, and encapsulation glass.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Electronics & Instrumentation', 
                   subtitle: 'Fine-tolerance machining',
                   applications: 'Sensor housings, heat sinks, PCB backplates, and enclosures.',
                   services: 'Fine-tolerance CNC machining and waterjet cutting for metals and polymers used in electronic and control systems.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                       <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                       <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Medical & Healthcare', 
                   subtitle: 'Biocompatible materials',
                   applications: 'Titanium implants, surgical instruments, fluid valves, and diagnostic housings.',
                   services: 'CNC precision machining of biocompatible materials with burr-free finishes suitable for sterile environments.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'Architecture & Design', 
                   subtitle: 'Custom architectural projects',
                   applications: 'Architectural facades, decorative panels, inlays, signage, and art installations.',
                   services: 'Waterjet and CNC cutting of metals, stone, and glass for custom architectural and interior design projects.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M3 21H21V19H3V21ZM5 17H19V15H5V17ZM7 13H17V11H7V13ZM9 9H15V7H9V9ZM11 5H13V3H11V5Z" fill="currentColor"/>
                     </svg>
                   )
                 },
                 { 
                   name: 'R&D & Prototype Manufacturing', 
                   subtitle: 'Rapid prototyping',
                   applications: 'Concept models, experimental parts, jigs, and fixtures for product validation.',
                   services: 'Rapid CNC prototyping and multi-material waterjet cutting with design optimization support.',
                   icon: (
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                       <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                     </svg>
                   )
                 }
               ].map((industry, index) => (
                 <motion.div 
                   key={index}
                   className={`industry-card ${selectedIndustry === industry ? 'selected' : ''}`}
                   {...fadeInUp}
                   transition={{ delay: index * 0.05 }}
                   onClick={() => handleCardClick(industry)}
                 >
                   <div className="card-arrow">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                       <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                   <div className="industry-icon">{industry.icon}</div>
                   <h3 className="industry-name">{industry.name}</h3>
                   <p className="industry-subtitle">{industry.subtitle}</p>
                 </motion.div>
               ))}
             </div>
           </motion.div>

           {/* Industry Information Display */}
           <AnimatePresence>
             {selectedIndustry && (
               <motion.div
                 className="industry-modal-overlay"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.3 }}
                 onClick={() => setSelectedIndustry(null)}
               >
                 <motion.div
                   className="industry-modal"
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   transition={{ duration: 0.3, ease: "easeOut" }}
                   onClick={(e) => e.stopPropagation()}
                 >
                   <div className="modal-header">
                     <div className="modal-icon">{selectedIndustry.icon}</div>
                     <div className="modal-title-section">
                       <h2>{selectedIndustry.name}</h2>
                       <p className="modal-subtitle">{selectedIndustry.subtitle}</p>
                     </div>
                     <button 
                       className="modal-close"
                       onClick={() => setSelectedIndustry(null)}
                     >
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                         <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       </svg>
                     </button>
                   </div>
                   
                   <div className="modal-content">
                     <div className="modal-description">
                       <h3>Applications</h3>
                       <p>{selectedIndustry.applications}</p>
                     </div>
                     <div className="modal-description">
                       <h3>Services</h3>
                       <p>{selectedIndustry.services}</p>
                     </div>
                   </div>
                 </motion.div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* CTA Section */}
        </div>
      </section>
    </div>
  );
};

export default CNCPage;
