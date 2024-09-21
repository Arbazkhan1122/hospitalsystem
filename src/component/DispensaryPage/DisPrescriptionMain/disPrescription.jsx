

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
//     const tableElement = document.getElementById('prescription-table');
//     const actionColumn = tableElement.querySelectorAll('.disPrescription-action-column');

//     // Hide the action column before generating the PDF
//     actionColumn.forEach(column => {
//       column.style.display = 'none';
//     });

//     html2canvas(tableElement).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
//       const pdfDataUri = pdf.output('dataurlstring');
//       const pdfWindow = window.open("");
//       pdfWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);

//       // Show the action column again after generating the PDF
//       actionColumn.forEach(column => {
//         column.style.display = '';
//       });
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
//               <th className="disPrescription-action-column">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {DisPrescriptions.map((prescription, index) => (
//               <tr key={index}>
//                 <td>{prescription.code}</td>
//                 <td>{prescription.patientName}</td>
//                 <td>{prescription.requestedBy}</td>
//                 <td>{prescription.date}</td>
//                 <td className="disPrescription-action-column">
//                   <button 
//                     className="disPrescription-Availability-button"
//                     onClick={() => handleViewAvailability(prescription)}
//                   >
//                     View Availability
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="disPrescription-pagination">
//           <span>0 to 0 of 0</span>
//           <button>First</button>
//           <button>Previous</button>
//           <span>Page 0 of 0</span>
//           <button>Next</button>
//           <button>Last</button>
//         </div>
//       </div>
      
//       {selectedPrescription && (
//         <div className="disPrescription-modal-overlay">
//           <div className="disPrescription-modal-content">
//             <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisPrescription;

// Ajhar Tamboli disPrescription.jsx 19-09-24
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../DisPrescriptionMain/disPrescription.css";
import PrescriptionDetails from "../DisPrescriptionMain/viewAvailability";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';

const DisPrescription = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await axios.get('http://localhost:1415/api/hospital/fetch-all-prescription-data');
      setPrescriptions(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch prescriptions');
      setLoading(false);
    }
  };

  const handleViewAvailability = (prescription) => {
    setSelectedPrescription(prescription);
  };

  const handleCloseDetails = () => {
    setSelectedPrescription(null);
  };

  // const handlePrint = () => {
  //   const tableElement = document.getElementById('prescription-table');
  //   const actionColumn = tableElement.querySelectorAll('.disPrescription-action-column');

  //   actionColumn.forEach(column => {
  //     column.style.display = 'none';
  //   });

  //   html2canvas(tableElement).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
  //     const pdfDataUri = pdf.output('dataurlstring');
  //     const pdfWindow = window.open("");
  //     pdfWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);

  //     actionColumn.forEach(column => {
  //       column.style.display = '';
  //     });
  //   });
  // };
  const handlePrint = () => {
    const tableElement = document.getElementById('prescription-table');
    const actionColumn = tableElement.querySelectorAll('.disPrescription-action-column');
  
    // Hide action columns before printing
    actionColumn.forEach(column => {
      column.style.display = 'none';
    });
  
    // Convert table to canvas
    html2canvas(tableElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
  
      // Open PDF in a new tab
      pdf.output('dataurlnewwindow');
  
      // Restore action columns after printing
      actionColumn.forEach(column => {
        column.style.display = '';
      });
    });
  };
  

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
          <span>Showing {filteredPrescriptions.length} / {prescriptions.length} results</span>
          <button className="disPrescription-print-button" onClick={handlePrint}><i class="fa-solid fa-print"></i> Print</button>
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
              <th className="disPrescription-action-column">Actions</th>
            </tr>
          </thead>
          <tbody className="disPrescription-requisition-tableBody">
            {filteredPrescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.code}</td>
                <td>{prescription.patientName}</td>
                <td>{prescription.requestedBy}</td>
                <td>{prescription.date}</td>
                <td className="disPrescription-action-column">
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

        {/* <div className="disPrescription-pagination">
          <span>{filteredPrescriptions.length} to {prescriptions.length} of {prescriptions.length}</span>
          <button>First</button>
          <button>Previous</button>
          <span>Page 1 of 1</span>
          <button>Next</button>
          <button>Last</button>
        </div> */}
      </div>
      
      {selectedPrescription && (
        <div className="disPrescription-modal-overlay">
          <div className="disPrescription-modal-content">
            <PrescriptionDetails prescription={selectedPrescription} onClose={handleCloseDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DisPrescription;