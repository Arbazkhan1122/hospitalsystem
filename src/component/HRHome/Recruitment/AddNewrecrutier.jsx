/* Ajhar Tamboli addNewrecrutier.jsx 07-10-24 */

import React, { useState } from 'react';
import "./AddNewrecrutier.css"

const AddNewrecrutier = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        recruitement_id: '',
        name: '',
        email: '',
        mobile: '',
        dateOfJoining: '',
        department: '',
        designation: '',
        typeOfEmployee: '',
        hiredBy: '',
        previousRole: '',
        status: '',
        remark: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onSubmit(formData);
    };

    return (
        <div className="addNewrecrutier-container">
            <div className="addNewrecrutier-header">
                <h3>Add New Recruiter</h3>
                <button className="addNewrecrutier-close-btn" onClick={onClose}>x</button>
            </div>

            <form className="addNewrecrutier-form" onSubmit={handleSubmit}>
                <div className="addNewrecrutier-form-row">

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Recruiter Id<span>*</span></label>
                            <input
                                type="text"
                                name="recruitement_id"
                                value={formData.recruitement_id}
                                onChange={handleInputChange}
                                placeholder="Recruiter Id"
                                required
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Recruiter Name<span>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Recruiter Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Contact Number<span>*</span></label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="Contact Number"
                                required
                            />
                        </div>
                    </div>

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Date of Joining</label>
                            <input
                                type="date"
                                name="dateOfJoining"
                                value={formData.dateOfJoining}
                                onChange={handleInputChange}
                                placeholder="Date of Joining"
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Department<span>*</span></label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                placeholder='Department'
                                required
                            />
                        </div>
                    </div>

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Designation</label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputChange}
                                placeholder="Designation"
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Employee Type<span>*</span></label>
                            <input
                                type="text"
                                name="typeOfEmployee"
                                value={formData.typeOfEmployee}
                                onChange={handleInputChange}
                                placeholder='Employee Type'
                                required
                            />
                        </div>
                    </div>

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Assigned Hiring Managers</label>
                            <input
                                type="text"
                                name="hiredBy"
                                value={formData.hiredBy}
                                onChange={handleInputChange}
                                placeholder="Assigned Hiring Managers"
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Previous Role<span>*</span></label>
                            <input
                                type="text"
                                name="previousRole"
                                value={formData.previousRole}
                                onChange={handleInputChange}
                                placeholder='Previous Role'
                                required
                            />
                        </div>
                    </div>

                    <div className="addNewrecrutier-form-group-1row">
                        <div className="addNewrecrutier-form-group">
                            <label>Status</label>
                            <input
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                placeholder="Status"
                            />
                        </div>
                        <div className="addNewrecrutier-form-group">
                            <label>Remarks<span>*</span></label>
                            <input
                                type="text"
                                name="remark"
                                value={formData.remark}
                                onChange={handleInputChange}
                                placeholder='Remarks'
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="addNewrecrutier-form-actions">
                    <button type="submit" className="addNewrecrutier-add-btn">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewrecrutier;
