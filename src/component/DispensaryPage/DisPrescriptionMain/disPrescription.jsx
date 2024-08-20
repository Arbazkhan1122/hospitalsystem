// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import "../DisPrescriptionMain/disPrescription.css"
// import PrescriptionDetails from"../DisPrescriptionMain/viewAvailability"

// const DisPrescriptions = [
//     { code: "2408003819", patientName: "S Suresh", requestedBy: "admin admin",  date: "13-Aug-2024 04:44 PM "},
//     { code: "2408003817", patientName: "Sachin Ramesh", requestedBy: "admin admin",  date: "13-Aug-2024 11:19 AM" },
//     // Add more rows as needed
//   ];

// const DisPrescription = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPrescription, setSelectedPrescription] = useState(null); // State to track the selected prescription

//   const handleViewAvailability = (prescription) => {
//     setSelectedPrescription(prescription); // Set the selected prescription to show in the popup
//   };

//   const handleCloseDetails = () => {
//     setSelectedPrescription(null); // Close the popup
//   };

//   return (
//     <div className="disPrescription-list-requisition">
//       <div className='disPrescription-search-N-result'>
//       <div className="disPrescription-search-bar">
//       <i className="fa-solid fa-magnifying-glass"></i>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="disPrescription-results-info">
//           <span>Showing 0 / 0 results</span>
//           <button className="disPrescription-print-button">Print</button>
//         </div>
//         </div>

//         <div className='disPrescription-table-N-paginationDiv'>
      
//       <table className="disPrescription-requisition-table">
//         <thead>
//           <tr>
//             <th>Code</th>
//             <th>Patient Name</th>
//             <th>Requested By</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {DisPrescriptions.map((prescription, index) => (
//             <tr key={index}>
//               <td>{prescription.code}</td>
//               <td>{prescription.patientName}</td>
//               <td>{prescription.requestedBy}</td>
//               <td>{prescription.date}</td>
//               <td>
//                 <button className="disPrescription-Availability-button"
//                 onClick={() => handleViewAvailability(prescription)}>
//                   View Availability</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
      
//       <div className="sampCollect-pagination">
//         <span>0 to 0 of 0</span>
//         <button>First</button>
//         <button>Previous</button>
//         <span>Page 0 of 0</span>
//         <button>Next</button>
//         <button>Last</button>
//       </div>
//       </div>
//       {selectedPrescription && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisPrescription;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import "../DisPrescriptionMain/disPrescription.css";
// import PrescriptionDetails from "../DisPrescriptionMain/viewAvailability";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const DisPrescriptions = [
//   { code: "2408003819", patientName: "S Suresh", requestedBy: "admin admin", date: "13-Aug-2024 04:44 PM " },
//   { code: "2408003817", patientName: "Sachin Ramesh", requestedBy: "admin admin", date: "13-Aug-2024 11:19 AM" },
//   // Add more rows as needed
// ];

// const DisPrescription = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPrescription, setSelectedPrescription] = useState(null); // State to track the selected prescription

//   const handleViewAvailability = (prescription) => {
//     setSelectedPrescription(prescription); // Set the selected prescription to show in the popup
//   };

//   const handleCloseDetails = () => {
//     setSelectedPrescription(null); // Close the popup
//   };

//   const handlePrint = () => {
//     const input = document.getElementById('prescription-table');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
//       pdf.save("prescriptions.pdf");
//     });
//   };

//   return (
//     <div className="disPrescription-list-requisition">
//       <div className='disPrescription-search-N-result'>
//         <div className="disPrescription-search-bar">
//           <i className="fa-solid fa-magnifying-glass"></i>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="disPrescription-results-info">
//           <span>Showing 0 / 0 results</span>
//           <button className="disPrescription-print-button" onClick={handlePrint}>Print</button>
//         </div>
//       </div>

//       <div className='disPrescription-table-N-paginationDiv'>
//         <table id="prescription-table" className="disPrescription-requisition-table">
//           <thead>
//             <tr>
//               <th>Code</th>
//               <th>Patient Name</th>
//               <th>Requested By</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {DisPrescriptions.map((prescription, index) => (
//               <tr key={index}>
//                 <td>{prescription.code}</td>
//                 <td>{prescription.patientName}</td>
//                 <td>{prescription.requestedBy}</td>
//                 <td>{prescription.date}</td>
//                 <td>
//                   <button className="disPrescription-Availability-button"
//                     onClick={() => handleViewAvailability(prescription)}>
//                     View Availability
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="sampCollect-pagination">
//           <span>0 to 0 of 0</span>
//           <button>First</button>
//           <button>Previous</button>
//           <span>Page 0 of 0</span>
//           <button>Next</button>
//           <button>Last</button>
//         </div>
//       </div>
      
