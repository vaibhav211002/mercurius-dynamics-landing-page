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
                <h2>Company Overview</h2>
                <p>
                  Mercurius Dynamics is a leading provider of CNC machining, industrial automation, valves, and OEM spares. 
                  We are committed to delivering high-quality, reliable solutions that exceed customer expectations. 
                  Our state-of-the-art facilities and experienced engineers ensure precision and reliability in every project.
                </p>
                <p>
                  From precision engineering to large-scale automation, we provide comprehensive solutions tailored 
                  to meet the dynamic needs of modern industry. Our focus on innovation, quality, and customer 
                  satisfaction has made us a trusted partner for businesses across various sectors.
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
                  <h3 className="value-title">Mission</h3>
                  <p className="value-description">
                    To provide cutting-edge industrial solutions that empower our clients to achieve their goals 
                    and enhance their operational efficiency.
                  </p>
                </div>

                <div className="value-item">
                  <h3 className="value-title">Vision</h3>
                  <p className="value-description">
                    To be the preferred partner for industrial solutions, recognized for our quality, innovation, 
                    and customer focus in the global marketplace.
                  </p>
                </div>

                <div className="value-item">
                  <h3 className="value-title">Values</h3>
                  <p className="value-description">
                    Integrity, Innovation, Quality, Customer Focus, and Collaboration guide everything we do, 
                    ensuring excellence in every project we undertake.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

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
          <motion.div 
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;