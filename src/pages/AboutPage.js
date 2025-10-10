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
      year: '2005',
      title: 'Founded Mercurius Dynamics',
      description: 'Started as a small precision engineering company with a vision to revolutionize industrial solutions.',
      icon: '🏭'
    },
    {
      year: '2010',
      title: 'Expanded CNC Machining Capabilities',
      description: 'Invested in state-of-the-art CNC machinery to meet growing demand for precision components.',
      icon: '⚙️'
    },
    {
      year: '2015',
      title: 'Launched Industrial Automation Division',
      description: 'Expanded into automation solutions to help clients optimize their manufacturing processes.',
      icon: '🤖'
    },
    {
      year: '2020',
      title: 'Achieved ISO Certification',
      description: 'Obtained ISO 9001:2015 certification, demonstrating our commitment to quality management.',
      icon: '✅'
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
                  <span className="heading-accent">Overview</span>
                </h2>
                <p>
                  Mercurius Dynamics has been a trusted partner in precision engineering and industrial automation since 2005. Our journey began with a vision to deliver world-class manufacturing solutions that combine innovation with reliability.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities equipped with advanced CNC machining centers, waterjet cutting systems, and comprehensive automation workshops. Our team of experienced engineers and technicians work tirelessly to exceed client expectations.
                </p>
                <p>
                  We serve diverse industries including aerospace, defense, automotive, energy, and medical devices, providing end-to-end solutions from design to delivery.
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">Mission</h3>
                    <p className="value-description">
                      To deliver precision-engineered solutions that empower industries to achieve operational excellence
                    </p>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="value-content">
                    <h3 className="value-title">Vision</h3>
                    <p className="value-description">
                      To be the global leader in industrial engineering solutions, recognized for innovation and quality
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
            <h2>
              <span className="heading-normal">Our Core </span>
              <span className="heading-accent">Values</span>
            </h2>
            <div className="core-values-grid">
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>Unwavering commitment to ethical business practices</p>
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
                <p>Continuous improvement and technological advancement</p>
              </div>
              
              <div className="core-value-card">
                <div className="core-value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>Excellence in every project, no compromises</p>
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
                <p>Partnership approach with clients and suppliers</p>
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
                  <h3 className="facility-title">CNC Machining</h3>
                  <p className="facility-description">
                    State-of-the-art facility equipped with advanced machinery to produce precision components 
                    with tight tolerances and superior surface finishes.
                  </p>
                </div>

                <div className="facility-item">
                  <h3 className="facility-title">Automation Workshops</h3>
                  <p className="facility-description">
                    Designed to create customized automation solutions that optimize industrial processes 
                    and enhance productivity for our clients.
                  </p>
                </div>

                <div className="facility-item">
                  <h3 className="facility-title">CNC Units & OEM Spares</h3>
                  <p className="facility-description">
                    A comprehensive inventory management system ensuring quick and reliable access to 
                    essential parts and components.
                  </p>
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