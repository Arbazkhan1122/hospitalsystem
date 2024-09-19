import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import "./opdlab.css";
import { startResizing } from "../../../TableHeadingResizing/ResizableColumns";
import Modal from "react-bootstrap/Modal";

function Opdlab() {
  const [billingData, setBillingData] = useState([
    {
      patientId: "301",
      patientName: "John Doe",
      ageSex: "50/M",
      doctorName: "Dr. Lee",
      labTest: "Blood Test",
      serviceDate: "2024-09-12",
      totalAmount: 150,
      paymentStatus: "Paid",
      paymentMode: "Insurance",
      billingDate: "2024-09-12",
    },
    {
      patientId: "302",
      patientName: "Emily Davis",
      ageSex: "29/F",
      doctorName: "Dr. Kumar",
      labTest: "Urine Test",
      serviceDate: "2024-09-13",
      totalAmount: 100,
      paymentStatus: "Pending",
      paymentMode: "Cash",
      billingDate: "2024-09-13",
    },
  ]);

  const [filteredData, setFilteredData] = useState(billingData);
  const [searchTerm, setSearchTerm] = useState("");
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState("Cash");
  const [discount, setDiscount] = useState(0);
  const [totalBillAfterDiscount, setTotalBillAfterDiscount] = useState(0);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = billingData.filter(
      (item) =>
        item.patientName.toLowerCase().includes(term) ||
        item.labTest.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  const printTable = () => {
    const printContents = document.getElementById("table-to-print").outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = `<html><head><title>Print</title></head><body>${printContents}</body></html>`;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const handlePayment = (patient) => {
    setCurrentPatient(patient);
    setSelectedPaymentMode(patient.paymentMode);
    setDiscount(0); // Reset discount when opening modal
    setTotalBillAfterDiscount(patient.totalAmount); // Set initial total
    setShowModal(true);
  };

  const handleDiscountChange = (e) => {
    const discountValue = parseFloat(e.target.value);
    setDiscount(discountValue);
    const reducedTotal = currentPatient.totalAmount - discountValue;
    setTotalBillAfterDiscount(reducedTotal >= 0 ? reducedTotal : 0);
  };

  const confirmPayment = () => {
    const updatedData = billingData.map((item) => {
      if (item.patientId === currentPatient.patientId) {
        return {
          ...item,
          paymentStatus: "Paid", // Set the payment status to "Paid"
          paymentMode: selectedPaymentMode, // Update with the selected payment mode
          totalAmount: totalBillAfterDiscount, // Update the total after discount
        };
      }
      return item;
    });

    // Update billing data with the new state
    setBillingData(updatedData);
    setFilteredData(updatedData); // Also update the filtered data if search is active
    setShowModal(false); // Close the modal after payment is done
  };

  const exportToExcel = () => {
    const table = document.getElementById("table-to-print");
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Lab Billing");
    XLSX.writeFile(wb, "Lab_Billing_Report.xlsx");
  };

  return (
    <div className="lab-billing-container">
      <header className="lab-billing-header">
        <div className="lab-billing-controls">
          <div className="lab-billing-search">
            <input
              type="text"
              placeholder="Search by Patient Name or Lab Test"
              value={searchTerm}
              onChange={handleSearch}
              className="lab-search-input"
            />
          </div>
          <div className="lab-billing-buttons">
            <button onClick={exportToExcel} className="lab-btn export-btn">
              <i className="fa fa-file-excel"></i> Export
            </button>
            <button onClick={printTable} className="lab-btn print-btn">
              <i className="fa fa-print"></i> Print All
            </button>
          </div>
        </div>
      </header>

      <div className="lab-table-wrapper" id="table-to-print">
        <table ref={tableRef} className="billing-table">
          <thead className="lab-billing-table-header">
            <tr>
              {[
                "Patient ID",
                "Patient Name",
                "Age/Sex",
                "Doctor Name",
                "Lab Test",
                "Service Date",
                "Total Amount",
                "Payment Status",
                "Billing Date",
                "Actions",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="lab-resizable-th"
                >
                  <div className="lab-header-content">
                    <span>{header}</span>
                    <div
                      className="lab-resizer"
                      onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="lab-billing-table-body">
            {filteredData.map((item, index) => (
              <tr key={index} className="lab-billing-row">
                <td className="lab-billing-cell">{item.patientId}</td>
                <td className="lab-billing-cell">{item.patientName}</td>
                <td className="lab-billing-cell">{item.ageSex}</td>
                <td className="lab-billing-cell">{item.doctorName}</td>
                <td className="lab-billing-cell">{item.labTest}</td>
                <td className="lab-billing-cell">{item.serviceDate}</td>
                <td className="lab-billing-cell">{item.totalAmount}</td>
                <td className="lab-billing-cell">{item.paymentStatus}</td>
                <td className="lab-billing-cell">{item.billingDate}</td>
                <td className="lab-billing-cell">
                  {item.paymentStatus === "Paid" ? (
                    <button onClick={printTable} className="lab-btn print-btn">
                      Print
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePayment(item)}
                      className="lab-btn print-btn"
                    >
                      Make Payment
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Payment */}
      {currentPatient && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Make Payment for {currentPatient.patientName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="lab-billing-modal-body">
              <div className="lab-ptninfo">
                <p><b>Patient Name:</b> {currentPatient.patientName}</p>
                <p><b>Doctor Name:</b> {currentPatient.doctorName}</p>
                <p><b>Lab Test:</b> {currentPatient.labTest}</p>
                <p><b>Total Bill:</b> {currentPatient.totalAmount}</p>
              </div>
              <div className="lab-billing-modal-select">
                <label htmlFor="paymentMode">Select Payment Mode:</label>
                <select
                  id="paymentMode"
                  value={selectedPaymentMode}
                  onChange={(e) => setSelectedPaymentMode(e.target.value)}
                  className="lab-billing-modal-dropdown"
                >
                  <option value="Cash">Cash</option>
                  <option value="Credit">Credit</option>
                  <option value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="lab-billing-modal-select">
                <label htmlFor="discount">Enter Discount (if any):</label>
                <input
                  type="number"
                  id="discount"
                  value={discount}
                  onChange={handleDiscountChange}
                  className="lab-billing-modal-input"
                />
              </div>
              <p>
                <b>Total after discount:</b> {totalBillAfterDiscount}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="lab-btn confirm-btn"
              onClick={confirmPayment}
            >
              Confirm Payment
            </button>
            <button
              className="lab-btn cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Opdlab;
