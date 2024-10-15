import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './MapSchemeAndPrice.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
const usersData = [
  {
    code: 'CR-4',
    organizationName: 'BRITAM',
    displayName: 'BRITAM',
    isDefault: false,
    isClaimManagementApplicable: false,
    isActive: false,
  },
  {
    code: 'MNS',
    organizationName: 'MADISON INSURANCE',
    displayName: 'MADISON - NON SMART',
    isDefault: false,
    isClaimManagementApplicable: true,
    isActive: true,
  },
  {
    code: 'MBA',
    organizationName: 'MTIBA',
    displayName: 'MTIBA',
    isDefault: false,
    isClaimManagementApplicable: true,
    isActive: true,
  },
  {
    code: 'CR-1',
    organizationName: 'NHIF CAPITATION',
    displayName: 'NHIF CAPITATION',
    isDefault: true,
    isClaimManagementApplicable: true,
    isActive: true,
  },
  {
    code: 'CR-2',
    organizationName: 'NHIF General',
    displayName: 'NHIF General',
    isDefault: false,
    isClaimManagementApplicable: false,
    isActive: true,
  },
  {
    code: 'LMSVD',
    organizationName: 'NHIF LINDA MAMA SVD',
    displayName: 'LINDA MAMA SVD',
    isDefault: false,
    isClaimManagementApplicable: true,
    isActive: true,
  },
  {
    code: 'CR-3',
    organizationName: 'TEST CR',
    displayName: 'TEST CR',
    isDefault: false,
    isClaimManagementApplicable: false,
    isActive: false,
  },
];

const CreaditOrganizations = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const filteredData = usersData.filter(item =>
    item.organizationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowEditModal = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedItem(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Updated Item:', selectedItem);
    handleCloseModal();
  };

  return (
    <div className="map-scheme-reaction-container">
      <div className="map-scheme-reaction-header">
        <button className="map-scheme-reaction-add-button">+ New Create Organization</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="map-scheme-reaction-search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="map-scheme-reaction-span">
        <span>Showing {filteredData.length}/{usersData.length} results</span>
      </div>
      <div className="table-container">
      <table  ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Code",
  "Organization Name",
  "Display Name",
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
            {filteredData.map((user, index) => (
              <tr key={index}>
                <td>{user.code}</td>
                <td>{user.organizationName}</td>
                <td>{user.displayName}</td>
                <td>{user.isActive ? 'Yes' : 'No'}</td>
                <td className="manage-reaction-action-buttons">
                  <button
                    className="map-scheme-reaction-action-button"
                    onClick={() => handleShowEditModal(user)}
                  >
                    Edit
                  </button>
                  {/* <button className="map-scheme-reaction-action-button">Disable</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="map-scheme-reaction-pagination">
          <div className="map-scheme-reaction-pagination-controls">
            <button>First</button>
            <button>Previous</button>
            <button>Next</button>
            <button>Last</button>
          </div>
        </div> */}
      </div>
      
      <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">Update Credit Organization</div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="code">
                <Form.Label className="manage-modal-form-label">Code:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.code || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, code: e.target.value })}
                  placeholder="Code"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="organizationName">
                <Form.Label className="manage-modal-form-label">Organization Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.organizationName || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, organizationName: e.target.value })}
                  placeholder="Organization Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="displayName">
                <Form.Label className="manage-modal-form-label">Display Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem?.displayName || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, displayName: e.target.value })}
                  placeholder="Display Name"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive">
                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.isActive || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, isActive: e.target.checked })}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Form.Group controlId="isDefault">
                <Form.Label className="manage-modal-form-label">Is Default:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.isDefault || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, isDefault: e.target.checked })}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Form.Group controlId="isClaimManagementApplicable">
                <Form.Label className="manage-modal-form-label">Claim Management Applicable:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={selectedItem?.isClaimManagementApplicable || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, isClaimManagementApplicable: e.target.checked })}
                  className="manage-modal-form-check-input"
                />
              </Form.Group>

              <Button type="submit" className="manage-modal-employee-btn">Update</Button>
              <Button type="button" onClick={handleCloseModal} className="manage-modal-employee-btn">Discard</Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreaditOrganizations;
