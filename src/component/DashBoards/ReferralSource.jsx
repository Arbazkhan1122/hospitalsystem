import React from 'react';
import './ReferralSource.css';

const ReferralSource = () => {
    return (
        <div className="hist-container">
            <div className="hist-header">
                <span className="hist-required">*</span> 
                <span className="hist-title">Referral Source List</span>
                <button className="hist-add-button">Add New</button>
            </div>
            <table className="hist-problem-list-table">
                <thead>
                    <tr>
                        <th>Newspaper</th>
                        <th>Doctor</th>
                        <th>Radio</th>
                        <th>Web Page</th>
                        <th>Friends & Family</th>
                        <th>TV</th>
                        <th>Staff</th>
                        <th>Magazine</th>
                        <th>Unknown</th>
                        <th>Others</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default ReferralSource;
