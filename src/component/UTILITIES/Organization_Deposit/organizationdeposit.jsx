// OrganizationDeposit.js
import React,{useState} from 'react';
import './organizationdeposit.css';

function OrganizationDeposit() {

  const [selectedOrg, setSelectedOrg] = useState('');
  const [orgCode, setOrgCode] = useState('');
  const [showOrgInfo, setShowOrgInfo] = useState(false);
  const [paymentOption, setPaymentOption] = useState('Cash');
  const [showModal, setShowModal] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const orgData = {
    'MADISON - NON SMART': 'MNS',
    'ACME CORP': 'ACM',
    'GLOBEX CORPORATION': 'GLC'
  };

  const handlePaymentOptionChange = (event) => {
    const selectedOption = event.target.value;
    setPaymentOption(selectedOption);
    if (selectedOption === 'Other') {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

 
 

  const handleCancel = () => {
    setIsPopupVisible(false);
  };
 
  const handleConfirm = () => {
    setIsPopupVisible(false);
    alert('Data has been saved successfully!');
    // Add your save logic here
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOrgSelect = (e) => {
    const selected = e.target.value;
    setSelectedOrg(selected);
    setOrgCode(orgData[selected] || '');
    setShowOrgInfo(true);
  };

  const handleSaveClick = () => {
    setIsPopupVisible(true);
  };
  return (
<div className='organizationmainclass'>
<div className="organization-deposit">
      <center><h4>Organization Deposit</h4></center>
      
      <div className="organization-form-group">
        <label>Select Credit Organization:</label>
        <select  value={selectedOrg} onChange={handleOrgSelect}>
        {Object.keys(orgData).map(org => (
            <option key={org} value={org}>{org}</option>
          ))}
          
        </select>
      </div>

      {showOrgInfo && (
        <div className="info-row">
          <div className="form-group">
            <label>Organization Code:</label>
            <span>{orgCode}</span>
          </div>
          <div className="form-group">
            <label>Deposit Balance:</label>
            <span>0</span>
          </div>
        </div>
      )}

      <div className="form-group">
        <label>Transaction Type *</label>
        <select defaultValue="Receive">
          <option>Receive</option>
        </select>
      </div>

      <div className="form-group">
        <label>Name of Representative *</label>
        <input type="text" placeholder="Enter Name of Representative" />
      </div>

      <div className="form-group">
        <label>Amount *</label>
        <input type="number" defaultValue={0} />
      </div>

      <div className="form-group">
        <label>Deposit Head *</label>
        <select defaultValue="Normal Deposit">
          <option>Normal Deposit</option>
        </select>
      </div>

      <div className="form-group">
        <label>Remarks</label>
        <textarea></textarea>
      </div>

      <div className="form-group">
        <label>Payment Options:</label>
        <select defaultValue="Cash" onChange={handlePaymentOptionChange}>
          <option>Cash</option>
          <option>Credit</option>
          <option>Other</option>
        </select>
      </div>
      {paymentOption === 'Credit' && (
        <div className="form-group Credit-optionlist">
          <label>Credit Options:</label>
          <select defaultValue="NHIF CAPITATION">
            <option>NHIF CAPITATION</option>
            <option>NHIF General</option>
            <option>MTIBA</option>
          </select>
        </div>
      )}

       
          <>
            <div className="form-group">
              <label>Payment Details:</label>
              <textarea rows="4" cols="50" placeholder="Enter payment details here..." />
            </div>
            {showModal && (
              <div className="modalOverlayStyle">
                <div >
                  <button  onClick={handleCloseModal}>×</button>
                  <center><h5>Extra Payment Information</h5></center>
                  <table >
                    <thead>
                      <tr>
                        <th >Field</th>
                        <th >Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Payment Method</td>
                        <td><input type="text" /></td>
                      </tr>
                      <tr>
                        <td>Amount</td>
                        <td><input type="text" /></td>
                      </tr>
                      <tr>
                        <td>Payment details</td>
                        <td><input type="text" /></td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>


          {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>Confirm!</h2>
              <p>Are you sure you want to save?</p>
              <div className="popup-buttons">
                <button className="changevisitscheme-btn-confirm " onClick={handleConfirm}>Confirm</button>
                <button className="changevisitscheme-btn-cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        )}
    

      <div className="button-group">
      <button className="btn_Change_Visitschememainsave btn btn-success"  onClick={handleSaveClick}>Save Deposit</button>
        <button className="discard-btn">Discard</button>
      </div>
    </div>
    
    </div>
    

  );
}

export default OrganizationDeposit;