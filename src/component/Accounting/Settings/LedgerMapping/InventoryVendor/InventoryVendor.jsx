// InventoryVendor.jsx
import React from 'react';
import './InventoryVendor.css';

const InventoryVendor = () => {
    const vendors = [
        { name: 'SHIKAMED CHEMIST', ledgerCode: '647576', ledgerName: 'Apple Vendor', description: '', openingBalance: 0, balanceType: 'Dr', active: true, tdsPercent: 0, kraPin: '', address: '', mobile: '', landline: '' },
        { name: 'DAIMA DISPENSING CHEMIST', ledgerCode: '288772', ledgerName: 'company & ashar', description: '', openingBalance: 0, balanceType: 'Dr', active: true, tdsPercent: 0, kraPin: '', address: '', mobile: '', landline: '' },
        { name: 'MEDS', ledgerCode: '452392', ledgerName: 'Ashar & Company', description: '', openingBalance: 0, balanceType: 'Dr', active: true, tdsPercent: 0, kraPin: '', address: '', mobile: '', landline: '' },
        { name: 'Shadon Medical Diagnostic', ledgerCode: '452392', ledgerName: 'Some Vendor', description: '', openingBalance: 0, balanceType: 'Dr', active: true, tdsPercent: 0, kraPin: '', address: '', mobile: '', landline: '' },
        { name: 'Arbaz Pathan', ledgerCode: '', ledgerName: '', description: '', openingBalance: 0, balanceType: 'Dr', active: true, tdsPercent: 0, kraPin: '', address: '', mobile: '', landline: '' },
    ];

    return (
        <div className="inventory-vendor-container">
            <div className="header-section">
                <label className="primary-group">Primary Group*</label>
                <select className="select-box">
                    <option value="Liabilities">Liabilities</option>
                </select>

                <label className="chart-account">Chart of Accounts*</label>
                <select className="select-box">
                    <option value="Current Liabilities">Current Liabilities</option>
                </select>

                <label className="ledger-group">Ledger Group*</label>
                <select className="select-box">
                    <option value="Sundry Creditors">Sundry Creditors</option>
                </select>
            </div>

            <div className="search-section">
                <input type="text" placeholder="type here to search Inventory Vendor" className="search-input" />
                <input type="checkbox" id="all" className="checkbox" />
                <label htmlFor="all">All ({vendors.length})</label>
            </div>

            <div className="status-section">
                <div className="status-item">
                    <input type="checkbox" id="inventory-with-ac" className="checkbox" />
                    <label htmlFor="inventory-with-ac">Inventory Vendor with A/c Head ({vendors.filter(vendor => vendor.ledgerName).length})</label>
                </div>
                <div className="status-item">
                    <input type="checkbox" id="inventory-without-ac" className="checkbox red" />
                    <label htmlFor="inventory-without-ac">Inventory Vendor without A/c Head ({vendors.filter(vendor => !vendor.ledgerName).length})</label>
                </div>
            </div>

            <table className="ledger-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Vendor Name</th>
                        <th>Ledger Code</th>
                        <th>Ledger Name</th>
                        <th>Description</th>
                        <th>Opening Balance</th>
                        <th>Opening Balance Type</th>
                        <th>Active</th>
                        <th>TDS Percent</th>
                        <th>KRA PIN</th>
                        <th>Address</th>
                        <th>Mobile No.</th>
                        <th>Landline No.</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" className={`checkbox ${!vendor.ledgerName ? 'red' : ''}`} /> </td>
                            <td>{vendor.name}</td>
                            <td>{vendor.ledgerCode}</td>
                            <td className="ledger-name">{vendor.ledgerName}</td>
                            <td>{vendor.description}</td>
                            <td><input type="number" defaultValue={vendor.openingBalance} className="number-input" /></td>
                            <td>
                                <input type="radio" name={`balanceType${index}`} checked={vendor.balanceType === 'Dr'} readOnly /> Dr 
                                <input type="radio" name={`balanceType${index}`} checked={vendor.balanceType === 'Cr'} readOnly /> Cr
                            </td>
                            <td><input type="checkbox" defaultChecked={vendor.active} readOnly /></td>
                            <td><input type="number" defaultValue={vendor.tdsPercent} className="number-input" /></td>
                            <td>{vendor.kraPin}</td>
                            <td>{vendor.address}</td>
                            <td>{vendor.mobile}</td>
                            <td>{vendor.landline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="footer-section">
                <button className="save-button">Save Ledgers</button>
            </div>
        </div>
    );
}

export default InventoryVendor;
