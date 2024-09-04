import React from 'react';
import './HistoryBar.css';

const FamilyHistoryProblemList = () => {
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
                        <th>ICD-11 Description</th>
                        <th>ICD-11 Code</th>
                        <th>Relationship</th>
                        <th>Note</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default FamilyHistoryProblemList;
