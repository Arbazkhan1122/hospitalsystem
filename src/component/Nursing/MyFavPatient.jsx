import React, { useState } from 'react'

const MyFavPatient = ({patients}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showWard, setShowWard] = useState(false);

  const handleCloseWard = () => setShowWard(false);
  const handleShowWard = () => setShowWard(true);

  const [showTransfer, setShowTransfer] = useState(false);

  const handleCloseTransfer = () => setShowTransfer(false);
  const handleShowTransfer = () => setShowTransfer(true);
  return (
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

              <table className="MyPatientsTable-patientsTable">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Admitted Date</th>
                    <th>Doctor Name</th>
                    {/* <th>Hospital Num</th> */}
                    <th>IP Number</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>Bed Detail </th>
                    <th>Scheme</th>
                    <th>Patient Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients && patients.length > 0 ? (
                    patients.map((patient, index) => (
                      <tr key={patient.admissionId || index}>
                        <td>{patient.admissionId}</td> {/* Row numbers */}
                        <td>{patient.admissionDate}</td>
                        <td>{patient.doctorName}</td>
                        <td>{patient.admissionId}</td>
                        <td>
                          {patient.firstName} {patient.lastName}
                        </td>
                        <td>{patient.contactNumber}</td>
                        <td>{patient.age}</td>
                        <td>{patient.wardCode}</td>
                        <td>{patient.scheme}</td>
                        <td>{patient.patientType}</td>
                        <td>
                          <div className="Actions-actions">
                            <button
                              className="Actions-btn Actions-consumption"
                              onClick={() => handleShowConsumption(patient)}
                            >
                              Consumption
                            </button>
                            <button
                              className="Actions-btn Actions-wardRequest"
                              onClick={handleShowWard}
                            >
                              Ward Request
                            </button>
                            <button
                              className="Actions-btn Actions-transfer"
                              onClick={handleShowTransfer}
                            >
                              Transfer
                            </button>
                            <button className="Actions-btn Actions-vitals">
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
  )
}

export default MyFavPatient
