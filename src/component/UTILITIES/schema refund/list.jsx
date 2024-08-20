import React, { useState } from "react";
import moment from "moment";
import { Modal, Button,Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './list.css'
import { FaSearch } from 'react-icons/fa';

const SchemeRefundList = () => {
  const [schemeRefundList] = useState([
    { receiptNo: 1, refundDate: "2024-08-01", amount: 1000 },
    { receiptNo: 2, refundDate: "2024-08-05", amount: 1500 },
    { receiptNo: 3, refundDate: "2024-08-10", amount: 2000 },
  ]);

  const [showSchemeReturnEntryModal, setShowSchemeReturnEntryModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptNo, setReceiptNo] = useState(null);
  const [printSchemeRefund, setPrintSchemeRefund] = useState(false);

  const openSchemeReturnEntryModal = () => {
    setShowSchemeReturnEntryModal(true);
  };

  const closeSchemeReturnEntryModal = () => {
    setShowSchemeReturnEntryModal(false);
  };

  const printSchemeRefundDetails = (receiptNo) => {
    setReceiptNo(receiptNo);
    setPrintSchemeRefund(true);
    setShowReceipt(true);
  };

  const closeSchemeRefundReceiptPopUp = () => {
    setShowReceipt(false);
    setPrintSchemeRefund(false);
  };

  return (
    <div className="utltlist">
        <div className="modelbtn">
        <button className="btn btn-success" onClick={openSchemeReturnEntryModal}>
        <i className="fa fa-plus"></i> New Scheme Refund Entry
      </button>
        </div>
      
      <div className="date-utlt">
       <div className="utltdatemiddle">
       <div className="date-range">
          <label>From: </label>
          <input type="date" value="2024-08-05" />
          <label> To: </label>
          <input type="date" value="2024-08-12" />
          <button style={{ marginLeft: '5px' }}>★</button>
          <button style={{ marginLeft: '5px' }}>+</button>
          <button style={{ marginLeft: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px' }}>OK</button>
        </div>
       </div>
        </div>
        <div className="utlt-search-bar">
        <input
          type="text"
          placeholder="Search by patient name"
         
          className="inputsearchbar"
        />
         <button className='utltlistsearchbar'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>
      </div>

      <table className="utlt-table">
  <thead>
    <tr>
      <th>Receipt No</th>
      <th>Refund Date</th>
      <th>Reception No</th>
      <th>Scheme</th>
      <th>Hospital No</th>
      <th>Patient</th>
      <th>Age/Sex</th>
      <th>Refund Amount</th>
      <th>Inpatient No</th>
      <th>Entered By</th>
      <th>Remark</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {schemeRefundList.map((item, index) => (
      <tr key={index}>
        <td>{item.receiptNo}</td>
        <td>{moment(item.refundDate).format("YYYY-MM-DD")}</td>
        <td>{item.receptionNo}</td>
        <td>{item.scheme}</td>
        <td>{item.hospitalNo}</td>
        <td>{item.patient}</td>
        <td>{item.ageSex}</td>
        <td>{item.refundAmount}</td>
        <td>{item.inpatientNo}</td>
        <td>{item.enteredBy}</td>
        <td>{item.remark}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => printSchemeRefundDetails(item.receiptNo)}
          >
            Print
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
<div className="utlt-pagination">
        <Button>First</Button>
        <Button>Previous</Button>
        <span>Page 1 of 4</span>
        <Button>Next</Button>
        <Button>Last</Button>
      </div>
    


      {/* Modal for New Scheme Refund Entry */}
      {showSchemeReturnEntryModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Scheme Refund Entry</h5>
                <button 
                style={{marginLeft:"70%",backgroundColor:"red"}}
                  type="button"
                  className="close"
                  onClick={closeSchemeReturnEntryModal}
                >
                  <span >&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add your form or additional content here */}
                <div className="form-group">
                  <label>Patient Name:</label>
                  <input type="text" className="form-control" placeholder="Enter patient name" />
                </div>
                <div className="form-group">
                  <label>Enter Inpatient No(If Applicable)</label>
                  <input type="number" className="form-control" placeholder="Enter amount" />
                </div>
                <div className="form-group">
  <label>Scheme:</label>
  <select className="form-control">
    <option value="">__________Scheme_______</option> {/* Default placeholder option */}
    <option value="ASTRA">ASTRA</option>
    <option value="BRITAM">BRITAM</option>
    <option value="GENERAL">GENERAL</option>
    <option value="MTABTA">MTABTA</option>
  </select>
</div>
                <div className="form-group">
                  <label>Amount:</label>
                  <input type="number" className="form-control" placeholder="Enter amount" />
                </div>
                <div className="form-group">
                  <label>Remark</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>

                {/* Add other fields as necessary */}
              </div>
              <div className="modal-footer">
                <button
                
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeSchemeReturnEntryModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Print Scheme Refund */}
      {showReceipt && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Scheme Refund Receipt</h5>
                
              </div>
              <div className="modal-body">
                {printSchemeRefund && (
                  <div>
                    <p>Receipt No: {receiptNo}</p>
                    <p>
                      Refund Date:{" "}
                      {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.refundDate}
                    </p>
                    <p>Amount: {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.amount}</p>
                    {/* Add additional receipt details here */}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeSchemeRefundReceiptPopUp}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemeRefundList;
