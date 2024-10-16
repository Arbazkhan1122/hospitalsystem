import React, { useRef, useState } from "react";
import "./printGenericSticker.css";
import Barcode from "react-barcode";

function PrintGenericSticker({ patient }) {
  const iframeRef = useRef(null);
  const [numOfPrints, setNumOfPrints] = useState(1); // State to store the number of prints

  const handlePrint = () => {
    const iframe = iframeRef.current;
    const doc = iframe.contentWindow.document;

    // Prepare the content to be printed multiple times based on numOfPrints
    let patientInfoHTML = "";
    for (let i = 0; i < numOfPrints; i++) {
      patientInfoHTML += `
        <div style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-weight:bold; padding: 5px; border: 1px dashed black; margin-bottom:5px">
          <div>
            <p style="margin:5px">${patient.patientDTO?.firstName} ${patient.patientDTO?.age} ${patient.patientDTO?.ageUnit} / ${patient.patientDTO?.gender}</p>
            <p style="margin:5px"><strong>Ward:</strong> ${patient.wardDepartmentDTO?.wardName} / ${patient.manageBedDTO?.wardType}-${patient.manageBedDTO?.bedNumber}</p>
            <p style="margin:5px"><strong>Consultant:</strong> ${patient.admittedDoctorDTO?.salutation} 
              ${patient.admittedDoctorDTO?.firstName} ${patient.admittedDoctorDTO?.lastName}</p>
          </div>
          <div style="margin-top: 10px;">
            <svg id="barcode-${i}"></svg>
          </div>
        </div>
      `;
    }

    // Write the HTML to the iframe and generate the barcodes
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print Generic Sticker</title>
        </head>
        <body>
        <div style="display:flex;flex-wrap:wrap;gap:5px">
          ${patientInfoHTML}
          <div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.5/JsBarcode.all.min.js"></script>
          <script>
            window.onload = function() {
              for (let i = 0; i < ${numOfPrints}; i++) {
                JsBarcode("#barcode-" + i, "${patient.patientDTO?.patientId}", {width: 2, height: 50, displayValue:false});
              }
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  const handleIframeLoad = () => {
    handlePrint();
  };

  return (
    <>
      <div className="printGenericWindowContainer">
        <div className="printGenericWindowData">
          <p>
            {patient.patientDTO?.firstName} {patient.patientDTO?.lastName}{" "}
            {patient.patientDTO?.age} {patient.patientDTO?.ageUnit}{" "}
            {patient.patientDTO?.gender}
          </p>
          <p>IP No. : {patient.patientDTO?.patientId}</p>
          <p>
            {patient.wardDepartmentDTO?.wardName}
            {" / "}
            {patient.manageBedDTO?.wardType}-{patient.manageBedDTO?.bedNumber}
          </p>
          <p>
            Consultant : {patient.admittedDoctorDTO?.salutation}{" "}
            {patient.admittedDoctorDTO?.firstName}{" "}
            {patient.admittedDoctorDTO?.lastName}
          </p>
          <div className="printGenericStickerBarcode">
            <Barcode
              value={patient.patientDTO?.patientId}
              width={2}
              height={30}
              displayValue={false}
            />
          </div>
        </div>
        {/* Hidden iframe for printing */}
        <iframe
          ref={iframeRef}
          style={{ display: "none" }}
          onLoad={handleIframeLoad}
        />
      </div>
      <label>
        No of Prints :
        <input
          type="number"
          className="printGenericInputBox"
          min={1}
          value={numOfPrints}
          onChange={(e) => setNumOfPrints(e.target.value)}
        />
      </label>
      <button className="printGenericWindowBTN" onClick={handlePrint}>
        Print
      </button>
    </>
  );
}

export default PrintGenericSticker;
