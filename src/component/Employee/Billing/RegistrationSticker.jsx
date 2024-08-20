import React from 'react';
import './MapSchemeAndPrice.css';

const usersData = [
    { name: "General-OPD", report: "General outpatient", unit: "", isActive: true },
    { name: "General-IPD", report: "General inpatient", unit: "", isActive: true },
    { name: "General-ER", report: "General emergency", unit: "", isActive: true },
    { name: "ECHS-OPD", report: "ECHS outpatient", unit: "", isActive: true },
    { name: "ECHS-IPD", report: "ECHS inpatient", unit: "", isActive: true },
    { name: "ECHS-ER", report: "ECHS emergency", unit: "", isActive: true },
    { name: "Medicare-OPD", report: "Medicare outpatient", unit: "", isActive: true },
    { name: "Medicare-IPD", report: "Medicare inpatient", unit: "", isActive: true },
    { name: "Medicare-ER", report: "Medicare emergency", unit: "", isActive: true },
    { name: "NGHIS-OPD", report: "NGHIS outpatient", unit: "", isActive: true },
    { name: "NGHIS-IPD", report: "NGHIS inpatient", unit: "", isActive: true },
    { name: "NGHIS-ER", report: "NGHIS emergency", unit: "", isActive: true },
    { name: "SSF-OPD", report: "SSF outpatient", unit: "", isActive: true },
    { name: "SSF-IPD", report: "SSF inpatient", unit: "", isActive: true },
    { name: "SSF-ER", report: "SSF emergency", unit: "", isActive: true },
];

const RegistrationSticker = () => {
    return (
        <div className="map-scheme-reaction-container">
            <div className="map-scheme-reaction-header">
                <button className="map-scheme-reaction-add-button">Registration Sticker</button>
            </div>
            <input type="text" placeholder="Search" className="map-scheme-reaction-search-input" />
            <div className="map-scheme-reaction-span">
                <span>Showing {usersData.length}/{usersData.length} results</span>
            </div>
            <div className="map-scheme-reaction-tab">
                <table className="map-scheme-reaction-users-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Report</th>
                            <th>Unit</th>
                            <th>Is Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.report}</td>
                                <td>{user.unit}</td>
                                <td>{user.isActive ? 'Yes' : 'No'}</td>
                                <td className="manage-reaction-action-buttons">
                                    <button className="map-scheme-reaction-action-button">Edit</button>
                                    <button className="map-scheme-reaction-action-button">Deactivate</button>
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
        </div>
    );
};

export default RegistrationSticker;
