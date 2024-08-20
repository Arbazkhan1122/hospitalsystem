import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import './patient_list.css';

function PatientList(show, onClose) {

    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([
    { name: 'John Doe', isActive: true },
    
  ]);




  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (index) => {
    console.log(`Editing patient at index ${index}`);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = () => {
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className='patient_list_main'>
      <div className="patient_list_container">
      
      <div className="patient_list_new_patient">
        <button className="patient_list_new_patient_button" onClick={handleOpenModal}> 
          <FaPlus className="patient_list_button_icon" />
          New Insurance Patient
        </button>
      </div>
      
      <div className="patient_list_edit_info">
        <label htmlFor="existing-patient" className="patient_list_label">Edit Information of:</label>
        <input 
          type="text" 
          id="existing-patient" 
          placeholder="Existing Patient Name" 
          className="patient_list_input_text"
        />
      </div>
       
      </div>

      <div className='patient-list-filter-content'>
      <div className="patient_list_search_bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="patient_list_filter_button">
          <FaSearch />
        </button>
        <div>
            <label htmlFor="">showing 0/0 results</label>
        </div>
        <div>
            <button>Print</button>
        </div>
      </div>
      </div>

      <table className="patient_list_table">
        <thead>
        
    <tr>
      <th className='patient_list_tablehead'>Hospital No</th>
      <th className='patient_list_tablehead'>Patient Name</th>
      <th className='patient_list_tablehead'>NHIF Code</th>
      <th className='patient_list_tablehead'>Age/Sex</th>
      <th className='patient_list_tablehead'>Phone</th>
      <th className='patient_list_tablehead'>Address</th>
      <th className='patient_list_tablehead'>Balance Amount</th>
      <th className='patient_list_tablehead'>Latest Claim Code</th>
      <th className='patient_list_tablehead'>Actions</th>
    </tr>
        </thead>
        <tbody>
        {filteredPatients.map((patient, index) => (
      <tr key={index}>
        <td className='patient_list_tabledata'>{patient.hospitalNo}</td>
        <td className='patient_list_tabledata'>{patient.patientName}</td>
        <td className='patient_list_tabledata'>{patient.nhifCode}</td>
        <td className='patient_list_tabledata'>{patient.ageSex}</td>
        <td className='patient_list_tabledata'>{patient.phone}</td>
        <td className='patient_list_tabledata'>{patient.address}</td>
        <td className='patient_list_tabledata'>{patient.balanceAmount}</td>
        <td className='patient_list_tabledata'>{patient.latestClaimCode}</td>
        <td className='patient_list_tabledata'>
          <button onClick={() => handleEdit(index)} className="patient_list_edit_button">Edit</button>
        </td>
      </tr>
    ))}
        </tbody>
      </table>

      <div className="patient_list_pagination">
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 4</span>
        <button>Next</button>
        <button>Last</button>
      </div>


            {/* Modal */}
            {showModal && (
        <div className="patient-list-modal-overlay">
          <div className="patient-list-modal">
            <div className="patient-list-modal-header">
              <h2>New Patient Registration</h2>
              <button onClick={handleCloseModal} className="patient-list-modal-close-button">&times;</button>
            </div>

            <div className="patient-list-modal-section">
              <h3>Patient Information</h3>
              <div className="patient-list-modal-row">
                <label>First Name <span>*</span></label>
                <input type="text" placeholder="First Name" className="patient-list-modal-input" />
                <label>Country <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>Kenya</option>
                </select>
              </div>

              <div className="patient-list-modal-row">
                <label>Middle Name</label>
                <input type="text" placeholder="Middle Name" className="patient-list-modal-input" />
                <label>County <span>*</span></label>
                <input type="text" placeholder="Juja sub county" className="patient-list-modal-input" />
              </div>

              <div className="patient-list-modal-row">
                <label>Last Name <span>*</span></label>
                <input type="text" placeholder="Last Name" className="patient-list-modal-input" />
                <label>Address</label>
                <input type="text" placeholder="Address" className="patient-list-modal-input" />
              </div>

              <div className="patient-list-modal-row">
                <label>Religion <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>--Religion--</option>
                  <option>Christian</option>
                  <option>Muslim</option>
                  <option>Hindu</option>
                  <option>Other</option>
                </select>
                <label>Gender <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>--Select--</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="patient-list-modal-row" style={{}}>
                <label >Age <span>*</span></label>
                <input type="text" placeholder="Age" className="patient-list-modal-input"  />
                <select className="patient-list-modal-input" >
                  <option>Years</option>
                  <option>Months</option>
                </select>
                <label>Contact Number <span>*</span></label>
                <input type="text" placeholder="Contact Number" className="patient-list-modal-input" />
              </div>
            </div>

            <div className="patient-list-modal-section">
              <h3>Insurance Information</h3>
              <div className="patient-list-modal-row">
                <label>Insurance Provider <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>NHIF</option>
                </select>
                <label>Is Family Head <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="patient-list-modal-row">
                <label>NHIF Number <span>*</span></label>
                <input type="text" placeholder="NHIF Number" className="patient-list-modal-input" />
                <label>Insurance Balance Amt. <span>*</span></label>
                <input type="text" placeholder="0" className="patient-list-modal-input" />
              </div>

              <div className="patient-list-modal-row" style={{width:"50%",marginLeft:"-5px"}}>
                <label>First Service Point? <span>*</span></label>
                <select className="patient-list-modal-input">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="patient-list-modal-row">
                <label>Family Head NHIF Number</label>
                <input type="text" placeholder="Family Head NHIF Number" className="patient-list-modal-input" />
                <label>Family Head Name</label>
                <input type="text" placeholder="Family Head Name" className="patient-list-modal-input" />
              </div>
            </div>

            <div className="patient-list-modal-footer">
              <button className="patient-list-modal-submit-button">Register</button>
              <button onClick={handleCloseModal} className="patient-list-modal-close-button" style={{fontSize:"16px" , color:"white"}}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
    
  );
}

export default PatientList;
