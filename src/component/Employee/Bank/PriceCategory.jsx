import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PaymentModeSetting.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const PriceCategory = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleShowModal = (department = null) => {
    if (department) {
      setSelectedDepartment(department);
      setIsEditMode(true);
    } else {
      setSelectedDepartment({
        code: '',
        name: '',
        description: '',
        isDefault: false,
        isActive: true,
        registration: false,
        admission: false,
      });
      setIsEditMode(false);
    }
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedDepartment(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (field, value) => {
    setSelectedDepartment((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form data here
    if (isEditMode) {
      console.log('Editing department:', selectedDepartment);
    } else {
      console.log('Adding new department:', selectedDepartment);
    }
    handleCloseUpdateModal();
  };

  const data = [
    { code: 'MNS', name: 'MADISON - NON', description: 'Britam Insurance', isDefault: true, isActive: true, registration: true, admission: true, action: 'Edit' },
    { code: 'MS', name: 'MADISON - SMART', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: true, action: 'Edit' },
    { code: 'IJNS', name: 'UAP SMART -', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: true, action: 'Edit' },
    { code: 'US', name: 'UAP - SMART', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'AT', name: 'RACIS', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'CICNS', name: '3RJTAM - SMART', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'CISSU', name: 'KINGA YA MKULI...', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'LMCS', name: 'NAIVAS - BRITAM', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'LMSVD', name: 'TELE - BRIT...', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'FFS', name: 'CVC NON SMART', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'BRITAMI', name: 'CVC - SMART', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'NHIF17', name: 'NH IF - GENERAL .', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'NHIF16', name: '- LINDA', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'Norml', name: 'NHIF - FEE FOR S...', description: 'Normal', isDefault: false, isActive: true, registration: true, admission: false, action: 'Edit' },
    { code: 'MT13A', name: '3ritam', description: 'Normal', isDefault: true, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'MADISON - NON _', name: 'NH IF General', description: 'Normal', isDefault: true, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'MADISON - SMART', name: 'NH CAPITATION', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'UAP SMART', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'UAP - SMART', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'PACS', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: '- SMART', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'KINGA YA MKULL.', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NAIVAS - BRITAM', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'AFYA TELE -', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: '- NON SMART', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: '- SMART', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: '- GENERAL', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NHIF- LINDA MA..', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NHIF- LINDA MA..', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NHIF- FEE FOR S...', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'Britam', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NHIF General', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'NHIF CAPITATION', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' },
    { code: 'Normal', name: 'Normal', description: 'Normal', isDefault: false, isActive: false, registration: false, admission: false, action: 'Disable' }
    ];  

  return (
    <div className="manage-department-page">
      <div className="manage-department-table-container">
        <div className="manage-department-manage-section">
          <Button
            className="manage-add-department-btn"
            onClick={() => handleShowModal()} 
          >
            + Add New Price Category
          </Button>
          <div className="manage-department-results-info">Showing 1 / 1 result</div>
        </div>
        <input 
          type="text" 
          placeholder="Search" 
          className="manage-department-search-input" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        

        <div className='table-container'>
        <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                "Code",
                "Name",
                "Description",
                "Is Default",
                "Registration",
                "Admission?",
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
            {data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.isDefault ? 'Yes' : 'No'}</td>
                <td>{item.registration ? 'Yes' : 'No'}</td>
                <td>{item.admission ? 'Yes' : 'No'}</td>
                <td>{item.isActive ? 'True' : 'False'}</td>
                <td>
                  <Button
                  className="payment-mode-edit"
                    onClick={() => handleShowModal(item)}
                  >
                    Edit
                  </Button>
                  {/* <Button
                    className="manage-department-disable-btn"
                    onClick={() => handleShowModal(item)}
                  >
                    Disable
                  </Button> */}
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

      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal} className="payment-setting-details-form">
        <Modal.Header className="payment-setting-header-form">
          <Modal.Title>
            {isEditMode ? 'Edit Price Category' : 'Add New Price Category'}
          </Modal.Title>
          <Button className="payment-setting-close-btn-form" variant="secondary" onClick={handleCloseUpdateModal}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body className="payment-setting-form-body">
          <form onSubmit={handleSubmit} className="payment-setting-form-fields">
            <div className="payment-setting-form-group">
              <label>Price Category Name</label>
              <input 
                type="text" 
                className="payment-setting-form-control" 
                value={selectedDepartment?.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Description</label>
              <input 
                type="text" 
                className="payment-setting-form-control" 
                value={selectedDepartment?.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
            <div className="payment-setting-form-group">
              <label>Code</label>
              <input 
                type="text" 
                className="payment-setting-form-control" 
                value={selectedDepartment?.code || ''} 
                onChange={(e) => handleInputChange('code', e.target.value)} 
              />
            </div>
            <div className="payment-setting-form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedDepartment?.isDefault || false} 
                  onChange={(e) => handleInputChange('isDefault', e.target.checked)} 
                /> Is Default
              </label>
            </div>
            <div className="payment-setting-form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedDepartment?.isActive || false} 
                  onChange={(e) => handleInputChange('isActive', e.target.checked)} 
                /> Is Active
              </label>
            </div>
            <div className="payment-setting-form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedDepartment?.registration || false} 
                  onChange={(e) => handleInputChange('registration', e.target.checked)} 
                /> Registration
              </label>
            </div>
            <div className="payment-setting-form-group">
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedDepartment?.admission || false} 
                  onChange={(e) => handleInputChange('admission', e.target.checked)} 
                /> Admission
              </label>
            </div>
            <Button type="submit" className="payment-setting-submit-btn">
              {isEditMode ? 'Update' : 'Save'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PriceCategory;
