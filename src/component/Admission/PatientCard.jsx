// PatientCard.js
import React, { useState } from 'react';
import './PatientCard.css';

const PatientCard = ({ patient }) => {
    console.log(patient);
    
  const [selectedPrinter, setSelectedPrinter] = useState();

  // Example printer options
  const printers = [
    'Sticker-MainCounter-1',
    'Printer-Office-1',
    'Printer-Lab-1',
    'Printer-FrontDesk-1',
  ];

  const handlePrinterChange = (event) => {
    setSelectedPrinter(event.target.value);
  };

  // Function to handle print
  const handlePrint = () => {
    window.print(); // Triggers the print dialog
  };

  return (
    <div className="patient-card" id="printable-area">
      <h2 className="patient-header">IPD /{patient?.admittedDoctorDTO?.salutation} {patient?.admittedDoctorDTO?.firstName}</h2>
      <p><strong>Hospital No.:</strong> {patient?.patientDTO?.hospitalNo}</p>
      <p><strong>Patient:</strong> {patient?.patientDTO?.firstName} {patient?.patientDTO?.lastName}/ {patient?.patientDTO?.age}/ {patient?.patientDTO?.gender}</p>
      <p><strong>Contact:</strong> {patient?.patientDTO?.phoneNumber} / {patient?.patientDTO?.address}</p>
      <p><strong>IP No.:</strong> {patient?.admissionId}</p>
      <p><strong>Ward/Bed:</strong> {patient?.ward}</p>
      <p><strong>DOA:</strong> {patient?.admissionDate}</p>
      <button className="patient-card-print-button" onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PatientCard;
