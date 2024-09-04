import React from 'react';
import './SurgicalHistory.css';

const SurgicalHistory = () => {
    return (
        <div className="hist-container">
            <div className="hist-header">
                <span className="hist-required">*</span> 
                <span className="hist-title">Surgical History List</span>
                <button className="hist-add-button">Add New</button>
            </div>
            <table className="hist-problem-list-table">
                <thead>
                    <tr>
                        <th>Surgery Type</th>
                        <th>ICD-11 Description</th>
                        <th>ICD-11 Code</th>
                        <th>Surgery Date</th>
                        <th>Note</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default SurgicalHistory;
