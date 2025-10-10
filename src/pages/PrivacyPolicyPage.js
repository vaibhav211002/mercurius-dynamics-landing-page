import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
            <p className="last-updated">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content">
        <div className="container">
          <motion.div 
            className="content-wrapper"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {/* Information We Collect */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Information We </span>
                <span className="heading-accent">Collect</span>
              </h2>
              <div className="content-card">
                <h3>Personal Information</h3>
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul>
                  <li>Fill out our contact forms or request quotes</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Participate in surveys or feedback forms</li>
                  <li>Contact us via email, phone, or other means</li>
                </ul>
                <p>This may include your name, email address, phone number, company name, job title, and any other information you choose to provide.</p>
              </div>

              <div className="content-card">
                <h3>Technical Information</h3>
                <p>We automatically collect certain information when you visit our website:</p>
                <ul>
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website or search terms</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">How We Use Your </span>
                <span className="heading-accent">Information</span>
              </h2>
              <div className="content-card">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our services and products</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical information, updates, and marketing communications</li>
                  <li>Process transactions and manage your account</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Information </span>
                <span className="heading-accent">Sharing</span>
              </h2>
              <div className="content-card">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Data </span>
                <span className="heading-accent">Security</span>
              </h2>
              <div className="content-card">
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Employee training on data protection practices</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Your </span>
                <span className="heading-accent">Rights</span>
              </h2>
              <div className="content-card">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided in the Contact section.</p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Cookies and </span>
                <span className="heading-accent">Tracking</span>
              </h2>
              <div className="content-card">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.</p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Third-Party </span>
                <span className="heading-accent">Links</span>
              </h2>
              <div className="content-card">
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Changes to This </span>
                <span className="heading-accent">Privacy Policy</span>
              </h2>
              <div className="content-card">
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending you an email notification</li>
                  <li>Providing notice through our services</li>
                </ul>
                <p>Your continued use of our website after any changes constitutes acceptance of the updated Privacy Policy.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Contact </span>
                <span className="heading-accent">Us</span>
              </h2>
              <div className="content-card">
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>Email:</strong> info@mercuriusdynamics.com
                  </div>
                  <div className="contact-item">
                    <strong>Phone:</strong> +91 7838167696
                  </div>
                  <div className="contact-item">
                    <strong>Address:</strong> A-67 Ground Floor, Sector 67, Noida, Uttar Pradesh 201309, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
