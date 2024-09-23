// SwapnilRokade_PatientDashboard_Adding_New_patientDashboard_13/09

import React, { useEffect, useState } from 'react';
import './InPatientAction.css';
import VitalsPage from './ClinicalVitals'; 
import ActionRecordPage from './ActionRecordPage';
import { useNavigate } from 'react-router-dom';
import Problems from './Problems';

const Section = ({ title, handleAddClick, children }) => (
  <div className="firstBox">
  <div className='subNav'>
    <div className='labAndImg'>
                  <span className='spanText'>{title}</span>
                </div>
    <button className='btnAdd' onClick={handleAddClick}>+ Add</button>
    </div>
    {children || <div className='inputOne'>No Records Found</div>}
    </div>
);

const PatientDashboard = ({ isPatientOPEN, patient, setIsPatientOPEN }) => {
  console.log(patient.newPatientVisitId);
  
  const [activeSection, setActiveSection] = useState('dashboard'); 
  const [prevAction, setPrevAction] = useState('dashboard');

  const [medications, setMedications] = useState([]);
  const [filteredMedications, setFilteredMedications] = useState([]);

  useEffect(() => {
    // Fetch medications data from the API
    const fetchMedications = async () => {
      try {
        const response = await fetch('http://localhost:1415/api/medications');
        const data = await response.json();
        console.log(data);
        
        setMedications(data);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, []);

 console.log(medications);
 

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
        return <ActionRecordPage patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId} />;
      case 'problems':
        return <Problems patientId={patient.patientId} newPatientVisitId={patient.newPatientVisitId} />;
      default:
        return renderDashboard();
    }
  };
  const renderDashboard = () => (
    <div className="main-section">
      <aside className="aside-section left-aside">
        <div className="outOutDiv">
          <div className="outDiv">
            <div className="divOne">
              <div className="logoOne"></div>
              <button className="btnIpd">IPD</button>
            </div>
            <span className="textName">{`${patient.firstName} ${patient.lastName}`}</span>
            <br></br>
            <span className="ageGen">{`${patient.age}/${patient.gender}`}</span>
          </div>

          <hr></hr>
          <div className="divTwoDetails">
            <span className="detailHeading">Hospital No:</span>
            <span> 2406003766</span>
            <br></br>
            <div className="ward">
              <span className="detailHeading">Ward/Bed:</span>
              <span> Private Ward/09</span>
              <br></br>
            </div>
            <div className="attending">
              <span className="detailHeading">Attending:</span>
              <span>{`${patient.employeeDTO.salutation} ${patient.employeeDTO.firstName} ${patient.employeeDTO.lastName}`}</span>
            </div>
          </div>
        </div>
        <div className="detailsBox">
          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">OPD Summary</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Patient Overview</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span
                className="textOne"
                onClick={() => {
                  setActiveSection("problems");
                  setPrevAction(...activeSection);
                }}
              >
                Problems
              </span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Current Medications</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Encounter History</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Orders</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Clinical Documents</span>
            </div>
          </div>

          <div className="boxOne">
            <div className="textAndLogo">
              <span
                className="textOne"
                onClick={() => {
                  setActiveSection("clinical");
                  setPrevAction(...activeSection);
                }}
              >
                Clinical
              </span>
            </div>
          </div>
          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Notes</span>
            </div>
          </div>
          <div className="boxOne">
            <div className="textAndLogo">
              <span className="textOne">Scanned images</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="betweenSection">
        <div className="outOutDiv">
            <Section
              title="🧪 Labs"
              handleAddClick={() => {
                setActiveSection("actionRecord");
                setPrevAction(activeSection);
              }}
            />
        </div>

        <div className="outOutDiv">
            <Section
              title="🖼 Imaging"
              handleAddClick={() => setActiveSection("actionRecord")}
            />
        </div>

        <div className="outOutDiv">
            <Section
              title="⚠ Active Problems"
              handleAddClick={() => setActiveSection("problems")}
            />
        </div>

        <div className="outOutDiv">
            <Section
              title="🧪 Medication"
              handleAddClick={() => {
                setPrevAction(activeSection);
                setActiveSection("actionRecord");
              }}
              children={<> {filteredMedications.length > 0 ? (
                <div className='inputSection'>
              <table border="1" cellPadding="10" cellSpacing="0" className='patient-table'>
                <thead>
                  <tr>
                    <th className='patient-th'>Medication Name</th>
                    <th className='patient-th'>Frequency</th>
                    <th className='patient-th'>Last Taken</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMedications.map((medication) => (
                    <tr key={medication.medicationId}>
                      <td className='patient-td'>{medication.medicationName}</td>
                      <td className='patient-td'>{medication.frequency}</td>
                      <td className='patient-td'>{medication.lastTaken}</td>
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

      <aside className="aside-section right-aside">
        <div className="asideDivTwo">
          <div className="asideNav">
            <div className="navTextandBtn">
              <div className="navVitals">
                <span className="spanText">Last Vitals</span>
                <div className="twoBtns">
                  <button className="oneBtnNormal">Show Graph</button>
                  <button className="secBtnBlue">Add Vitals</button>
                </div>
              </div>
              <div className="tableRecord">
                <table className='patient-table'>
                  <tr>
                    <td className='patient-td'>Recoreded On</td>
                    <td className='patient-td'>2024-06-18 03:22 PM</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Height</td>
                    <td className='patient-td'>200 cm</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Weight</td>
                    <td className='patient-td'>40kg</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>BMI</td>
                    <td className='patient-td'>10</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Temprature</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Pulse</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Blood Pressure</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Respiratory Rate</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>SpO2</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>O2 Deliver Method</td>
                  </tr>
                  <tr>
                    <td className='patient-td'>Body Pain Data</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <Section
            title="🗣 Chief Complaints"
            handleAddClick={() => console.log("New Complaint Clicked")}
          />
          <Section
            title="🚫 Allergies"
            handleAddClick={() => console.log("Add Allergies Clicked")}
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
      <nav className="navbar">
        <div className="navText">
          <div className="navLogoOne"></div>
          <span onClick={() => setIsPatientOPEN(false)}> 🏠 Home</span>
        </div>
        <button className="btnAddBack" onClick={() => setActiveSection(prevAction)}>Back</button>
      </nav>
      {renderContent()}
    </div>
  );
};

export default PatientDashboard;
