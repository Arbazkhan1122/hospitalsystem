// import React from 'react';
// import "../DisPrescriptionMain/viewAvailability.css"
// const PrescriptionDetails = ({ prescription, onClose }) => {
//   return (
//     <div className="viewAvailability-prescription-container">
//       <div className="viewAvailability-header">
//         <img src="your-logo-url" alt="Logo" className="viewAvailability-logo" />
//         <div className="viewAvailability-close-button" onClick={onClose}>x</div>
//       </div>

//       <div className="viewAvailability-center">
//           <p>KRA PIN:</p>
//           <p>Phone No:</p>
//           <p>Pharmacy Unit</p>
//       </div>

//       <div className="viewAvailability-info">
//         <div className="viewAvailability-left">
//           <p>Hospital Code: <span>{prescription.code}</span></p>
//           <p>Patient Name: <span>{prescription.patientName}</span></p>
//         </div>
//         <div className="viewAvailability-right">
//           <p>Requested By: <span>{prescription.requestedBy}</span></p>
//           <p>Date: <span>{prescription.date}</span></p>
//         </div>
//       </div>

//       <div className="viewAvailability-prescription-details">
//         <h6>PRESCRIPTION DETAILS</h6>
//         <table>
//           <thead>
//             <tr>
//               <th>S.N</th>
//               <th>Item Name</th>
//               <th>Frequency</th>
//               <th>Days</th>
//               <th>Availability</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>DEXTROSE 5% IN NORMAL SALINE 500ML</td>
//               <td>2</td>
//               <td>1</td>
//               <td className="viewAvailability-availability">YES</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Sodium Chloride (Normal Saline) 0.9% 500ML</td>
//               <td>1</td>
//               <td>1</td>
//               <td className="viewAvailability-availability">YES</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>Hydralazine Hydrochloride Injection & 20Mg/MI</td>
//               <td>1</td>
//               <td>1</td>
//               <td className="viewAvailability-availability">YES</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="viewAvailability-buttons">
//         <button className="viewAvailability-print-button">Print <i class="fa-solid fa-print"></i></button>
//         <button className="viewAvailability-dispatch-button">Dispatch <i class="fa-solid fa-share"></i></button>
//       </div>
//     </div>
//   );
// };

// export default PrescriptionDetails;
import React from 'react';
import html2pdf from 'html2pdf.js';
import "../DisPrescriptionMain/viewAvailability.css";

const PrescriptionDetails = ({ prescription, onClose }) => {
  const printDocument = () => {
    const element = document.getElementById('prescription-details');
    const options = {
      filename: 'Prescription_Details.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Create a new PDF object
    const pdf = html2pdf().from(element).toPdf().get('pdf');

    pdf.then(pdf => {
      // Convert PDF to a Blob
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Open the PDF in a new window
      window.open(pdfUrl, '_blank');
    });
  };

  return (
    <div className="viewAvailability-prescription-container">
      <div className="viewAvailability-header">
        <img src="your-logo-url" alt="Logo" className="viewAvailability-logo" />
        <div className="viewAvailability-close-button" onClick={onClose}>x</div>
      </div>

      <div className="viewAvailability-center">
        <p>KRA PIN:</p>
        <p>Phone No:</p>
        <p>Pharmacy Unit</p>
      </div>

      <div className="viewAvailability-info">
        <div className="viewAvailability-left">
          <p>Hospital Code: <span>{prescription.code}</span></p>
          <p>Patient Name: <span>{prescription.patientName}</span></p>
        </div>
        <div className="viewAvailability-right">
          <p>Requested By: <span>{prescription.requestedBy}</span></p>
          <p>Date: <span>{prescription.date}</span></p>
        </div>
      </div>

      <div id="prescription-details" className="viewAvailability-prescription-details">
        <h6>PRESCRIPTION DETAILS</h6>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Item Name</th>
              <th>Frequency</th>
              <th>Days</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>DEXTROSE 5% IN NORMAL SALINE 500ML</td>
              <td>2</td>
              <td>1</td>
              <td className="viewAvailability-availability">YES</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sodium Chloride (Normal Saline) 0.9% 500ML</td>
              <td>1</td>
              <td>1</td>
              <td className="viewAvailability-availability">YES</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hydralazine Hydrochloride Injection & 20Mg/MI</td>
              <td>1</td>
              <td>1</td>
              <td className="viewAvailability-availability">YES</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="viewAvailability-buttons">
        <button className="viewAvailability-print-button" onClick={printDocument}>Print <i className="fa-solid fa-print"></i></button>
        <button className="viewAvailability-dispatch-button">Dispatch <i className="fa-solid fa-share"></i></button>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
