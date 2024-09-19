import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../MedicalRec/MROutPatientList.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

function RecordMedical() {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [addFinalDiagnosis, setaddFinalDiagnosis] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterByAppointment, setfilterByAppointment] = useState(false);
  const [outpatients, setOutpatients] = useState([]); // State to hold the fetched data
  const [selectedFilters, setSelectedFilters] = useState({
    all: false,
    diagnosisAdded: false,
    diagnosisPending: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Update this according to your data
  const navigate = useNavigate();

  const [filterOption, setFilterOption] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [department, setDepartment] = useState('');
  const [diseaseCategory, setDiseaseCategory] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [addFinalDiagnosisdata,setaddFinalDiagnosisdata]=useState('');
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  // modal popup

  const [referredOutpatient, setReferredOutpatient] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      diseaseCategory,
      diagnosis,
      referredOutpatient,
    });
    alert("Data Updated Successfully");
    closeModal();

  };


  // Fetch data from the API
  const fetchOutpatients = () => {
    
    axios.get('http://localhost:8989/api/mroutpatients/getAllMRoutpatients')
      .then(response => {
        const data = response.data;
        setOutpatients(data);

         // Ensure outpatients is always an array

      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setOutpatients([]);
      });
  };

  useEffect(() => {
    fetchOutpatients(); // Fetch data initially
  }, [currentPage, filterByAppointment, doctorName, department, diseaseCategory, diagnosis, fromDate, toDate]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleFilterData = () => {
    setfilterByAppointment(!filterByAppointment);
    fetchOutpatients(); // Fetch data based on filters
  };

  const toggleMenu = () => {
    setisMenuVisible(!isMenuVisible);
  };

  const EditFinalDiagnosisButton = (data) => {
    console.log(data);

    setaddFinalDiagnosisdata(data);
    setaddFinalDiagnosis(!addFinalDiagnosis);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='MROUt-medical-record'>
      <div className="filters-medical-record">
      <div className="filter-group">
        <div classname="filter-group-inner">
          <label className="filter-label">Doctor Filter:</label>
          <select className="filter-select" style={{marginLeft:'87px'}}>
              <option>----SELECT----</option>
              <option>Dipeeka Palande</option>
              <option>Seema Mulye</option>
              <option>Amar Solase</option>
              <option >Sachin Mehta</option>
            </select>

        </div>     <br/>
        <div classname="filter-group-inner">

            <label className="filter-label">Select Disease Category:</label>
            <select className="filter-select">
              <option>All</option>
              <option>Communicable,Vector Borne</option>
              <option>Cardiovascular & Respiratory Related Problems</option>
              <option>Certain Infectious or parasitic diseases</option>
              <option >Ear,Nose and Throat Infection</option>
            </select>
          </div>
       
   
        
      </div>
      <div className="filter-group">
      <div classname="filter-group-inner">
        <label className="filter-label">Department Filter:</label>
        <select className="filter-select">
          <option>All</option>
          <option>Anesthesia</option>
          <option>Cabin/Deluxe/Suite</option>
          <option>Cardiology</option>
          <option>CT/MRI</option>
        </select>
        </div><br></br>
        <div classname="filter-group-inner">
        <label className="filter-label">Select Diagnosis:</label>
        <select className="filter-select">
          <option>ICD-10(s)</option>
          <option>1F03 | Measles</option>
          <option>1C17 | Diptheria</option>
          <option>1C12 | Neonatal Tetanus</option>
          <option>1B1Z | Tuberculosis</option>
        </select>
        </div>
      </div>
      </div>
      {/* <div className='diagnosis-filter'>
        <label>
          <input
            type="checkbox"
            name="all"
            checked={selectedFilters.all}
            onChange={handleCheckboxChange}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            name="diagnosisAdded"
            checked={selectedFilters.diagnosisAdded}
            onChange={handleCheckboxChange}
          />
          Diagnosis Added
        </label>
        <label>
          <input
            type="checkbox"
            name="diagnosisPending"
            checked={selectedFilters.diagnosisPending}
            onChange={handleCheckboxChange}
          />
          Diagnosis Pending
        </label>
      </div> */}
      <div className="MROutPatient-tableContainer">
        <h5>Filter by Appointment Date:</h5>
        <div className="MROutPatient-date-filter">
          <label>
            From:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>
          <label>
            To:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </label>
          <button style={{ marginLeft: '5px' }}>★</button>
          <button style={{ marginLeft: '5px' }} onClick={toggleMenu}> - </button>
          {
            isMenuVisible && (
              <ul style={{ marginLeft: '5px', listStyleType: 'none', padding: '5px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
                <li>Last 1 Week</li>
                <li>Last 1 Month</li>
                <li>Last 3 Months</li>
              </ul>
            )
          }
          <button onClick={handleFilterData}>OK</button>
        </div>
        <div className='MROut-Patient-Header'>
          <input type='text' placeholder='Search' className='Admitted-Patient-searchInput'/>
          <div className="MROut-Patient-actions">
            <span className="MROut-Patient-results">Showing {outpatients.length || 0} results</span>
          </div>
        </div>
        {
          filterByAppointment && (
            <>
             <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
               "Serial No",
              "Patient Name",
              "Age",
              "Gender",
              "Doctor Name",
              "Appointment Date",
              "Department",
              "ICD Code",
              "Final Diagnosis",
              "Action"
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
                  {
                    outpatients.length > 0 ? (
                      outpatients.map((patient) => (
                        <tr key={patient.id}>
                          <td>{patient.hospitalNo}</td>
                          <td>{patient.patientName}</td>
                          <td>{patient.age}</td>
                          <td>{patient.gender}</td>
                          <td>{patient.doctorName}</td>
                          <td>{patient.appointmentDate}</td>
                          <td>{patient.department}</td>
                          <td>{patient.icdCode}</td>
                          <td>{patient.finalDiagnosis || 'N/A'}</td>
                          <td><button onClick={()=>EditFinalDiagnosisButton(patient)}>Edit Final Diagnosis</button></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10">No data available</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              {/* <div className="MROutPatient-pagination">
                <button
                  className="MROut-pagination-btn"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  First
                </button>
                <button
                  className="MROut-pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  className="MROut-pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
                <button
                  className="MROut-pagination-btn"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  Last
                </button>
              </div> */}
            </>
          )
        }
      </div>

      {
      isModalOpen && outpatients &&
      <Modal show={isModalOpen} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Final Diagnosis</Modal.Title>
      </Modal.Header>
      <Modal.Body>

       
        <div>
      

          
          <h5><i className="bi bi-person-circle"></i> {addFinalDiagnosisdata.patientName} </h5>
          <Row className="mb-3">
            <Col md={6}><strong>Outpatient No:</strong> {addFinalDiagnosisdata.id}</Col>
            <Col md={6}><strong>Age:</strong> {addFinalDiagnosisdata.age}</Col>
            <Col md={6}><strong>Visit Date:</strong> {addFinalDiagnosisdata.visitDate}12/02/2023</Col>
            <Col md={6}><strong>Contact No:</strong> {addFinalDiagnosisdata.contactNo}8765439082</Col>
            <Col md={6}><strong>Doctor Name:</strong> {addFinalDiagnosisdata.doctorName}</Col>
            <Col md={6}><strong>Address:</strong> {addFinalDiagnosisdata.address}Ratnagiri</Col>
            <Col md={6}><strong>Department:</strong> {addFinalDiagnosisdata.department}</Col>
          </Row>
          <Form>
            <Form.Group as={Row} controlId="formDiseaseCategory">
              <Form.Label column sm={4}>Select Disease Category</Form.Label>
              <Col sm={8}>
                <Form.Control as="select" value={diseaseCategory} onChange={e => setDiseaseCategory(e.target.value)}>
                  <option value="All">All</option>
                  <option>Communicable,Vector Borne</option>
                  <option>Cardiovascular & Respiratory Related Problems</option>
                  <option>Certain Infectious or parasitic diseases</option>
                  <option >Ear,Nose and Throat Infection</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDiagnosis" className="mt-3">
              <Form.Label column sm={4}>Select Diagnosis</Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="ICD-11" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group controlId="formReferredOutpatient" className="mt-3">
              <Form.Check
                type="checkbox"
                label="Referred Outpatient?"
                checked={referredOutpatient}
                onChange={e => setReferredOutpatient(e.target.checked)}
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    }
    </div>
   







  );
}

export default RecordMedical;
