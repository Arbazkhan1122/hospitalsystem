import React, { useState, useEffect, useRef } from 'react';
import './OutPatient.css';
import OpdList from '../DashBoards/Opd'; 
import OutPatientFav from '../DashBoards/OutPatientFav';
import OutPatientFollowUp from '../DashBoards/OutPatientFollowUp';
import TableComponent from '../DashBoards/NewPatientsMyFavourite';
import NewPatientFollowUpList from '../DashBoards/NewPatientFollowUpList';
import PatientDashboard from '../DashBoards/PatientDashboard'; // Import the PatientDashboard component
import { API_BASE_URL } from '../api/api';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const OutPatient = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [view, setView] = useState('newPatient');
  const [showFavorites, setShowFavorites] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [isPatientOPEN,setIsPatientOPEN] = useState(false)
  const [patients, setPatients] = useState([]); // State to store the fetched patient data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedPatient, setSelectedPatient] = useState(null); // State to store the selected patient

  // const newPatient = [
  //   {
  //     "newPatientVisitId": 1,
  //     "firstName": "John",
  //     "middleName": "A.",
  //     "lastName": "Doe",
  //     "haveDOB": true,
  //     "religion": "Christianity",
  //     "age": 30,
  //     "gender": "Male",
  //     "phoneNumber": "1234567890",
  //     "landlineNumber": "0987654321",
  //     "address": "123 Main St",
  //     "email": "john.doe@example.com",
  //     "careOfPerson": "Jane Doe",
  //     "relationWithPatient": "Spouse",
  //     "careOfPersonContact": "0987654321",
  //     "visitType": "Consultation",
  //     "visitDate": "2024-08-30",
  //     "visitTime": "10:00:00",
  //     "referredBy": "Dr. Smith",
  //     "isExternal": "No",
  //     "discount": 10.0,
  //     "discountPercentage": 5.0,
  //     "discountAmount": 50.0,
  //     "subTotal": 200.0,
  //     "totalAmount": 150.0,
  //     "changeReturn": 20.0,
  //     "tender": 150.0,
  //     "paymentOptions": "Cash",
  //     "department": null,
  //     "patientQueue": {
  //         "patientQueueId": 1,
  //         "date": "2024-01-01",
  //         "hospitalNumber": null,
  //         "name": "John Doe",
  //         "phone": "1234567890",
  //         "ageSex": null,
  //         "department": "Operation Theater",
  //         "visitType": "No",
  //         "appointmentType": "Consultation",
  //         "queueNumber": "QN-1",
  //         "employeeId": 0,
  //         "status": null,
  //         "newPatientVisitDTO": null,
  //         "employeeDTO": null
  //     },
  //     "employeeDTO": {
  //         "employeeId": 1,
  //         "salutation": "Dr.",
  //         "firstName": "Arbaz",
  //         "middleName": "s.",
  //         "lastName": "Pathan",
  //         "dateOfBirth": "1990-01-01",
  //         "gender": "Male",
  //         "kmpdcNo": null,
  //         "knncNo": null,
  //         "knhpcNo": null,
  //         "contactNumber": "1234567890",
  //         "emailId": "john.doe@example.com",
  //         "signatureShort": "J.D",
  //         "signatureLong": "John Doe",
  //         "dateOfJoining": "2020-08-23",
  //         "contactAddress": "123, Elm Street, Nairobi",
  //         "kraPin": null,
  //         "taxPercentage": null,
  //         "isIncentiveApplicable": null,
  //         "extension": null,
  //         "speedDial": null,
  //         "officeHour": "9 AM - 5 PM",
  //         "roomNo": null,
  //         "bloodGroup": null,
  //         "drivingLicenseNo": null,
  //         "isActive": true,
  //         "radiologySignature": "John Doe Rad",
  //         "displaySequence": 1,
  //         "signatureImage": "signature_image_path",
  //         "appointmentApplicable": true,
  //         "userName": null,
  //         "password": null,
  //         "departmentDTO": {
  //             "departmentId": 1,
  //             "departmentCode": null,
  //             "departmentName": "Cardiology",
  //             "parentDepartmentName": null,
  //             "description": null,
  //             "noticeText": null,
  //             "departmentHead": null,
  //             "roomNumber": null,
  //             "employees": null,
  //             "active": false,
  //             "appointmentApplicable": false
  //         },
  //         "employeeRoleDTO": {
  //             "employeeRoleId": 1,
  //             "role": "Doctor",
  //             "description": null,
  //             "isActive": true
  //         },
  //         "employeeTypeDTO": {
  //             "employeeTypeId": 1,
  //             "employeeType": "Full-time",
  //             "description": null,
  //             "isActive": true
  //         }
  //     },
  //     "medicineDetails": null,
  //     "medicineBill": null,
  //     "opd": true
  // },
  // ]
  const handleViewChange = (newView) => {
    setView(newView);
    if (newView !== 'favorite') setShowFavorites(false);
    if (newView !== 'followUp') setShowFollowUp(false);
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const toggleFollowUp = () => {
    setShowFollowUp(!showFollowUp);
  };

  const handlePatientClick = (patient) => {
    setIsPatientOPEN(!isPatientOPEN)
    setSelectedPatient(patient); // Set the selected patient to open the dashboard
  };

  // Fetch data from the API when the component mounts
  useEffect(() => {
   
    const fetchPatientData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/new-patient-visits`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response);
        const data = await response.json();
        setPatients(data); // Store the fetched data in the state
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);


  // If a patient is selected, render the PatientDashboard
  if (isPatientOPEN) {
    return <PatientDashboard  isPatientOPEN={isPatientOPEN} setIsPatientOPEN={setIsPatientOPEN} patient={selectedPatient} />;
  }

  return (
    <div className="OutPatient-out-patient">
      <div className="OutPatient-sub-nav">
        <button
          className={view === 'newPatient' ? 'OutPatient-active' : ''}
          onClick={() => handleViewChange('newPatient')}
        >
          New Patient
        </button>
        <button
          className={view === 'opdRecord' ? 'OutPatient-active' : ''}
          onClick={() => handleViewChange('opdRecord')}
        >
          OPD Record
        </button>
      </div>

      {view === 'newPatient' && (
        <div>
          <div className="OutPatient-actions">
            <div className='OutPatient-actions-subDiv'>
            <button className="OutPatient-favorite" onClick={toggleFavorites}>
              ★ My Favorites
            </button>
            <button className="OutPatient-follow-up" onClick={toggleFollowUp}>
              Follow Up List
            </button>
            </div>
            <label className="OutPatient-doctor-wise">
              <input type="checkbox" /> Show Doctor Wise Patient List
            </label>
          </div>

          <div className="OutPatient-filters">
            <div className="OutPatient-date-picker">
              <label>Date:</label>
              <input className='OutPatient-input' type="date" value="2024-08-18" />
            </div>
            <select className='OutPatient-input'>
              <option>Today</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Custom</option>
            </select>
            <div className="OutPatient-search">
              <input className='OutPatient-input' type="text" placeholder="Search" />
              <button className='OutPatient-input'>🔍</button>
            </div>
          </div>

          <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Name",
                 "Age/Sex",
                 "VisitType",
                 "Performer Name",
                 "Actions"
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                >
                  <div className="header-content">
                    <span>{header}</span>
                    <div
                      className="resizer"
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
            <tbody>
            {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{`${patient.firstName} ${patient.lastName}`}</td>
                    <td>{patient.age}/{patient.sex}</td>
                    <td>{patient.visitType}</td>
                    <td>{`${patient?.employeeDTO?.salutation} ${patient?.employeeDTO?.firstName} ${patient?.employeeDTO?.lastName}`}</td>
                    <td>
                      <button
                        className="OutPatient-action-button"
                        onClick={() => handlePatientClick(patient)} // Open the PatientDashboard when clicked
                      >
                        👤
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="OutPatient-no-data">
                    No Rows To Show
                  </td>
                </tr>
              )}
              {/* {isLoading ? (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="6">{error}</td>
                </tr>
              ) : OTpatients.length > 0 ? (
                OTpatients.map((patient, index) => (
                  <tr key={index}>
                    <td>{`${patient.firstName} ${patient.lastName}`}</td>
                    <td>{patient.age}/{patient.sex}</td>
                    <td>{patient.visitType}</td> */}
                    {/* <td>{patient.admittedOn}</td> */}
                    {/* <td>{`${patient?.employeeDTO?.salutation} ${patient?.employeeDTO?.firstName} ${patient?.employeeDTO?.lastName}`}</td>
                    <td>
                      <button
                        className="OutPatient-action-button"
                        onClick={() => handlePatientClick(patient)} // Open the PatientDashboard when clicked
                      >
                        👤
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="OutPatient-no-data">
                    No Rows To Show
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      )}

      {view === 'opdRecord' && <OpdList />}
      
      {showFavorites && <TableComponent />}
      {showFollowUp && <NewPatientFollowUpList />}
    </div>
  );
};

export default OutPatient;
