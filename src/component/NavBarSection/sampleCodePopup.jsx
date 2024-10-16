import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import Barcode from "react-barcode";
import "./sampleCodePopup.css";

const SampleCodePopup = ({ isOpen, onClose, data, barcodeValue }) => {
  const [copies, setCopies] = useState(1);
  const [selectedPrinter, setSelectedPrinter] = useState("");

  // Create a ref for the barcode section
  const printRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    let stickersContent = "";
    for (let i = 0; i < copies; i++) {
      const content = document.getElementById(
        "samplecodepopup-barcode"
      ).innerHTML;
      stickersContent += `<div style='display:flex; flex-direction:column; align-items:center; border:1px dashed black; margin-bottom: 10px;'>${content}</div>`;
    }

    const printWindow = window.open("", "", "height=600,width=800");

    printWindow.document.write(
      "<html><head><title>Print Sticker</title></head><body>"
    );
    printWindow.document.write(
      "<div style='display:flex; gap:5px; flex-wrap:wrap;'>"
    );
    printWindow.document.write(stickersContent);
    printWindow.document.write("</div>");
    printWindow.document.write("</body></html>");

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handlePrintEmptySheet = () => {
    // Get the table content
    const content = document.getElementById(
      "samplecodepopup-emptysheet-info"
    ).outerHTML;

    // Create a new window for printing
    const printWindow = window.open("", "", "height=600,width=800");

    // Write the content to the new window
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Sticker</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            .bg-gray-100 {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <div style='display:flex; flex-direction:column;'>
          <div style='display:flex; justify-content:space-between; '>
          <div style='padding:0px'>
          <p>Patient Name : ${
            data.patientDTO?.firstName || data.newPatientVisitDTO?.firstName
          }
          ${data.patientDTO?.lastName || data.newPatientVisitDTO?.lastName}</p>
          <p>Address : ${
            data.patientDTO?.address || data.newPatientVisitDTO?.address
          }</p>
          <p>Prescribed By : ${
            data.prescriber != ""
              ? data.prescriber?.salutation +
                data.prescriber.firstName +
                " " +
                data.prescriber?.lastName
              : "SELF"
          }</p>
          <p>Lab No: ${data.runNumber}</p>
          </div>
          <div>
            <p>Patient No. : ${
              data.patientDTO?.patientId ||
              data.newPatientVisitDTO?.newPatientVisitId
            }</p>
            <p>Age/Sex : ${
              data.patientDTO?.age || data.newPatientVisitDTO?.age
            } Y/${
      data.patientDTO?.gender || data.newPatientVisitDTO?.gender
    }</p>
            <p>Receiving Date : ${data.sampleCollectedDate} ${
      data.sampleCollectedTime
    }</p>
            <Barcode value=${data.barcode}/>
          </div>
          </div>
            ${content}
          </div>
        </body>
      </html>
    `);

    // Close and focus on the print window
    printWindow.document.close();
    printWindow.focus();

    // Trigger the print
    printWindow.print();
  };

  return (
    <div className="samplecodepopup-overlay">
      <div className="samplecodepopup-container">
        <div className="samplecodepopup-header">
          <h2 className="samplecodepopup-title">
            Sample Code generated successfully
          </h2>
          <button onClick={onClose} className="samplecodepopup-close-button">
            X
          </button>
        </div>

        {/* Section to be printed */}
        <div className="samplecodepopup-patient-info">
          <p>
            <strong>Patient Name:</strong>{" "}
            {data.patientDTO?.firstName || data?.newPatientVisitDTO?.firstName}{" "}
            {data.patientDTO?.lastName || data?.newPatientVisitDTO?.lastName}
          </p>
        </div>
        <div className="samplecodepopup-divided" ref={printRef}>
          <table
            id="samplecodepopup-emptysheet-info"
            className="samplecodepopup-table"
          >
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Test Name</th>
                <th className="text-left p-2">Run Number</th>
                <th className="text-left p-2">BarCodeNumber</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">
                  {data?.labTests.map((item) => item.labTestName).join(", ")}
                </td>
                <td className="p-2">{data.runNumber}</td>
                <td className="p-2">{barcodeValue}</td>
              </tr>
            </tbody>
          </table>

          <div className="samplecodepopup-barcode-container">
            <div
              className="samplecodepopup-barcode-info"
              id="samplecodepopup-barcode"
            >
              <p>
                {data.patientDTO?.firstName ||
                  data?.newPatientVisitDTO?.firstName}{" "}
                {data.patientDTO?.lastName ||
                  data?.newPatientVisitDTO?.lastName}
                {data.patientDTO?.age || data?.newPatientVisitDTO?.age} Y/
                {data.patientDTO?.gender || data?.newPatientVisitDTO?.gender}
              </p>
              <Barcode width={2} height={30} value={barcodeValue} />
              <p>
                RN: {data.runNumber} | {data.sampleCollectedDate}{" "}
                {data.sampleCollectedTime}
              </p>
              {/* <div className="samplecodepopup-barcode"> */}
              {/* </div> */}
            </div>
            <div className="samplecodepopup-copies">
              <label className="mr-2">No. of copies:</label>
              <input
                type="number"
                value={copies}
                onChange={(e) => setCopies(parseInt(e.target.value))}
                className="border p-1 w-16"
                min="1"
              />
              <button
                onClick={handlePrint}
                className="samplecodepopup-print-button"
              >
                <span className="mr-2">Print</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="samplecodepopup-printer-select">
          <label className="mr-2">Select Printer:</label>
          <select
            value={selectedPrinter}
            onChange={(e) => setSelectedPrinter(e.target.value)}
            className="border p-1"
          >
            <option value="">Select a printer</option>
            <option value="printer1">Printer 1</option>
            <option value="printer2">Printer 2</option>
          </select>
          <button
            onClick={() => console.log("OK clicked")}
            className="samplecodepopup-ok-button"
          >
            OK
          </button>
        </div> */}

        <div className="samplecodepopup-footer">
          <div>
            <button
              onClick={handlePrintEmptySheet}
              className="samplecodepopup-empty-sheet-button"
            >
              Print Empty Sheet
            </button>
            {/* <button onClick={onClose} className="samplecodepopup-close-button">
              Close
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCodePopup;
