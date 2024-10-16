import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AdmittedPatient.css";
import { FaSearch } from "react-icons/fa";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Table,
  ModalDialog,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { startResizing } from "../../TableHeadingResizing/ResizableColumns";
import { API_BASE_URL } from "../api/api";
import WardTransfer from "./WardTransfer";
import CustomModal from "../Inventory1/CustomModel/CustomModal";
import PatientCard from "./PatientCard";
import PrintWristWindow from "./PrintWristWindow";
import PrintGenericSticker from "./PrintGenericSticker";
import ChangeDoctor from "./ChangeDoctor";
import CancelAdmission from "./CancelAdmission";
import PrintAdmissionSlip from "./PrintAdmissionSlip";

const AdmittedPatient = () => {
  const [showPrint, setShowPrint] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectPatient, setSelectPatient] = useState({});
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);
  const [showOptionWindow, setShowOptionWindow] = useState(false);
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
=======
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb

  const handleShow = (item) => {
    setSelectPatient(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowPrint(false);
    setShowOptionWindow(false);
    setSelectedOption("");
  };

  const handlePrint = (item) => {
    setSelectPatient(item);
    setShowPrint(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admissions/fetch`);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [showOptionWindow]);

<<<<<<< HEAD
  const printList = () => {
    if (tableRef.current) {
      const printContents = tableRef.current.innerHTML;

      // Create an iframe element
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";

      // Append the iframe to the body
      document.body.appendChild(iframe);

      // Write the table content into the iframe's document
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <html>
        <head>
          <title>Print Table</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            button, .admit-actions, th:nth-child(10), td:nth-child(10) {
              display: none; /* Hide action buttons and Action column */
            }
          </style>
        </head>
        <body>
          <table>
            ${printContents}
          </table>
        </body>
        </html>
      `);
      doc.close();

      iframe.contentWindow.focus();
      iframe.contentWindow.print();

      document.body.removeChild(iframe);
    }
  };

=======
  // Function to handle dropdown selection
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const handledropdownChange = (event, patient) => {
    const option = event.target.value;
    setSelectedOption(option);
    setSelectPatient(patient);
<<<<<<< HEAD
    setShowOptionWindow(true);
  };

