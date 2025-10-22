import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Import service images
import cncWaterjetImage from '../assets/images/services/cnc-waterjet.jpg';
import automationImage from '../assets/images/services/automations.jpg';
import valvesImage from '../assets/images/services/valves.jpg';
import oemSparesImage from '../assets/images/services/automation.jpg';
import image from '../assets/images/industries/image.png'

// Import industry SVG icons
import oilGasIcon from '../assets/images/svgs/Oil & Gas.svg';
import constructionIcon from '../assets/images/svgs/construction-cone.svg';
import paperIcon from '../assets/images/svgs/paper.svg';
import metroIcon from '../assets/images/svgs/metro.svg';
import metaIcon from '../assets/images/svgs/meta.svg';
import renewableEnergyIcon from '../assets/images/svgs/renewable-energy.svg';
import automotiveIcon from '../assets/images/svgs/automotive.svg';
import fnbIcon from '../assets/images/svgs/fnb.svg';
import pharmaIcon from '../assets/images/svgs/pharma.svg';
import defenceIcon from '../assets/images/svgs/defence.svg';
import aerospaceIcon from '../assets/images/svgs/aerospace.svg';
import waterTreatmentIcon from '../assets/images/svgs/water treatment.svg';


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
              { title: "Automation", description: "Custom-engineered automation systems that enhance productivity and operational efficiency across diverse industries.", image: automationImage, link: "/services" },
              { title: "OEM Spares", description: "Reliable spares to keep your operations running smoothly.", image: oemSparesImage, link: "/spares" },
              { title: "CNC & Waterjet", description: "Advanced CNC machining and waterjet cutting services for intricate, high-tolerance components.", image: cncWaterjetImage, link: "/cnc" },
              { title: "Valves", description: "A comprehensive range of industrial valves engineered for durability, safety, and performance.", image: valvesImage, link: "/products" },
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
                  <Link to={service.link} className="btn btn-primary service-learn-more">
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
                name: 'Oil & Gas', 
                icon: <img src={oilGasIcon} alt="Oil & Gas" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Cement & Construction', 
                icon: <img src={constructionIcon} alt="Construction" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Paper & Textile', 
                icon: <img src={paperIcon} alt="Paper & Textile" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Metro & Railways', 
                icon: <img src={metroIcon} alt="Metro & Railways" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Metal & Steel', 
                icon: <img src={metaIcon} alt="Metal & Steel" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Power & Renewable Energy', 
                icon: <img src={renewableEnergyIcon} alt="Power & Renewable Energy" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Automotive & Heavy Machinery', 
                icon: <img src={automotiveIcon} alt="Automotive & Heavy Machinery" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Food & Beverage', 
                icon: <img src={fnbIcon} alt="Food & Beverage" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Pharmaceutical', 
                icon: <img src={pharmaIcon} alt="Pharmaceutical" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Defence', 
                icon: <img src={defenceIcon} alt="Defence" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Aerospace', 
                icon: <img src={aerospaceIcon} alt="Aerospace" style={{width: '20px', height: '20px'}} />
              },
              { 
                name: 'Water & Wastewater Treatment', 
                icon: <img src={waterTreatmentIcon} alt="Water & Wastewater Treatment" style={{width: '20px', height: '20px'}} />
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