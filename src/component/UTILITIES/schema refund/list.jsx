import React, { useState, useEffect } from "react";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SchemeRefundList = () => {
  const [schemeRefundList, setSchemeRefundList] = useState([]);
  const [showSchemeReturnEntryModal, setShowSchemeReturnEntryModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptNo, setReceiptNo] = useState(null);
  const [printSchemeRefund, setPrintSchemeRefund] = useState(false);

  const [searchPatient, setSearchPatient] = useState("");
  const [ipNo, setIpNo] = useState("");
  const [refuntScheme, setRefuntScheme] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  useEffect(() => {
    // Fetch data from API
    const fetchRefundData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/Search-Patient/fetch-all-search-patient"
        );
        setSchemeRefundList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRefundData();
  }, []);

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

  const handleSave = async () => {
    try {
      const payload = {
        searchPatient,
        ipNo,
        refuntScheme,
        amount,
        remark,
      };

      const response = await axios.post("http://localhost:5000/api/Search-Patient/save-search-patient", payload);

      if (response.status === 200) {
        alert("Data saved successfully!");

        // Update the state with the new data
        setSchemeRefundList((prevList) => [...prevList, payload]);

        // Clear input fields after saving
        setSearchPatient("");
        setIpNo("");
        setAmount("");
        setRemark("");
        setRefuntScheme("");

        // Close the modal after saving
        closeSchemeReturnEntryModal(); 
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    }
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
            <button style={{ marginLeft: "5px" }}>★</button>
            <button style={{ marginLeft: "5px" }}>+</button>
            <button
              style={{
                marginLeft: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "5px 10px",
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>

      <div className="utlt-search-bar">
        <input type="text" placeholder="Search by patient name" className="inputsearchbar" />
        {/* <button className="utltlistsearchbar">
          <FaSearch style={{ color: "gray", fontSize: "18px" }} />
        </button> */}
      </div>

      <table className="utlt-table">
        <thead>
          <tr>
            {/* <th>Receipt No</th> */}
            <th>Refund Date</th>
            <th>Reception No</th>
            <th>Scheme</th>
            {/* <th>Hospital No</th> */}
            <th>Patient</th>
            {/* <th>Age/Sex</th> */}
            <th>Refund Amount</th>
            <th>Inpatient No</th>
            {/* <th>Entered By</th> */}
            <th>Remark</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schemeRefundList.map((item, index) => (
            <tr key={index}>
              {/* <td>{item.receiptNo}</td> */}
              <td>{moment(item.refundDate).format("YYYY-MM-DD")}</td>
              <td>{item.receiptNo}</td>
              <td>{item.refuntScheme}</td>
              {/* <td>{item.hosNo}</td> */}
              <td>{item.searchPatient}</td>
              {/* <td>{item.ageSex}</td> */}
              <td>{item.amount}</td>
              <td>{item.ipNo}</td>
              {/* <td>{item.enteredBy}</td> */}
              <td>{item.remark}</td>
              <td>
                <button className="btn btn-primary" onClick={() => printSchemeRefundDetails(item.receiptNo)}>
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
        <div className="utlt-modal show d-block" role="dialog">
        <div className="utlt-modal-dialog modal-lg" role="document">
          <div className="utlt-modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Scheme Refund Entry</h5>
              <button
                style={{ marginLeft: "60%", backgroundColor: "white" }}
                type="button"
                className="utlt-close"
                onClick={closeSchemeReturnEntryModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="utlt-form-group">
                <label>Patient Name:</label>
                <input
                  type="text"
                  className="utlt-form-control"
                  placeholder="Enter patient name"
                  value={searchPatient}
                  onChange={(e) => setSearchPatient(e.target.value)}
                />
              </div>
              <div className="utlt-form-group">
                <label>Enter Inpatient No (If Applicable)</label>
                <input
                  type="number"
                  className="utlt-form-control"
                  placeholder="Enter inpatient no"
                  value={ipNo}
                  onChange={(e) => setIpNo(e.target.value)}
                />
              </div>
              <div className="utlt-form-group">
                <label>Scheme:</label>
                <select
                  className="utlt-form-control"
                  value={refuntScheme}
                  onChange={(e) => setRefuntScheme(e.target.value)}
                >
                  <option value="">__________Scheme_______</option>
                  <option value="ASTRA">ASTRA</option>
                  <option value="BRITAM">BRITAM</option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="MTABTA">MTABTA</option>
                </select>
              </div>
              <div className="utlt-form-group">
                <label>Amount:</label>
                <input
                  type="number"
                  className="utlt-form-control"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="utlt-form-group">
                <label>Remark</label>
                <input
                  type="text"
                  className="utlt-form-control"
                  placeholder="Enter remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
            </div>
            <div className="utlt-modal-footer">
              <button type="button" className="utlt-btn btn btn-secondary" onClick={closeSchemeReturnEntryModal}>
                Close
              </button>
              <button type="button" className="utlt-btn btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Modal for Print Scheme Refund */}
      {showReceipt && (
        <div className="utlt modal show d-block" tabIndex="-1" role="dialog">
          <div className="utlt-modal-dialog" role="document">
            <div className="utlt-modal-content">
              <div className="utlt-modal-header">
                <h5 className="utlt-modal-title">Scheme Refund Receipt</h5>
              </div>
              <div className="utlt-modal-body">
                {printSchemeRefund && (
                  <div>
                    <p>Receipt No: {receiptNo}</p>
                    <p>Refund Date: {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.refundDate}</p>
                    <p>Amount: {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.amount}</p>
                  </div>
                )}
              </div>
              <div className="utlt-modal-footer">
                <button type="button" className="utlt-btn btn btn-secondary" onClick={closeSchemeRefundReceiptPopUp}>
                  Close
                </button>
                <button type="button" className="utlt-btn btn btn-primary">
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