//       {selectedPrescription && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisPrescription;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import "../DisPrescriptionMain/disPrescription.css";
// import PrescriptionDetails from "../DisPrescriptionMain/viewAvailability";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const DisPrescriptions = [
//   { code: "2408003819", patientName: "S Suresh", requestedBy: "admin admin", date: "13-Aug-2024 04:44 PM " },
//   { code: "2408003817", patientName: "Sachin Ramesh", requestedBy: "admin admin", date: "13-Aug-2024 11:19 AM" },
//   // Add more rows as needed
// ];

// const DisPrescription = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPrescription, setSelectedPrescription] = useState(null);

//   const handleViewAvailability = (prescription) => {
//     setSelectedPrescription(prescription);
//   };

//   const handleCloseDetails = () => {
//     setSelectedPrescription(null);
//   };

//   const handlePrint = () => {
//     const input = document.getElementById('prescription-table');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
//       const pdfDataUri = pdf.output('dataurlstring');
//       const pdfWindow = window.open("");
//       pdfWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
//     });
//   };

//   return (
//     <div className="disPrescription-list-requisition">
//       <div className='disPrescription-search-N-result'>
//         <div className="disPrescription-search-bar">
//           <i className="fa-solid fa-magnifying-glass"></i>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="disPrescription-results-info">
//           <span>Showing 0 / 0 results</span>
//           <button className="disPrescription-print-button" onClick={handlePrint}>Print</button>
//         </div>
//       </div>

//       <div className='disPrescription-table-N-paginationDiv'>
//         <table id="prescription-table" className="disPrescription-requisition-table">
//           <thead>
//             <tr>
//               <th>Code</th>
//               <th>Patient Name</th>
//               <th>Requested By</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {DisPrescriptions.map((prescription, index) => (
//               <tr key={index}>
//                 <td>{prescription.code}</td>
//                 <td>{prescription.patientName}</td>
//                 <td>{prescription.requestedBy}</td>
//                 <td>{prescription.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="sampCollect-pagination">
//           <span>0 to 0 of 0</span>
//           <button>First</button>
//           <button>Previous</button>
//           <span>Page 0 of 0</span>
//           <button>Next</button>
//           <button>Last</button>
//         </div>
//       </div>
      
//       {selectedPrescription && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisPrescription;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../DisPrescriptionMain/disPrescription.css";
import PrescriptionDetails from "../DisPrescriptionMain/viewAvailability";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DisPrescriptions = [
  { code: "2408003819", patientName: "S Suresh", requestedBy: "admin admin", date: "13-Aug-2024 04:44 PM " },
  { code: "2408003817", patientName: "Sachin Ramesh", requestedBy: "admin admin", date: "13-Aug-2024 11:19 AM" },
  // Add more rows as needed
];

const DisPrescription = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const handleViewAvailability = (prescription) => {
    setSelectedPrescription(prescription);
  };

  const handleCloseDetails = () => {
    setSelectedPrescription(null);
  };

  const handlePrint = () => {
    const tableElement = document.getElementById('prescription-table');
    const actionColumn = tableElement.querySelectorAll('.action-column');

    // Hide the action column before generating the PDF
    actionColumn.forEach(column => {
      column.style.display = 'none';
    });

    html2canvas(tableElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      const pdfDataUri = pdf.output('dataurlstring');
      const pdfWindow = window.open("");
      pdfWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);

      // Show the action column again after generating the PDF
      actionColumn.forEach(column => {
        column.style.display = '';
      });
    });
  };

  return (
    <div className="disPrescription-list-requisition">
      <div className='disPrescription-search-N-result'>
        <div className="disPrescription-search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="disPrescription-results-info">
          <span>Showing 0 / 0 results</span>
          <button className="disPrescription-print-button" onClick={handlePrint}>Print</button>
        </div>
      </div>

      <div className='disPrescription-table-N-paginationDiv'>
        <table id="prescription-table" className="disPrescription-requisition-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Patient Name</th>
              <th>Requested By</th>
              <th>Date</th>
              <th className="action-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {DisPrescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.code}</td>
                <td>{prescription.patientName}</td>
                <td>{prescription.requestedBy}</td>
                <td>{prescription.date}</td>
                <td className="action-column">
                  <button 
                    className="disPrescription-Availability-button"
                    onClick={() => handleViewAvailability(prescription)}
                  >
                    View Availability
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sampCollect-pagination">
          <span>0 to 0 of 0</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 0 of 0</span>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
      
      {selectedPrescription && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisPrescription;
