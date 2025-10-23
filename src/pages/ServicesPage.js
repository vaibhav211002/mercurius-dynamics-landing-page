import React from 'react';
import { motion } from 'framer-motion';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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

  const services = [
    {
      title: "Proprietary Solutions ",
      items: [
        "T-SCADA / Fault Reporting System Development & Integration",
        "Asset Management Software Deployment",
        "EDMS (Electronic Document Management System)",
        "Building Management System (BMS)",
        "Energy Management System (EMS)",
        "Network Management System (NMS)",
        "Inventory Management System",
        "Custom IoT Solutions",
        "Consulting Services",
      ]
    },
    {
      title: "Automation Engineering Services",
      items: [
        "Process Automation (Batch, Continuous & Discrete)",
        "Machine Control Systems",
        "Information Solutions & MES Integration",
        "SCADA, PLC & DCS Programming",
        "HMI / Operator Interface Design",
        "Foundation Fieldbus & Protocol Integration",
        "Industrial Network Design & Commissioning"
      ]
    },
    {
      title: "Panel Building & Electrical Integration",
      items: [
        "MCC, PCC, IMCC, VFD, APFC, HT/LT Panel Design & Fabrication",
        "Field Panel Assembly (Feeder Pillars, Control Panels)",
        "PLC Panel Building (Fixed / Drawout)",
        "Electrical System Testing & Commissioning",
        "Transformer & UPS Integration"
      ]
    },
    {
      title: "Smart Solutions & IoT",
      items: [
        "IIoT Implementation",
        "Cloud-based Monitoring Solutions",
        "Telemetry Systems Setup",
        "Smart Street Lighting Control",
        "Energy Management Solutions"
      ]
    },
    {
      title: "End-to-End Execution Services",
      items: [
        "Engineering Design & Drawing Preparation",
        "Procurement & Vendor Coordination",
        "Installation & Site Supervision",
        "Commissioning & Site Acceptance Testing",
        "Retrofitting & Migration of Legacy Systems",
        "Legacy Valve Modernization",
        "AMC (Annual Maintenance Contract)",
        "Troubleshooting & Remote Support"
      ]
    },
    {
      title: "Specialized Integration Services",
      items: [
        "Safety Interlock Systems",
        "Servo Drive Configuration",
        "Load Sharing Systems",
        "DG Synchronization & AMF Logic",
        "APFC Control Logic Setup",
        "Soft Starter Implementation",
        "Busduct / Rising Main Systems Setup",
        "SIS / ESD Integration & Safety Instrumented Systems"
      ]
    },
    {
      title: "Robotics & Automation",
      items: [
        "Robotics & Pick-and-Place Automation",
        "Servo Drive & Motion Control Solutions",
        "Vision-Based Robotic Systems",
        "Motion Planning & Optimization"
      ]
    },
    {
      title: "Field Services",
      items: [
        "Electrical & Instrumentation (E&I) Field Services",
        "On-site Testing, Calibration & Maintenance"
      ]
    },
    {
      title: "Predictive Analytics & AI / ML",
      items: [
        "Real-time Data Acquisition & Analytics",
        "Predictive Analytics using Machine Learning",
        "Data-Driven Asset Optimization"
      ]
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
            <h1>Our Comprehensive Services</h1>
            <p>From precision engineering to large-scale automation, Mercurius Dynamics delivers a full spectrum of turnkey solutions to meet the evolving needs of modern industry.</p>
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
                className="service-card"
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            {...fadeInUp}
          >
            <h1>Ready to Start a Project?</h1>
            <p>Let's discuss how we can help bring your vision to life</p>
            <Link to="/contact" className="btn btn-primary cta-button">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
