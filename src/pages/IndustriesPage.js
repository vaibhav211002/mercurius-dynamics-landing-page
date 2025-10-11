import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './IndustriesPage.css';

// Import industry SVG icons
import oilGasIcon from '../assets/images/svgs/Oil & Gas.svg';
import constructionIcon from '../assets/images/svgs/construction-cone.svg';
import paperIcon from '../assets/images/svgs/paper.svg';
import metroIcon from '../assets/images/svgs/metro.svg';
import communicationsIcon from '../assets/images/svgs/communications.svg';
import metaIcon from '../assets/images/svgs/meta.svg';
import renewableEnergyIcon from '../assets/images/svgs/renewable-energy.svg';
import automotiveIcon from '../assets/images/svgs/automotive.svg';
import fnbIcon from '../assets/images/svgs/fnb.svg';
import pharmaIcon from '../assets/images/svgs/pharma.svg';
import miningIcon from '../assets/images/svgs/mining-02.svg';
import marineIcon from '../assets/images/svgs/marine.svg';
import defenceIcon from '../assets/images/svgs/defence.svg';
import aerospaceIcon from '../assets/images/svgs/aerospace.svg';
import waterTreatmentIcon from '../assets/images/svgs/water treatment.svg';

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
      icon: <img src={oilGasIcon} alt="Oil & Gas" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={constructionIcon} alt="Cement & Construction" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={paperIcon} alt="Paper & Textile" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={metroIcon} alt="Metro & Railways" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={communicationsIcon} alt="Telecommunications" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={metaIcon} alt="Metal & Steel" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={renewableEnergyIcon} alt="Power & Renewable Energy" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={automotiveIcon} alt="Automotive & Heavy Machinery" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={fnbIcon} alt="Food & Beverage" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={pharmaIcon} alt="Pharmaceutical" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={miningIcon} alt="Mining" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={marineIcon} alt="Marine" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={defenceIcon} alt="Defence" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={aerospaceIcon} alt="Aerospace" style={{width: '28px', height: '28px'}} />,
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
      icon: <img src={waterTreatmentIcon} alt="Water & Wastewater Treatment" style={{width: '28px', height: '28px'}} />,
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
            <h1>Industries We Serve (CNC-specific)</h1>
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
