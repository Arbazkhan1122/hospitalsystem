import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import PatientRecordAction from "./PatientRecordAction";
import "./PatientsRecords.css";
import PatientDashboard from "./PatientDashboard";
import { startResizing } from "../TableHeadingResizing/resizableColumns";

const PatientRecord = () => {
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientRecordAction, setShowPatientRecordAction] = useState(false);
  const [filterFavourites, setFilterFavourites] = useState(false);
  const [filterPending, setFilterPending] = useState(false);
  const [isPatientOpen, setIsPatientOPEN] = useState(false);
  const componentRef = useRef();

  const patients = [
    {
      newPatientVisitId: 1,
      firstName: "John",
      middleName: "A.",
      lastName: "Doe",
      haveDOB: true,
      religion: "Christianity",
      age: 30,
      gender: "Male",
      phoneNumber: "1234567890",
      landlineNumber: "0987654321",
      address: "123 Main St",
      email: "john.doe@example.com",
      careOfPerson: "Jane Doe",
      relationWithPatient: "Spouse",
      careOfPersonContact: "0987654321",
      visitType: "Consultation",
      visitDate: "2024-08-30",
      visitTime: "10:00:00",
      referredBy: "Dr. Smith",
      isExternal: "No",
      discount: 10.0,
      discountPercentage: 5.0,
      discountAmount: 50.0,
      subTotal: 200.0,
      totalAmount: 150.0,
      changeReturn: 20.0,
      tender: 150.0,
      paymentOptions: "Cash",
      department: null,
      patientQueue: {
        patientQueueId: 1,
        date: "2024-01-01",
        hospitalNumber: null,
        name: "John Doe",
        phone: "1234567890",
        ageSex: null,
        department: "Operation Theater",
        visitType: "No",
        appointmentType: "Consultation",
        queueNumber: "QN-1",
        employeeId: 0,
        status: null,
        newPatientVisitDTO: null,
        employeeDTO: null,
      },
      employeeDTO: {
        employeeId: 1,
        salutation: "Dr.",
        firstName: "Arbaz",
        middleName: "s.",
        lastName: "Pathan",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        kmpdcNo: null,
        knncNo: null,
        knhpcNo: null,
        contactNumber: "1234567890",
        emailId: "john.doe@example.com",
        signatureShort: "J.D",
        signatureLong: "John Doe",
        dateOfJoining: "2020-08-23",
        contactAddress: "123, Elm Street, Nairobi",
        kraPin: null,
        taxPercentage: null,
        isIncentiveApplicable: null,
        extension: null,
        speedDial: null,
        officeHour: "9 AM - 5 PM",
        roomNo: null,
        bloodGroup: null,
        drivingLicenseNo: null,
        isActive: true,
        radiologySignature: "John Doe Rad",
        displaySequence: 1,
        signatureImage: "signature_image_path",
        appointmentApplicable: true,
        userName: null,
        password: null,
        departmentDTO: {
          departmentId: 1,
          departmentCode: null,
          departmentName: "Cardiology",
          parentDepartmentName: null,
          description: null,
          noticeText: null,
          departmentHead: null,
          roomNumber: null,
          employees: null,
          active: false,
          appointmentApplicable: false,
        },
        employeeRoleDTO: {
          employeeRoleId: 1,
          role: "Doctor",
          description: null,
          isActive: true,
        },
        employeeTypeDTO: {
          employeeTypeId: 1,
          employeeType: "Full-time",
          description: null,
          isActive: true,
        },
      },
      medicineDetails: null,
      medicineBill: null,
      opd: true,
    },
  ];

  // Filtered patients based on favourite and pending filters
  const filteredPatients = patients
    .filter((patient) => (filterFavourites ? patient.isFavourite : true))
    .filter((patient) => (filterPending ? patient.isPending : true));

  const handlePendingListClick = () => {
    setFilterPending(!filterPending);
    setFilterFavourites(false); // Reset favourites filter if needed
  };

  const handleFavouritesClick = () => {
    setFilterFavourites(!filterFavourites);
    setFilterPending(false); // Reset pending filter if needed
  };

  const handlePatientClick = (patient) => {
    setIsPatientOPEN(!isPatientOpen)
    setSelectedPatient(patient); // Set the selected patient to open the dashboard
  };

  const handleClosePatientRecordAction = () => {
    setShowPatientRecordAction(false);
  };

  if (isPatientOpen) {
    return (
      <PatientDashboard
        setIsPatientOPEN={setIsPatientOPEN}
        patient={selectedPatient}
      />
    );
  }
  return (
    <div className="patient-record">
      <div className="patient-record-actions">
        <div className="patient-record-actions-subdiv">
          <button
            className="patient-record-favorites"
            onClick={handleFavouritesClick}
          >
            ★ My Favorites
          </button>
          <button
            className="patient-record-pending"
            onClick={handlePendingListClick}
          >
            Pending List
          </button>
        </div>
        <div className="patient-record-department-filter">
          <label>Department Filter :</label>
          <select className="patient-record-select">
            <option>ALL</option>
          </select>
        </div>
      </div>
      <div className="patient-record-date-range">
        <div>
          <label>From:</label>
          <input type="date" value="2024-08-11" />
          <label>To:</label>
          <input type="date" value="2024-08-18" />
        </div>
        <div>
          <button className="patient-record-star">☆</button>
          <button className="patient-record-reset">-</button>
          <button className="patient-record-ok">OK</button>
        </div>
      </div>

      <div className="patient-record-search-bar">
        <div className="patient-record-sub-div">
          <input
            className="patient-record-select"
            type="text"
            placeholder="Search"
          />
          <button>🔍</button>
        </div>
        <div>
          <span className="patient-record-results">
            Showing {filteredPatients.length} / {patients.length} results
          </span>
          <ReactToPrint
            trigger={() => (
              <button className="patient-record-print">Print</button>
            )}
            content={() => componentRef.current}
          />
        </div>
      </div>

      {/* The content to be printed */}
      <div ref={componentRef} className="table-container">
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Hospital No.",
                "Name",
                "Age/Sex",
                "Admission Status",
                "Admitted On",
                "Ward-Bed",
                "Dept",
                "Provider Name",
                "Actions",
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
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.hospitalNo}</td>
                <td>{patient.name}</td>
                <td>{patient.ageSex}</td>
                <td>{patient.admissionStatus}</td>
                <td>{patient.admittedOn}</td>
                <td>{patient.wardBed}</td>
                <td>{patient.dept}</td>
                <td>{patient.providerName}</td>
                <td>
                  <button
                    className="patient-record-action"
                    onClick={() => handlePatientClick(patient)}
                  >
                    👤
                  </button>
                  <button className="patient-record-action">🔔</button>
                  <button className="patient-record-action">🖼</button>
                  <button className="patient-record-action">📄</button>
                  <button className="patient-record-action">♥</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="pagination">
        <span>1 to {filteredPatients.length} of {filteredPatients.length}</span>
        <button>First</button>
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
        <button>Last</button>
      </div> */}

      {/* {showPatientRecordAction && (
        <div className="patient-record-action-modal">
          <PatientDashboard patient={selectedPatient} />
          <button onClick={handleClosePatientRecordAction}>Close</button>
        </div>
      )} */}
    </div>
  );
};

export default PatientRecord;
