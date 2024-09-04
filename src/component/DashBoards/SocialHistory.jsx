import React from 'react';
import './SocialHistory.css';

const SocialHistory = () => {
    return (
        <div className="hist-container">
            <div className="hist-header">
                <span className="hist-required">*</span> 
                <span className="hist-title">Family History Problem List</span>
                <button className="hist-add-button">Add New</button>
            </div>
            <table className="hist-problem-list-table">
                <thead>
                    <tr>
                        <th>Social History</th>
                        <th>Alcohol History</th>
                        <th>Drug History</th>
                        <th>Occupation</th>
                        <th>Family Support</th>
                        <th>Hobby</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default SocialHistory;
