<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";
import "../HhWardInformation/hhWardInformation.css";
import { API_BASE_URL } from "../../api/api";
import HelpDeskWardPatientDetails from "./HelpDeskWardPatientDetails";

function HHWardInformation() {
  const tableRef = useRef();
  const [wardData, setWardData] = useState([]);
  const [totals, setTotals] = useState({
    totalOccupied: 0,
    totalAvailable: 0,
    totalReserved: 0,
    overallTotal: 0,
  });
  const [id, setId] = useState(null);
  const [wardName, setWardName] = useState(null);
  const [isWardSelected, setIsWardSelected] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/manage-bed/all-bed-details`)
      .then((response) => response.json())
      .then((data) => {
        calculateTotals(data);
        setWardData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePrint = () => {
    if (tableRef.current) {
      const printContents = tableRef.current.innerHTML;

      // Create an iframe element
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";

      // Append the iframe to the body
      document.body.appendChild(iframe);

      // Write the table content into the iframe's document
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <html>
        <head>
          <title>Print Table</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            button{ background:transparent; border:none}
          </style>
        </head>
        <body>
          <table>
            ${printContents}
          </table>
        </body>
        </html>
      `);
      doc.close();

      // Trigger the print in the iframe
      iframe.contentWindow.focus();
      iframe.contentWindow.print();

      // Remove the iframe after printing
      document.body.removeChild(iframe);
    }
  };

  const calculateTotals = (data) => {
    const totalOccupied = data.reduce(
      (sum, row) => sum + row.totalOccupiedBedsForSelectedWard,
      0
    );
    const totalAvailable = data.reduce(
      (sum, row) => sum + row.totalAvailableBedsForSelectedWard,
      0
    );
    const totalReserved = data.reduce(
      (sum, row) => sum + row.totalReservedBedsForSelectedWard,
      0
    );
    const overallTotal = data.reduce(
      (sum, row) => sum + row.totalBedsForSelectedWard,
      0
    );

    setTotals({
      totalOccupied,
      totalAvailable,
      totalReserved,
      overallTotal,
    });
  };

  const handleWardDetails = (id, name) => {
    setId(id);
    setWardName(name);
    setIsWardSelected(true);
  };
  if (isWardSelected) {
    return (
      <HelpDeskWardPatientDetails
        id={id}
        wardName={wardName}
        setIsWardSelected={setIsWardSelected}
      />
    );
  }
  return (
    <>
      <div className="wardInformation-container">
        <div className="wardInformation-heading-N-print-btn">
          <div className="wardInformation-heading">
            <h3>List Of Wards:</h3>
          </div>

          <div className="wardInformation-button-container">
            <button className="wardInformation-print-btn" onClick={handlePrint}>
              <i className="fa-solid fa-print"></i> Print
            </button>
          </div>
        </div>

        <table ref={tableRef}>
          <thead>
            <tr>
              <th>Ward Name</th>
              <th>Occupied</th>
              <th>Vacant</th>
              <th>Reserved</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {wardData.map((ward, index) => (
              <tr key={index}>
                <td className="wardInformation-wardNameColumn">
                  <button
                    className="wardInformation-tableActionBTN"
                    onClick={() =>
                      handleWardDetails(ward.wardId, ward.wardName)
                    }
                  >
                    {ward.wardName}
                  </button>
                </td>
                <td>{ward.totalOccupiedBedsForSelectedWard}</td>
                <td>{ward.totalAvailableBedsForSelectedWard}</td>
                <td>{ward.totalReservedBedsForSelectedWard}</td>
                <td>{ward.totalBedsForSelectedWard}</td>
              </tr>
            ))}
            <tr className="wardInformation-total-row">
              <td>Total</td>
              <td>{totals.totalOccupied}</td>
              <td>{totals.totalAvailable}</td>
              <td>{totals.totalReserved}</td>
              <td>{totals.overallTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
=======
import React, { useState, useEffect } from 'react';
import "../HhWardInformation/hhWardInformation.css";

function HHWardInformation() {
  const [wardData, setWardData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:1415/api/ward-department/getAllWardDepartment")
      .then(response => response.json())
      .then(data => setWardData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const calculateTotals = () => {
    return wardData.reduce((totals, ward) => {
      totals.occupied += ward.occupied;
      totals.vacant += ward.vacant;
      totals.reserved += ward.reserved;
      totals.total += ward.numberOfBeds;
      return totals;
    }, { occupied: 0, vacant: 0, reserved: 0, total: 0 });
  };

  const totals = calculateTotals();

  return (
    <div className="wardInformation-container">
      <div className="wardInformation-heading-N-print-btn">
      <div className="wardInformation-heading">
        <h3>List Of Wards:</h3>
      </div>
      
      <div className="wardInformation-button-container">
        <button className="wardInformation-print-btn" onClick={handlePrint}>
          <i className="fa-solid fa-print"></i> Print
        </button>
      </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ward Name</th>
            <th>Occupied</th>
            <th>Vacant</th>
            <th>Reserved</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {wardData.map((ward, index) => (
            <tr key={index}>
              <td className='wardInformation-wardNameColumn'>{ward.wardName}</td>
              <td>{ward.occupied}</td>
              <td>{ward.vacant}</td>
              <td>{ward.reserved}</td>
              <td>{ward.numberOfBeds}</td>
            </tr>
          ))}
          <tr className="wardInformation-total-row">
            <td>Total</td>
            <td>{totals.occupied}</td>
            <td>{totals.vacant}</td>
            <td>{totals.reserved}</td>
            <td>{totals.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  );
}

export default HHWardInformation;
