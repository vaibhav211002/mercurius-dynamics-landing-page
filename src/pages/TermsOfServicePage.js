import React from 'react';
import { motion } from 'framer-motion';
import './TermsOfServicePage.css';

const TermsOfServicePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="terms-of-service-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using our services. By accessing our website, you agree to be bound by these terms.</p>
            <p className="last-updated">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content">
        <div className="container">
          <motion.div 
            className="content-wrapper"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {/* Acceptance of Terms */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Acceptance of </span>
                <span className="heading-accent">Terms</span>
              </h2>
              <div className="content-card">
                <p>By accessing and using Mercurius Dynamics' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                <p>These terms apply to all visitors, users, and others who access or use our services. Your use of our services is also subject to our Privacy Policy, which governs how we collect, use, and protect your information.</p>
              </div>
            </div>

            {/* Description of Service */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Description of </span>
                <span className="heading-accent">Service</span>
              </h2>
              <div className="content-card">
                <p>Mercurius Dynamics provides comprehensive industrial solutions including:</p>
                <ul>
                  <li>CNC precision manufacturing and waterjet cutting services</li>
                  <li>Industrial automation and control systems</li>
                  <li>Digital IT solutions and software development</li>
                  <li>Technical consulting and engineering services</li>
                  <li>OEM parts and spares distribution</li>
                  <li>Custom manufacturing and prototyping solutions</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.</p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">User </span>
                <span className="heading-accent">Responsibilities</span>
              </h2>
              <div className="content-card">
                <p>As a user of our services, you agree to:</p>
                <ul>
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
                <p>You are responsible for all activities that occur under your account and for maintaining the security of your account information.</p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Intellectual </span>
                <span className="heading-accent">Property</span>
              </h2>
              <div className="content-card">
                <p>All content, trademarks, logos, and intellectual property displayed on our website are the property of Mercurius Dynamics or our licensors. This includes:</p>
                <ul>
                  <li>Website design, layout, and functionality</li>
                  <li>Text, images, graphics, and multimedia content</li>
                  <li>Software, applications, and technical documentation</li>
                  <li>Brand names, logos, and trade dress</li>
                  <li>Patents, copyrights, and trade secrets</li>
                </ul>
                <p>You may not reproduce, distribute, modify, or create derivative works of our intellectual property without our express written permission.</p>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Privacy and Data </span>
                <span className="heading-accent">Protection</span>
              </h2>
              <div className="content-card">
                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
                <p>By using our services, you consent to:</p>
                <ul>
                  <li>Collection of information necessary to provide our services</li>
                  <li>Use of cookies and tracking technologies</li>
                  <li>Communication regarding our services and updates</li>
                  <li>Data processing for legitimate business purposes</li>
                </ul>
                <p>We implement appropriate security measures to protect your information and comply with applicable data protection laws.</p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Limitation of </span>
                <span className="heading-accent">Liability</span>
              </h2>
              <div className="content-card">
                <p>To the maximum extent permitted by law, Mercurius Dynamics shall not be liable for:</p>
                <ul>
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages resulting from third-party actions or services</li>
                  <li>Force majeure events beyond our reasonable control</li>
                  <li>User's misuse of our services or violation of these terms</li>
                </ul>
                <p>Our total liability for any claims arising from these terms or our services shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Disclaimers</span>
              </h2>
              <div className="content-card">
                <p>Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:</p>
                <ul>
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy, reliability, or completeness of information</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security against unauthorized access or use</li>
                </ul>
                <p>We do not warrant that our services will meet your requirements or be available at all times.</p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Indemnification</span>
              </h2>
              <div className="content-card">
                <p>You agree to indemnify and hold harmless Mercurius Dynamics, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:</p>
                <ul>
                  <li>Your use of our services</li>
                  <li>Your violation of these terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your violation of applicable laws or regulations</li>
                  <li>Content you submit or transmit through our services</li>
                </ul>
                <p>This indemnification obligation will survive the termination of these terms and your use of our services.</p>
              </div>
            </div>

            {/* Termination */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Termination</span>
              </h2>
              <div className="content-card">
                <p>We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these terms.</p>
                <p>Upon termination:</p>
                <ul>
                  <li>Your right to use our services will cease immediately</li>
                  <li>We may delete your account and associated data</li>
                  <li>Provisions that by their nature should survive termination will remain in effect</li>
                  <li>You remain liable for any outstanding obligations</li>
                </ul>
                <p>You may also terminate your use of our services at any time by discontinuing use and contacting us to close your account.</p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Governing Law and </span>
                <span className="heading-accent">Jurisdiction</span>
              </h2>
              <div className="content-card">
                <p>These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>
                <p>Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].</p>
                <p>If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Changes to </span>
                <span className="heading-accent">Terms</span>
              </h2>
              <div className="content-card">
                <p>We reserve the right to modify these terms at any time. We will notify you of any material changes by:</p>
                <ul>
                  <li>Posting the updated terms on our website</li>
                  <li>Sending you an email notification</li>
                  <li>Providing notice through our services</li>
                </ul>
                <p>Your continued use of our services after any changes constitutes acceptance of the updated terms. If you do not agree to the changes, you must discontinue use of our services.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="content-section">
              <h2>
                <span className="heading-normal">Contact </span>
                <span className="heading-accent">Information</span>
              </h2>
              <div className="content-card">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
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
                <p>For general inquiries, please use our main contact information available on our website.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
