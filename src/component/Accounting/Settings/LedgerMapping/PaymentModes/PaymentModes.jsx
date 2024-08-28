import React from 'react';
import './PaymentModes.css';

const PaymentModes = () => {
    const paymentModes = [
        { name: "M-PESA", ledgerCode: "636842", ledgerName: "M-PESA", description: "", openingBalance: 0, openingBalanceType: "Dr", active: true },
        { name: "Deposit", ledgerCode: "800462", ledgerName: "Deposit", description: "", openingBalance: 0, openingBalanceType: "Dr", active: true },
        { name: "Cash", ledgerCode: "1002", ledgerName: "Cash", description: "", openingBalance: 0, openingBalanceType: "Dr", active: true }
    ];

    return (
        <div className="payment-modes-container">
            <div className="header">
                <label>Primary Group* :</label>
                <select>
                    <option>Assets</option>
                </select>

                <label>Chart of Accounts* :</label>
                <select>
                    <option>Current Assets</option>
                </select>

                <label>Ledger Group* :</label>
                <select>
                    <option>Cash In Hand</option>
                </select>
                <input type="text" placeholder="type here to search Credit Organizations" className="search-input" />
                <button className="search-btn">🔍</button>

                <div className="checkbox-group">
                    <input type="checkbox" id="all" defaultChecked />
                    <label htmlFor="all">All (3)</label>
                    <input type="checkbox" id="withAcHead" defaultChecked />
                    <label htmlFor="withAcHead" className="green">Payment Modes with A/c Head (3)</label>
                    <input type="checkbox" id="withoutAcHead" />
                    <label htmlFor="withoutAcHead" className="red">Payment Modes without A/c Head</label>
                </div>
            </div>

            <div className="ledger-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Payment Mode</th>
                            <th>Ledger Code</th>
                            <th>Ledger Name</th>
                            <th>Description</th>
                            <th>Opening Balance</th>
                            <th>Opening Balance Type</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentModes.map((mode, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{mode.name}</td>
                                <td>{mode.ledgerCode}</td>
                                <td><input type="text" value={mode.ledgerName} className="ledger-input" readOnly /></td>
                                <td><input type="text" value={mode.description} className="ledger-input" /></td>
                                <td><input type="number" value={mode.openingBalance} className="ledger-input" /></td>
                                <td>
                                    <input type="radio" name={`balanceType${index}`} defaultChecked={mode.openingBalanceType === "Dr"} /> Dr
                                    <input type="radio" name={`balanceType${index}`} defaultChecked={mode.openingBalanceType === "Cr"} /> Cr
                                </td>
                                <td>
                                    <input type="checkbox" defaultChecked={mode.active} /> Active
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="save-btn">Save Ledgers</button>
        </div>
    );
};

export default PaymentModes;
