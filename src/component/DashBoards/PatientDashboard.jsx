// SwapnilRokade_PatientDashboard_Adding_New_patientDashboard_13/09

import React, { useEffect, useRef, useState } from 'react';
import './InPatientAction.css';
import VitalsPage from './ClinicalVitals'; 
import ActionRecordPage from './ActionRecordPage';
import { useNavigate } from 'react-router-dom';
import Problems from './Problems';
import { API_BASE_URL } from '../api/api';
import AddVitalsForm from './AddVitals';
import PatientDischargeForm from './DischargeSummary';
import Allergy from './ClinicalAllergy';
import CinicalDocument from './ClinicalDocuments';
import axios from 'axios';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const Section = ({ title, handleAddClick, children }) => (
  <div className="Patient-Dashboard-firstBox">
  <div className='Patient-Dashboard-subNav'>
    <div className='Patient-Dashboard-labAndImg'>
                  <span className='Patient-Dashboard-spanText'>{title}</span>
                </div>
    <button className='Patient-Dashboard-btnAdd' onClick={handleAddClick}>+ Add</button>
    </div>
    {children || <div className='Patient-Dashboard-inputOne'>No Records Found</div>}
    </div>
);

const PatientDashboard = ({ isPatientOPEN, patient, setIsPatientOPEN }) => {
  console.log(patient.newPatientVisitId);
  
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [activeSection, setActiveSection] = useState('dashboard'); 
  const [prevAction, setPrevAction] = useState('dashboard');
  const [latestVitals, setLatestVitals] = useState(null);
  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);
  const [allergies,setAllergies]=useState(null);

  useEffect(() => {
    // Fetch medications data from the API
    const fetchMedications = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/medications`);
        const data = await response.json();
        console.log(data);
        
        setMedications(data);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, [activeSection]);

  useEffect(() => {
    // Fetch vitals from API
    axios
      .get(`${API_BASE_URL}/vitals/get-by-opd-patient-id/${patient.newPatientVisitId}`)
      .then((response) => {
        if (response.data.length > 0) {
          setLatestVitals(response.data[response.data.length-1]); 
          console.log(response.data[response.data.length-1]);
          
        }
      })
      .catch((error) => {
        console.error("Error fetching vitals:", error);
      });
  }, [setIsPatientOPEN,isPatientOPEN]);

  useEffect(() => {
    // Fetch vitals from API
    axios
      .get(
        `${API_BASE_URL}/allergies/by-newVisitPatientId/${patient.newPatientVisitId}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setAllergies(response.data);
          // console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching vitals:", error);
      });
  }, []);
 

 useEffect(() => {
  if (patient && (patient.patientId !== 0 || patient.newPatientVisitId !== 0)) {
    const filtered = medications
      .filter(
        (medication) =>
          (patient.patientId && medication.patientDTO.patientId === patient.patientId) || 
          (patient.newPatientVisitId && medication.newPatientVisitDTO?.newPatientVisitId === patient.newPatientVisitId)
      )
      .sort((a, b) => new Date(b.lastTaken) - new Date(a.lastTaken)); // Sort by recent date
    
    setFilteredMedications(filtered);
  }
}, [medications, patient.patientId, patient.newPatientVisitId]);



  const renderContent = () => {
    switch (activeSection) {
      case 'clinical':
        return <VitalsPage patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId} />;
      case 'actionRecord':
        return <ActionRecordPage patientId={patient.patientId} setActiveSection={setActiveSection} newPatientVisitId={patient.newPatientVisitId} />;
      case 'problems':
        return <Problems patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId} />;
        case 'Vitals':
          return <AddVitalsForm patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId}  />
          case 'dischargeSummary':
            return <PatientDischargeForm patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId}  />
            case 'Allergies':
            return <Allergy patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId}  />
            case 'Clinical-Document':
              return <CinicalDocument patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId}  />

      default:
        return renderDashboard();
    }
  };
  const renderDashboard = () => (
    <div className="Patient-Dashboard-main-section">
      <aside className="Patient-Dashboard-aside-section  Patient-Dashboard-left-aside">
        <div className="Patient-Dashboard-outOutDiv">
          <div className="Patient-Dashboard-outDiv">
            <div className="Patient-Dashboard-divOne">
              <div className="Patient-Dashboard-logoOne"></div>
              <button className="Patient-Dashboard-btnIpd">IPD</button>
            </div>
            <span className="Patient-Dashboard-textName">{`${patient.firstName} ${patient.lastName}`}</span>
            <br></br>
            <span className="Patient-Dashboard-ageGen">{`${patient.age}/${patient.gender}`}</span>
          </div>

          <hr></hr>
          <div className="Patient-Dashboard-divTwoDetails">
            <span className="Patient-Dashboard-detailHeading">Hospital No:</span>
            <span> 2406003766</span>
            <br></br>
            <div className="Patient-Dashboard-ward">
              <span className="Patient-Dashboard-detailHeading">Ward/Bed:</span>
              <span> Private Ward/09</span>
              <br></br>
            </div>
            <div className="Patient-Dashboard-attending">
              <span className="Patient-Dashboard-detailHeading">Attending:</span>
              <span>{`${patient.employeeDTO.salutation} ${patient.employeeDTO.firstName} ${patient.employeeDTO.lastName}`}</span>
            </div>
          </div>
        </div>
        <div className="Patient-Dashboard-detailsBox">
          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span
                className="Patient-Dashboard-textOne"
                onClick={() => {
                  setActiveSection("problems");
                  setPrevAction(...activeSection);
                }}
              >
                Problems
              </span>
            </div>
          </div>

          {/* <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne">Current Medications</span>
            </div>
          </div> */}

          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne">Encounter History</span>
            </div>
          </div>

          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne">Orders</span>
            </div>
          </div>

          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne"  onClick={() => {
                  setActiveSection("Clinical-Document");
                  setPrevAction(...activeSection);
                }}>Clinical Documents</span>
            </div>
          </div>

          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span
                className="Patient-Dashboard-textOne"
                onClick={() => {
                  setActiveSection("clinical");
                  setPrevAction(...activeSection);
                }}
              >
                Clinical
              </span>
            </div>
          </div>
          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne">Notes</span>
            </div>
          </div>
          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne">Scanned images</span>
            </div>
          </div>
          <div className="Patient-Dashboard-boxOne">
            <div className="Patient-Dashboard-textAndLogo">
              <span className="Patient-Dashboard-textOne"  onClick={() => {
                  setActiveSection("dischargeSummary");
                  setPrevAction(...activeSection);
                }}>Discharge Summary</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="Patient-Dashboard-betweenSection">
        <div className="Patient-Dashboard-outOutDiv">
            <Section
              title="🧪 Labs"
              handleAddClick={() => {
                setActiveSection("actionRecord");
                setPrevAction(activeSection);
              }}
            />
        </div>

        <div className="Patient-Dashboard-outOutDiv">
            <Section
              title="🖼 Imaging"
              handleAddClick={() => setActiveSection("actionRecord")}
            />
        </div>

        <div className="Patient-Dashboard-outOutDiv">
            <Section
              title="⚠ Active Problems"
              handleAddClick={() => setActiveSection("problems")}
            />
        </div>

        <div className="Patient-Dashboard-outOutDiv">
            <Section
              title="🧪 Medication"
              handleAddClick={() => {
                setPrevAction(activeSection);
                setActiveSection("actionRecord");
              }}
              children={<> {filteredMedications.length > 0 ? (
                <div className='Patient-Dashboard-inputSection'>
              <table border="1" cellPadding="10" cellSpacing="0" className='patient-table'>
                <thead>
                  <tr>
                    <th className='Patient-Dashboard-th'>Medication Name</th>
                    <th className='Patient-Dashboard-th'>Frequency</th>
                    <th className='Patient-Dashboard-th'>Last Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMedications.map((medication) => (
                    <tr key={medication.medicationId}>
                      <td className='Patient-Dashboard-td'>{medication.medicationName}</td>
                      <td className='Patient-Dashboard-td'>{medication.frequency}</td>
                      <td className='Patient-Dashboard-td'>{medication.lastTaken}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            ) : (
              <p>No medications found for this patient or visit.</p>
            )}</>}
            />
        </div>
      </main>

      <aside className="Patient-Dashboard-aside-section  Patient-Dashboard-right-aside">
        <div className="Patient-Dashboard-asideDivTwo">
          <div className="Patient-Dashboard-asideNav">
            <div className="Patient-Dashboard-navTextandBtn">
              <div className="Patient-Dashboard-navVitals">
                <span className="Patient-Dashboard-spanText">Last Vitals</span>
                {/* <div className="Patient-Dashboard-twoBtns"> */}
                  {/* <button className="Patient-Dashboard-oneBtnNormal">Show Graph</button> */}
                  <button className="Patient-Dashboard-secBtnBlue" onClick={()=> setActiveSection('Vitals')}>Add Vitals</button>
                {/* </div> */}
              </div>
              <div className="Patient-Dashboard-tableRecord">
                <table className='Patient-Dashboard-patient-table'>
                  <tr>
                    <td className='Patient-Dashboard-td'>Recoreded On</td>
                    <td className='Patient-Dashboard-td'>{new Date(latestVitals?.addedOn).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Height</td>
                    <td className='Patient-Dashboard-td'> {latestVitals?.height} cm</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Weight</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.weight}kg</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>BMI</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.bmi}</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Temprature</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.temperature} °C</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Pulse</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.pulse} bpm</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Blood Pressure</td>
                    <td className='Patient-Dashboard-td'> {latestVitals?.bpSystolic}/{latestVitals?.bpDiastolic} mmHg</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Respiratory Rate</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.respiratoryRate} breaths/min</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>SpO2</td>
                    <td className='Patient-Dashboard-td'> {latestVitals?.spO2} %</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>O2 Deliver Method</td>
                    <td className='Patient-Dashboard-td'> {latestVitals?.o2DeliveryPlan}</td>
                  </tr>
                  <tr>
                    <td className='Patient-Dashboard-td'>Pain Scale</td>
                    <td className='Patient-Dashboard-td'>{latestVitals?.painScale}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <Section
            title="🚫 Allergies"
            handleAddClick={() => setActiveSection("Allergies")}
            children={<>
          
          <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "Recorded On",
                "Allergen",
                "Severity",
                "Reaction"
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
            {allergies && allergies.length > 0 ? (
              allergies.map((allergy) => (
                <tr key={allergy.allergiesId}>
                  <td>{allergy.recordedDate}</td>
                  <td>{allergy.typeOfAllergy}</td>
                  <td>{allergy.severity}</td>
                  <td>{allergy.reaction}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No allergies found</td>
              </tr>
            )}
          </tbody>
          </table>
          </>}
          />
        </div>
      </aside>
    </div>
  );

  return (
    <div
      className={`patient-dashboard ${
        isPatientOPEN ? "isPatientDetailsActive" : "isPatientDetailsInActive"
      }`}
    >
      <nav className="Patient-Dashboard-navbar">
        <div className="Patient-Dashboard-navText">
          <div className="Patient-Dashboard-navLogoOne"></div>
          <span onClick={() => {
            setIsPatientOPEN(false)
          }}> 🏠 Home</span>
        </div>
        <button className="Patient-Dashboard-btnAddBack" onClick={() => setActiveSection(prevAction)}>Back</button>
      </nav>
      {renderContent()}
    </div>
  );
};

export default PatientDashboard;
