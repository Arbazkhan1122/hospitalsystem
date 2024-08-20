import React from 'react'
import "./WriteOff.css"
const WriteOff = () => {
    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
        // Implement search logic here
      };
    
      const handlePrint = () => {
        console.log('Printing...');
        // Implement print logic here
      };
  return (
    <div className='writeOff-content'>
         <div className="tab-content">
            <h2>Write-Off Goods</h2>
            <table className="write-off-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Item Name *</th>
                  <th>Code</th>
                  <th>Available Qty</th>
                  <th>Write-Off Qty *</th>
                  <th>Write-Off Date *</th>
                  <th>Remark *</th>
                  <th>Item Rate</th>
                  <th>Sub Total</th>
                  <th>VAT %</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button className="remove-row">✖</button></td>
                  <td><input type="text" placeholder="Item Name" /></td>
                  <td><input type="text" value="0" readOnly /></td>
                  <td><input type="text" value="0" readOnly /></td>
                  <td><input type="text" value="0" /></td>
                  <td><input type="date" value="2024-08-08" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" value="0" readOnly /></td>
                  <td><input type="text" value="0" readOnly /></td>
                  <td><input type="text" value="0" readOnly /></td>
                  <td><input type="text" value="0" readOnly /></td>
                </tr>
              </tbody>
            </table>
            <div className='totals-container'>
            <div className="totals">
              <div>
                <label>SubTotal: <input type="text" value="0" readOnly /></label>
                <label>VAT: <input type="text" value="0" readOnly /></label>
                <label>Total Amount: <input type="text" value="0" readOnly /></label>
                <label>In Words: <input type="text" value="0" readOnly /></label>
              </div>
            </div>
            <div className="buttons">
              <button className="write-off-request">Write-Off Request</button>
              <button className="cancel">Cancel</button>
            </div>
            </div>
          </div>
      
    </div>
  )
}

export default WriteOff
