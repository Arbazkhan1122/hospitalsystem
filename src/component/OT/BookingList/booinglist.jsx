import React, { useState, useEffect } from 'react';
import './bookinglist.css';
import { FaSearch, FaRedo, FaPlus } from 'react-icons/fa';
import moment from 'moment';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function BookingList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [otDate, setOtDate] = useState('');
  const [otTime, setOtTime] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [otherDiagnosis, setOtherDiagnosis] = useState('');
  const [procedure, setProcedure] = useState('');
  const [useAnaesthesia, setUseAnaesthesia] = useState(false);
  const [anaesthesiaType, setAnaesthesiaType] = useState('');
  const [anaesthesia, setAnaesthesia] = useState('');
  const [machineName, setMachineName] = useState('');
  const [remarks, setRemarks] = useState('');
  const [personnelInvolvements, setPersonnelInvolvements] = useState([]);
  const [otPatientList, setOtPatientList] = useState([]);
  const [showSchemeReturnEntryModal, setShowSchemeReturnEntryModal] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptNo, setReceiptNo] = useState(null);
  const [printSchemeRefund, setPrintSchemeRefund] = useState(false);

  // Fetch OT bookings from backend
  useEffect(() => {
  axios.get('http://localhost:1414/api/ot-bookings')
    .then(response => {
      console.log(response.data); // Log the response data
      setOtPatientList(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the OT bookings!', error);
    });
}, []);

  const openSchemeReturnEntryModal = () => {
    setShowSchemeReturnEntryModal(true);
  };

  const closeSchemeReturnEntryModal = () => {
    setShowSchemeReturnEntryModal(false);
  };

  const printSchemeRefundDetails = (receiptNo) => {
    setReceiptNo(receiptNo);
    setPrintSchemeRefund(true);
    setShowReceipt(true);
  };

  const closeSchemeRefundReceiptPopUp = () => {
    setShowReceipt(false);
    setPrintSchemeRefund(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      patientName,
      otDate,
      otTime,
      diagnosis,
      otherDiagnosis,
      procedure,
      useAnaesthesia,
      anaesthesiaType,
      anaesthesia,
      machineName,
      remarks,
      personnelInvolvements,
    };

    axios.post('http://localhost:1414/api/ot-bookings', newBooking)
      .then(response => {
        console.log('Booking created:', response.data);
        setOtPatientList([...otPatientList, response.data]);
        closeSchemeReturnEntryModal();
      })
      .catch(error => {
        console.error('There was an error creating the booking!', error);
      });
  };

  const handlePatientNameChange = (e) => setPatientName(e.target.value);
  const handleOtDateChange = (e) => setOtDate(e.target.value);
  const handleOtTimeChange = (e) => setOtTime(e.target.value);
  const handleDiagnosisChange = (e) => setDiagnosis(e.target.value);
  const handleOtherDiagnosisChange = (e) => setOtherDiagnosis(e.target.value);
  const handleProcedureChange = (e) => setProcedure(e.target.value);
  const handleUseAnaesthesiaChange = (e) => setUseAnaesthesia(e.target.checked);
  const handleAnaesthesiaTypeChange = (e) => setAnaesthesiaType(e.target.value);
  const handleAnaesthesiaChange = (e) => setAnaesthesia(e.target.value);
  const handleMachineNameChange = (e) => setMachineName(e.target.value);
  const handleRemarksChange = (e) => setRemarks(e.target.value);

  const handleRemovePersonnel = (index) => {
    const newPersonnel = personnelInvolvements.filter((_, i) => i !== index);
    setPersonnelInvolvements(newPersonnel);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addPersonnelInvolvement = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const confirmAction = () => {
    console.log("OT Booking confirmed!");
    setIsPopupOpen(false);
  };

  return (
    <div className="utltlist">
      <div className='booklist-nav-content'>
        <div className="bookinglist-modelbtn">
          <button className="bookinglist-btn btn btn-success" onClick={openSchemeReturnEntryModal}>
            <FaPlus style={{ color: 'white', fontSize: '18px', marginRight:"5px", lineHeight:"2" }} />New OT Booking
          </button>
        </div>
        <div className="bookedlistcheckbox-container">
          <div>
            <input type="checkbox" id="dateFilter" className="bookedlistcheckbox-checkbox" />
            <label htmlFor="dateFilter" className="bookedlistcheckbox-label">Date Filter</label>
          </div>
          <div>
            <label htmlFor="statusFilter" className="bookedlistdropdown-label">Status:</label>
            <select id="statusFilter" name="statusFilter" className="bookedlistdropdown-select">
              <option value="all">All</option>
              <option value="booked">Booked</option>
              <option value="canceled">Canceled</option>
              <option value="concluded">Concluded</option>
            </select>
          </div>
          <button className="bookedlistbutton-button">
            <FaRedo className="bookedlistbutton-icon" />
            Load
          </button>
        </div>
      </div>
      <div className="utlt-search-bar">
        <input type="text" placeholder="Search by patient name" className="inputsearchbar" />
        <button className='utltlistsearchbar'> <FaSearch style={{ color: 'gray', fontSize: '18px' }} /></button>
      </div>
      <table className="utlt-table">
        <thead>
          <tr>
            <th>Hospital No</th>
            <th>Patient Name</th>
            <th>Age/Sex</th>
            <th>Booked For Date and Time</th>
            <th>Diagnosis</th>
            <th>Anesthesia</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
{Array.isArray(otPatientList) && otPatientList.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.hospitalNo}</td>
              <td>{patient.patientName}</td>
              <td>{patient.ageSex}</td>
              <td>{moment(patient.bookedForDateTime).format("YYYY-MM-DD HH:mm")}</td>
              <td>{patient.diagnosis}</td>
              <td>{patient.procedure}</td>
              <td>{patient.useAnaesthesia}</td>
              <td>
                <button className="booklist-action-btn" onClick={() => handleAction(patient.id)}>
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="utlt-pagination">
        <Button>First</Button>
        <Button>Previous</Button>
        <span>Page 1 of 4</span>
        <Button>Next</Button>
        <Button>Last</Button>
      </div>
    


      {/* Modal for New Scheme Refund Entry */}
      {showSchemeReturnEntryModal && (
  <div className="utlt-modal show d-block" role="dialog">
    <div className="utlt-modal-dialog modal-lg" role="document">
      <div className="utlt-modal-content">
        <div className="modal-header">
          <button
           
            type="button"
            className="utlt-close"
            onClick={closeSchemeReturnEntryModal}
          >
            {/* <span>&times;</span> */}
          </button>
        </div>
        <div className="bookinglist-modal-body">
          <div>
          <form onSubmit={handleSubmit}>
            <h2>Booking OT Schedule</h2>
            <div className="utlt-form-group">
              <label htmlFor="patientName">Select Patient:</label>
              <input
                type="text"
                id="patientName"
                className="utlt-form-control"
                value={patientName}
                onChange={handlePatientNameChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="otDate">OT Date:</label>
              <input
                type="date"
                id="otDate"
                className="utlt-form-control"
                value={otDate}
                onChange={handleOtDateChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="otTime">OT Time:</label>
              <input
                type="time"
                id="otTime"
                className="utlt-form-control"
                value={otTime}
                onChange={handleOtTimeChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="diagnosis">Diagnosis:</label>
              <input
                type="text"
                id="diagnosis"
                className="utlt-form-control"
                value={diagnosis}
                onChange={handleDiagnosisChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="otherDiagnosis">Other Diagnosis:</label>
              <textarea
                id="otherDiagnosis"
                className="utlt-form-control"
                value={otherDiagnosis}
                onChange={handleOtherDiagnosisChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="procedure">Procedures:</label>
              <input
                type="text"
                id="procedure"
                className="utlt-form-control"
                value={procedure}
                onChange={handleProcedureChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="useAnaesthesia">Use Anaesthesia?</label>
              <input
                type="checkbox"
                id="useAnaesthesia"
                className="utlt-form-control"
                checked={useAnaesthesia}
                onChange={handleUseAnaesthesiaChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="anaesthesiaType">Anaesthesia Type:</label>
              <select
                id="anaesthesiaType"
                className="utlt-form-control"
                value={anaesthesiaType}
                onChange={handleAnaesthesiaTypeChange}
              >
                <option value="">Select Anaesthesia Type</option>
                <option value="epidural">Epidural Anesthesia</option>
                <option value="general">General Anesthesia</option>
              </select>
            </div>
            <div className="utlt-form-group">
              <label htmlFor="anaesthesia">Anaesthesia:</label>
              <input
                type="text"
                id="anaesthesia"
                className="utlt-form-control"
                value={anaesthesia}
                onChange={handleAnaesthesiaChange}
              />
            </div>
            <div className="utlt-form-group">
              <label htmlFor="machineName">Machine Name:</label>
              <input
                type="text"
                id="machineName"
                className="utlt-form-control"
                value={machineName}
                onChange={handleMachineNameChange}
              />
            </div>
          
            </form>
            <div className="utlt-form-group">
              <label htmlFor="remarks">Remarks:</label>
              <textarea
                id="remarks"
                className="utlt-form-control"
                value={remarks}
                onChange={handleRemarksChange}
              />

          
            </div>

          </div>
           <div className='bookinglist-persanalinvolvement'>
           <h3>Personnel Involvements</h3>
           <div className='persanalinvolvement'>
        <label htmlFor="personal-type" className="persanalinvolvement-label">
          Personal Type :
        </label>
        <select id="statusFilter" name="statusFilter" className="bookedlistdropdown-selectpersonal">
          <option value="select-personal-type">_____Select Personal Type____</option>
          <option value="aa">aa</option>
          
        </select>

        <div>
        <label htmlFor="dateFilter" className="bookedlistcheckbox-label">
          Date Filter
        </label>
        <select id="statusFilter" name="statusFilter" className="bookedlistdropdown-select">
          <option value="personnelname">Select Personal name</option>
          
          
        </select>
        
      </div>
      </div>
            <table border="1">
              <thead>
                <tr>
                  <th>S.N.</th>
                  <th>Personnel Type</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr >
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>
                      <button type="button" onClick={() => handleRemovePersonnel(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
           
              </tbody>
            </table>
            <button type="button" onClick={addPersonnelInvolvement} className='booklist-persanal-involvement-btn'>
              Add New OT Booking 
            </button>
            {isPopupOpen && (
        <div className="personal-involvement-confirmation-overlay">
          <div className="personal-involvement-confirmation-popup">
            <h2>Confirm!</h2>
            <p>Are you sure you want to Add OT Booking?</p>
            <div className="personal-involvement-confirmation-buttons">
              <button
                className="personal-involvement-confirmation-btn confirm"
                onClick={confirmAction}
              >
                Confirm
              </button>
              <button
                className="personal-involvement-confirmation-btn cancel"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
           <div className="utlt-modal-footer">
          <button type="button" className="bookinglist-btn  btn-secondary" onClick={closeSchemeReturnEntryModal}>
            Close
          </button>
          
        </div>
            </div>          
        </div>
       
      </div>
    </div>
  </div>
)}

{/* Modal for Print Scheme Refund */}
{showReceipt && (
  <div className="utlt-modal show d-block" tabIndex="-1" role="dialog">
    <div className="utlt-modal-dialog" role="document">
      <div className="utlt-modal-content">
        <div className="utlt-modal-header">
          <h5 className="utlt-modal-title">Scheme Refund Receipt</h5>
        </div>
        <div className="utlt-modal-body">
          {printSchemeRefund && (
            <div>
              <p>Receipt No: {receiptNo}</p>
              <p>Refund Date: {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.refundDate}</p>
              <p>Amount: {schemeRefundList.find((item) => item.receiptNo === receiptNo)?.amount}</p>
              {/* Add additional receipt details here */}
            </div>
          )}
        </div>
        <div className="utlt-modal-footer">
          <button type="button" className="utlt-btn btn btn-secondary" onClick={closeReceiptModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default BookingList;
