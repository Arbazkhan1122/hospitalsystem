import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import './PaymentModeSetting.css';

const PaymentModeSetting = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  const [selectedDepartment, setSelectedDepartment] = useState({
    paymentMode: '',
    isActive: true,
    remarkMandatory: false,
    paymentDetailMandatory: false,
    displaySequence: 1,
  });
  const [isEditMode, setIsEditMode] = useState(false);

  // Example data
  const data = [
    { module: 'Billing', pageName: 'OPBilling', description: 'This is for Payment mode used in OP billing page', action: 'Edit' },
    { module: 'Billing', pageName: 'BillingDeposit', description: 'This is for Payment mode used in Deposit Page while adding Deposit', action: 'Edit' },
    { module: 'Billing', pageName: 'IPBilling', description: 'This is for Payment mode used in IP billing page', action: 'Edit' },
    { module: 'Billing', pageName: 'Settlements', description: 'This is for Payment mode used in billing credit Settlement Page', action: 'Edit' },
    { module: 'Billing', pageName: 'PayProvisional', description: 'This is for Payment mode used in Provisionals Pay Now Page', action: 'Edit' },
    { module: 'ADT', pageName: 'CreateAdmissionBilling', description: 'This is for Payment mode used in ADT Create Admission page for billing', action: 'Edit' },
    { module: 'ADT', pageName: 'CreateAdmissionDeposit', description: 'This is for Payment mode used in ADT Create Admission page for deposit', action: 'Edit' },
    { module: 'Billing', pageName: 'BillingDepositReturn', description: 'This is for Payment mode used in Deposit page while returning Deposit', action: 'Edit' },
    { module: 'Appointment', pageName: 'Visit', description: 'This is for Payment mode used in Appointment Page', action: 'Edit' },
    { module: 'Dispensary', pageName: 'NewSale', description: 'This is for Payment mode used in Dispensary New Sales Page', action: 'Edit' },
    { module: 'Dispensary', pageName: 'ProvisionalSale', description: 'This is for Payment mode used in Dispensary Provisional Sales Page', action: 'Edit' },
    { module: 'Dispensary', pageName: 'DispensarySettlement', description: 'This is for Payment mode used in Dispensary Settlement Page', action: 'Edit' },
    { module: 'Dispensary', pageName: 'DispensaryDeposit', description: 'This is for Payment mode used in Dispensary Deposit Page', action: 'Edit' },
    // Add more items as needed
  ];

  const handleShowModal = (department = null) => {
    if (department) {
      setSelectedDepartment(department);
      setIsEditMode(true);
    } else {
      setSelectedDepartment({
        paymentMode: '',
        isActive: true,
        remarkMandatory: false,
        paymentDetailMandatory: false,
        displaySequence: 1,
      });
      setIsEditMode(false);
    }
    setShowUpdateModal(true);
  };

  const handleClose = () => {
    setShowUpdateModal(false);
    setSelectedDepartment(null);
  };

  const handleInputChange = (field, value) => {
    setSelectedDepartment((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', selectedDepartment);
    handleClose();
  };

  return (
    <div className="manage-department-page">
      <div className="manage-department-table-container">
        <div className="manage-department-manage-section">
          <input type="text" placeholder="Search" className="manage-department-search-input" />

          <div className="manage-department-results-info">
            Showing {data.length} / {data.length} result{data.length > 1 ? 's' : ''}
          </div>
        </div>

       <div className='table-container'>
       <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                "Module Name",
                "Page Name",
                "Description",
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.module}</td>
                <td>{item.pageName}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    className="payment-mode-edit"
                    onClick={() => handleShowModal(item)}
                  >
                    {item.action}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>

        {/* <div className="manage-department-pagination">
          <Button className="manage-department-pagination-btn">First</Button>
          <Button className="manage-department-pagination-btn">Previous</Button>
          <span>Page 1 of 1</span>
          <Button className="manage-department-pagination-btn">Next</Button>
          <Button className="manage-department-pagination-btn">Last</Button>
        </div> */}
      </div>

      <div className='payment-model-class-setting'>
  <Modal show={showUpdateModal} className="payment-setting-details-form">
    <Button className="payment-setting-close-btn-form" variant="secondary" onClick={handleClose}>
      X
    </Button>
    <Modal.Header className="payment-setting-header-form">
      <Modal.Title>
        Edit Payment Mode Settings (For: OPBilling)
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="payment-setting-form-body">
      <form onSubmit={handleSubmit} className="payment-setting-form-fields">
        <div className="payment-setting-form-group">
          <label>S.N.</label>
          <input type="text" className="payment-setting-form-control" value="1" disabled />
        </div>
        <div className="payment-setting-form-group">
          <label>Payment Mode</label>
          <input
            type="text"
            className="payment-setting-form-control"
            value={selectedDepartment?.paymentMode || ''}
            onChange={(e) => handleInputChange('paymentMode', e.target.value)}
            required
          />
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
        <div className="payment-setting-form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={selectedDepartment?.remarkMandatory || false}
              onChange={(e) => handleInputChange('remarkMandatory', e.target.checked)}
            />
            Remark Mandatory
          </label>
        </div>
        <div className="payment-setting-form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={selectedDepartment?.paymentDetailMandatory || false}
              onChange={(e) => handleInputChange('paymentDetailMandatory', e.target.checked)}
            />
            Payment Detail Mandatory
          </label>
        </div>
        <div className="payment-setting-form-group">
          <label>Display Sequence</label>
          <input
            type="number"
            className="payment-setting-form-control"
            value={selectedDepartment?.displaySequence || 1}
            onChange={(e) => handleInputChange('displaySequence', e.target.value)}
            required
          />
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button className="payment-setting-update-btn-form" type="submit" variant="primary">
        Update
      </Button>
    </Modal.Footer>
  </Modal>
</div>
     
    </div>
  );
};

export default PaymentModeSetting;
