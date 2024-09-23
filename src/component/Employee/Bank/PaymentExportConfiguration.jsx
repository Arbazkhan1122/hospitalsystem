import React, { useState, useEffect, useRef } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
// import './AdditionalServicesItems.css'; 

const PaymentExportConfiguration = ({ showUpdateModal, handleClose, handleSubmit, selectedDepartment, handleInputChange }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  return (
    <div className="additional-service-container">
      <div className="additional-service-header">
        <div className="additional-service-title" onClick={handleShowModal}>
          + Add New Setting
        </div>
      </div>
      <div className="additional-service-search-box">
        <input type="text" placeholder="Search..." />
        {/* Uncomment and use this button if needed */}
        {/* <button className='additional-ser'>🔍</button> */}
      </div>
      <div className='table-container'>
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
              "Setting Name",
  "Page Header Text",
  "Module Name",
  "Is Active",
  "Action"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="additional-service-no-results">No Rows To Show</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="additional-service-pagination">
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
        <div className="additional-service-results-info">
          0 to 0 of 0
        </div> */}
      </div>

      <Modal show={showModal} onHide={handleHideModal} className="payment-setting-details-form">
        <Button className="payment-setting-close-btn-form" variant="secondary" onClick={handleHideModal}>
          X
        </Button>
        <Modal.Header className="payment-setting-header-form">
          <Modal.Title>Edit Payment Mode Settings (For: OPBilling)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="payment-setting-form-body">
          <form onSubmit={handleSubmit} className="payment-setting-form-fields">
            <div className="payment-setting-form-group">
              <label>Add New Configuration</label>
              <input
                type="text"
                className="payment-setting-form-control"
                value={selectedDepartment?.newConfiguration || ''}
                onChange={(e) => handleInputChange('newConfiguration', e.target.value)}
                required
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Setting Name</label>
              <input
                type="text"
                className="payment-setting-form-control"
                value={selectedDepartment?.settingName || ''}
                onChange={(e) => handleInputChange('settingName', e.target.value)}
                required
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Page Header Text</label>
              <input
                type="text"
                className="payment-setting-form-control"
                value={selectedDepartment?.pageHeaderText || ''}
                onChange={(e) => handleInputChange('pageHeaderText', e.target.value)}
                required
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Report Description Text</label>
              <input
                type="text"
                className="payment-setting-form-control"
                value={selectedDepartment?.reportDescriptionText || ''}
                onChange={(e) => handleInputChange('reportDescriptionText', e.target.value)}
                required
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Module Name</label>
              <input
                type="text"
                className="payment-setting-form-control"
                value={selectedDepartment?.moduleName || ''}
                onChange={(e) => handleInputChange('moduleName', e.target.value)}
                required
              />
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showHeader || false}
                  onChange={(e) => handleInputChange('showHeader', e.target.checked)}
                />
                Show Header
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showFooter || false}
                  onChange={(e) => handleInputChange('showFooter', e.target.checked)}
                />
                Show Footer
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showUserName || false}
                  onChange={(e) => handleInputChange('showUserName', e.target.checked)}
                />
                Show UserName
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showPrintExportDateTime || false}
                  onChange={(e) => handleInputChange('showPrintExportDateTime', e.target.checked)}
                />
                Show Print/Export DateTime
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showNepaliDate || false}
                  onChange={(e) => handleInputChange('showNepaliDate', e.target.checked)}
                />
                Show Nepali Date
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showEnglishDate || false}
                  onChange={(e) => handleInputChange('showEnglishDate', e.target.checked)}
                />
                Show English Date
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showFilterDateRange || false}
                  onChange={(e) => handleInputChange('showFilterDateRange', e.target.checked)}
                />
                Show Filter Date Range
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.showOtherFilterVariables || false}
                  onChange={(e) => handleInputChange('showOtherFilterVariables', e.target.checked)}
                />
                Show Other Filter Variables
              </label>
            </div>
            <div className="payment-setting-form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDepartment?.isActive || false}
                  onChange={(e) => handleInputChange('isActive', e.target.checked)}
                />
                Is Active
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="payment-setting-submit-btn" type="submit" variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PaymentExportConfiguration;
