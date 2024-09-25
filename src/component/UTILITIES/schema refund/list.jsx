// neha-utilities-SchemeRefundList-14-9-24
import React, { useState, useEffect,useRef } from "react";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import './list.css';
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { startResizing } from "../../../TableHeadingResizing/ResizableColumns";

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
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  useEffect(() => {
    // Fetch data from API
    const fetchRefundData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1415/api/Search-Patient/fetch-all-search-patient"
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

      const response = await axios.post("http://localhost:1415/api/Search-Patient/save-search-patient", payload);

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
    <div className="scheme-refund-list">
      
        <button className="new-entry-btn" onClick={openSchemeReturnEntryModal}>
          <i className="fa fa-plus"></i> New Scheme Refund Entry
        </button>
     

      <div className="date-range-container">
        <label>From: </label>
        <input type="date" value="2024-08-05" />
        <label> To: </label>
        <input type="date" value="2024-08-12" />
        <button className="star-btn">★</button>
        <button className="plus-btn">+</button>
        <button className="ok-btn">OK</button>
      </div>

      <div className="scheme-refund-search-bar">
        <input type="text" placeholder="Search by patient name" className="input-search-bar" />
      </div>

      <table className="scheme-refund-table" ref={tableRef}>
        <thead>
          <tr>
          {[
            "Refund Date",
            "Reception No",
            "Scheme",
            "Patient",
            "Refund Amount",
            "Inpatient No",
            "Remark",
            "Actions"
].map((header, index) => (
  <th
    key={index}
    style={{ width: columnWidths[index] }}
    className="rd-resizable-th"
  >
    <div className="header-content">
      <span>{header}</span>
      <div
        className="resizer"
        onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
      ></div>
    </div>
  </th>
))}
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

      {/* Modal for New Scheme Refund Entry */}
      {showSchemeReturnEntryModal && (
        <Modal show={true} onHide={closeSchemeReturnEntryModal} className="scheme-modal">
          <Modal.Header closeButton>
            <Modal.Title>New Scheme Refund Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Patient Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter patient name"
                value={searchPatient}
                onChange={(e) => setSearchPatient(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Inpatient No:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter inpatient no"
                value={ipNo}
                onChange={(e) => setIpNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Scheme:</label>
              <select
                  className="utlt-form-control"
                  value={refuntScheme}
                  onChange={(e) => setRefuntScheme(e.target.value)}
                >
                <option value="">Select Scheme</option>
                <option value="ASTRA">ASTRA</option>
                <option value="BRITAM">BRITAM</option>
                <option value="GENERAL">GENERAL</option>
                <option value="MTABTA">MTABTA</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Remark:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeSchemeReturnEntryModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}
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
