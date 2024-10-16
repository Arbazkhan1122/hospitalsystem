import React from 'react';
import './DefaultSignatories.css'; // Create this CSS file for styling

const DefaultSignatories  = () => {
    return (
        <div className="default-signatories-container">
          <div className='default-signatories-header'>
          <h3>Default Signatories for Radiology:</h3>
          </div>
          <div className="default-signatories-list">
            <label className="default-signatories-item">
              <input type="checkbox" />
              Dr. Ann Njoki Thiongo
            </label>
            <label className="default-signatories-item">
              <input type="checkbox" />
              Mr. Immanuel Wekesa
            </label>
            <label className="default-signatories-item">
              <input type="checkbox" />
              Prof. Dr. Suresh singh singh
            </label>
          </div>
          <div className="default-signatories-button-container">
  <button className="default-signatories-update-button">
    Update Default Signatories
  </button>
</div>
        </div>
      );
    };
    

export default DefaultSignatories;
