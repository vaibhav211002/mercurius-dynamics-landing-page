import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    purpose: 'Service',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const phoneInputRef = useRef(null);

  // Country codes list with flags (alphabetically sorted)
  const countryCodes = [
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' }
  ];

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

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      countryCode: country.code
    }));
    setIsCountryDropdownOpen(false);
  };

  const getCurrentCountry = () => {
    return countryCodes.find(country => country.code === formData.countryCode) || countryCodes[0];
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneInputRef.current && !phoneInputRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        countryCode: '+91',
        phone: '',
        purpose: 'Service',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email',
      values: ['info@mercuriusdynamics.com', 'sales@mercuriusdynamics.com']
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06607 2.16708 8.43376 2.48353C8.80145 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Phone',
      values: ['+91 7838167696']
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Address',
      values: ['Mercurius Dynamics', 'Industrial Park, Building A', 'Tech City, State 12345', 'United States']
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
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
                    <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
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
                    <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
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
                    <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
                    <div className="phone-input-container" ref={phoneInputRef}>
                      <div className="phone-input-wrapper">
                        <div 
                          className="country-selector"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        >
                          <span className="flag">{getCurrentCountry().flag}</span>
                          <span className="country-code">{getCurrentCountry().code}</span>
                          <span className="dropdown-arrow">▼</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="phone-input"
                          placeholder="201-555-5555"
                          required
                        />
                      </div>
                      {isCountryDropdownOpen && (
                        <div className="country-dropdown">
                          {countryCodes.map((country, index) => (
                            <div
                              key={index}
                              className={`country-option ${formData.countryCode === country.code ? 'selected' : ''}`}
                              onClick={() => handleCountrySelect(country)}
                            >
                              <span className="flag">{country.flag}</span>
                              <span className="country-name">{country.country}</span>
                              <span className="country-code">{country.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="purpose" className="form-label">Purpose <span className="required">*</span></label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    >
                      <option value="Service">Service</option>
                      <option value="Software enquiry">Software enquiry</option>
                      <option value="Custom Software enquiry">Custom Software enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message <span className="required">*</span></label>
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
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.values.map((value, valueIndex) => (
                        <p key={valueIndex}>{value}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="whatsapp-cta">
                  <a 
                    href="https://wa.me/+917838167696" 
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="whatsapp-icon" width="25" height="25" viewBox="0 0 24 24" fill="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                    </svg>
                     Chat on WhatsApp 
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours-container">
                <h2>Business Hours</h2>
                <div className="business-hours-grid">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="business-hours-item">
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          {/* <motion.div 
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
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
