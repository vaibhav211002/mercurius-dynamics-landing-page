import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './IndustriesPage.css';

// Import industry images
import aerospaceImage from '../assets/images/industries/aerospace.svg';
import automotiveImage from '../assets/images/industries/automotive.svg';
import medicalImage from '../assets/images/industries/medical.svg';
import energyImage from '../assets/images/industries/energy.svg';

import heroimg from '../assets/images/heroes/image.png'

const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [highlightedIndustry, setHighlightedIndustry] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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
      name: 'Oil & Gas',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Automation and electrical systems',
      description: 'Automation and electrical systems in the oil & gas sector require high reliability, safety integrity, and resilience in harsh conditions. Solutions span upstream, midstream, and downstream facilities, enabling safe, efficient, and compliant operations.',
      keyOfferings: [
        'PLC control systems (SIL-3 / TMR / Quad-redundant) for process and safety control',
        'DCS and SCADA systems for refineries, terminals, and pipeline automation',
        'ESD, Fire & Gas, and Safety Instrumented Systems (SIS) with redundant I/O architecture',
        'MCC, PCC, IMCC, VFD, and soft starter panels (flameproof / IEC-61439)',
        'DG synchronization, AMF, and load management systems; 415 V–11 kV distribution',
        'Flow, pressure, level, temperature, density, vibration instrumentation; calibration & loop checks',
        'Control/ESD/actuated valves (ball, globe, butterfly, diaphragm, hydraulic) with positioners',
        'Modbus, Profibus, Foundation Fieldbus, Ethernet/IP, OPC UA integration; historian & alarms',
        'Hazardous-area design (ATEX, IECEx), earthing, cable routing, gland/breather selection',
        'Skid packages (metering, dosing), stainless marshalling panels, purge/pressurization systems',
        'Pre-commissioning, FAT/SAT, commissioning, documentation, AMC & retrofit of legacy systems'
      ]
    },
    {
      name: 'Cement & Construction',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 21H21V19H3V21ZM5 17H19V15H5V17ZM7 13H17V11H7V13ZM9 9H15V7H9V9ZM11 5H13V3H11V5Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Continuous, dust-tolerant control',
      description: 'Continuous, dust-tolerant control from raw mill to packing with energy optimization and reliable drives.',
      keyOfferings: [
        'PLC/SCADA for raw mill, kiln, pre-heater, crusher, VRM, conveyors, packers',
        'MCC, PCC, IMCC, VFD, soft-starter, and field panels; bus-duct/rising mains',
        'APFC panels with detuned reactors; THD/harmonics control and power quality',
        'Flow, level (silo radar), pressure, temperature, and vibration instruments; calibration',
        'Bag filter/dust collection automation, airflow balancing, DP monitoring; AQ sensors',
        'Weigh feeders, belt scales, blending & additive dosing; recipe & set-point control',
        'Energy dashboards, historian, condition monitoring & predictive maintenance',
        'Electrical design docs, cable schedules, installation, I/O checks, commissioning, AMC'
      ]
    },
    {
      name: 'Paper & Textile',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7H21M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      subtitle: 'Stable tension/speed control',
      description: 'Stable tension/speed, recipe control, and utility automation to improve quality and reduce rework.',
      keyOfferings: [
        'PLC/SCADA for dyeing, drying, sizing, calendaring, coating, finishing lines',
        'Tension/speed synchronization (dancer/torque control), winder/rewinder logic',
        'MCC/PCC/IMCC/VFD panels for drives, boilers, chillers, compressors, utilities',
        'Steam/condensate, humidity, room temp, pressure instrumentation; mass flow',
        'Recipes, batch logs, alarms, historian trends, quality SPC dashboards',
        'Energy KPIs for steam/electric; leakage/loss tracking and optimization',
        'E&I installation, calibration, FAT/SAT, commissioning, AMC and drive retrofits'
      ]
    },
    {
      name: 'Metro & Railways',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="7" cy="16" r="2" fill="currentColor"/>
          <circle cx="17" cy="16" r="2" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Centralized supervision',
      description: 'Centralized supervision for stations, depots, and OCCs with fast fault isolation and utility control.',
      keyOfferings: [
        'SCADA, T-SCADA, and Fault Reporting System (FRS) for network-wide supervision & alarms',
        'PLC automation for HVAC, lighting, lifts/escalators, tunnel ventilation (TVF)',
        'MCC/PCC/IMCC/distribution panels for station/depot auxiliary power; ATS/UPS interfaces',
        'BMS integration; PA, fire alarm (FAS), and access control interface panels',
        'Energy dashboards, sub-metering, load-shedding strategies; remote telemetry',
        'EAM integration for asset hierarchy, PM/CM, spares & work orders',
        'Cable engineering, installation, pre-commissioning, testing, commissioning, AMC'
      ]
    },
    {
      name: 'Telecommunications',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      subtitle: 'Carrier-grade uptime',
      description: 'Carrier-grade uptime with tight power/cooling control and network visibility across towers, exchanges, and data centers.',
      keyOfferings: [
        'SCADA and Network Management System (NMS) for multi-site alarms, KPIs, bandwidth & uptime',
        'MCC/PCC/IMCC/VFD panels for facility power, CRAC/CRAH, and chilled water pumps',
        'DG synchronization, AMF, UPS, rectifier/DC-plant monitoring; battery health analytics',
        'Environmental monitoring (temperature, humidity, smoke, water leak, intrusion)',
        'SNMP/Modbus/OPC gateways; dashboards, reports, alert policies & escalation',
        'Power quality, harmonics, and load balancing; bus-duct & PDU integration',
        'Cabling, installation, I/O tests, commissioning, cyber-hardening, AMC'
      ]
    },
    {
      name: 'Metal & Steel',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="6" height="6" fill="currentColor" opacity="0.8"/>
          <rect x="15" y="3" width="6" height="6" fill="currentColor" opacity="0.6"/>
          <rect x="3" y="15" width="6" height="6" fill="currentColor" opacity="0.4"/>
          <rect x="15" y="15" width="6" height="6" fill="currentColor" opacity="0.2"/>
        </svg>
      ),
      subtitle: 'Rugged control systems',
      description: 'Rugged control for furnaces, rolling, casting, and heavy material handling with synchronized drives.',
      keyOfferings: [
        'PLC/DCS for reheating/annealing furnaces, roughing/finishing mills, CCM/Slab/bloom casters',
        'MCC/PCC/IMCC/VFD panels; soft starters, harmonic filters; 415 V–11 kV distribution',
        'Temperature (IR/thermocouple), pressure, flow, vibration instruments; pyrometers',
        'Drive synchronization, master–follower control, interlocks and safety logic',
        'EOT crane, coil handling, transfer-car & conveyor automation; anti-sway and zoning',
        'Water treatment & fume extraction controls; hydraulic/pneumatic skid control',
        'Historian/SCADA for production, energy, downtime; OEE and delay codes',
        'E&I installation, calibration, FAT/SAT, commissioning, AMC & modernization'
      ]
    },
    {
      name: 'Power & Renewable Energy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Coordinated controls',
      description: 'Coordinated controls, protection, and energy visibility for conventional plants and renewables.',
      keyOfferings: [
        'PLC/DCS for turbine, boiler, BOP, ash/coal handling, CW/ACW systems',
        'Substation SCADA/RTU (IEC-61850), bay control units, relays & protection schemes',
        'PCC/MCC/IMCC/APFC/TTA panels; switchboards, bus-ducts, capacitor banks',
        'VFD/servo systems for ID/FD/PA fans, pumps; synchronization & load sharing',
        'EMS dashboards, PQ/harmonics analytics; transformer monitoring & diagnostics',
        'Relay configuration, injection testing, protection coordination studies',
        'Installation, testing, commissioning, retrofits, documentation, AMC'
      ]
    },
    {
      name: 'Automotive & Heavy Machinery',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="7" cy="16" r="2" fill="currentColor"/>
          <circle cx="17" cy="16" r="2" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Motion and test systems',
      description: 'Motion, test, and plant visibility for discrete manufacturing, with integrated quality and traceability.',
      keyOfferings: [
        'PLC/SCADA for assembly cells, transfer lines, conveyors, EoL testing',
        'MCC/IMCC/VFD/servo panels; robot & motion controllers; safety relays',
        'Vision inspection, torque/leak tests; barcode/RFID traceability; Poka-Yoke',
        'Andon/MES hooks; OEE, takt time, downtime & rejection dashboards',
        'Utilities control (compressors, chillers, HVAC) and power monitoring',
        'I/O validation, commissioning, SAT, AMC; legacy PLC/HMI/drive upgrades'
      ]
    },
    {
      name: 'Food & Beverage',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7H21M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      subtitle: 'Hygienic, traceable control',
      description: 'Hygienic, traceable control for batch/continuous processing with utilities optimization.',
      keyOfferings: [
        'PLC/SCADA for mixing, cooking, pasteurization, sterilization, CIP/SIP & packaging',
        'MCC/VFD panels for pumps, mixers, conveyors, chillers, utilities; hygienic design',
        'Flow/temperature/pressure/level/mass instrumentation (sanitary) and calibration',
        'Recipe/batch management, lot traceability, e-records; alarms & historian',
        'HACCP/21 CFR-11 aligned audit trails, access control, reports',
        'Energy/water dashboards; steam & CIP optimization; leak monitoring',
        'Installation, calibration, FAT/SAT, commissioning, AMC; packaging line integration'
      ]
    },
    {
      name: 'Pharmaceutical',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'GxP-compliant automation',
      description: 'GxP-compliant automation with environmental control, batch integrity, and data traceability.',
      keyOfferings: [
        'PLC/SCADA for filling, sterilization, lyophilization, packaging, utilities',
        'BMS/HVAC; AHU sequences, pressure cascades, clean-room mapping & alarms',
        'MCC/VFD panels for PW/WFI loops, chillers, compressors, boilers',
        'Temperature/pressure/differential-pressure/humidity monitoring; EMS trending',
        'Batch/recipe control, e-records, audit trails (21 CFR Part 11 aligned)',
        'Environmental & compressed air quality monitoring; deviation/CAPA reports',
        'Calibration, IQ/OQ support, commissioning, secure backups, AMC'
      ]
    },
    {
      name: 'Mining',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Harsh-duty control',
      description: 'Harsh-duty control for crushing, conveying, beneficiation, and dewatering.',
      keyOfferings: [
        'PLC/SCADA for primary/secondary crushers, screens, mills, thickeners, tailings',
        'MCC/PCC/IMCC/VFD panels; soft starters; 415 V–11 kV distribution',
        'Level/flow/vibration/weight instrumentation; belt weighers & sampler control',
        'Conveyor interlocks, emergency stops, drift/tear detection, chute blocking',
        'Dust suppression control, water sprays; environmental monitoring & reports',
        'Electrical installation, calibration, FAT/SAT, commissioning, AMC'
      ]
    },
    {
      name: 'Marine',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'Engine-room automation',
      description: 'Engine-room, utility, and safety automation for vessels and yards with marine-grade hardware.',
      keyOfferings: [
        'PLC/SCADA for pumps, bilge, ballast, HVAC, freshwater & sewage systems',
        'MCC/IMCC/VFD panels; genset synchronization, AMF, shore-to-ship changeover',
        'Tank level/pressure/temperature instrumentation; alarm & monitoring panels',
        'Navigation lighting and critical alarms; mimic panels',
        'Corrosion-resistant enclosures, cable selection, marine wiring standards',
        'Commissioning, retrofit, documentation, AMC'
      ]
    },
    {
      name: 'Defence',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="currentColor"/>
          <path d="M4 7V17L12 22L20 17V7L12 12L4 7Z" fill="currentColor" opacity="0.6"/>
        </svg>
      ),
      subtitle: 'Mission-critical control',
      description: 'Mission-critical control, ruggedized hardware, and traceable manufacturing for labs, ranges, and production.',
      keyOfferings: [
        'PLC/SCADA for test benches, simulators, climatic/vibration chambers',
        'MCC/IMCC/VFD/servo panels; safety interlocks, e-stops; redundant supplies',
        'Pressure/temperature/vibration/strain DAQ with historian & reports',
        'Secure industrial networking, redundancy, encryption, documentation',
        'CNC machining & waterjet parts (aluminum, titanium, composites); assemblies & fixtures',
        'FAT/SAT, commissioning, MRO, spares provisioning & lifecycle support'
      ]
    },
    {
      name: 'Aerospace',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      subtitle: 'High-precision manufacturing',
      description: 'High-precision manufacturing and qualification systems with full traceability.',
      keyOfferings: [
        'PLC/SCADA for engine/actuator test stands, endurance & vibration rigs',
        'Motion/servo panels; safe torque off, light curtains, emergency stops',
        'Pressure/flow/temp/strain acquisition; calibration benches; reports & historian',
        'Clean-room utilities panels; BMS integration; differential-pressure monitoring',
        'CNC machining & waterjet for alloys/composites; jigs/fixtures; inspection documentation',
        'Documentation packages, calibration, commissioning, preventive maintenance'
      ]
    },
    {
      name: 'Water & Wastewater Treatment',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      subtitle: 'Fail-safe control',
      description: 'Fail-safe control for treatment, pumping, and distribution with remote visibility.',
      keyOfferings: [
        'PLC/SCADA for clarifiers, filters, aeration, chlorination, sludge handling',
        'MCC/VFD panels for pumps, blowers, mixers; duty/standby & auto alternation',
        'Level/flow/DO/pH/ORP/NTU instrumentation; dosing skids & control',
        'RTU telemetry; reservoirs/tanks monitoring; leak/pressure alarms',
        'Energy dashboards; pump scheduling; VFD optimization; night setback',
        'Cabling, installation, I/O checks, FAT/SAT, commissioning, AMC',
        'Secure networking (Modbus TCP/RTU, OPC UA); historian & compliance reports'
      ]
    }
  ];

  const handleCardClick = (industry) => {
    console.log('Setting selectedIndustry to:', industry.name);
    setSelectedIndustry(industry);
  };

  const closeModal = () => {
    setSelectedIndustry(null);
    setHighlightedIndustry(null);
    // Remove URL parameter when modal is closed
    navigate('/industries', { replace: true });
  };

  // Handle URL parameter for highlighting industry
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const industryParam = urlParams.get('industry');
    
    if (industryParam) {
      // Find the industry in our industries array
      const industry = industries.find(ind => ind.name === industryParam);
      if (industry) {
        setHighlightedIndustry(industry.name);
        // Auto-open modal for the highlighted industry
        setTimeout(() => {
          setSelectedIndustry(industry);
        }, 500); // Small delay to allow page to load
      }
    } else {
      // Only clear highlighting if no industry parameter (don't clear selectedIndustry)
      setHighlightedIndustry(null);
    }
  }, [location.search, industries]);

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
            <p>Discover how Mercurius Dynamics empowers diverse sectors and explore our key offerings that drive performance, reliability, and innovation.</p>
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
            <h1>Our Expertise Across Sectors</h1>
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
                className={`industry-card ${highlightedIndustry === industry.name ? 'highlighted' : ''}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleCardClick(industry)}
              >
                <div className="industry-icon">
                  {industry.icon}
                </div>
                  <div className="industry-info">
                    <h3>{industry.name}</h3>
                    <p>{industry.subtitle}</p>
                  </div>
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

      {/* Industry Detail Modal */}
      {console.log('selectedIndustry state:', selectedIndustry)}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div 
            className="industry-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="industry-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-icon">
                  {selectedIndustry.icon}
                </div>
                <div className="modal-title-section">
                  <h2>{selectedIndustry.name}</h2>
                  <p className="modal-subtitle">{selectedIndustry.subtitle}</p>
                </div>
                <button className="modal-close" onClick={closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="modal-content">
                <div className="modal-description">
                  <p>{selectedIndustry.description}</p>
                </div>
                
                {selectedIndustry.keyOfferings && (
                  <div className="modal-offerings">
                    <h3>Key Offerings:</h3>
                    <ul>
                      {selectedIndustry.keyOfferings.map((offering, index) => (
                        <li key={index}>{offering}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndustriesPage;
