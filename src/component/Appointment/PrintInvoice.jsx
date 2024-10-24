import React, { useRef } from "react";
import "./PrintInvoice.css";
import HIMSLOGO from "../../Dashboard/Images/hospitallogo.png";
import { toWords } from "number-to-words";
import { useNavigate } from "react-router-dom";

function PrintInvoice({ formData, selectedDoctor }) {
  const printRef = useRef();
  const navigate = useNavigate();

  // Function to handle print
  const handlePrint = () => {
    const printWindow = printRef.current.contentWindow;
    const doc = printWindow.document.open();

    // Writing the HTML content to the iframe document
    doc.write(`
      <html>
        <head>
          <title>Print Invoice</title>
          <style>
            body{
                padding:30px;
            }
            h1 {
              color: #2c3e50;
              text-align: center;
              font-size: var(--heading-font);
            }
            .invoice-details {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
              font-size: var(--font-size);
            }
            .invoice-details h2 {
              font-weight: bold;
            }
            .invoice-details p {
              margin-bottom: 5px;
            }
            .print-invoice-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            .print-invoice-table th, .print-invoice-table td {
              border: 1px solid #ddd;
              padding: 10px;
              text-align: left;
              white-space: wrap;
            }
            .print-invoice-table th {
              background-color: #f2f2f2;
            }
            .print-invoice-total {
              text-align: right;
              font-size: var(--font-size);
            }
            .print-invoice-inWords {
              float: left;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div classname="container">
            <h1>Consultation Invoice</h1>
            <div class="invoice-details">
              <div>
                <img src="${HIMSLOGO}" width="50" alt="Hospital Logo" />
                <h2>HIMS</h2>
              </div>
              <div>
                <p>Lopmudra Hospital</p>
                <p>123 Health Street, Metropolis, 12345</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div class="invoice-details">
              <div>
                <p><strong>Name/Contact:</strong> ${formData.firstName} ${
      formData.middleName
    } ${formData.lastName}</p>
                <p><strong>Age/Sex:</strong> ${formData.age} ${
      formData.ageUnit
    } / ${formData.gender}</p>
                <p><strong>Department:</strong> ${formData.department}</p>
              </div>
              <div>
                <p><strong>Date:</strong> ${formData.visitDate}</p>
                <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
                <p><strong>Doctor:</strong> ${selectedDoctor}</p>
              </div>
            </div>
            <table class="print-invoice-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Particular</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Consultation Charges</td>
                  <td>${formData.totalAmount}</td>
                </tr>
              </tbody>
            </table>
            <div class="print-invoice-total">
              <p>
                <span class="print-invoice-inWords">
                  (${toWords(formData.totalAmount)} Rupees)
                </span>
                <strong>Subtotal:</strong> ${formData.subTotal}
              </p>
              <p><strong>Discount:</strong> ${
                formData.discountAmount || 0.0
              }</p>
              <p><strong>Total Due:</strong> ${formData.totalAmount}</p>
              <p><strong>Payment Mode:</strong> ${formData.paymentOptions}</p>
            </div>
            <p>${new Date().toLocaleString()} - Received Rs ${
      formData.totalAmount
    } (by ${formData.paymentOptions}) as payment</p>
          </div>
        </body>
      </html>
    `);
    doc.close();

    // Trigger print once the iframe content is fully loaded
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  };

  return (
    <div className="checkInPrintInvoice">
      <div className="checkInPrintInvoiceContainer">
        <button
          onClick={() => navigate("/list-visits")}
          className="checkInPrintInvoiceCloseBTN"
        >
          X
        </button>
        <div className="checkInPrintInvoiceData">
          <h1>Consultation Invoice</h1>
          <div className="invoice-details">
            <div>
              <img src={HIMSLOGO} width={50} alt="Hospital Logo" />
              <h2>HIMS</h2>
            </div>
            <div>
              <p>Lopmudra Hospital</p>
              <p>123 Health Street, Metropolis, 12345</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="invoice-details">
            <div>
              <p>
                <strong>Name/Contact:</strong> {formData.firstName}{" "}
                {formData.middleName} {formData.lastName}
              </p>
              <p>
                <strong>Age/Sex:</strong> {formData.age} {formData.ageUnit} /{" "}
                {formData.gender}
              </p>
              <p>
                <strong>Department:</strong> {formData.department}
              </p>
            </div>
            <div>
              <p>
                <strong>Date:</strong> {formData.visitDate}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phoneNumber}
              </p>
              <p>
                <strong>Doctor:</strong> {selectedDoctor}
              </p>
            </div>
          </div>
          <table className="print-invoice-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Particular</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Consultation Charges</td>
                <td>{formData.totalAmount}</td>
              </tr>
            </tbody>
          </table>
          <div className="print-invoice-total">
            <p>
              <span className="print-invoice-inWords">
                ({toWords(formData.totalAmount)} Rupees)
              </span>
              <strong>Subtotal:</strong> {formData.subTotal}
            </p>
            <p>
              <strong>Discount:</strong> {formData.discountAmount || 0.0}
            </p>
            <p>
              <strong>Total Due:</strong> {formData.totalAmount}
            </p>
            <p>
              <strong>Payment Mode:</strong> {formData.paymentOptions}
            </p>
          </div>
          <p>
            {new Date().toLocaleString()} - Received Rs {formData.totalAmount}{" "}
            (by {formData.paymentOptions}) as payment
          </p>
          {/* Print Button */}
          <button className="print-button" onClick={handlePrint}>
            Print Invoice
          </button>
          <iframe
            style={{ display: "none" }}
            ref={printRef}
            title="Print Invoice"
          />
        </div>
      </div>
    </div>
  );
}

export default PrintInvoice;
