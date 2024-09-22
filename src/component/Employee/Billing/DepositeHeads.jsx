import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './MapSchemeAndPrice.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';

const usersData = [
    { id: 1, code: "Depo111", name: "Deposit 111", isDefault: "false", description: "", isActive: "true" },
    { id: 2, code: "DH-5", name: "Others", isDefault: "false", description: "Other Purpose", isActive: "true" },
    { id: 3, code: "DH-4", name: "Bill Cleared", isDefault: "false", description: "Bill Cleared", isActive: "true" },
    { id: 4, code: "DH-3", name: "Operation Deposit", isDefault: "false", description: "Operation Deposit", isActive: "true" },
    { id: 5, code: "DH-2", name: "Admission Deposit", isDefault: "false", description: "Admission Deposit", isActive: "true" },
    { id: 6, code: "DH-1", name: "Normal Deposit", isDefault: "true", description: "Migrated To Keep Default DepositCategory for old ...", isActive: "true" },
];

const DepositeHeads = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [columnWidths,setColumnWidths] = useState({});
    const tableRef=useRef(null);

    const filteredData = usersData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                <button className="map-scheme-reaction-add-button">+ Add Deposite Head</button>
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
                  "Deposite Head Code",
  "Deposite Head Name",
  "Description",
  "Is Default",
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
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.isDefault === "true" ? "Yes" : "No"}</td>
                                <td>{item.isActive === "true" ? "Yes" : "No"}</td>
                                <td className="manage-reaction-action-buttons">
                                    <button
                                        className="map-scheme-reaction-action-button"
                                        onClick={() => handleShowEditModal(item)}
                                    >
                                        Edit
                                    </button>
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
                        <div className="manage-modal-modal-title">Update Deposite Head</div>
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

                            <Form.Group controlId="name">
                                <Form.Label className="manage-modal-form-label">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.name || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                                    placeholder="Name"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label className="manage-modal-form-label">Description:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.description || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                                    placeholder="Description"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="isDefault">
                                <Form.Label className="manage-modal-form-label">Is Default:</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedItem?.isDefault === 'true'}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, isDefault: e.target.checked ? 'true' : 'false' })}
                                    className="manage-modal-form-check-input"
                                />
                            </Form.Group>

                            <Form.Group controlId="isActive">
                                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedItem?.isActive === 'true'}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, isActive: e.target.checked ? 'true' : 'false' })}
                                    className="manage-modal-form-check-input"
                                />
                            </Form.Group>

                            <Button type="submit" className="manage-modal-employee-btn">Update</Button>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DepositeHeads;
