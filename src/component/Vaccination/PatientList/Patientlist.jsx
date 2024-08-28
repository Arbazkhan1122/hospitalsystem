import React, { useState, useRef } from "react";
import "./patientList.css";
import VaccinationRegister from "./VaccinationRegister";
import UpdateVaccinationRegister from "./UpdateVaccinationRegister";
import Sticker from "./Sticker";
import VaccinationFollowup from "./VaccinationFollowup";
import PatientVaccinationDetails from "./PatientVaccinationDetails";

const dummyData = [
  {
    vaccRegNo: "VR1001",
    babyName: "Baby John",
    ageSex: "2Y/M",
    hospitalNo: "H1001",
    motherName: "Jane Doe",
    address: "1234 Elm St",
    lastVisDate: "2024-07-10",
    daysPassed: "37",
    vaccines: [
      {
        date: "2023-12-14T15:25:00",
        name: "BCG",
        remarks: "",
        dose: "1st",
        enteredBy: "Mr. admin admin",
      },
      {
        date: "2024-06-13T18:34:00",
        name: "Rotavirus",
        remarks: "",
        dose: "1st",
        enteredBy: "Mr. admin admin",
      },
    ],
  },
  {
    vaccRegNo: "VR1002",
    babyName: "Baby Jane",
    ageSex: "1Y/F",
    hospitalNo: "H1002",
    motherName: "Mary Smith",
    address: "5678 Oak St",
    lastVisDate: "2024-06-20",
    daysPassed: "57",
  },
  // Add more dummy data as needed
];

function Patientlist() {
  const [isVaccinationRegister, setIsVaccinationRegister] = useState(false);
  const [isUpdateVaccinationRegister, setIsUpdateVaccinationRegister] =
    useState(false);
  const [isVaccinationDetail, setIsVaccinationDetails] = useState(false);
  const [isStickerPopupOpen, setIsStickerPopupOpen] = useState(false);
  const [isFollowupPopupOpen, setIsFollowupPopupOpen] = useState(false);
  const [activeMoreOptionsIndex, setActiveMoreOptionsIndex] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);

  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  const openRegisterPopup = () => setIsVaccinationRegister(true);
  const closeRegisterPopup = () => {
    setIsVaccinationRegister(false);
  };
  const closeUpdateRegisterPopup = () => {
    setIsUpdateVaccinationRegister(false);
  };
  const closeVaccinationDetailsPopup = () => {
    setIsVaccinationDetails(false);
  };

  const openStickerPopup = (patientDetails) => {
    setIsStickerPopupOpen(true);
    setPatientDetails(patientDetails);
  };
  const closeStickerPopup = () => setIsStickerPopupOpen(false);

  const openFollowupPopup = (patient) => {
    setIsFollowupPopupOpen(true);
    setPatientDetails(patient);
  };
  const closeFollowupPopup = () => setIsFollowupPopupOpen(false);

  const toggleMoreOptions = (index) => {
    setActiveMoreOptionsIndex(activeMoreOptionsIndex === index ? null : index);
  };

  const startResizing = (index) => (e) => {
    e.preventDefault();

    const startX = e.clientX;
    const startWidth = tableRef.current
      ? tableRef.current.querySelector(`th:nth-child(${index + 1})`).offsetWidth
      : 0;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [index]: `${newWidth}px`,
      }));
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleUpdateRegister = (patient) => {
    setPatientDetails(patient);
    setIsUpdateVaccinationRegister(true);
  };
  const handleVaccinationDetails = (patient) => {
    setPatientDetails(patient);
    setIsVaccinationDetails(true);
  };

  return (
    <div className="patientList">
      <div className="patientList-create">
        <button className="" onClick={openRegisterPopup}>
          + Create Vaccination Patient
        </button>
      </div>
      <div className="patientList-search-bar">
        <div className="patientList-search-container">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
        <div>
          <span className="patientList-results-count">
            Showing {dummyData.length} / {dummyData.length} results{" "}
          </span>
          <button className="patientList-print-btn">Print</button>
        </div>
      </div>
      <table className="patientList-table" ref={tableRef}>
        <thead>
          <tr>
            {[
              "Vacc. Regd. No",
              "Baby's Name",
              "Age/Sex",
              "Hospital No.",
              "Mother's Name",
              "Address",
              "Last Vis. Date",
              "Days Passed",
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
                    onMouseDown={startResizing(index)}
                  ></div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData?.map((item, index) => (
            <tr key={index}>
              <td>{item.vaccRegNo}</td>
              <td>{item.babyName}</td>
              <td>{item.ageSex}</td>
              <td>{item.hospitalNo}</td>
              <td>{item.motherName}</td>
              <td>{item.address}</td>
              <td>{item.lastVisDate}</td>
              <td>{item.daysPassed}</td>
              <td>
                <button
                  onClick={() => openStickerPopup(item)}
                  className="patientList-table-btn"
                  type="button"
                >
                  Sticker
                </button>
                <button
                  onClick={() => openFollowupPopup(item)}
                  className="patientList-table-btn"
                  type="button"
                >
                  Follow-up
                </button>
                <button
                  onClick={() => toggleMoreOptions(index)}
                  className="patientList-table-btn"
                  type="button"
                >
                  More...
                </button>
                {activeMoreOptionsIndex === index && (
                  <div className="patientList-more-options">
                    <button onClick={() => handleUpdateRegister(item)}>
                      Edit Vaccination Info
                    </button>
                    <button onClick={() => handleVaccinationDetails(item)}>
                      Vaccination
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isVaccinationRegister && (
        <VaccinationRegister onClose={closeRegisterPopup} />
      )}
      {isUpdateVaccinationRegister && (
        <UpdateVaccinationRegister
          patient={patientDetails}
          onClose={closeUpdateRegisterPopup}
        />
      )}
      {isStickerPopupOpen && (
        <Sticker patient={patientDetails} onClose={closeStickerPopup} />
      )}
      {isFollowupPopupOpen && (
        <VaccinationFollowup
          onClose={closeFollowupPopup}
          patient={patientDetails}
        />
      )}
      {isVaccinationDetail && (
        <PatientVaccinationDetails
          onClose={closeVaccinationDetailsPopup}
          patient={patientDetails}
        />
      )}
    </div>
  );
}

export default Patientlist;
