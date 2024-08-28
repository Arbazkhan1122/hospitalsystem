import React, { useState } from "react";
import "./PharmacySupplier.css"; // Import your CSS for styling

const PharmacySupplier = () => {
  // Sample data (you can replace this with your actual data)
  const [data, setData] = useState([
    { id: 1, supplier: "Temporibus", code: "308813", mainLedger: "Inventory Vendor waleed", openingBalance: 0, balanceType: "Dr", active: true, tdsPercent: 0, kraPin: "", address: "", mobile: "", landline: "" },
    { id: 2, supplier: "MEDS", code: "539330", mainLedger: "alkjadkplier", openingBalance: 40000, balanceType: "Dr", active: true, tdsPercent: 0, kraPin: "", address: "", mobile: "", landline: "" },
    { id: 3, supplier: "Naynesh", code: "1113", mainLedger: "Pharmacy Supplier", openingBalance: 40000, balanceType: "Dr", active: true, tdsPercent: 0, kraPin: "", address: "", mobile: "", landline: "" },
    { id: 4, supplier: "Vishal", code: "1113", mainLedger: "Pharmacy Supplier", openingBalance: 40000, balanceType: "Dr", active: true, tdsPercent: 0, kraPin: "", address: "", mobile: "", landline: "" },
    // Add more rows here...
  ]);

  return (
    <div className="pharmacy-supplier-container">
      <div className="filters">
        <label>
          Primary Group:
          <select>
            <option value="liabilities">Liabilities</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Chart of Accounts:
          <select>
            <option value="current-liabilities">Current Liabilities</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Ledger Group:
          <select>
            <option value="sundry-creditors">Sundry Creditors</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <div className="search-bar">
          <input type="text" placeholder="Type here to search Supplier" />
          <button>Search</button>
        </div>
        <div className="checkbox-filters">
          <label>
            <input type="checkbox" /> All (4)
          </label>
          <label>
            <input type="checkbox" /> Pharmacy Supplier with A/c Head (4)
          </label>
        </div>
      </div>

      <table className="pharmacy-supplier-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Code</th>
            <th>Main Ledger</th>
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
          {data.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" /> {item.supplier}</td>
              <td>{item.code}</td>
              <td className="ledger">{item.mainLedger}</td>
              <td><input type="text" placeholder="Description" /></td>
              <td><input type="number" value={item.openingBalance} /></td>
              <td>
                <label>
                  <input type="radio" checked={item.balanceType === "Dr"} /> Dr
                </label>
                <label>
                  <input type="radio" checked={item.balanceType === "Cr"} /> Cr
                </label>
              </td>
              <td><input type="checkbox" checked={item.active} /></td>
              <td><input type="number" value={item.tdsPercent} /></td>
              <td><input type="text" value={item.kraPin} /></td>
              <td><input type="text" value={item.address} /></td>
              <td><input type="text" value={item.mobile} /></td>
              <td><input type="text" value={item.landline} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PharmacySupplier;
