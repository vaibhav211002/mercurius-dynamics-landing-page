import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductsPage.css';
import abblogo from '../assets/images/companyLogo/abb.png'
import siemenslogo from '../assets/images/companyLogo/siemens.png'
import rockwelllogo from '../assets/images/companyLogo/rockwellautomation.png'
import allenbradleylogo from '../assets/images/companyLogo/allen_bradley.png'
import ge from '../assets/images/companyLogo/ge.png'
import honeywell from '../assets/images/companyLogo/honeywell.png'
import yasakawa from '../assets/images/companyLogo/yaskawa.png'
import omron from '../assets/images/companyLogo/omron.png'
import mitshubhi from '../assets/images/companyLogo/mitshubi.png'
import schnieder from '../assets/images/companyLogo/schnieder.png'
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Valves');

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

  const categories = ['Valves', 'Automation', 'OEM Spares'];

  const brands = {
    'Valves': [
      { name: 'ABB', logo: abblogo },
      { name: 'Siemens', logo: siemenslogo },
      { name: 'Rockwell Automation', logo: rockwelllogo},
      { name: 'Allen-Bradley', logo: allenbradleylogo  },
      { name: 'Schneider', logo: schnieder},
      { name: 'Mitsubishi', logo: mitshubhi},
      { name: 'Omron', logo: omron },
      { name: 'Honeywell', logo: honeywell },
      { name: 'GE', logo: ge},
      { name: 'Yaskawa', logo: yasakawa }
    ],
    'Automation': [
      { name: 'ABB', logo: abblogo },
      { name: 'Siemens', logo: siemenslogo },
      { name: 'Rockwell Automation', logo: rockwelllogo},
      { name: 'Allen-Bradley', logo: allenbradleylogo  },
      { name: 'Schneider', logo: schnieder},
      { name: 'Mitsubishi', logo: mitshubhi},
    ],
    'OEM Spares': [
      { name: 'ABB', logo: abblogo },
      { name: 'Siemens', logo: siemenslogo },
      { name: 'Rockwell Automation', logo: rockwelllogo},
      { name: 'Allen-Bradley', logo: allenbradleylogo  },
      { name: 'Schneider', logo: schnieder},
      { name: 'Mitsubishi', logo: mitshubhi},
      { name: 'Omron', logo: omron },
      { name: 'Honeywell', logo: honeywell },
    ]
  };

  const productCategories = {
    'Valves': [
      { name: 'Gate & Globe Valves', description: 'High-quality gate and globe valves for various industrial applications.' },
      { name: 'Ball & Butterfly Valves', description: 'Precision ball and butterfly valves for efficient flow control.' },
      { name: 'NRVs & Special Valves', description: 'Non-return valves and specialized valve solutions.' },
      { name: 'Engineered Valves', description: 'Custom engineered valve solutions for specific requirements.' }
    ],
    'Automation': [
      { name: 'PLC, DCS, SCADA', description: 'State-of-the-art systems for complete industrial process control.' },
      { name: 'Panels & Drives', description: 'Custom-built control panels and VFDs to optimize motor control.' },
      { name: 'Networks & Instrumentation', description: 'Robust networking and precise measurement instrumentation.' },
      { name: 'Safety Systems', description: 'Comprehensive systems to protect your personnel and assets.' }
    ],
    'OEM Spares': [
      { name: 'Electrical Components', description: 'High-quality electrical spares for all major brands.' },
      { name: 'Mechanical Parts', description: 'Precision mechanical components and replacement parts.' },
      { name: 'Control Systems', description: 'Control system components and accessories.' },
      { name: 'Sensors & Actuators', description: 'Advanced sensors and actuators for automation systems.' }
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
            <p>Explore our comprehensive range of industrial products designed for efficiency and reliability.</p>
            
            <Link to="/contact" className="btn btn-secondary hero-cta">
                          Contact Us
                        </Link>
            
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
      <section className="products-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>{activeCategory} Products</h2>
          </motion.div>

          <motion.div 
            className="products-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {productCategories[activeCategory].map((product, index) => (
              <motion.div 
                key={index}
                className="product-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-arrow">▼</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <motion.div 
            className="section-header"
            {...fadeInUp}
          >
            <h2>Our Trusted Brands</h2>
            <p>We source components from a vast network of world-leading manufacturers to ensure quality and reliability.</p>
          </motion.div>

<motion.div 
  className="brands-grid"
  variants={staggerChildren}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
>
  {brands[activeCategory].map((brand, index) => (
    <motion.div 
      key={index}
      className="brand-card"
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="brand-logo"
        style={{ backgroundColor: brand.color }}
      >
        <img src={brand.logo} alt={brand.name} />
      </div>
      <span className="brand-name">{brand.name}</span>
    </motion.div>
  ))}

            
            {/* Additional brand placeholders */}
            <motion.div 
              className="brand-card placeholder"
              variants={fadeInUp}
            >
              <div className="brand-logo placeholder">
                and more...
              </div>
            </motion.div>
      
            <motion.div 
              className="brand-card placeholder"
              variants={fadeInUp}
            >
              <div className="brand-logo placeholder">
                and more...
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
