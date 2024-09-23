import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import './Printers.css'
const Printers = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);
  const [formData, setFormData] = useState({
    printingType: '',
    groupName: '',
    printerDisplayName: '',
    printerName: '',
    modelName: '',
    widthLines: '',
    heightLines: '',
    headerGapLines: '',
    footerGapLines: '',
    serverFolderPath: '',
    remarks: '',
    isActive: true,
  });

  const handleShowModal = (printer = null) => {
    if (printer) {
      setSelectedPrinter(printer);
      setFormData(printer);
      setIsEditMode(true); // Set to edit mode if a printer is passed
    } else {
      setFormData({
        printingType: '',
        groupName: '',
        printerDisplayName: '',
        printerName: '',
        modelName: '',
        widthLines: '',
        heightLines: '',
        headerGapLines: '',
        footerGapLines: '',
        serverFolderPath: '',
        remarks: '',
        isActive: true,
      });
      setIsEditMode(false); // Set to add mode
    }
    setShowUpdateModal(true); // Open the modal
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedPrinter(null);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditMode) {
      // Handle edit logic here
    } else {
      // Handle add logic here
    }
    handleCloseUpdateModal();
  };

  // Example data
  const data = [
    {
      id: 1,
      printingType: 'Dot Matrix',
      groupName: 'Bill Receipt',
      printerDisplayName: 'Main-Counter-Printer-1',
      printerName: 'EPSON',
      modelName: 'LQ-310',
      widthLines: 75,
      heightLines: 31,
      headerGapLines: 95,
      footerGapLines: 25,
      isActive: true,
    },
    {
      id: 2,
      printingType: 'Dot Matrix',
      groupName: 'Bill Receipt',
      printerDisplayName: 'Main-Counter-Printer-2',
      printerName: 'EPSON',
      modelName: 'LQ-310',
      widthLines: 75,
      heightLines: 31,
      headerGapLines: 220,
      footerGapLines: 95,
      isActive: false,
    },
    {
      id: 3,
      printingType: 'Dot Matrix',
      groupName: 'Reg Sticker',
      printerDisplayName: 'Sticker-MainCounter-1',
      printerName: 'EPSON',
      modelName: 'LQ-310',
      widthLines: 50,
      heightLines: 31,
      headerGapLines: 25,
      footerGapLines: 25,
      isActive: true,
    },
    {
      id: 4,
      printingType: 'Dot Matrix',
      groupName: 'Pharmacy Receipt',
      printerDisplayName: 'PHRM-Counter-1',
      printerName: 'EPSON',
      modelName: 'LQ-310',
      widthLines: 75,
      heightLines: 31,
      headerGapLines: 95,
      footerGapLines: 95,
      isActive: false,
    },  ];

  return (
    <div className="manage-department-page">
      <div className="manage-department-table-container">
        <div className="manage-department-manage-section">
          <Button
            className="add-printer-add-printer"
            onClick={() => handleShowModal()} // Trigger modal in add mode
          >
            + Add New Printer
          </Button>
        </div>
        <input type="text" placeholder="Search" className="manage-department-search-input" />
        <div className="add-printer-container">
  <div className="add-printer-span">Showing 1 / 1 result</div>
</div>

       <div className='table-container'>
       <table  ref={tableRef}>
          <thead>
            <tr>
              {[
               "Printing Type",
               "Group Name",
               "Printer Display Name",
               "Printer Name",
               "Model Name",
               "Width (Lines)",
               "Height (Lines)",
               "Header Gap (Lines)",
               "Footer Gap (Lines)",
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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.printingType}</td>
                <td>{item.groupName}</td>
                <td>{item.printerDisplayName}</td>
                <td>{item.printerName}</td>
                <td>{item.modelName}</td>
                <td>{item.widthLines}</td>
                <td>{item.heightLines}</td>
                <td>{item.headerGapLines}</td>
                <td>{item.footerGapLines}</td>
                <td>{item.isActive ? 'True' : 'False'}</td>
                <td>
                  <Button
                    className="add-printer-edit"
                    onClick={() => handleShowModal(item)} // Trigger modal in edit mode
                  >
                    Edit
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

      <Modal show={showUpdateModal}  className="edit-printer-settings-modal">
      <div className='edit-printer-clllose button'><Button className="edit-printer-settings-close-btn-form" variant="secondary" onClick={handleCloseUpdateModal}>
      X
          </Button></div>
        <Modal.Header className='edit-printer-header-form'>
          <Modal.Title>{isEditMode ? 'Edit Printer Setting' : 'Add New Printer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="edit-printer-settings-form-body">
            <div className='edit-printer-settings-form-fields'>
              <div className="edit-printer-settings-form-row">
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="printingType">Printing Type</label>
                  <input
                    id="printingType"
                    type="text"
                    name="printingType"
                    value={formData.printingType}
                    onChange={handleChange}
                    placeholder="Enter Printing Type"
                    required
                  />
                </div>
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="groupName">Group Name *</label>
                  <input
                    id="groupName"
                    type="text"
                    name="groupName"
                    value={formData.groupName}
                    onChange={handleChange}
                    placeholder="Enter Group Name"
                    required
                  />
                </div>
              </div>
              <div className="edit-printer-settings-form-row">
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="printerDisplayName">Printer Display Name *</label>
                  <input
                    id="printerDisplayName"
                    type="text"
                    name="printerDisplayName"
                    value={formData.printerDisplayName}
                    onChange={handleChange}
                    placeholder="Enter Printer Display Name"
                    required
                  />
                </div>
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="printerName">Printer Name *</label>
                  <input
                    id="printerName"
                    type="text"
                    name="printerName"
                    value={formData.printerName}
                    onChange={handleChange}
                    placeholder="Enter Printer Name"
                    required
                  />
                </div>
              </div>
              <div className="edit-printer-settings-form-row">
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="modelName">Model Name *</label>
                  <input
                    id="modelName"
                    type="text"
                    name="modelName"
                    value={formData.modelName}
                    onChange={handleChange}
                    placeholder="Enter Model Name"
                    required
                  />
                </div>
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="widthLines">Width Lines *</label>
                  <input
                    id="widthLines"
                    type="number"
                    name="widthLines"
                    value={formData.widthLines}
                    onChange={handleChange}
                    placeholder="Enter Width Lines"
                    required
                  />
                </div>
              </div>
              <div className="edit-printer-settings-form-row">
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="heightLines">Height Lines *</label>
                  <input
                    id="heightLines"
                    type="number"
                    name="heightLines"
                    value={formData.heightLines}
                    onChange={handleChange}
                    placeholder="Enter Height Lines"
                    required
                  />
                </div>
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="headerGapLines">Header Gap Lines</label>
                  <input
                    id="headerGapLines"
                    type="number"
                    name="headerGapLines"
                    value={formData.headerGapLines}
                    onChange={handleChange}
                    placeholder="Enter Header Gap Lines"
                  />
                </div>
              </div>
              <div className="edit-printer-settings-form-row">
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="footerGapLines">Footer Gap Lines</label>
                  <input
                    id="footerGapLines"
                    type="number"
                    name="footerGapLines"
                    value={formData.footerGapLines}
                    onChange={handleChange}
                    placeholder="Enter Footer Gap Lines"
                  />
                </div>
                <div className="edit-printer-settings-form-group">
                  <label htmlFor="serverFolderPath">Server Folder Path</label>
                  <input
                    id="serverFolderPath"
                    type="text"
                    name="serverFolderPath"
                    value={formData.serverFolderPath}
                    onChange={handleChange}
                    placeholder="Enter Server Folder Path"
                  />
                </div>
              </div>
              <div className="edit-printer-settings-form-group-str">
                <label htmlFor="remarks">Remarks</label>
                <input
                  id="remarks"
                  type="text"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Enter Remarks"
                />
                 <div className="edit-printer-settings-form-group">
                <label>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />
                  Is Active
                </label>
              </div>
              <Modal.Footer>
          
          <Button className="edit-printer-settings-update-btn-form" type="submit" variant="primary">
            Update
          </Button>
        </Modal.Footer>
              </div>
             
            </div>
            
          </form>
        </Modal.Body>
       
      </Modal>
    </div>
  );
};

export default Printers;
