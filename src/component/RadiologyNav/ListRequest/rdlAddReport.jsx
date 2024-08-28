import React from 'react';
import "../ListRequest/rdlAddReport.css"
function AddReportForm() {
  return (
    <div className="add-report-form">
      <h2>Add report of USG Chest (X-RAY)</h2>
      <div className="patient-info">
        <div className="info-row">
          <span><strong>Patient Name:</strong> Sachin Ramesh( 50Y/Male )</span>
          <span><strong>Hospital No:</strong> 2408003817</span>
          <span><strong>Prescriber:</strong> <input type="text" value="Dr. pooja Mishra" readOnly /></span>
        </div>
        <div className="info-row">
          <span><strong>Address:</strong> bangalore, Karnataka</span>
          <span><strong>Phone No:</strong> 7349474798</span>
          <span><strong>Req. On:</strong> 2024-08-12 15:21</span>
          <span><strong>Scanned On:</strong> 2024-08-12 16:22</span>
        </div>
      </div>
      <div className="report-details">
        <div className="info-row">
          <span>
            <strong>Report Template:</strong> USG Chest
            <a href="#" className="link">Select different template?</a>
          </span>
          <span>
            <a href="#" className="link">Select Dicom images?</a>
          </span>
        </div>
        <div className="info-row">
          <span>
            <strong>Indication:</strong>
            <input type="text" placeholder="Indication" />
          </span>
          <span>
            <strong>MRI/CT/X-ray No:</strong>
            <input type="text" placeholder="MRI/CT/X-ray Number" />
          </span>
        </div>
      </div>
      <div className="text-editor">
        {/* Text editor toolbar */}
        <div className="toolbar">
          {/* Add toolbar buttons here */}
        </div>
        <textarea rows="10"></textarea>
      </div>
      <div className="signature-section">
        <div className="signature-box">not found</div>
        <div className="signature-box">not found</div>
        <div className="signature-box active">suresh</div>
      </div>
      <div className="form-actions">
        <div className="select-signatories">
          <strong>Select Signatories:</strong>
          <select defaultValue="DR. ANN NJOKI THIONG'O">
            <option>DR. ANN NJOKI THIONG'O</option>
          </select>
        </div>
        <div className="upload-images">
          <strong>Upload Images:</strong>
          <input type="file" id="file-upload" hidden />
          <label htmlFor="file-upload" className="file-upload-btn">Choose Files</label>
        </div>
        <div className="submit-actions">
          <button className="save-btn">Save</button>
          <button className="submit-print-btn">Submit & Print</button>
          <label>
            <input type="checkbox" /> All images
          </label>
        </div>
      </div>
    </div>
  );
}

export default AddReportForm;