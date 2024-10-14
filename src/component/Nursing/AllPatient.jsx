import React, { useRef, useState } from "react";
import NursingCustomModal from "./NursingCustomModal";
import ConsumptionEntry from "./ConsumtionEntry";
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import NursingWardTransfer from "./NursingWardTransfer";
import PatientDashboard from "../DashBoards/PatientDashboard";
import NursingInpatientVital from "./NursingInpatientVital";

const AllPatient = ({ patients }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNursing, setIsNursing] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [showVital, setShowVital] = useState(false);
  const [isPatientOPEN, setIsPatientOPEN] = useState(false);
  const [showConsumption, setShowConsumption] = useState(false);
  const [currentPatientId, setCurrentPatientId] = useState(null); // For managing patient ID for modal

  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const handleCloseVital = () => setShowVital(false);
  const handleShowVital = (patient) =>{
    setCurrentPatientId(patient);
     setShowVital(true)};
  const handleCloseConsumption = () => setShowConsumption(false);
  const handleShowConsumption = (patient) => {
    setCurrentPatientId(patient); // Store current patient ID
    setShowConsumption(true);
  };

  const [showTransfer, setShowTransfer] = useState(false);
  const handleCloseTransfer = () => setShowTransfer(false);



  const handleShowTransfer = (patient) => {
    setSelectedPatient(patient);
    setShowTransfer(true);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsNursing(true);
    setIsPatientOPEN(!isPatientOPEN);
  };

  return (
    <>
    {!isPatientOPEN ? (
    <>
      <div className="MyPatientsTable-tableContainer">
        <div className="Nephrology-Header">
          <input
            type="text"
            placeholder="Search"
            className="Nephrology-searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="Nephrology-actions">
            <span className="Nephrology-results">
              Showing {patients.length}/{patients.length} results
            </span>
            <button className="Nephrology-button">Export</button>
            <button className="Nephrology-button">Print</button>
          </div>
        </div>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Serial No",
                "Admitted Date",
                "Doctor Name",
                "IP Number",
                "Name",
                "Phone Number",
                "Age/Sex",
                "Bed Detail",
                "Actions",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="resizable-th"
                  colSpan={header === "Actions" ? 3 : 1} // Apply colspan 2 for "Actions"
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
            {patients && patients.length > 0 ? (
              patients.map((patient, index) => (
                <tr key={patient.id || index}>
                  <td>{index + 1}</td>
                  <td>{patient.admissionDate}</td>
                  <td>
                    {patient.doctorSalutationName} {patient.doctorFirstName}{" "}
                    {patient.doctorLastName}
                  </td>
                  <td>{`IPD${patient.admissionId}`}</td>
                  <td>{`${patient.patientFirstName} ${patient.patientLastName}`}</td>
                  <td>{patient.contactNumber}</td>
                  <td>
                    {patient.patientAge} / {patient.patientGender}
                  </td>
                  <td>
                    {patient.wardName}/{patient.bedNumber}
                  </td>

                  <td colSpan={3}>
                    <div className="Actions-actions">
                      <button
                        className="Actions-btn-btn Actions-consumption"
                        onClick={() => handleShowConsumption(patient)}
                      >
                        Consumption
                      </button>
                      <button
                        className="Actions-btn Actions-wardRequest"
                        onClick={() => handlePatientClick(patient)}
                      >
                        &#x1F5A5;
                      </button>
                      {/* <button
                        className="Actions-btn-btn Actions-wardRequest"
                        onClick={handleShowWard}
                      >
                        Ward Request
                      </button> */}
                      <button
                        className="Actions-btn-btn Actions-transfer"
                        onClick={() => handleShowTransfer(patient)}
                      >
                        Transfer
                      </button>
                      <button className="Actions-btn-btn Actions-vitals" onClick={() => handleShowVital(patient.patientId)}>
                        Vitals
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No patient data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <NursingCustomModal
        isOpen={showConsumption}
        onClose={handleCloseConsumption}
        title="New Consumption Entry"
      >
        <ConsumptionEntry patient={currentPatientId} />
      </NursingCustomModal>
      <NursingCustomModal
        isOpen={showTransfer}
        onClose={handleCloseTransfer}
        title="New Consumption Entry"
      >
        <NursingWardTransfer
          patient={selectedPatient}
          setShowModal={handleCloseTransfer}
        />
      </NursingCustomModal>
      <NursingCustomModal
        isOpen={showVital}
        onClose={handleCloseVital}
        title="Vital"
      >
        <NursingInpatientVital patient={currentPatientId}/>
      </NursingCustomModal>
    </>
  ):(<><PatientDashboard  isPatientOPEN={isPatientOPEN} setIsPatientOPEN={setIsPatientOPEN} patient={selectedPatient} type={isNursing} /></>)}
  </>
  );
};

export default AllPatient;
