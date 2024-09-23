import React, { useState, useEffect, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { FaStar, FaListAlt, FaSearch } from 'react-icons/fa';
import './InPatient.css';
import PatientDashboard from './PatientDashboard';
import InPatientPage from './InPatientPage';
import { API_BASE_URL } from '../api/api';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const PatientList = () => {
  const [columnWidths,setColumnWidths] = useState({});
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isPatientOPEN,setIsPatientOPEN] = useState(false)
  const [showOrders, setShowOrders] = useState(false || isPatientOPEN);
  const [selectedDept, setSelectedDept] = useState('');
  const [filterFavourite, setFilterFavourite] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const tableRef = useRef();


  const newPatient = [
    {
      "newPatientVisitId": 1,
      "firstName": "John",
      "middleName": "A.",
      "lastName": "Doe",
      "haveDOB": true,
      "religion": "Christianity",
      "age": 30,
      "gender": "Male",
      "phoneNumber": "1234567890",
      "landlineNumber": "0987654321",
      "address": "123 Main St",
      "email": "john.doe@example.com",
      "careOfPerson": "Jane Doe",
      "relationWithPatient": "Spouse",
      "careOfPersonContact": "0987654321",
      "visitType": "Consultation",
      "visitDate": "2024-08-30",
      "visitTime": "10:00:00",
      "referredBy": "Dr. Smith",
      "isExternal": "No",
      "discount": 10.0,
      "discountPercentage": 5.0,
      "discountAmount": 50.0,
      "subTotal": 200.0,
      "totalAmount": 150.0,
      "changeReturn": 20.0,
      "tender": 150.0,
      "paymentOptions": "Cash",
      "department": null,
      "patientQueue": {
          "patientQueueId": 1,
          "date": "2024-01-01",
          "hospitalNumber": null,
          "name": "John Doe",
          "phone": "1234567890",
          "ageSex": null,
          "department": "Operation Theater",
          "visitType": "No",
          "appointmentType": "Consultation",
          "queueNumber": "QN-1",
          "employeeId": 0,
          "status": null,
          "newPatientVisitDTO": null,
          "employeeDTO": null
      },
      "employeeDTO": {
          "employeeId": 1,
          "salutation": "Dr.",
          "firstName": "Arbaz",
          "middleName": "s.",
          "lastName": "Pathan",
          "dateOfBirth": "1990-01-01",
          "gender": "Male",
          "kmpdcNo": null,
          "knncNo": null,
          "knhpcNo": null,
          "contactNumber": "1234567890",
          "emailId": "john.doe@example.com",
          "signatureShort": "J.D",
          "signatureLong": "John Doe",
          "dateOfJoining": "2020-08-23",
          "contactAddress": "123, Elm Street, Nairobi",
          "kraPin": null,
          "taxPercentage": null,
          "isIncentiveApplicable": null,
          "extension": null,
          "speedDial": null,
          "officeHour": "9 AM - 5 PM",
          "roomNo": null,
          "bloodGroup": null,
          "drivingLicenseNo": null,
          "isActive": true,
          "radiologySignature": "John Doe Rad",
          "displaySequence": 1,
          "signatureImage": "signature_image_path",
          "appointmentApplicable": true,
          "userName": null,
          "password": null,
          "departmentDTO": {
              "departmentId": 1,
              "departmentCode": null,
              "departmentName": "Cardiology",
              "parentDepartmentName": null,
              "description": null,
              "noticeText": null,
              "departmentHead": null,
              "roomNumber": null,
              "employees": null,
              "active": false,
              "appointmentApplicable": false
          },
          "employeeRoleDTO": {
              "employeeRoleId": 1,
              "role": "Doctor",
              "description": null,
              "isActive": true
          },
          "employeeTypeDTO": {
              "employeeTypeId": 1,
              "employeeType": "Full-time",
              "description": null,
              "isActive": true
          }
      },
      "medicineDetails": null,
      "medicineBill": null,
      "opd": true
  },
  ]

  // Fetch patients from the API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/new-patient-visits`);
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  // Filtered patients based on selected department and filters
  const filteredPatients = patients
    .filter(patient => (selectedDept ? patient.dept === selectedDept : true))
    .filter(patient => (filterFavourite ? patient.isFavourite : true)) // Add condition for favourites
    .filter(patient => (filterPending ? patient.isPending : true)); // Add condition for pending list

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsPatientOPEN(!isPatientOPEN)
    setShowOrders(false);
  };

  const handleOrdersClick = (patient) => {
    setSelectedPatient(patient);
    setShowOrders(true);
  };

  // Toggle favourite filter
  const toggleFavouriteFilter = () => {
    setFilterFavourite(!filterFavourite);
    setFilterPending(false); // Reset pending filter if needed
  };

  // Toggle pending filter
  const togglePendingFilter = () => {
    setFilterPending(!filterPending);
    setFilterFavourite(false); // Reset favourite filter if needed
  };
  if (showOrders && selectedPatient) {
    return <InPatientPage patient={selectedPatient} />;
  }

  if (isPatientOPEN) {
    return <PatientDashboard patient={selectedPatient} setIsPatientOPEN={setIsPatientOPEN}/>;
  }

  return (
    <div className="InPatient-PatientList">
      <div className="InPatient-PatientContainer">
        <div className="InPatient-PatientLeftSection">
          <div className="InPatient-PatientFilterSection">
            <div className="InPatient-PatientFilterItem" onClick={toggleFavouriteFilter}>
              <FaStar className={`PatientIcon ${filterFavourite ? 'active' : ''}`} />
              <label>★ My Favourite</label>
            </div>
            <div className="PatientFilterItem" onClick={togglePendingFilter}>
              <FaListAlt className={`PatientIcon ${filterPending ? 'active' : ''}`} />
              <label>Pending List</label>
            </div>
          </div>
        </div>
        <div className="InPatient-PatientRightSection">
          <div className="InPatient-PatientSearchBar">
            <select
              className="InPatient-PatientDepartmentFilter"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Operation Theatre">Operation Theatre</option>
              <option value="Maternity Ward">Maternity Ward</option>
              <option value="Medicine">Medicine</option>
              <option value="Pathology">Pathology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Gynaecology">Gynaecology</option>
            </select>

            <input type="text" placeholder="Search..." />
            <FaSearch className="PatientSearchIcon" />
          </div>
        </div>
      </div>

      <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "Hospital No",
                 "Name",
                 "Age/Sex",
                 "Admission Status",
                 "Admitted On",
                 "Ward/Bed",
                 "Department",
                 "Provider Name",
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
          {newPatient.map((patient, index) => (
            <tr key={index}>
              <td>{patient.hospitalNo}</td>
              <td>{`${patient.firstName} ${patient.lastName}`}</td>
              <td>{patient.age}/{patient.sex}</td>
              <td>{patient.admissionStatus}</td>
              <td>{patient.admittedOn}</td>
              <td>{patient.wardBed}</td>
              <td>{patient.dept}</td>
              <td>{patient.providerName}</td>
              <td>
                <button onClick={() => handlePatientClick(patient)}>👤</button>
                <button>🔔</button>
                <button>🖼</button>
                <button onClick={() => handleOrdersClick(patient)}>📄</button>
                <button>♥</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
