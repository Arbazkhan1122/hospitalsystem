import React from 'react'
import "./ReturnToVendor.css"
const ReturnToVendor = () => {
  return (
    <div className='returnToVendor-interface'>
      <div className="returnToVendor-button">
        <button className='ret-button'>
            +Create New Return
        </button>
      </div>
      <div className="returnToVendor-searchBar">
        <input type="text" className='ret-input'/>
        <div className='ret-inner-div'>
            <p>Showing 0/0 result</p>
            <button className='ret-button'>Print</button>
        </div>
      </div>
      <div className="returnToVendor-table">
      <table className="receipt-table">
              <thead>
                <tr>
                  <th>Vendor Name</th>
                  <th>Credit Note No</th>
                  <th>Returned On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="returnToVendor-no-rows">No Rows To Show</td>
                </tr>
              </tbody>
            </table>
      </div>
      <div className="returnToVendor-pagination">
              <span>0 to 0 of 0</span>
              <button>First</button>
              <button>Previous</button>
              <span>Page 0 of 0</span>
              <button>Next</button>
              <button>Last</button>
            </div>
      
    </div>
  )
}

export default ReturnToVendor
