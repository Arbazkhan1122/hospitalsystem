import React from 'react'
import "../SSPharmacy/sSPStoreTransfer.css"
function SSPStoreTransfer() {
  return (
    <div className="ssp-Transfer-store-container">
      <div className="ssp-Transfer-store-transfer-form">
        <label htmlFor="transfer-type">Transfer Type:</label>
        <select id="transfer-type" className="ssp-Transfer-store-transfer-type">
          <option>Normal Transfer</option>
          <option>Expiry Transfer</option>
        </select>
        <table className='ssp-Transfer-store'>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Generic Name</th>
              <th>Batch No</th>
              <th>Cost Price</th>
              <th>Available Quantity</th>
              <th>Return Quantity</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>.OSMOLAX</td>
              <td>OSMOLAX</td>
              <td>bat278</td>
              <td>350</td>
              <td>11</td>
              <td>0</td>
              <td><input type="text" /></td>
              <td>2025-09-05</td>
            </tr>
          </tbody>
        </table>
        <button className="ssp-Transfer-store-btn-transfer">Transfer</button>
      </div>
    </div>
  )
}

export default SSPStoreTransfer