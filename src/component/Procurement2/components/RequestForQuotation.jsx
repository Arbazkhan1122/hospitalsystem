import React from 'react';
import './RequestForQuotation.css';

function RequestForQuotation() {
    return (
        <div className="quo-container">
            <h1>Request For Quotation</h1>
            <form>
                <div className="quo-form-row">
                    <div className="quo-form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="quo-form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea id="description" name="description" placeholder="Description" required></textarea>
                    </div>
                </div>
                <div className="quo-form-row">
                    <div className="quo-form-group">
                        <label htmlFor="requestDate">Request Date *</label>
                        <input type="date" id="requestDate" name="requestDate" defaultValue="2024-08-26" required />
                    </div>
                    <div className="quo-form-group">
                        <label htmlFor="closeDate">Request Close Date *</label>
                        <input type="date" id="closeDate" name="closeDate" defaultValue="2024-08-26" required />
                    </div>
                </div>
                <div className="quo-form-row">
                    <div className="quo-form-group">
                        <label htmlFor="vendor">Select Vendor *</label>
                        <select id="vendor" name="vendor" required>
                            <option value="">---Select Vendor---</option>
                        </select>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Code</th>
                            <th>Unit</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" placeholder="Item Name" /></td>
                            {/* <td><span className="quo-code-help">?</span></td> */}
                            <td></td>
                            <td><input type="number" defaultValue="0" /></td>
                            <td><input type="text" /></td>
                            <td>
                                <button type="button" className="quo-btn-remove">-</button>
                                <button type="button" className="quo-btn-add">+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="quo-form-actions">
                    <button type="submit" className="quo-btn-request">Request</button>
                    <button type="button" className="quo-btn-cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default RequestForQuotation;
