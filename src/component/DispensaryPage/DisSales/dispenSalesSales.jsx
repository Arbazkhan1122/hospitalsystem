import React from 'react';
// import './Sales.css';
import "../DisSales/dispenSalesSales.css"

const SalesSales = () => {
  return (
    <div className="sales-container">
      <div className="header">
        <div className="tabs">
          <div className="tab active">Sale</div>
          <div className="tab">Sale List</div>
          <div className="tab">Return From Customer</div>
          <div className="tab">Return Sale List</div>
          <div className="tab">Provisional Bills</div>
          <div className="tab">Settlement</div>
          <div className="tab">Provisional Return</div>
        </div>
      </div>

      <div className="patient-info">
        <div className="patient-search">
          <label>Search Patient:</label>
          <input type="text" placeholder="Search Patient (Minimum 5 Character)" />
        </div>
        <div className="doctor-info">
          <label>Doctor:</label>
          <input type="text" value="ANONYMOUS DOCTOR" readOnly />
          <input type="checkbox" id="external" />
          <label htmlFor="external">External?</label>
          <button className="add-button">+</button>
        </div>
        <div className="register-patient">
          <button>Register New Outdoor Patient</button>
          <button>Stock Details</button>
        </div>
      </div>

      <div className="hospital-info">
        <div>Hospital No:</div>
        <div>Name: Anonymous</div>
        <div>Visit Type: outpatient</div>
        <div>Membership:</div>
        <select>
          <option>General</option>
        </select>
        <div>Age/Sex: N/A</div>
        <div>Address: Anonymous</div>
        <div>Contact No: N/A</div>
        <div>Price Category:</div>
        <select>
          <option>Normal</option>
        </select>
      </div>

      <div className="medicine-info">
        <div>
          <label>Generic Name</label>
          <input type="text" placeholder="--Select Generic Name--" />
        </div>
        <div>
          <label>Drug/Medicine Name</label>
          <input type="text" placeholder="--Select Medicine--" />
        </div>
        <div>
          <label>Expiry</label>
          <input type="text" />
        </div>
        <div>
          <label>Batch</label>
          <input type="text" />
        </div>
        <div>
          <label>Avl Qty</label>
          <input type="text" />
        </div>
        <div>
          <label>Qty</label>
          <input type="text" />
        </div>
        <div>
          <label>Sale Price</label>
          <input type="text" value="0" readOnly />
        </div>
        <div>
          <label>SubTotal</label>
          <input type="text" value="0" readOnly />
          <button className="add-button">+</button>
        </div>
      </div>

      <div className="invoice-summary">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>GenericName</th>
              <th>ItemName</th>
              <th>Expiry</th>
              <th>Batch</th>
              <th>Qty</th>
              <th>SalePrice</th>
              <th>SubTotal</th>
              <th>Discount Amt.</th>
              <th>VAT Amt.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows dynamically here */}
          </tbody>
        </table>
      </div>

      <div className="payment-section">
        <div className="payment-summary">
          <div>Sub Total: 0</div>
          <div>Total Amount: 0</div>
          <div>In Words: Only.</div>
          <div>Payment Options:</div>
          <select>
            <option>Cash</option>
            {/* Add more payment options */}
          </select>
          <div>Tender: 0</div>
          <div>Change: Kshs. 0</div>
          <div>Remarks:</div>
          <input type="text" />
          <div>Paid Amount: 0</div>
        </div>
        <div className="payment-actions">
          <button className="print-button">Print Invoice</button>
          <button className="discard-button">Discard</button>
        </div>
      </div>

      <div className="history-section">
        <div className="invoice-history">
          <h4>Invoice History</h4>
          <div>Deposit Balance: 0</div>
          <div>Credit: 0</div>
          <div>Provisional Amount: 0</div>
        </div>
        <div className="credit-limits">
          <h4>Credit Limits and Balances</h4>
          <div>General Credit Limit: 0</div>
          <div>IP Credit Limit: 0</div>
          <div>OP Credit Limit: 0</div>
        </div>
      </div>
    </div>
  );
};

export default SalesSales;
