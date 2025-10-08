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
            <h2>Our Core Products and Services</h2>
            <p>Delivering a full spectrum of engineering capabilities.</p>
          </motion.div>
          
          <div className="services-grid">
            {[
              { title: "CNC & Waterjet", description: "Precision machining and waterjet cutting for complex parts.", image: cncWaterjetImage },
              { title: "Automation", description: "Custom systems to enhance efficiency and productivity.", image: automationImage },
              { title: "Valves", description: "A wide range of high-quality valves for industrial applications.", image: valvesImage },
              { title: "OEM Spares", description: "Reliable spares to keep your operations running smoothly.", image: oemSparesImage }
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

      {/* CTA Section */}
      <section className="cta-section">
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
      </section>
    </div>
  );
};

export default HomePage;