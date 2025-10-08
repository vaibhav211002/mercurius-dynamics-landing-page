import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './RequestQuotePage.css';

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    partNumber: '',
    brand: '',
    quantity: '100',
    notes: '',
    message: '',
    name: '',
    companyName: '',
    phoneNumber: '',
    emailId: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [partLines, setPartLines] = useState([{ id: 1, partNumber: '', brand: '', quantity: '100', notes: '' }]);
  const [bomFile, setBomFile] = useState(null);
  const [specFiles, setSpecFiles] = useState([]);

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

  const handlePartLineChange = (id, field, value) => {
    setPartLines(prev => 
      prev.map(line => 
        line.id === id ? { ...line, [field]: value } : line
      )
    );
  };

  const addPartLine = () => {
    const newId = Math.max(...partLines.map(line => line.id)) + 1;
    setPartLines(prev => [...prev, { id: newId, partNumber: '', brand: '', quantity: '100', notes: '' }]);
  };

  const removePartLine = (id) => {
    if (partLines.length > 1) {
      setPartLines(prev => prev.filter(line => line.id !== id));
    }
  };

  const handleBomFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBomFile(file);
    }
  };

  const handleSpecFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setSpecFiles(prev => [...prev, ...files]);
  };

  const removeSpecFile = (index) => {
    setSpecFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your RFQ! We will review your request and respond promptly.');
      // Reset form
      setFormData({
        partNumber: '',
        brand: '',
        quantity: '100',
        notes: '',
        message: '',
        name: '',
        companyName: '',
        phoneNumber: '',
        emailId: ''
      });
      setPartLines([{ id: 1, partNumber: '', brand: '', quantity: '100', notes: '' }]);
    }, 2000);
  };

  const brands = [
    'Select Brand',
    'ABB',
    'Siemens',
    'Rockwell Automation',
    'Allen-Bradley',
    'Schneider',
    'Mitsubishi',
    'Omron',
    'Honeywell',
    'GE',
    'Yaskawa'
  ];

  return (
    <div className="request-quote-page">
      {/* Hero Section */}
      <section className="rfq-hero">
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
            <h1>Request for Quote (RFQ)</h1>
            <p>Fill out the form below to get a customized quote for your needs.</p>
          </motion.div>
        </div>
      </section>

      {/* RFQ Form */}
      <section className="rfq-form-section">
        <div className="container">
          <motion.div 
            className="rfq-form-container"
            {...fadeInUp}
          >
            <form onSubmit={handleSubmit} className="rfq-form">
              {/* Part Details */}
              <div className="form-section">
                <h2>Part Details</h2>
                {partLines.map((line, index) => (
                  <div key={line.id} className="part-line">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Part Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g., MD-CNC-001"
                          value={line.partNumber}
                          onChange={(e) => handlePartLineChange(line.id, 'partNumber', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Brand</label>
                        <select
                          className="form-control"
                          value={line.brand}
                          onChange={(e) => handlePartLineChange(line.id, 'brand', e.target.value)}
                        >
                          {brands.map((brand, idx) => (
                            <option key={idx} value={brand}>{brand}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          value={line.quantity}
                          onChange={(e) => handlePartLineChange(line.id, 'quantity', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Notes</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Optional"
                          value={line.notes}
                          onChange={(e) => handlePartLineChange(line.id, 'notes', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removePartLine(line.id)}
                          disabled={partLines.length === 1}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline add-line-btn"
                  onClick={addPartLine}
                >
                  <span>+</span> Add Another Line
                </button>
              </div>

              {/* Attachments */}
              <div className="form-section">
                <h2>Attachments</h2>
                
                <div className="upload-section">
                  <h3>Upload BOM (CSV/XLSX)</h3>
                  <div className="upload-area">
                    <div className="upload-icon">📄</div>
                    <div className="upload-content">
                      <p>{bomFile ? bomFile.name : 'Upload a file or drag and drop'}</p>
                      <p className="upload-hint">CSV, XLS, XLSX up to 10MB</p>
                    </div>
                    <input
                      type="file"
                      id="bom-file"
                      accept=".csv,.xls,.xlsx"
                      onChange={handleBomFileChange}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="bom-file" className="btn btn-outline">Choose File</label>
                  </div>
                </div>

                <div className="upload-section">
                  <h3>Upload Files (PDF/Specs)</h3>
                  <div className="upload-area">
                    <div className="upload-icon">📄</div>
                    <div className="upload-content">
                      <p>{specFiles.length > 0 ? `${specFiles.length} file(s) selected` : 'Upload files or drag and drop'}</p>
                      <p className="upload-hint">PDF, DWG, STEP up to 25MB</p>
                      {specFiles.length > 0 && (
                        <div className="file-list">
                          {specFiles.map((file, index) => (
                            <div key={index} className="file-item">
                              <span>{file.name}</span>
                              <button type="button" onClick={() => removeSpecFile(index)} className="remove-file-btn">×</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      id="spec-files"
                      accept=".pdf,.dwg,.step,.stp"
                      multiple
                      onChange={handleSpecFilesChange}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="spec-files" className="btn btn-outline">Choose Files</label>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-section">
                <h2>Additional Information</h2>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Please provide any other details relevant to your request."
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-section">
                <h2>Contact Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email ID</label>
                    <input
                      type="email"
                      name="emailId"
                      className="form-control"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Agreement and Submit */}
              <div className="form-section">
                <div className="agreement-section">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I have read and agree to the <a href="#" className="link">NDA Agreement</a>.
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RFQ'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;
