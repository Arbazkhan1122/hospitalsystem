/* // neha-ADT-discharge-19/09/24 */
import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import './dischargedpatient.css';
import { FaSearch } from 'react-icons/fa';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';
import { API_BASE_URL } from '../api/api';

function DischargedPatient() {
  const [modalShow, setModalShow] = useState(false);
  const [summaryData, setSummaryData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  const handleShow = (patient) => {
    setSummaryData(patient);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admissions/discharged-summary/Discharged`);
        console.log('API Response:', response.data); // Debugging API response
        setPatients(response.data);// Assuming the response is an object and needs to be wrapped in an array
        setLoading(false);
        console.log(patients)

      } catch (err) {
        console.error('Error fetching data:', err); // Debugging error
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f3ff', padding: '20px' }}>
      {/* Header */}
      <div className="date-utlt">
        <div className="dischage-patient">
          <div className="date-range">
            <label>From: </label>
            <input className="date-range-input" type="date" value="2024-08-05" />
            <label> To: </label>
            <input className="date-range-input" type="date" value="2024-08-12" />
            <button style={{ marginLeft: '5px' }}>★</button>
            <button style={{ marginLeft: '5px' }}>+</button>
            <button style={{ marginLeft: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px' }}>OK</button>
          </div>
        </div>

        <div className='dischage-insurance'>
          <label>
            Insurance Patient:
            <input type="checkbox" />
          </label>
        </div>
      </div>

      {/* Table */}
     
        <div className='discharge-filter'>
          <input
            type="text"
            placeholder="Search ....."
            style={{ width: "300px" }}
            className="discharge-search-input"
          />
          {/* <button className='icon-btn'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button> */}
          <button className='discharge-print-button'>Print</button> 
        </div>
          
          
       
        <table className='dischargetable' ref={tableRef}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
            {[
  'Admitted On',
  'Discharged On',
  'Hospital No',
  'IP Number',
  'Name',
  'Age/Sex',
  'Phone',
  'Bill Status',
  'Actions'
].map((header, index) => (
  <th
    key={index}
    style={{ width: columnWidths[index] }}
    className="rd-resizable-th"
  >
    <div className="rd-header-content">
      <span>{header}</span>
      <div
        className="rd-resizer"
        onMouseDown={startResizing(tableRef, setColumnWidths)(index)}
      ></div>
    </div>
  </th>
))}
</tr>
</thead>
<tbody>
            {loading ? (
              <tr><td colSpan="9">Loading...</td></tr>
            ) : error ? (
              <tr><td colSpan="9">{error}</td></tr>
            ) : (
              patients.map((patient) => (
                <tr key={patient.admissionId}>
                  <td className='dischargetabledata'>{patient.admissionDate}</td>
                  <td className='dischargetabledata'>{patient.dischargeDate || 'N/A'}</td>
                  <td className='dischargetabledata'>H{patient.admissionId}</td> {/* Placeholder for Hospital No */}
                  <td className='dischargetabledata'>H{patient.admissionId}</td> {/* Placeholder for IP Number */}
                  <td className='dischargetabledata'>{`${patient.firstName} ${patient.lastName}`}</td>
                  <td className='dischargetabledata'>{`${patient.age} Y/M`}</td>
                  <td className='dischargetabledata'>{patient.phoneNumber}</td>x
                  <td className='dischargetabledata'>Paid</td> {/* Placeholder for Bill Status */}
                  <td className='dischargetabledata'>
                    <Button variant="primary" onClick={() => handleShow(patient)} style={{ marginRight: '1px', backgroundColor: "#007bff", color: 'white', padding: '1px 10px' }} className='dischargedbtn'>
                      View Summary
                    </Button>
                    <button style={{ marginRight: '1px', backgroundColor: "#007bff", color: 'white', padding: '1px 10px' }} className='dischargedbtn'>Edit Summary</button>
                    <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '1px 10px' }}>...</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

  

      {/* Modal */}
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Discharge Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {summaryData ? (
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f3ff', padding: '20px' }}>
              <h2 style={{ textAlign: 'center', color: '#333' }}>InPatient Discharge Summary</h2>

              {/* Patient Info */}
              <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                <h3>To be filled in by nurse</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  <div>
                    <p><strong>Name:</strong> {`${summaryData.firstName} ${summaryData.lastName}`}</p>
                    <p><strong>Age/Sex:</strong> {`${summaryData.age} Y/M`}</p>
                    <p><strong>Contact Number:</strong> {summaryData.phoneNumber}</p>
                    <p><strong>Ward:</strong> {summaryData.wardName}</p>
                    <p><strong>Guardian Name:</strong> N/A</p>
                  </div>
                  <div>
                    <p><strong>Hospital No.:</strong> H{summaryData.admissionId}</p>
                    <p><strong>Address:</strong> N/A</p>
                    <p><strong>Bed No.:</strong> N/A</p>
                    <p><strong>Consultant Doctors:</strong> N/A</p>
                    <p><strong>Guardian Relation:</strong> N/A</p>
                  </div>
                  <div>
                    <p><strong>Membership Type:</strong> N/A</p>
                    <p><strong>Inpatient No:</strong> N/A</p>
                    <p><strong>Admission Date:</strong> {summaryData.admissionDate}</p>
                    <p><strong>Discharged Date:</strong> {summaryData.dischargeDate || 'N/A'}</p>
                    <p><strong>Hospital Stay:</strong> N/A</p>
                  </div>
                </div>
              </div>

              {/* Investigations */}
              <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                <h3>Investigations</h3>
                <textarea rows="2" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '3px' }} value="N/A" readOnly />
              </div>

              {/* Diagnosis */}
              <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                <h3>Diagnosis</h3>
                <textarea rows="2" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '3px' }} value="N/A" readOnly />
                <p><strong>Result Cured/to be operated again/dead:</strong> N/A</p>
                <p><strong>Discharge Type:</strong> N/A</p>
                <p><strong>Discharge Condition:</strong> N/A</p>
                <h3>Further Advice:</h3>
                <p>N/A</p>
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <p>Created On: N/A</p>
                <p style={{ borderTop: '1px solid #333', paddingTop: '5px' }}>Signature Of M.O.: N/A</p>
              </div>
            </div>
          ) : (
            <div>No data available</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

   
      
    </div>
  );
}

export default DischargedPatient;
