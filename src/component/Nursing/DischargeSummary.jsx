/* prachi parab user interface changed  14/9 */

import React, { useState, useEffect, useRef } from "react";
import "../Nursing/InPatientMainContent.css";
import { useNavigate } from "react-router-dom";
import DischargeFromNurse from "./DistchargeFromNurse";
import { startResizing } from "../TableHeadingResizing/resizableColumns";
import axios from "axios";
import { API_BASE_URL } from "../api/api";
import NursingDischargePrint from "./NursingDischargePrint";

function MainContent() {
  const [activeTab, setActiveTab] = useState("Discharged Patients"); // Default tab
  const [isDischarge, setIsDischarge] = useState(false);
  const [dischargeData, setDischargeData] = useState([]);
  const [admittedData, setAdmittedData] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [columnWidths, setColumnWidths] = useState({});
  const [showPrint,setShowPrint]=useState(false);
  const tableRef = useRef(null);

  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const closeDischargeModal = () => {
    setIsDischarge(false);
    setSelectedPatientId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "Discharged Patients") {
          const response = await fetch(
            `${API_BASE_URL}/discharge-summaries/fetchAll`
          );
          const data = await response.json();
          setDischargeData(data);
          console.log(data + "discharged");
        } else if (activeTab === "Admitted Patients") {
          const response = await fetch(`${API_BASE_URL}/admissions/fetch`);
          const data = await response.json();
          setAdmittedData(data);
          console.log(data + "admitted");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleAddClick = (data) => {
    setSelectedPatientId(data);
    setIsDischarge(true);
  };
  const handlePrintClick = (data) => {
    setSelectedPatientId(data);
    setIsDischarge(true); // Ensure isDischarge is set to true
    setShowPrint(true);    // Set showPrint to true
  };

  console.log(admittedData);
  console.log(dischargeData);

  return (
    <>
      {!isDischarge ? (
        <>
          <div className="discharge-summary-component-container">
            <div className="opd-tabs">
              <a
                href="#today"
                className={`opd-tab-item ${
                  activeTab === "today" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Discharged Patients")}
              >
                Discharged Patients
              </a>
              <a
                href="#past-days"
                className={`opd-tab-item ${
                  activeTab === "past-days" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Admitted Patients")}
              >
                Admitted Patients
              </a>
            </div>
          </div>

          {activeTab === "Discharged Patients" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing {dischargeData.length}/{dischargeData.length}{" "}
                    results
                  </span>
                  <button className="Nephrology-button">Export</button>
                  <button className="Nephrology-button">Print</button>
                </div>
              </div>

              <table className="patientList-table" ref={tableRef}>
                <thead>
                  <tr>
                    {[
                      "Admitted On",
                      "Discharged On",
                      "IP Number",
                      "Name",
                      "Phone Number",
                      "Age/Sex",
                      "Bill Status",
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
                  {dischargeData.length > 0 ? (
                    dischargeData.map((discharge) => (
                      <tr key={discharge?.admissionDTO?.admissionId}>
                        <td>{discharge?.admissionDTO?.admissionDate}</td>
                        <td>{discharge?.dischargeDate}</td>
                        <td>{discharge?.admissionDTO?.admissionId}</td>
                        <td>{`${discharge?.admissionDTO?.patientDTO.firstName} ${discharge?.admissionDTO?.patientDTO.lastName}`}</td>
                        <td>
                          {discharge?.admissionDTO?.patientDTO?.phoneNumber}
                        </td>
                        <td>{discharge?.admissionDTO?.patientDTO?.age}</td>
                        <td>paid</td>
                        <td>
                          <button
                            className="Actions-btn Actions-consumption"
                            onClick={() => handlePrintClick(discharge)}
                          >
                            Print
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No discharge data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "Admitted Patients" && (
            <div className="MyPatientsTable-tableContainer">
              <div className="Nephrology-Header">
                <input
                  type="text"
                  placeholder="Search"
                  className="Nephrology-searchInput"
                />
                <div className="Nephrology-actions">
                  <span className="Nephrology-results">
                    Showing {admittedData.length}/{admittedData.length} results
                  </span>
                  <button className="Nephrology-button">Export</button>
                  <button className="Nephrology-button">Print</button>
                </div>
              </div>

              <table className="patientList-table" ref={tableRef}>
                <thead>
                  <tr>
                    {[
                      "Admitted Date",
                      "IP Number",
                      "Name",
                      "Phone Number",
                      "Age/Sex",
                      "Admitting Doctor",
                      "Bed Feature",
                      "Bed Code",
                      "Action",
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
                  {admittedData.length > 0 ? (
                    admittedData.map((admitted) => (
                      <tr key={admitted.admissionId}>
                        <td>{admitted.admissionDate}</td>
                        <td>{admitted.admissionId}</td>
                        <td>{`${admitted?.patientDTO?.firstName} ${admitted?.patientDTO?.lastName}`}</td>
                        <td>{admitted?.patientDTO?.phoneNumber}</td>
                        <td>
                          {admitted?.patientDTO?.age} /{" "}
                          {admitted?.patientDTO?.gender}{" "}
                        </td>
                        <td>
                          {admitted?.admittedDoctorDTO?.salutation}{" "}
                          {admitted?.admittedDoctorDTO?.firstName}{" "}
                          {admitted?.admittedDoctorDTO?.lastName}
                        </td>
                        <td>{admitted?.wardBedFeatureDTO?.featureName}</td>
                        <td>{admitted?.manageBedDTO?.bedNumber}</td>
                        <td>
                          <button
                            className="Actions-btn Actions-consumption"
                            onClick={() => handleAddClick(admitted)}
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9">No admitted data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : (
        <>
        {showPrint ? (
            <NursingDischargePrint data={selectedPatientId} />
          ) : (
            <DischargeFromNurse
              closeModal={closeDischargeModal}
              patient={selectedPatientId}
            />
          )}
          </>
      )}
    </>
  );
}

export default MainContent;
