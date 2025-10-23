import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductsPage.css';
import abblogo from '../assets/images/companyLogo/abb.png'
import siemenslogo from '../assets/images/companyLogo/siemens.png'
import rockwelllogo from '../assets/images/companyLogo/rockwellautomation.png'
import allenbradleylogo from '../assets/images/companyLogo/allen_bradley.png'
import ge from '../assets/images/companyLogo/ge.png'
import honeywell from '../assets/images/companyLogo/honeywell.png'
import yaskawa from '../assets/images/companyLogo/yaskawa.png'
import omron from '../assets/images/companyLogo/omron.png'
import mitsubishi from '../assets/images/companyLogo/mitshubi.png'
import schneider from '../assets/images/companyLogo/schnieder.png'
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Automation');

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Product Categories
  const categories = ['Automation', 'Valves'];

  // ✅ Brand Logos per Category

  // ✅ Product Details
  const productCategories = {
    'Automation': [
      { name: 'PLC, DCS, SCADA', description: 'State-of-the-art systems for complete industrial process control.' },
      { name: 'Panels & Drives', description: 'Custom-built control panels and VFDs to optimize motor control.' },
      { name: 'Networks & Instrumentation', description: 'Robust networking and precise measurement instrumentation.' },
      { name: 'Safety Systems', description: 'Comprehensive systems to protect your personnel and assets.' }
    ],
    'Valves': [
      { name: 'Gate & Globe Valves', description: 'High-quality gate and globe valves for various industrial applications.' },
      { name: 'Ball & Butterfly Valves', description: 'Precision ball and butterfly valves for efficient flow control.' },
      { name: 'NRVs & Special Valves', description: 'Non-return valves and specialized valve solutions.' },
      { name: 'Engineered Valves', description: 'Custom engineered valve solutions for specific requirements.' }
    ]
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Industrial Products</h1>
            <p>Explore our comprehensive portfolio of industrial grade products - combining precision, performance, and reliability to meet the evolving demands of various sectors.</p>
            {/* <Link to="/contact" className="btn btn-secondary hero-cta">
              Contact Us
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="category-nav">
        <div className="container">
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
        </div>
      </section>

      {/* Products Section */}
      {/* <section className="products-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>{activeCategory} Products</h2>
          </motion.div>

          <motion.div
            className="products-grid"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {productCategories[activeCategory].map((product, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="product-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Brands Section */}
      {/* <section className="brands-section">
        <div className="container">
          <motion.div className="section-header" {...fadeInUp}>
            <h2>Our Trusted Brands</h2>
            <p>We source components from a vast network of world-leading manufacturers to ensure quality and reliability.</p>
          </motion.div>

          <motion.div
            key={activeCategory} // ✅ Re-render on category change
            className="brands-grid"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {brands[activeCategory].map((brand, index) => (
              <motion.div
                key={`${activeCategory}-${brand.name}`}
                className="brand-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
                <span className="brand-name">{brand.name}</span>
              </motion.div> */}
            {/* ))} */}

            {/* Placeholders */}
            {/* <motion.div className="brand-card placeholder" variants={fadeInUp}>
              <div className="brand-logo placeholder">and more...</div>
            </motion.div>
            <motion.div className="brand-card placeholder" variants={fadeInUp}>
              <div className="brand-logo placeholder">and more...</div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Automation Products Section - Only show when Automation tab is active */}
      {activeCategory === 'Automation' && (
        <motion.section 
          className="automation-products-section"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="container">
            <motion.div 
              className="section-header"
              variants={fadeInUp}
            >
              <h1>Automation Products</h1>
              <p>Comprehensive solutions for industrial automation and control systems.</p>
            </motion.div>
            
            <motion.div 
              className="automation-products-grid"
              variants={staggerChildren}
            >
            {[
              {
                title: "Proprietary Software Solutions",
                items: [
                  "T-SCADA / Fault Reporting System (FRS)",
                  "Enterprise Asset Management System",
                  "Building Management System (BMS)",
                  "EDMS (Electronic Document Management System)",
                  "Network Management System",
                  "Inventory Management System",
                  "Project Management System",
                  "Custom Software Development"
                ]
              },
              {
                title: "Automation Hardware & Control Systems",
                items: [
                  "PLC Systems",
                  "DCS Systems",
                  "SCADA / Visualization Solutions",
                  "Foundation Fieldbus Communication",
                  "Industrial Networking (Ethernet/IP, Modbus TCP/IP, RTU)",
                  "Servo Drives & Motors",
                  "VFDs & Motion Expansion Modules",
                  "Stepper Drives & Motion Controllers"
                ]
              },
              {
                title: "Electrical Panels & Control Boards",
                items: [
                  "PLC / SCADA Panels",
                  "Motor Control Centers (MCC) – Fixed & Drawout Type",
                  "Power Control Centers (PCC)",
                  "Intelligent MCC (IMCC)",
                  "VFD Panels",
                  "TTA MCC Panels (IEC-61439 Compliant)",
                  "APFC Panels / Power Factor Improvement Panels",
                  "Soft Starter Panels",
                  "LT Panels / HT Panels",
                  "HMI Panels / Servo Drive Panels",
                  "Starter Panels"
                ]
              },
              {
                title: "Distribution Solutions",
                items: [
                  "Distribution Board Panels",
                  "Outdoor Feeder Pillars",
                  "Busduct / Rising Mains",
                  "AMF Panels",
                  "DG Synchronization Panels",
                  "Automatic Street Light Switching Panels",
                  "Online UPS Systems",
                  "Transformers"
                ]
              },
              {
                title: "Power & Electrical Systems",
                items: [
                  "Distribution Transformers",
                  "LT Metering Systems",
                  "Smart Substation Monitoring Systems",
                  "Vibration Monitoring Systems",
                  "Surge Protection Devices (SPD)",
                  "Circuit Breakers (MCB, MCCB)"
                ]
              },
              {
                title: "Instrumentation & Measurement",
                items: [
                  "Sensors: Proximity, Photoelectric, Ultrasonic, Vision Sensors",
                  "Flow Instruments",
                  "Level Instruments",
                  "Pressure Instruments",
                  "Temperature Instruments",
                  "Energy Meters"
                ]
              },
              {
                title: "Custom Solutions",
                items: [
                  "Tailored automation systems for unique requirements",
                  "Custom software development and integration",
                  "Specialized control panel design and manufacturing"
                ],
                isCustom: true
              }
              ].map((product, index) => (
                <motion.div 
                  key={index}
                  className={`automation-product-card ${product.isCustom ? 'custom-solutions-card' : ''}`}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                >
                <h3>{product.title}</h3>
                <ul>
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Valves Products Section - Only show when Valves tab is active */}
      {activeCategory === 'Valves' && (
        <motion.section 
          className="valves-products-section"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="container">
            <motion.div 
              className="section-header"
              variants={fadeInUp}
            >
              <h1>Valves & Instrumentation</h1>
              <p>Comprehensive range of industrial valves and control systems.</p>
            </motion.div>
            
            <motion.div 
              className="valves-products-grid"
              variants={staggerChildren}
            >
              {[
                {
                  title: "Gate Valves",
                  items: [
                    "Gate Valve",
                    "Forged Gate Valve",
                    "Knife Edge Gate Valve",
                    "Pneumatic Knife Gate Valve"
                  ]
                },
                {
                  title: "Globe Valves",
                  items: [
                    "Globe Valve",
                    "Forged Globe Valve",
                    "Piston Valve / Piston Valve Ring",
                    "On-Off Globe Control Valve"
                  ]
                },
                {
                  title: "Check Valves / NRVs",
                  items: [
                    "Swing Check Valve",
                    "Dual Plate NRV",
                    "Wafer Type NRV",
                    "In-Line NRV",
                    "Non-Slam NRV",
                    "Forged NRV Valve"
                  ]
                },
                {
                  title: "Ball Valves",
                  items: [
                    "Ball Valve (Standard)",
                    "Forged Ball Valve",
                    "High Pressure Ball Valve",
                    "Jacketed Ball Valve",
                    "Multi-Port Ball Valve (2/3/4 way)",
                    "Flush Bottom Ball Valve",
                    "Wafer Ball Valve",
                    "TC End Ball Valve",
                    "Pneumatic Actuated Ball Valve"
                  ]
                },
                {
                  title: "Butterfly Valves",
                  items: [
                    "Butterfly Valve (Manual)",
                    "Pneumatic Butterfly Valve"
                  ]
                },
                {
                  title: "Needle & Manifold Valves",
                  items: [
                    "Needle Valve",
                    "Manifold Valves (2-way, 3-way, 5-way)"
                  ]
                },
                {
                  title: "Special Application Valves",
                  items: [
                    "Diaphragm Control Valve",
                    "TC End Diaphragm Valve",
                    "Hydraulic Control Valve",
                    "Flush Bottom Tank Valve",
                    "Plug Valve"
                  ]
                },
                {
                  title: "Sight Glasses",
                  items: [
                    "Pad Mounted View Glass",
                    "Double Window View Glass",
                    "Full View Sight Glass",
                    "Rectangular Sight Glass"
                  ]
                },
                {
                  title: "Level & Float Instruments",
                  items: [
                    "Reflex Level Gauge",
                    "SS Float Switch",
                    "Float & Board Level Indicator",
                    "Ball Float Valve"
                  ]
                },
                {
                  title: "Strainers & Filters",
                  items: [
                    "Y-Type Strainer",
                    "Basket Type Strainer",
                    "Suction Strainer",
                    "T-Type Strainer",
                    "Temporary Strainer",
                    "Gasket Type Strainer",
                    "Duplex Strainer",
                    "SS Multi-Cartridge Filter"
                  ]
                },
                {
                  title: "Steam Traps",
                  items: [
                    "TD Steam Trap (Thermodynamic)",
                    "Bucket Steam Trap",
                    "Ball Float Steam Trap"
                  ]
                },
                {
                  title: "Actuators",
                  items: [
                    "i-Tork Multi-Turn Actuators",
                    "i-Tork Quarter-Turn Actuators",
                    "Linear Power Cylinders",
                    "Electro-Pneumatic Positioners",
                    "Pneumatic / Automated Valves (Butterfly, Ball, Knife Gate)",
                    "Solenoid Valves",
                    "Limit Switches",
                    "Air Filter Regulators",
                    "Air Boosters / Relays"
                  ]
                },
                {
                  title: "Instrumentation & Accessories",
                  items: [
                    "Pressure Gauge Snubber",
                    "Orifice Plate",
                    "Ball Valve Seat",
                    "Nut Bolts & Gaskets"
                  ]
                }
              ].map((product, index) => (
                <motion.div 
                  key={index}
                  className={`valves-product-card ${product.isCustom ? 'custom-solutions-card' : ''}`}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{product.title}</h3>
                  <ul>
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default ProductsPage;