import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './MapSchemeAndPrice.css';

const usersData = [
    { department: 'ADMINISTRATION', serviceDepartment: 'Admission Fees', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'ADMISSION PACK', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'ANC', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'ANC PACIS', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'BLOOD TRANSFUSSION', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'CLINICALS', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'CONSULTATION FEES', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'CWC', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Department Followup Charges', shortName: 'Dept-Followup-Charges', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Department OPD', shortName: 'Dept-OPD', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Department OPD Old Patient', shortName: 'Dept-OPD-Old-Patient', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Doctor Followup Charges', shortName: 'Doc-Followup-Charges', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Doctor OPD Old Patient', shortName: 'Doc-OPD-Old-Patient', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'Family Planning', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'FEE', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'MCH', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'MSP', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'NEBULIZATION', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'OBSERVATION FEE', shortName: '', isActive: true, action: 'Edit' },
    { department: 'ADMINISTRATION', serviceDepartment: 'OPD', shortName: 'OPD', isActive: true, action: 'Edit' },
];


const ServiceDepartments = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = usersData.filter(item =>
        item.serviceDepartment.toLowerCase().includes(searchTerm.toLowerCase())
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
                <button className="map-scheme-reaction-add-button">+ Add Service Department</button>
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
            <div className="map-scheme-reaction-tab">
                <table className="map-scheme-reaction-users-table">
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Service Department</th>
                            <th>Short Name</th>
                            <th>Is Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.department}</td>
                                <td>{item.serviceDepartment}</td>
                                <td>{item.shortName}</td>
                                <td>{item.isActive ? "Yes" : "No"}</td>
                                <td className="manage-reaction-action-buttons">
                                    <button
                                        className="map-scheme-reaction-action-button"
                                        onClick={() => handleShowEditModal(item)}
                                    >
                                        {item.action}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="map-scheme-reaction-pagination">
                    <div className="map-scheme-reaction-pagination-controls">
                        <button>First</button>
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Last</button>
                    </div>
                </div>
            </div>

            <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
                <div className="manage-modal-dialog">
                    <div className="manage-modal-modal-header">
                        <div className="manage-modal-modal-title">Update Service Department</div>
                        <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
                    </div>
                    <div className="manage-modal-modal-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="department">
                                <Form.Label className="manage-modal-form-label">Department:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.department || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, department: e.target.value })}
                                    placeholder="Department"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="serviceDepartment">
                                <Form.Label className="manage-modal-form-label">Service Department:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.serviceDepartment || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, serviceDepartment: e.target.value })}
                                    placeholder="Service Department"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="shortName">
                                <Form.Label className="manage-modal-form-label">Short Name/Code:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.shortName || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, shortName: e.target.value })}
                                    placeholder="Short Name/Code"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="isActive" className='manage-modal-form-group'>
                                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedItem?.isActive || false}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, isActive: e.target.checked })}
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

export default ServiceDepartments;
