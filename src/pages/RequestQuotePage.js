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
  const [dragOverBom, setDragOverBom] = useState(false);
  const [dragOverSpecs, setDragOverSpecs] = useState(false);
  const [uploadErrors, setUploadErrors] = useState({ bom: '', specs: '' });

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

  // File validation functions
  const validateBomFile = (file) => {
    const allowedTypes = ['.csv', '.xls', '.xlsx'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      return 'Please upload CSV, XLS, or XLSX files only.';
    }
    
    if (file.size > maxSize) {
      return 'File size must be less than 10MB.';
    }
    
    return '';
  };

  const validateSpecFile = (file) => {
    const allowedTypes = ['.pdf', '.dwg', '.step', '.stp'];
    const maxSize = 25 * 1024 * 1024; // 25MB
    
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      return 'Please upload PDF, DWG, or STEP files only.';
    }
    
    if (file.size > maxSize) {
      return 'File size must be less than 25MB.';
    }
    
    return '';
  };

  // BOM file handlers
  const handleBomFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateBomFile(file);
      if (error) {
        setUploadErrors(prev => ({ ...prev, bom: error }));
        return;
      }
      setBomFile(file);
      setUploadErrors(prev => ({ ...prev, bom: '' }));
    }
  };

  const handleBomDrop = (e) => {
    e.preventDefault();
    setDragOverBom(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file) {
      const error = validateBomFile(file);
      if (error) {
        setUploadErrors(prev => ({ ...prev, bom: error }));
        return;
      }
      setBomFile(file);
      setUploadErrors(prev => ({ ...prev, bom: '' }));
    }
  };

  const handleBomDragOver = (e) => {
    e.preventDefault();
    setDragOverBom(true);
  };

  const handleBomDragLeave = (e) => {
    e.preventDefault();
    setDragOverBom(false);
  };

  const removeBomFile = () => {
    setBomFile(null);
    setUploadErrors(prev => ({ ...prev, bom: '' }));
  };

  // Spec files handlers
  const handleSpecFilesChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];
    let errorMessage = '';

    files.forEach(file => {
      const error = validateSpecFile(file);
      if (error) {
        errorMessage += `${file.name}: ${error}\n`;
      } else {
        validFiles.push(file);
      }
    });

    if (errorMessage) {
      setUploadErrors(prev => ({ ...prev, specs: errorMessage.trim() }));
    } else {
      setUploadErrors(prev => ({ ...prev, specs: '' }));
    }

    if (validFiles.length > 0) {
      setSpecFiles(prev => [...prev, ...validFiles]);
    }
  };

  const handleSpecsDrop = (e) => {
    e.preventDefault();
    setDragOverSpecs(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = [];
    let errorMessage = '';

    files.forEach(file => {
      const error = validateSpecFile(file);
      if (error) {
        errorMessage += `${file.name}: ${error}\n`;
      } else {
        validFiles.push(file);
      }
    });

    if (errorMessage) {
      setUploadErrors(prev => ({ ...prev, specs: errorMessage.trim() }));
    } else {
      setUploadErrors(prev => ({ ...prev, specs: '' }));
    }

    if (validFiles.length > 0) {
      setSpecFiles(prev => [...prev, ...validFiles]);
    }
  };

  const handleSpecsDragOver = (e) => {
    e.preventDefault();
    setDragOverSpecs(true);
  };

  const handleSpecsDragLeave = (e) => {
    e.preventDefault();
    setDragOverSpecs(false);
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
      setBomFile(null);
      setSpecFiles([]);
      setUploadErrors({ bom: '', specs: '' });
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
            <h1>COMING SOON !!</h1>
            {/* <p>Fill out the form below to get a customized quote for your needs.</p> */}
          </motion.div>
        </div>
      </section>
    {/* //   new div is here */}
    </div>

    //   {/* RFQ Form */}
    //   <section className="rfq-form-section">
    //     <div className="container">
    //       <motion.div 
    //         className="rfq-form-container"
    //         {...fadeInUp}
    //       >
    //         <form onSubmit={handleSubmit} className="rfq-form">
    //           {/* Part Details */}
    //           <div className="form-section">
    //             <h2>Part Details</h2>
    //             {partLines.map((line, index) => (
    //               <div key={line.id} className="part-line">
    //                 <div className="form-row">
    //                   <div className="form-group">
    //                     <label className="form-label">Part Number</label>
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       placeholder="e.g., MD-CNC-001"
    //                       value={line.partNumber}
    //                       onChange={(e) => handlePartLineChange(line.id, 'partNumber', e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <label className="form-label">Brand</label>
    //                     <select
    //                       className="form-control"
    //                       value={line.brand}
    //                       onChange={(e) => handlePartLineChange(line.id, 'brand', e.target.value)}
    //                     >
    //                       {brands.map((brand, idx) => (
    //                         <option key={idx} value={brand}>{brand}</option>
    //                       ))}
    //                     </select>
    //                   </div>
    //                   <div className="form-group">
    //                     <label className="form-label">Quantity</label>
    //                     <input
    //                       type="number"
    //                       className="form-control"
    //                       value={line.quantity}
    //                       onChange={(e) => handlePartLineChange(line.id, 'quantity', e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <label className="form-label">Notes</label>
    //                     <input
    //                       type="text"
    //                       className="form-control"
    //                       placeholder="Optional"
    //                       value={line.notes}
    //                       onChange={(e) => handlePartLineChange(line.id, 'notes', e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="form-group">
    //                     <button
    //                       type="button"
    //                       className="remove-btn"
    //                       onClick={() => removePartLine(line.id)}
    //                       disabled={partLines.length === 1}
    //                       title="Remove this line"
    //                     >
    //                       <span className="delete-text">Delete</span>
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //             <button
    //               type="button"
    //               className="add-new-line-btn"
    //               onClick={addPartLine}
    //             >
    //               <div className="add-btn-icon">
    //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    //                   <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                 </svg>
    //               </div>
    //               <span className="add-btn-text">Add New Line</span>
    //             </button>
    //           </div>

    //           {/* Attachments */}
    //           <div className="form-section">
    //             <h2>Attachments</h2>
                
    //             <div className="upload-section">
    //               <h3>Upload BOM (CSV/XLSX)</h3>
    //               <div 
    //                 className={`upload-area ${dragOverBom ? 'drag-over' : ''} ${bomFile ? 'has-file' : ''}`}
    //                 onDrop={handleBomDrop}
    //                 onDragOver={handleBomDragOver}
    //                 onDragLeave={handleBomDragLeave}
    //               >
    //                 <div className="upload-icon">
    //                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    //                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                   </svg>
    //                 </div>
    //                 <div className="upload-content">
    //                   {bomFile ? (
    //                     <div className="file-info">
    //                       <p className="file-name">{bomFile.name}</p>
    //                       <p className="file-size">{(bomFile.size / 1024 / 1024).toFixed(2)} MB</p>
    //                     </div>
    //                   ) : (
    //                     <div>
    //                       <p>Upload a file or drag and drop</p>
    //                       <p className="upload-hint">CSV, XLS, XLSX up to 10MB</p>
    //                     </div>
    //                   )}
    //                 </div>
    //                 <div className="upload-actions">
    //                   <input
    //                     type="file"
    //                     id="bom-file"
    //                     accept=".csv,.xls,.xlsx"
    //                     onChange={handleBomFileChange}
    //                     style={{ display: 'none' }}
    //                   />
    //                   <label htmlFor="bom-file" className="btn btn-outline">Choose File</label>
    //                   {bomFile && (
    //                     <button type="button" className="remove-file-btn" onClick={removeBomFile}>
    //                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    //                         <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                       </svg>
    //                     </button>
    //                   )}
    //                 </div>
    //               </div>
    //               {uploadErrors.bom && (
    //                 <div className="upload-error">
    //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    //                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    //                     <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
    //                     <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
    //                   </svg>
    //                   {uploadErrors.bom}
    //                 </div>
    //               )}
    //             </div>

    //             <div className="upload-section">
    //               <h3>Upload Files (PDF/Specs)</h3>
    //               <div 
    //                 className={`upload-area ${dragOverSpecs ? 'drag-over' : ''} ${specFiles.length > 0 ? 'has-file' : ''}`}
    //                 onDrop={handleSpecsDrop}
    //                 onDragOver={handleSpecsDragOver}
    //                 onDragLeave={handleSpecsDragLeave}
    //               >
    //                 <div className="upload-icon">
    //                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    //                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                     <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                   </svg>
    //                 </div>
    //                 <div className="upload-content">
    //                   {specFiles.length > 0 ? (
    //                     <div>
    //                       <p className="file-count">{specFiles.length} file(s) selected</p>
    //                       <div className="file-list">
    //                         {specFiles.map((file, index) => (
    //                           <div key={index} className="file-item">
    //                             <div className="file-info">
    //                               <span className="file-name">{file.name}</span>
    //                               <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
    //                             </div>
    //                             <button type="button" onClick={() => removeSpecFile(index)} className="remove-file-btn">
    //                               <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    //                                 <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //                               </svg>
    //                             </button>
    //                           </div>
    //                         ))}
    //                       </div>
    //                     </div>
    //                   ) : (
    //                     <div>
    //                       <p>Upload files or drag and drop</p>
    //                       <p className="upload-hint">PDF, DWG, STEP up to 25MB</p>
    //                     </div>
    //                   )}
    //                 </div>
    //                 <div className="upload-actions">
    //                   <input
    //                     type="file"
    //                     id="spec-files"
    //                     accept=".pdf,.dwg,.step,.stp"
    //                     multiple
    //                     onChange={handleSpecFilesChange}
    //                     style={{ display: 'none' }}
    //                   />
    //                   <label htmlFor="spec-files" className="btn btn-outline">Choose Files</label>
    //                 </div>
    //               </div>
    //               {uploadErrors.specs && (
    //                 <div className="upload-error">
    //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    //                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    //                     <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
    //                     <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
    //                   </svg>
    //                   <pre>{uploadErrors.specs}</pre>
    //                 </div>
    //               )}
    //             </div>
    //           </div>

    //           {/* Additional Information */}
    //           <div className="form-section">
    //             <h2>Additional Information</h2>
    //             <div className="form-group">
    //               <label className="form-label">Your Message</label>
    //               <textarea
    //                 name="message"
    //                 className="form-control"
    //                 placeholder="Please provide any other details relevant to your request."
    //                 rows="5"
    //                 value={formData.message}
    //                 onChange={handleInputChange}
    //               ></textarea>
    //             </div>
    //           </div>

    //           {/* Contact Information */}
    //           <div className="form-section">
    //             <h2>Contact Information</h2>
    //             <div className="form-row">
    //               <div className="form-group">
    //                 <label className="form-label">Name</label>
    //                 <input
    //                   type="text"
    //                   name="name"
    //                   className="form-control"
    //                   value={formData.name}
    //                   onChange={handleInputChange}
    //                   required
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label className="form-label">Company Name</label>
    //                 <input
    //                   type="text"
    //                   name="companyName"
    //                   className="form-control"
    //                   value={formData.companyName}
    //                   onChange={handleInputChange}
    //                 />
    //               </div>
    //             </div>
    //             <div className="form-row">
    //               <div className="form-group">
    //                 <label className="form-label">Phone Number</label>
    //                 <input
    //                   type="tel"
    //                   name="phoneNumber"
    //                   className="form-control"
    //                   value={formData.phoneNumber}
    //                   onChange={handleInputChange}
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label className="form-label">Email ID</label>
    //                 <input
    //                   type="email"
    //                   name="emailId"
    //                   className="form-control"
    //                   value={formData.emailId}
    //                   onChange={handleInputChange}
    //                   required
    //                 />
    //               </div>
    //             </div>
    //           </div>

    //           {/* Submit Button */}
    //           <div className="form-section submit-section">
    //             <button 
    //               type="submit" 
    //               className="btn btn-primary submit-btn"
    //               disabled={isSubmitting}
    //             >
    //               {isSubmitting ? 'Submitting...' : 'Submit RFQ'}
    //             </button>
    //           </div>
    //         </form>
    //       </motion.div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default RequestQuotePage;
