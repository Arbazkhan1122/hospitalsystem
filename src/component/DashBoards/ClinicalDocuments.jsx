import React from 'react';
import './ClinicalDocument.css'; // Import the CSS file

const CinicalDocument = () => {
  return (
    <div className="cliDoc-container">
      <div className="cliDoc-field">Document Type</div>
      <div className="cliDoc-field">Upload Date</div>
      <div className="cliDoc-field">Uploaded By</div>
      <div className="cliDoc-field">Remark</div>
      <div className="cliDoc-field">Option</div>
    </div>
  );
};

export default CinicalDocument;
