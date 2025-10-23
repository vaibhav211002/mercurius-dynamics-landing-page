import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import industry SVG icons from homepage
import oilGasIcon from '../assets/images/svgs/Oil & Gas.svg';
import constructionIcon from '../assets/images/svgs/construction-cone.svg';
import paperIcon from '../assets/images/svgs/paper.svg';
import metroIcon from '../assets/images/svgs/metro.svg';
import metaIcon from '../assets/images/svgs/meta.svg';
import renewableEnergyIcon from '../assets/images/svgs/renewable-energy.svg';
import automotiveIcon from '../assets/images/svgs/automotive.svg';
import fnbIcon from '../assets/images/svgs/fnb.svg';
import pharmaIcon from '../assets/images/svgs/pharma.svg';
import defenceIcon from '../assets/images/svgs/defence.svg';
import aerospaceIcon from '../assets/images/svgs/aerospace.svg';
import waterTreatmentIcon from '../assets/images/svgs/water treatment.svg';
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
                    <li>AR500 Sheets</li>
                    <li>Titanium</li>
                    <li>Inconel</li>
                    <li>Aluminium Alloys</li>
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
                    <li>High-performance composites </li>
                  </ul>
                </div>
                <div className="col col-6">
                  <h3 className="material-category">Plastics & Polymers</h3>
                  <ul className="material-list">
                    <li>Acrylic</li>
                    <li>Polycarbonate</li>
                    <li>PTFE (Teflon)</li>
                    <li>Delrin (POM)</li>
                    <li>UHMWPE</li>
                    <li>PVC</li>
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
                    <li>Bakelite</li>
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
                   applications: 'Armour plates, ballistic panels, Kevlar®/Dyneema® components, tactical housings, and transparent armour systems.',
                   services: 'High-pressure waterjet cutting for armour-grade metals and composites, CNC machining of structural parts, and rapid prototyping for defence assemblies.',
                   icon: <img src={defenceIcon} alt="Defence" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Automotive & Rail', 
                   applications: 'Brake discs, calipers, chassis and mounting brackets, aluminium prototypes, and automotive glass.',
                   services: 'CNC machining and waterjet profiling for precision mechanical parts, rapid prototyping, and high-accuracy production for EV, metro, and rail systems.',
                   icon: <img src={automotiveIcon} alt="Automotive" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Aerospace & Aeronautics', 
                   applications: 'Titanium housings, propulsion components, carbon/Kevlar® dampers, alloy brackets, and actuation systems.',
                   services: 'Cold-cut waterjet and CNC machining of thin-wall titanium, Inconel, and composites — delivering zero heat-affected zones and aerospace-grade precision.',
                   icon: <img src={aerospaceIcon} alt="Aerospace" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Composites & Advanced Materials', 
                   applications: 'Carbon fiber, Kevlar, Dyneema, FRP/CFRP/GFRP laminates, honeycomb panels, and hybrid composites.',
                   services: 'Precision CNC and waterjet cutting with no delamination or fraying; specialized profiling and tooling for lightweight structural components.',
                   icon: <img src={metaIcon} alt="Metal & Steel" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Renewable Energy', 
                   applications: 'Hydrogen fuel cell plates, solar glass panels, wind turbine blades, and composite housings.',
                   services: 'High-precision CNC machining and waterjet cutting for clean-energy systems including bipolar plates, flow channels, and encapsulation glass.',
                   icon: <img src={renewableEnergyIcon} alt="Renewable Energy" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Electronics & Instrumentation', 
                   applications: 'Sensor housings, heat sinks, PCB backplates, and enclosures.',
                   services: 'Fine-tolerance CNC machining and waterjet cutting for metals and polymers used in electronic and control systems.',
                   icon: <img src={pharmaIcon} alt="Pharmaceutical" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Medical & Healthcare', 
                   applications: 'Titanium implants, surgical instruments, fluid valves, and diagnostic housings.',
                   services: 'CNC precision machining of biocompatible materials with burr-free finishes suitable for sterile environments.',
                   icon: <img src={pharmaIcon} alt="Medical" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'Architecture & Design', 
                   applications: 'Architectural facades, decorative panels, inlays, signage, and art installations.',
                   services: 'Waterjet and CNC cutting of metals, stone, and glass for custom architectural and interior design projects.',
                   icon: <img src={constructionIcon} alt="Construction" style={{width: '24px', height: '24px'}} />
                 },
                 { 
                   name: 'R&D & Prototype Manufacturing', 
                   applications: 'Concept models, experimental parts, jigs, and fixtures for product validation.',
                   services: 'Rapid CNC prototyping and multi-material waterjet cutting with design optimization support.',
                   icon: <img src={paperIcon} alt="Paper & Textile" style={{width: '24px', height: '24px'}} />
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
