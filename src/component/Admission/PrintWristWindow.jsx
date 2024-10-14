import React, { useRef } from "react";
import QRCode from "react-qr-code";
import "./printWristWindow.css";

function PrintWristWindow({ patient }) {
  const iframeRef = useRef(null);

  const handlePrint = () => {
    const iframe = iframeRef.current;
    const doc = iframe.contentWindow.document;
    const patientInfo = `
      <div style="display:flex; gap:20px, font-family: Arial, sans-serif; padding: 20px; border: 1px dashed black; width: 600px;">
        <div>
          <p><strong>Name:</strong> ${patient.patientDTO?.firstName}</p>
          <p><strong>Age:</strong> ${patient.patientDTO?.age} ${patient.patientDTO?.ageUnit}</p>
          <p><strong>Gender:</strong> ${patient.patientDTO?.gender}</p>
          <p><strong>DOB:</strong> ${patient.patientDTO?.dateOfBirth}</p>
          <p><strong>DOA:</strong> ${patient?.admissionDate}</p>
        </div>
        <div>
          <p><strong>IP No.:</strong> ${patient.patientDTO?.patientId}</p>
          <p><strong>Ward:</strong> ${patient.wardDepartmentDTO?.wardName} / ${patient.manageBedDTO?.wardType}-${patient.manageBedDTO?.bedNumber}</p>
          <p><strong>Blood Group:</strong> ${patient.patientDTO?.bloodGroup}</p>
          <p><strong>Consultant:</strong> ${patient.admittedDoctorDTO?.salutation} 
            ${patient.admittedDoctorDTO?.firstName} ${patient.admittedDoctorDTO?.lastName}</p>
        </div>
        <div style="text-align: center; margin-top: 20px;">
          <div id="qr-code"></div>
        </div>
      </div>
    `;
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print Wristband</title>
        </head>
        <body>
          ${patientInfo}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
          <script>
            var qrCode = new QRCode(document.getElementById("qr-code"), {
              text: "Name: ${patient.patientDTO?.firstName} ${patient.patientDTO?.lastName}, IP No.: ${patient.patientDTO?.patientId}",
              width: 100,
              height: 100,
            });
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  const patientInfo = `Name: ${patient.patientDTO?.firstName} ${patient.patientDTO?.lastName}
  Age: ${patient.patientDTO?.age} ${patient.patientDTO?.ageUnit}
  Gender: ${patient.patientDTO?.gender}
  IP No.: ${patient.patientDTO?.patientId}
  Ward: ${patient.wardDepartmentDTO?.wardName} / ${patient.manageBedDTO?.wardType}-${patient.manageBedDTO?.bedNumber}`;

  const handleIframeLoad = () => {
    // Ensure the iframe has loaded before attempting to write t    o its document
    handlePrint();
  };

  return (
    <>
      <div className="printWristWindowContainer">
        <div className="printWristWindowData_1">
          <p>Name : {patient.patientDTO?.firstName}</p>
          <p>
            Age : {patient.patientDTO?.age} {patient.patientDTO?.ageUnit}
          </p>
          <p>Gender : {patient.patientDTO?.gender}</p>
          <p>DOB : {patient.patientDTO?.dateOfBirth}</p>
          <p>DOA : {patient?.admissionDate}</p>
        </div>
        <div className="printWristWindowData_2">
          <p>IP No. : {patient.patientDTO?.patientId}</p>
          <p>
            {patient.wardDepartmentDTO?.wardName}
            {" / "}
            {patient.manageBedDTO?.wardType}-{patient.manageBedDTO?.bedNumber}
          </p>
          <p>Blood Group : {patient.patientDTO?.bloodGroup}</p>
          <p>
            Consultant : {patient.admittedDoctorDTO?.salutation}{" "}
            {patient.admittedDoctorDTO?.firstName}{" "}
            {patient.admittedDoctorDTO?.lastName}
          </p>
        </div>
        <div>
          <QRCode value={patientInfo} size={100} />
        </div>
        <iframe
          ref={iframeRef}
          style={{ display: "none" }} // Hide iframe from the main UI
          onLoad={handleIframeLoad}
        />
      </div>
      <button className="printWristWindowBTN" onClick={handleIframeLoad}>
        Print
      </button>
    </>
  );
}

export default PrintWristWindow;