=======
    setShowOptionWindow(true); // Open modal when option is selected
  };

  // Function to render modal content based on selected option
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
  const renderModalContent = () => {
    switch (selectedOption) {
      case "PrintWristband":
        return <PrintWristWindow patient={selectPatient} />;
      case "PrintGenericStickers":
        return <PrintGenericSticker patient={selectPatient} />;
      case "ChangeDoctor":
        return (
          <ChangeDoctor
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      case "CancelAdmission":
        return (
          <CancelAdmission
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      case "AdmissionSlip":
        return (
          <PrintAdmissionSlip
            patient={selectPatient}
            setShowOptionWindow={setShowOptionWindow}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="adt-app-container">
      <div className="adt-search-container">
        <input
          type="text"
<<<<<<< HEAD
          placeholder="Search by PatientName/PatientId"
          className="admitted-search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={printList}
          className="admitpatient-export-container-button"
        >
          Print
        </button>
=======
          placeholder="Search by Hospitalno/IpNumber/PatientName"
          className="admitted-search-input"
        />
        <button className="admitpatient-export-container-button">Print</button>
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
      </div>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              {[
<<<<<<< HEAD
                "Admitted Date",
                "Ip No",
                "Case Type",
                "Patient",
                "Age/Sex",
                "Ward",
                "Bed No",
                "Admitted Doctor",
=======
                "Refund Date",
                "Recipt No",
                "Scheme",
                "Patient",
                "Age/Sex",
                "Inpatient No",
                "Refund Amount",
                "Entered By",
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
                "Remarks",
                "Action",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{ width: columnWidths[index] }}
                  className="rd-resizable-th"
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
<<<<<<< HEAD
            {patients
              ?.filter((patient) => {
                const searchLowerCase = searchTerm.toLowerCase();
                const firstNameMatch = patient.patientDTO?.firstName
                  ?.toLowerCase()
                  .includes(searchLowerCase);
                const lastNameMatch = patient.patientDTO?.lastName
                  ?.toLowerCase()
                  .includes(searchLowerCase);
                const patientIdMatch =
                  patient.patientDTO?.patientId == searchTerm;

                return firstNameMatch || lastNameMatch || patientIdMatch;
              })
              .map((patient, index) => (
                <tr key={index}>
                  <td>{patient.admissionDate || "N/A"}</td>
                  <td>{patient.patientDTO?.patientId || "N/A"}</td>
                  <td>{patient.caseType || "N/A"}</td>
                  <td>{`${patient.patientDTO?.firstName || ""} ${
                    patient.patientDTO?.lastName || ""
                  }`}</td>

                  <td>{`${patient.patientDTO?.age || "N/A"} ${
                    patient.patientDTO?.ageUnit
                  } / ${patient.patientDTO?.gender || "N/A"}`}</td>

                  <td>{patient.wardDepartmentDTO?.wardName || "N/A"}</td>
                  <td>
                    {patient.manageBedDTO?.wardType}{" "}
                    {patient.manageBedDTO?.bedNumber || "N/A"}
                  </td>
                  <td>
                    {patient.admittedDoctorDTO?.salutation +
                      " " +
                      patient.admittedDoctorDTO?.firstName +
                      " " +
                      patient.admittedDoctorDTO?.lastName || "N/A"}
                  </td>
                  <td>{patient.admissionStatus}</td>
                  <td>
                    <div className="admit-actions">
                      <button
                        onClick={() => handleShow(patient)}
                        className="admitbtn"
                      >
                        Transfer
                      </button>
                      <button
                        onClick={() => handlePrint(patient)}
                        className="admitbtn"
                      >
                        Print
                      </button>
                      <select
                        id="admitpatient-dropdown"
                        value={selectedOption}
                        onChange={(event) =>
                          handledropdownChange(event, patient)
                        }
                        className="admitbtn-select"
                      >
                        <option value="">Select...</option>
                        <option value="PrintWristband">Print Wristband</option>
                        <option value="ChangeDoctor">Change Doctor</option>
                        <option value="PrintGenericStickers">
                          Print Generic Stickers
                        </option>
                        <option value="CancelAdmission">
                          Cancel Admission
                        </option>
                        <option value="AdmissionSlip">Admission Slip</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
=======
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.admissionDate || "N/A"}</td>
                <td>{patient.price || "N/A"}</td>
                <td>{patient.caseType || "N/A"}</td>
                <td>{`${patient.patientDTO?.firstName || ""} ${
                  patient.patientDTO?.lastName || ""
                }`}</td>
                <td>{`${patient.patientDTO?.age || "N/A"}/${
                  patient.patientDTO?.gender || "N/A"
                }`}</td>
                <td>{patient.manageBedDTO?.bedNumber || "N/A"}</td>
                <td>${patient.price || "N/A"}</td>
                <td>{patient.admittedDoctorDTO?.firstName || "N/A"}</td>
                <td>{patient.admissionNotes || "N/A"}</td>
                <td>
                  <div className="admit-actions">
                    <button
                      onClick={() => handleShow(patient)}
                      className="admitbtn"
                    >
                      Transfer
                    </button>
                    <button
                      onClick={() => handlePrint(patient)}
                      className="admitbtn"
                    >
                      Print
                    </button>
                    <select
                      id="admitpatient-dropdown"
                      value={selectedOption}
                      onChange={(event) => handledropdownChange(event, patient)}
                      className="admitbtn-select"
                    >
                      <option value="">Select...</option>
                      <option value="PrintWristband">Print Wristband</option>
                      <option value="ChangeDoctor">Change Doctor</option>
                      <option value="PrintGenericStickers">
                        Print Generic Stickers
                      </option>
                      <option value="CancelAdmission">Cancel Admission</option>
                      <option value="AdmissionSlip">Admission Slip</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
>>>>>>> e5850bbfdb9398281441ed2e20586b5375c904eb
          </tbody>
        </table>
      </div>

      {/* Modal for patient card */}
      <CustomModal isOpen={showPrint} onClose={handleClose}>
        <PatientCard patient={selectPatient} />
      </CustomModal>

      {/* Modal for ward transfer */}
      <CustomModal isOpen={showModal} onClose={handleClose}>
        <WardTransfer patient={selectPatient} setShowModal={setShowModal} />
      </CustomModal>

      {/* Modal for handling dropdown options */}
      <CustomModal isOpen={showOptionWindow} onClose={handleClose}>
        {renderModalContent()}
      </CustomModal>
    </div>
  );
};

export default AdmittedPatient;
