import React, { useState } from 'react'

const DietSheet = ({patientsDetail}) => {
    const [searchTerm, setSearchTerm] = useState("");
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
          Showing {patientsDetail.length}/0 results
        </span>
        <button className="Nephrology-button">Export</button>
        <button className="Nephrology-button">Print</button>
      </div>
    </div>

    <table className="MyPatientsTable-patientsTable">
      <thead>
        <tr>
          <th>SN</th>
          <th>Unit/Address</th>
          <th>Bed Strength</th>
          <th>Age/Sex</th>
          <th>DOA(HD)</th>
          <th>DOD(BS)</th>
          <th>Diagnosis</th>
          <th>Remarks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patientsDetail.map((patient, index) => (
          <tr key={patient.id}>
            <td>{index + 1}</td>
            <td>{patient["Unit/Address"]}</td>
            <td>{patient["Bed Strength"]}</td>
            <td>{patient["Age/Sex"]}</td>
            <td>{patient["DOA(HD)"]}</td>
            <td>{patient["DOD(BS)"]}</td>
            <td>{patient.Diagnosis}</td>
            <td>{patient.Remarks}</td>
            <td className="actions">
              {Array.isArray(patient.actions) &&
                patient.actions.includes("edit") && (
                  <i
                    className="fas fa-edit"
                    onClick={() => handleEdit(patient.id)}
                  ></i>
                )}
              {Array.isArray(patient.actions) &&
                patient.actions.includes("delete") && (
                  <i
                    className="fas fa-trash"
                    onClick={() => handleDelete(patient.id)}
                  ></i>
                )}
              <button className="wardEditButton">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default DietSheet
