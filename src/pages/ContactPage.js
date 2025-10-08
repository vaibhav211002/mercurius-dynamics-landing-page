import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Sales Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: 'Sales Inquiry',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@mercuriusdynamics.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Industrial Way, Anytown, USA'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact Us</h1>
            <p>We're here to help and eager to hear from you. Please fill out the form, and we'll get back to you as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-content">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
            >
              <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <p>We're here to help and eager to hear from you. Please fill out the form, and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="purpose" className="form-label">Purpose</label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Your Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="col col-6"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="contact-info-container">
                <h2>Contact Information</h2>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p>{info.value}</p>
                    </div>
                  </div>
                ))}

                <div className="whatsapp-cta">
                  <a 
                    href="https://wa.me/15551234567" 
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="whatsapp-icon">💬</span>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div 
            className="map-container"
            {...fadeInUp}
          >
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Our Location</h3>
                <p>123 Industrial Way, Anytown, USA</p>
                <p>We're conveniently located in the heart of the industrial district, easily accessible by major highways and public transportation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
