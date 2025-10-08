import React from 'react';
import { motion } from 'framer-motion';
import './ServicesPage.css';

const ServicesPage = () => {
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

  const services = [
    {
      title: "CNC Machining",
      description: "High-precision components manufactured to your exact specifications."
    },
    {
      title: "Industrial Automation",
      description: "Streamlining your operations with custom robotics and control systems."
    },
    {
      title: "Valves & Actuators",
      description: "Reliable flow control solutions for various industrial applications."
    },
    {
      title: "OEM Spares",
      description: "Authentic replacement parts to maintain equipment integrity and performance."
    },
    {
      title: "Pumps & Systems",
      description: "Comprehensive pump solutions, including repair, maintenance, and sales."
    },
    {
      title: "Piping & Tubing",
      description: "Custom fabrication and installation of industrial piping systems."
    },
    {
      title: "Heat Exchangers",
      description: "Efficient thermal management solutions for industrial processes."
    },
    {
      title: "Electrical Panels",
      description: "Design and assembly of custom control panels for automation systems."
    },
    {
      title: "Gear Boxes",
      description: "Supply and service of industrial gearboxes for heavy machinery."
    },
    {
      title: "Motor & Drives",
      description: "Sales and support for electric motors and variable frequency drives."
    },
    {
      title: "Hydraulics & Pneumatics",
      description: "Component supply and system design for fluid power applications."
    },
    {
      title: "Reverse Engineering",
      description: "Recreating obsolete or hard-to-find parts with modern techniques."
    },
    {
      title: "AMC & Services",
      description: "Annual Maintenance Contracts and on-demand support."
    },
    {
      title: "Custom Solutions",
      description: "Have a unique challenge? We develop tailored solutions to meet your needs.",
      isSpecial: true
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Comprehensive</h1>
            <p>From precision engineering to large-scale automation, we provide a full spectrum of services to meet the dynamic needs of modern industry.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div 
            className="services-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={`service-card ${service.isSpecial ? 'special' : ''}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Our Capabilities</h2>
            <p>A comprehensive suite of tools designed for scalability, security, and superior operational control.</p>
          </motion.div>

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
        </div>
      </section>

      {/* Materials Section */}
      <section className="materials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Materials We Cut</h2>
          </motion.div>

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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Key Benefits</h2>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Exceptional Precision & Tight Tolerances",
              "No Heat-Affected Zone (HAZ) Preserving Material Integrity",
              "High-Throughput for Rapid Turnaround",
              "Perfectly Smooth, Burr-Free Edges",
              "Ability to Create Complex & Intricate Geometries",
              "Unmatched Material Versatility"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-item"
                variants={fadeInUp}
              >
                <span className="benefit-check">✓</span>
                <span className="benefit-text">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
