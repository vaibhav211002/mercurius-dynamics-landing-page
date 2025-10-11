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
              <span className="hero-title-line">Engineering the Future</span>
              <span className="hero-title-line purple"> Industrial Automation</span>
              <span className="hero-title-line"> CNC Precision & Scalable IT Solutions</span>
            </h1>
            <p className="hero-description">
              Delivering turnkey engineering and digital transformation solutions from intelligent automation to precision manufacturing and smart infrastructure.
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
          Leveraging decades of engineering heritage and guided by leadership with over 20 years of proven industrial success, Mercurius Dynamics stands as a next-generation enterprise uniting CNC precision manufacturing, industrial automation, and digital IT solutions under one umbrella built on a legacy of precision, reliability, and innovation.
        </p>
        <p>
          We are an integrated engineering organization delivering end-to-end solutions from turnkey engineering, CNC machining, waterjet cutting, and fabrication to process automation, control systems, and enterprise software platforms.
        </p>
        <div className="about-contact-btn">
          <Link to="/about" className="btn btn-primary">
            Learn More
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
            <h1>Our Products and Services</h1>
            <p>Delivering a full spectrum of Engineering, Manufacturing, and Digital Automation capabilities.</p>
          </motion.div>
          
          <div className="services-grid">
            {[
              { title: "Automation", description: "Custom-engineered automation systems that enhance productivity and operational efficiency across diverse industries.", image: automationImage },
              { title: "OEM Spares", description: "Reliable spares to keep your operations running smoothly.", image: oemSparesImage },
              { title: "CNC & Waterjet", description: "Advanced CNC machining and waterjet cutting services for intricate, high-tolerance components.", image: cncWaterjetImage },
              { title: "Valves", description: "A comprehensive range of industrial valves engineered for durability, safety, and performance.", image: valvesImage },
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
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Single Learn More Button */}
          <div className="services-learn-more">
            <Link to="/services" className="btn btn-primary">
              Learn More
            </Link>
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
                name: 'Oil & Gas', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Cement & Construction', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21H21V19H3V21ZM5 17H19V15H5V17ZM7 13H17V11H7V13ZM9 9H15V7H9V9ZM11 5H13V3H11V5Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Paper & Textile', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Metro & Railways', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V8C19 6.9 18.1 6 17 6H7C5.9 6 5 6.9 5 8V16ZM7 8H17V16H7V8Z" fill="currentColor"/>
                    <circle cx="8" cy="12" r="1" fill="currentColor"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    <circle cx="16" cy="12" r="1" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Telecommunications', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Metal & Steel', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Power & Renewable Energy', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Automotive & Heavy Machinery', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 11L6.5 6.5H17.5L19 11M5 11H3V13H5V11M19 11H21V13H19V11M5 11V16H19V11" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="7" cy="16" r="2" fill="currentColor"/>
                    <circle cx="17" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Food & Beverage', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="currentColor"/>
                    <path d="M8 12H16V14H8V12ZM8 16H16V18H8V16Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Pharmaceutical', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Mining', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Marine', 
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
                name: 'Aerospace', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                name: 'Water & Wastewater Treatment', 
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9ZM19 9H14V4H5V21H19V9Z" fill="currentColor"/>
                    <path d="M12 8C15.31 8 18 10.69 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 10.69 8.69 8 12 8ZM12 10C9.79 10 8 11.79 8 14C8 16.21 9.79 18 12 18C14.21 18 16 16.21 16 14C16 11.79 14.21 10 12 10Z" fill="currentColor"/>
                    <path d="M12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12Z" fill="currentColor"/>
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
                <Link to={`/industries?industry=${encodeURIComponent(industry.name)}`} className="industry-button">
                  View Details
                </Link>
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