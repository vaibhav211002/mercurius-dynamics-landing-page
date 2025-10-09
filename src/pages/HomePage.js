import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Import service images
import cncWaterjetImage from '../assets/images/services/cnc-waterjet.png';
import automationImage from '../assets/images/services/automation.png';
import valvesImage from '../assets/images/services/valves.png';
import oemSparesImage from '../assets/images/services/oem-spares.png';
import image from '../assets/images/industries/image.png'


const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <span className="hero-title-line">Precision</span>
              <span className="hero-title-line purple">CNC & Waterjet</span>
              <span className="hero-title-line">Cutting Services</span>
            </h1>
            <p className="hero-description">
              Delivering high-quality, precision-cut parts for diverse industries with advanced CNC machining and waterjet cutting technologies.
            </p>
            <Link to="/contact" className="btn btn-secondary hero-cta">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
     <section className="about-section">
  <div className="container">
    <div className="row">
      <motion.div 
        className="col col-6"
        {...fadeInUp}
      >
        <h2>About Mercurius Dynamics</h2>
        <p>
          We are a leading provider of CNC machining, industrial automation, valves, and OEM spares, 
          committed to delivering high-quality solutions that exceed customer expectations. Our state-of-the-art 
          facilities and experienced engineers ensure precision and reliability in every project.
        </p>
        <p>
          From precision engineering to large-scale automation, we provide comprehensive solutions tailored 
          to meet the dynamic needs of modern industry.
        </p>
        <div className="about-contact-btn">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="col col-6"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <div className="about-image">
          <img src={image} alt="Facility Image" className="about-img" />
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Our Products and Services</h2>
            <p>Delivering a full spectrum of Engineering & Software capabilities.</p>
          </motion.div>
          
          <div className="services-grid">
            {[
              { title: "Automation", description: "Custom systems to enhance efficiency and productivity.", image: automationImage },
              { title: "OEM Spares", description: "Reliable spares to keep your operations running smoothly.", image: oemSparesImage },
              { title: "CNC & Waterjet", description: "Precision machining and waterjet cutting for complex parts.", image: cncWaterjetImage },
              { title: "Valves", description: "A wide range of high-quality valves for industrial applications.", image: valvesImage },
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="btn btn-outline">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h1>Industries We Serve</h1>
            <p>Providing expert solutions across a diverse range of sectors.</p>
          </motion.div>
          
          <div className="industries-grid">
            {[
              { 
                name: 'Aerospace', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Defence', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="currentColor"/>
                    <path d="M4 7V17L12 22L20 17V7L12 12L4 7Z" fill="currentColor" opacity="0.6"/>
                  </svg>
                )
              },
              { 
                name: 'Automotive', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="7" cy="16" r="2" fill="currentColor"/>
                    <circle cx="17" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Energy', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Composites', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="6" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="15" y="3" width="6" height="6" fill="currentColor" opacity="0.6"/>
                    <rect x="3" y="15" width="6" height="6" fill="currentColor" opacity="0.4"/>
                    <rect x="15" y="15" width="6" height="6" fill="currentColor" opacity="0.2"/>
                  </svg>
                )
              },
              { 
                name: 'Medical', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Electronics', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )
              },
              { 
                name: 'Robotics', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor" opacity="0.8"/>
                    <circle cx="9" cy="5" r="2" fill="currentColor"/>
                    <circle cx="15" cy="5" r="2" fill="currentColor"/>
                    <path d="M9 5H15" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 11H15" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )
              },
              { 
                name: 'Consumer', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" fill="currentColor"/>
                  </svg>
                )
              },

            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="industry-card"
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <span className="industry-name">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            {...fadeInUp}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's build the future together. Upload your drawings for a fast, accurate quote from our engineering team.
            </p>
            <Link to="/request-quote" className="btn btn-secondary cta-button">
              Upload Drawings & Get Quote
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;