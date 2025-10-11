import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
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

  const timelineData = [
    {
      year: '1999',
      title: 'Nocle Systems and Controls (formerly Elcon Systems)',
      description: 'Established as an authorized distributor for Rockwell Automation, marking the beginning of our journey in the industrial automation sector.',
      icon: '🏭'
    },
    {
      year: '2006',
      title: 'Wissen Automation India',
      description: 'Founded to deliver advanced automation and control solutions, expanding engineering capabilities across diverse industries.',
      icon: '⚙️'
    },
    {
      year: '2007–2017',
      title: 'Siemens Partnership',
      description: 'Wissen Automation served as an official distributor for Siemens, strengthening global partnerships and driving innovation in automation and process control.',
      icon: '🤝'
    },
    {
      year: '2012',
      title: 'Wissen Automation International Expansion',
      description: 'Expanded operations to Uganda and the African region, offering automation, panel manufacturing, and engineering solutions on an international scale.',
      icon: '🌍'
    },
    {
      year: '2015',
      title: 'Tricolor Automation',
      description: 'Launched to specialize in custom control systems, process automation, PLC programming, and industrial integration providing end-to-end automation expertise.',
      icon: '🎨'
    },
    {
      year: '2016',
      title: 'Bellisimo Solutions',
      description: 'Founded to focus on CNC machining and waterjet cutting for Aerospace and Defence applications, supporting high-precision R&D and production engineering.',
      icon: '✈️'
    },
    {
      year: '2025',
      title: 'Mercurius Dynamics',
      description: 'Established to unite all wings under one global brand, expanding internationally and driving the next era of industrial innovation and excellence.',
      icon: '🚀'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Mercurius Dynamics</h1>
            <p>Driving precision and innovation in industrial solutions.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="row">
            {/* Company Overview */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
            >
              <div className="content-section">
                <h2>
                  <span className="heading-normal">Company </span>
                  <span className="heading-normal">Overview</span>
                </h2>
                <p>
                  Leveraging decades of engineering heritage and guided by the same leadership that has successfully built and managed industrial ventures for over 20 years, Mercurius Dynamics stands as a next-generation enterprise uniting CNC precision manufacturing, industrial automation, and digital IT solutions under one umbrella  built upon a legacy of reliability, and innovation.
We are part of a diversified industrial group that includes Wissen Automation India, Tricolor Automation, and Bellisimo Solutions, together forming a robust ecosystem of engineering, automation, manufacturing, and software expertise.
                </p>
                <p>
At Mercurius Dynamics, we deliver end-to-end solutions from turnkey engineering, CNC machining, waterjet cutting, and fabrication to process automation, control systems, and enterprise software platforms. Our goal is to empower industries with smarter, more connected, and future-ready operations.
With a multidisciplinary team of engineers, developers, and system integrators, we serve core sectors including Aerospace, Defence, Oil & Gas, Rail & Metro, Power, Automotive, Cement, Steel, Chemicals, and FMCG providing comprehensive design, development, and implementation services tailored to the evolving demands of modern industry.
Rooted in the same leadership values that have driven our group’s success for decades.
</p>
              </div>
            </motion.div>

            {/* Mission, Vision & Values */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="content-card">
                <h2>Mission, Vision & Values</h2>
                
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">Mission</h3>
                    <p className="value-description">
To engineer innovative, reliable, and intelligent industrial solutions that combine excellence, and intelligence, empowering industries to achieve greater efficiency, accuracy, and sustainability.                    </p>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">Vision</h3>
                    <p className="value-description">
                      To be a global leader in integrated engineering and automation, recognized for transforming industries through technology, precision, and innovation, while building smarter, more connected, and future-ready operations.
                    </p>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">Values</h3>
                    <p className="value-description">
                      At Mercurius Dynamics, our values define how we build, innovate, and deliver:
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Core Values */}
          <motion.div 
            className="core-values-section"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h1>
              <span className="heading-normal">Our Core </span>
              <span className="heading-normal">Values</span>
            </h1>
            <div className="core-values-grid">
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>Upholding transparency, ethics, and accountability in every partnership.</p>
              </div>
              
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>Continuously advancing technologies to redefine industrial efficiency.</p>
              </div>
              
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>Maintaining uncompromising standards across design, manufacturing, and delivery.</p>
              </div>
              
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Collaboration</h3>
                <p>Working closely with clients and partners to craft tailored solutions.</p>
              </div>
            </div>
          </motion.div>

          <div className="row">
            {/* Certifications & Compliance */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="content-card">
                <h2>Certifications & Compliance</h2>
                <p>
                  We adhere to the highest industry standards and maintain certifications for quality management systems. 
                  Our commitment to compliance ensures that all our products and services meet stringent regulatory 
                  requirements and industry best practices.
                </p>
                <ul className="certifications-list">
                  <li>ISO 9001:2015 Quality Management System</li>
                  <li>AS9100 Aerospace Quality Management</li>
                  <li>ISO 14001 Environmental Management</li>
                  <li>OHSAS 18001 Occupational Health & Safety</li>
                  <li>NADCAP Special Process Certification</li>
                </ul>
              </div>
            </motion.div>

            {/* Our Facilities */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className="content-card">
                <h2>Our Facilities</h2>
                
                <div className="facility-item">
                  <h3 className="facility-title">Panel Manufacturing</h3>
                  <p className="facility-description">
                    Dedicated facility for industrial control panel fabrication, designed to meet global automation and safety standards. Our panels are engineered for reliability, scalability, and seamless integration with modern control systems.
                  </p>
                </div>

                <div className="facility-item">
                  <h3 className="facility-title">Software Development Lab </h3>
                  <p className="facility-description">
A specialized software R&D lab focused on developing industrial control software, SCADA systems, and enterprise platforms
                  </p>
                </div>

                <div className="facility-item">
                  <h3 className="facility-title">Waterjet & CNC Machining</h3>
                  <p className="facility-description">
High-precision CNC and waterjet machining centers equipped to handle a wide range of metals, composites, and polymers  ensuring tight tolerances, superior finishes, and efficient prototype-to-production workflows.
                  </p>
                </div>

                <div className="facility-item">
                  <h3 className="facility-title">Engineering</h3>
                  <p className="facility-description">
An in-house engineering and design unit equipped with advanced CAD, simulation, and PLC programming tools, enabling precise mechanical, electrical, and control system electrical layouts turnkey industrial projects.                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Journey Timeline */}
          <motion.div 
            className="timeline-section"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="section-header">
              <h2>Our Journey</h2>
            </div>
            
            <div className="timeline">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-icon">{item.icon}</div>
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div 
            className="cta-section"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <div className="cta-card">
              <h2>Ready to Start a Project?</h2>
              <p>
                Let's discuss how Mercurius Dynamics can bring value to your operations. 
                Our team of experts is ready to help you achieve your industrial goals.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;