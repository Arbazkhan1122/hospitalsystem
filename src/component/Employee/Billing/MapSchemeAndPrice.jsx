import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './MapSchemeAndPrice.css';

const usersData = [
    {
        "SchemeName": "NHIF CAPITATION",
        "PriceCategoryName": "NHIF CAPITATION",
        "IsDefault": true,
        "IsActive": true,
        "Action": ["Edit", "Deactivate"]
    },
    {
        "SchemeName": "BRITAM",
        "PriceCategoryName": "Britam",
        "IsDefault": false,
        "IsActive": true,
        "Action": ["Edit", "Deactivate"]
    },
    {
        "SchemeName": "NHIF General",
        "PriceCategoryName": "NHIF General",
        "IsDefault": false,
        "IsActive": true,
        "Action": ["Edit", "Deactivate"]
    }
];

const MapSchemeAndPrice = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = usersData.filter(item =>
        item.SchemeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.PriceCategoryName.toLowerCase().includes(searchTerm.toLowerCase())
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
                <button className="map-scheme-reaction-add-button">+ Add New Scheme Vs Price Category Item</button>
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
                            <th>Scheme Name</th>
                            <th>Price Category Name</th>
                            <th>Is Default</th>
                            <th>Is Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.SchemeName}</td>
                                <td>{item.PriceCategoryName}</td>
                                <td>{item.IsDefault ? "Yes" : "No"}</td>
                                <td>{item.IsActive ? "Yes" : "No"}</td>
                                <td className="manage-reaction-action-buttons">
                                    {item.Action.map((action, idx) => (
                                        <button
                                            key={idx}
                                            className="map-scheme-reaction-action-button"
                                            onClick={() => action === "Edit" && handleShowEditModal(item)}
                                        >
                                            {action}
                                        </button>
                                    ))}
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
                        <div className="manage-modal-modal-title">Update Scheme Vs Price Category Setting</div>
                        <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
                    </div>
                    <div className="manage-modal-modal-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="schemeName">
                                <Form.Label className="manage-modal-form-label">Scheme Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.SchemeName || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, SchemeName: e.target.value })}
                                    placeholder="Scheme Name"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="priceCategoryName">
                                <Form.Label className="manage-modal-form-label">Price Category Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.PriceCategoryName || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, PriceCategoryName: e.target.value })}
                                    placeholder="Price Category Name"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="isDefault" className='manage-modal-form-group'>
                                <Form.Label className="manage-modal-form-label">Is Default:</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedItem?.IsDefault || false}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, IsDefault: e.target.checked })}
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

export default MapSchemeAndPrice;
