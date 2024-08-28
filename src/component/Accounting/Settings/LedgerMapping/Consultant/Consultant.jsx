import React from "react";
import "./consultant.css";

function Consultant() {
  const consultants = [
    {
      department: "Medicine",
      employeeName: "INNOCENT TENGO",
      ledgerCode: "282035",
      ledgerName: "INNOCENT TENGO",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Medicine",
      employeeName: "Dr. Baus Wringley",
      ledgerCode: "923228",
      ledgerName: "Dr. Baus Wringley",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Account",
      employeeName: "Mr. Accounting Module",
      ledgerCode: "86850",
      ledgerName: "Mr. Accounting Module",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Orthopedic",
      employeeName: "Dr. Harry Potter",
      ledgerCode: "86850",
      ledgerName: "Dr. Harry Potter",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Account",
      employeeName: "Mr. Account Trial",
      ledgerCode: "728044",
      ledgerName: "Mr. Account Trial",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Billing",
      employeeName: "Mrs. Billing Madam",
      ledgerCode: "891664",
      ledgerName: "Mrs. Billing Madam",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Medicine",
      employeeName: "Dr. Amit Shah",
      ledgerCode: "891664",
      ledgerName: "Dr. Amit Shah",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Cardiology",
      employeeName: "Dr. pooja Mishra",
      ledgerCode: "532860",
      ledgerName: "Dr. pooja Mishra",
      openingBalance: 0,
      active: true,
    },
    {
      department: "Billing",
      employeeName: "Mr. yak Billing y",
      ledgerCode: "174055",
      ledgerName: "Mr. yak Billing y",
      openingBalance: 0,
      active: true,
    },
    {
      department: "ADMINISTRATION",
      employeeName: "Mr. Some New Employee",
      ledgerCode: "337675",
      ledgerName: "Mr. Some New Employee",
      openingBalance: 0,
      active: true,
    },
  ];

  return (
    <div className="Consultant">
      <div className="Consultant-form">
        <div className="Consultant-form-group">
          <label>Primary Group*:</label>
          <select>
            <option>Liabilities</option>
          </select>
        </div>
        <div className="Consultant-form-group">
          <label>Chart of Accounts*:</label>
          <select>
            <option>Current Liabilities</option>
          </select>
        </div>
        <div className="Consultant-form-group">
          <label>Ledger Group*:</label>
          <input type="text" value="Sundry Creditors" readOnly />
        </div>
        <div className="Consultant-search-group">
          <input type="text" placeholder="type here to search consultant" />
          <button className="Consultant-search-button">🔍</button>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" checked /> All (66)
          </label>
          <label>
            <input type="checkbox" /> Consultant with A/c Head (55)
          </label>
          <label>
            <input type="checkbox" /> Consultant without A/c Head (11)
          </label>
        </div>
      </div>

      <div className="Consultant-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Department</th>
              <th>EmployeeName</th>
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
            {consultants.map((consultant, index) => (
              <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{consultant.department}</td>
                <td>{consultant.employeeName}</td>
                <td>{consultant.ledgerCode}</td>
                <td>{consultant.ledgerName}</td>
                <td></td>
                <td>{consultant.openingBalance}</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name={`balance-type-${index}`}
                      checked
                    />{" "}
                    Dr
                  </label>
                  <label>
                    <input type="radio" name={`balance-type-${index}`} /> Cr
                  </label>
                </td>
                <td>
                  <input type="checkbox" checked={consultant.active} />
                </td>
                <td>0</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="Consultant-save-button">Save Ledgers</button>
    </div>
  );
}

export default Consultant;
