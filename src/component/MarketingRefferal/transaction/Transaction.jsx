import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'; 
import './transaction.css'

function Transaction() {

  const [isModalOpen, setIsModalOpen] = useState(false);

   // Function to open the modal
   const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mkrt_transaction_main_container'>
    
    <div className="mkrt_transaction-header">
      <div className="mkrt_transaction-date-picker">
      <div className='date_transaction'>
        <label>From: <input type="date" /></label>
        <label>To: <input type="date" /></label>
        <button>OK</button>
      </div>
    </div>
    </div>
    <div className='mkrt_transaction-search_main' >
    <div className="mkrt_transaction-search" > 
        <input type="text" placeholder="Search" />
        <button className="mkrt_transaction-search-button">
          <FaSearch />
        </button>
        <label htmlFor=""> showing 19/19 result</label>
      </div>
    </div>
    <div className="mkrt_transaction-table-container">
      <table className="mkrt_transaction-table">
        <thead>
          <tr>
            <th>Invoice Date</th>
            <th>Invoice No</th>
            <th>Hospital No</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Invoice Amount</th>
            <th>Return Amount</th>
            <th>Net Amount</th>
            <th>Entered?</th>
          </tr>
        </thead>
        <tbody>
          {/* Repeat this <tr> block for each row of data */}
          <tr>
            <td>2024-08-17</td>
            <td>2024-BL267</td>
            <td>2408003812</td>
            <td>Vinh Nam Bui</td>
            <td>24Y/Male</td>
            <td>3200.0000</td>
            <td>0</td>
            <td>3200.0000</td>
            <td><button className="nobtn" onClick={openModal}>No(0)</button></td>
          </tr>
          {/* ... Add more rows as needed */}
        </tbody>
      </table>
      <div className="mkrt_transaction-pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div>
     
    </div>
    {/* Modal section */}
{isModalOpen && (
  <div className="transaction_modal">
  <div className="transaction_modal-content">
      <span className="transaction_modal-close-button" onClick={closeModal}>&times;</span>
      <header className="transaction_modal-header">
          <div><strong>Patient Name:</strong> Vinh Nam Bui (24Y/Male)</div>
          <div><strong>Hospital No:</strong> 2408003812</div>
          <div><strong>Invoice No:</strong> 2024-BL267</div>
          <div><strong>Invoice Date:</strong> 2024-08-17</div>
          <div><strong>Net Amount:</strong> 3200</div>
      </header>
      
      <div className='toto' style={{display:"flex"}}>
      <div className="transaction_modal-bill-details">
          <h3>Bill Details:</h3>
          <table>
              <thead>
                  <tr>
                      <th>S.N.</th>
                      <th>Item Name</th>
                      <th>Net. Qty</th>
                      <th>Net Amt.</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td>MP SMEAR</td>
                      <td>1</td>
                      <td>2,000.00</td>
                  </tr>
                  <tr>
                      <td>2.</td>
                      <td>CREATININE</td>
                      <td>1</td>
                      <td>1,200.00</td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div className='tototo' style={{display:"flex", flexDirection:"column", marginLeft:"20px", border:"1px solid black" , padding:"5px"}}>
      <div className="transaction_modal-referral-entry">
          <h3>Referral Entry</h3>
          <form>
              <div className="transaction_modal-form-group">
                  <label>Ref. Scheme*</label>
                  <select><option value="">Select Scheme</option></select>
              </div>
              <div className="transaction_modal-form-group">
                  <label>Referring Party*</label>
                  <input type="text" placeholder="Enter Name, Vehicle No, etc (min 3 characters)" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Remarks</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Group:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Organization:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Vehicle No:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Area:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Ref. %:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-form-group">
                  <label>Amount:</label>
                  <input type="text" />
              </div>
              <div className="transaction_modal-buttons">
                  <button type="submit" className="transaction_modal-save-button">Save</button>
                  <button type="reset" className="transaction_modal-clear-button">Clear</button>
              </div>
          </form>
      </div>
      
      <div className="transaction_modal-already-entered">
          <h3>Already Entered:</h3>
          <table>
              <thead>
                  <tr>
                      <th>Scheme</th>
                      <th>Referring Party</th>
                      <th>Org. / Area Code</th>
                      <th>Vehicle No</th>
                      <th>Ref %</th>
                      <th>Amount</th>
                      <th>Remarks</th>
                  </tr>
              </thead>
              <tbody>
                  {/* Table rows for already entered referrals can go here */}
              </tbody>
          </table>
      </div>
      
      </div>
      </div>
  </div>
</div>

)}

    
    </div>

    
    
  )
}

export default Transaction