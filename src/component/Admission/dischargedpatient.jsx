import React, { useState } from 'react';
import { Modal, Button,Table } from 'react-bootstrap';
import './dischargedpatient.css'
import { FaSearch } from 'react-icons/fa';

function DischargedPatient() {
  const [modalShow, setModalShow] = useState(false);
  const [summaryData, setSummaryData] = useState(''); // Initialize summary data

  const handleShow = () => {
    // Fetch or set your summary data here
    setSummaryData('This is the summary data');
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

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
      <div style={{ backgroundColor: '#ffffff', padding: '20px' }}>
      <div>
      <input
          type="text"
        
         
          placeholder="Search ....."
          style={{width:"500px"}}
          className="discharge-search-input"
        />
          <button className='icon-btn'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span>Showing 1 / 1 results</span>
          <button className='discharge-print-button'>Print</button>
        </div>
        <table className='dischargetable'>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th className='dischargetablehead'>Admitted On</th>
              <th className='dischargetablehead'>Discharged On</th>
              <th className='dischargetablehead'>Hospital No</th>
              <th className='dischargetablehead'>IP Number</th>
              <th className='dischargetablehead'>Name</th>
              <th className='dischargetablehead'>Age/Sex</th>
              <th className='dischargetablehead'>Phone</th>
              <th className='dischargetablehead'>BillStatus</th>
              <th className='dischargetablehead'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='dischargetabledata'>2024-08-08 14:56</td>
              <td className='dischargetabledata'>2024-08-09 08:18</td>
              <td className='dischargetabledata'>2408003807</td>
              <td className='dischargetabledata'>H2400025</td>
              <td  className='dischargetabledata'>Arbaz s Pathan</td>
              <td  className='dischargetabledata'>25 Y/M</td>
              <td className='dischargetabledata'>8382883822</td>
              <td className='dischargetabledata'>paid</td>
              <td className='dischargetabledata'>
                <Button variant="primary" onClick={handleShow} style={{ marginRight: '1px', backgroundColor:"#007bff", color: 'white', padding: '1px 10px' }} className='dischargedbtn'>
                  View Summary
                </Button>
                <button style={{ marginRight: '1px', backgroundColor:"#007bff", color: 'white', padding: '1px 10px' }} className='dischargedbtn'>Edit Summary</button>
                <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '1px 10px' }}>...</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Discharge Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f3ff', padding: '20px' }}>
            {/* Same layout as above */}
            {/* Render modal content here with the same styling */}
            
      {/* Modal */}
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e6f3ff', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button style={{ padding: '5px 10px', backgroundColor: '#6c5ce7', color: 'white', border: 'none', borderRadius: '3px' }}>◀ Back</button>
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#6c5ce7', borderRadius: '50%', marginRight: '10px' }}></div>
          <span style={{ fontWeight: 'bold', color: '#6c5ce7' }}>Sasa Health</span>
        </div> */}
        <div>
          <button style={{ padding: '5px 10px', backgroundColor: '#6c5ce7', color: 'white', border: 'none', borderRadius: '3px', marginRight: '10px' }}>Edit</button>
          <button style={{ padding: '5px 10px', backgroundColor: '#6c5ce7', color: 'white', border: 'none', borderRadius: '3px' }}>Print This Page</button>
        </div>
      </div>

      {/* Title */}
      <h2 style={{ textAlign: 'center', color: '#333' }}>InPatient Discharge Summary</h2>

      {/* Patient Info */}
      <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
        <h3>To be filled in by nurse</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div>
            <p><strong>Name:</strong> {summaryData.name}</p>
            <p><strong>Age/Sex:</strong> {summaryData.ageSex}</p>
            <p><strong>Contact Number:</strong> {summaryData.contactNumber}</p>
            <p><strong>Ward:</strong> {summaryData.ward}</p>
            <p><strong>Guardian Name:</strong> {summaryData.guardianName}</p>
          </div>
          <div>
            <p><strong>Hospital No.:</strong> {summaryData.hospitalNo}</p>
            <p><strong>Address:</strong> {summaryData.address}</p>
            <p><strong>Bed No.:</strong> {summaryData.bedNo}</p>
            <p><strong>Consultant Doctors:</strong> {summaryData.consultantDoctors}</p>
            <p><strong>Guardian Relation:</strong> {summaryData.guardianRelation}</p>
          </div>
          <div>
            <p><strong>Membership Type:</strong> {summaryData.membershipType}</p>
            <p><strong>Inpatient No:</strong> {summaryData.inpatientNo}</p>
            <p><strong>Admission Date:</strong> {summaryData.admissionDate}</p>
            <p><strong>Discharged Date:</strong> {summaryData.dischargedDate}</p>
            <p><strong>Hospital Stay:</strong> {summaryData.hospitalStay}</p>
          </div>
        </div>
      </div>

      {/* Investigations */}
      <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
        <h3>Investigations</h3>
        <textarea rows="2" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '3px' }} value={summaryData.investigations} readOnly />
      </div>

      {/* Diagnosis */}
      <div style={{ backgroundColor: '#f0f8ff', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
        <h3>Diagnosis</h3>
        <textarea rows="2" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '3px' }} value={summaryData.diagnosis} readOnly />
        <p><strong>Result Cured/to be operated again/dead:</strong> {summaryData.result}</p>
        <p><strong>Discharge Type:</strong> {summaryData.dischargeType}</p>
        <p><strong>Discharge Condition:</strong> {summaryData.dischargeCondition}</p>
        <h3>Further Advice:</h3>
        <p>{summaryData.furtherAdvice}</p>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <p>Created On: {summaryData.createdOn}</p>
        <p style={{ borderTop: '1px solid #333', paddingTop: '5px' }}>Signature Of M.O.: {summaryData.signature}</p>
      </div>
      </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Pagination */}
      <div className="discharge-patient-btn-pagination">
        <Button className='discharge-patient-btn-pagination-btn'>First</Button>
        <Button className='discharge-patient-btn-pagination-btn'>Previous</Button>
        <span className='discharge-patient-btn-pagination-span'>Page 1 of 4</span>
        <Button className='discharge-patient-btn-pagination-btn'>Next</Button>
        <Button className='discharge-patient-btn-pagination-btn'>Last</Button>
      </div>
    </div>
    
  
  );
}

export default DischargedPatient;

