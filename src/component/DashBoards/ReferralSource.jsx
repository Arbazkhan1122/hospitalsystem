import React, { useRef, useState } from 'react';
import './ReferralSource.css';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const ReferralSource = () => {
    const [columnWidths, setColumnWidths] = useState({});
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Manage modal visibility
    const [formData, setFormData] = useState({
        newspaper: false,
        doctor: false,
        radio: false,
        webPage: false,
        staff: false,
        friendsAndFamily: false,
        others: ''
    });

    const tableRef = useRef(null);

    const handleOpenModal = () => {
        setIsAddModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false); // Close modal
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Submit form data to backend
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/referral-source', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Referral source added successfully!');
                setIsAddModalOpen(false); // Close modal after success
            } else {
                console.error('Failed to add referral source.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="hist-container">
            <div className="hist-header">
                <span className="hist-title">Referral Source List</span>
                <button className="hist-add-button" onClick={handleOpenModal}>Add New</button>
            </div>
            <div className='table-container'>
                <table className="patientList-table" ref={tableRef}>
                    <thead>
                        <tr>
                            {[
                                "Item Name *",
                                "Code",
                                "Available Qty",
                                "Write-Off Qty *",
                                "Write-Off Date *",
                                "Remark *",
                                "Item Rate",
                                "Sub Total",
                                "VAT %",
                                "Total Amount"
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
                                            onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                                        ></div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal for adding referral source */}
            {isAddModalOpen && (
                <div className="hist-modal-overlay">
                    <div className="hist-modal-content">
                        <h6>Add Referral Source</h6>
                        <button className="hist-close-button" onClick={handleCloseModal}>❌</button>

                        {/* Referral source form */}
                        <div className="hist-form-group">
                            <label>Newspaper:</label>
                            <input type="checkbox" name="newspaper" checked={formData.newspaper} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Doctor:</label>
                            <input type="checkbox" name="doctor" checked={formData.doctor} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Radio:</label>
                            <input type="checkbox" name="radio" checked={formData.radio} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Web Page:</label>
                            <input type="checkbox" name="webPage" checked={formData.webPage} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Staff:</label>
                            <input type="checkbox" name="staff" checked={formData.staff} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Friends and Family:</label>
                            <input type="checkbox" name="friendsAndFamily" checked={formData.friendsAndFamily} onChange={handleInputChange} />
                        </div>
                        <div className="hist-form-group">
                            <label>Others:</label>
                            <input type="text" name="others" value={formData.others} onChange={handleInputChange} />
                        </div>

                        <button className="hist-add-button" onClick={handleSubmit}>Add Referral Source</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferralSource;
