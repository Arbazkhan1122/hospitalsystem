
import React, { useState } from 'react';
import '../MedicalRec/BirthList.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';


function BirthList() {
  const [isMenuVisible,setisMenuVisible]=useState(false);

  const [addDeathDetails,setdeathDetails]=useState(false);
  const [addCertificate,setAddCertificate]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deathListData,setdeathListData]=useState(false);
  const [showDeathCertificate,setshowDeathCertificate]=useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    all: false,
    diagnosisAdded: false,
    diagnosisPending: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; // Update this according to your data

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  const addDeathDetailsButton=()=>{
    setdeathDetails(!addDeathDetails);
    setIsModalOpen(true);
  }

  const addCertificateButton=()=>{
    setshowDeathCertificate(!showDeathCertificate);
    // setIsModalOpen(true);
  }

  const handleOpenCertificateModal = () => setshowDeathCertificate(true);
  const handleCloseCertificateModal = () => setshowDeathCertificate(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const [filterOption, setFilterOption] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const handleFilterData = () => {
    // Implement filter logic here
    console.log(`Filtering data from ${fromDate} to ${toDate} with option ${filterOption}`);
    setdeathListData(!deathListData);
  };
  const toggleMenu=()=>{
    setisMenuVisible(!isMenuVisible);
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='outer-medical-record'>

  
    
    <div className="MRInPatient-tableContainer">
    <button onClick={addDeathDetailsButton} className='AddNewBirthCertificate'> &#43;  Add Death Certificate</button>
             <h5>Filter by Death Date:</h5>
            <div className="MROInPatient-date-filter">
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
                <button onClick={handleFilterData} style={{backgroundColor:'#32c5d2'}}>OK</button>
                

              </div>



              {
                deathListData && (
                    <>
                    <div className='MRIn-Patient-Header'>
                    <input type='text' placeholder='Search' className='MRIn-Patient-searchInput'/>
                    <div className="MRIn-Patient-actions">
                        <span className="MRIn-Patient-results">Showing 0/0 results</span>
                    </div>
              </div>


                    <table className="MRIn-patientsTable">
            <thead>
                <tr>
                <th> Certificate No. </th>
                <th>Patient Name</th>
                <th>Death Date </th>
                <th>Death Time</th>
                <th>Action</th>
                
                
                
                </tr>
            </thead>
            <tbody>
                <tr className="MROut-tableRow">
                <td>1</td>
                <td>Jenifer</td>
                <td>2023-12-11</td>
                <td>17:46:00</td>
               <td>
                
                <div className="Actions-actions">
                            <button className="edit-final-diaggnosois" onClick={addCertificateButton}>Certificate</button>
                </div>
                </td>
                </tr>
                <tr className="MROut-tableRow">
                <td>1</td>
                <td>Jenifer</td>
                <td>2023-12-11</td>
                <td>17:46:00</td>
               <td>
                
                <div className="Actions-actions">
                            <button className="edit-final-diaggnosois" onClick={addCertificateButton}>Certificate</button>
                </div>
                </td>
                </tr>
                <tr className="MROut-tableRow">
                <td>1</td>
                <td>Jenifer</td>
                <td>2023-12-11</td>
                <td>17:46:00</td>
               <td>
                
                <div className="Actions-actions">
                            <button className="edit-final-diaggnosois" onClick={addCertificateButton}>Certificate</button>
                </div>
                </td>
                </tr>
       
                </tbody>
              </table>


              {/* <div className="MROut-pagination">
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
              <span className="MROut-pagination-info">
                {`Page ${currentPage} of ${totalPages}`}
              </span>
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
            addDeathDetails && isModalOpen && (
                <div className="FinalDiagnosis-container deathReport">
   
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button className="close-button" onClick={closeModal}>
                          &times;
                        </button>
                      </div>
                        <h5>Add Death Details</h5>
                      <br></br>                 
                  

                    <div class="form-container">
                     
                          <div class="form-group">
                          <label for="certificateNumber">Select Patient<span className='mandatory'>*</span>:  </label><input type='text' placeholder='Search' className=''/>

                          </div>
                            <div class="form-group">
                                <label for="certificateNumber">Certificate Number</label>
                                <input type="text" id="certificateNumber" name="certificateNumber" />
                            </div>
                            
                            </div>

                          
                            <div class="form-group">
                                <label for="birthDate">Death Date *</label>
                                <input type="date" id="birthDate" name="birthDate" value="2024-08-19" required />
                            </div>
                            <div class="form-group">
                                <label for="birthTime">Death Time *</label>
                                <input type="time" id="birthTime" name="birthTime" value="14:23" required />
                            </div>
                                      
                     
                      <div className="footer-buttons">
                        <button className="submit-button">Add Death Details</button>
                        <button className="cancel-button" onClick={closeModal}>Cancel</button>
                      </div>
                    </div>
                  </div>
                
              </div>
            )
          }


          {
            handleOpenCertificateModal && (
              <Modal show={showDeathCertificate} onHide={handleCloseCertificateModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Death Record of Sonia Chebii</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col>
              <strong>Fiscal Year :</strong> 2023
            </Col>
            <Col className="text-end">
              <strong>Certificate No :</strong> 1
            </Col>
          </Row>

          <h5 className="text-center mb-4">
            <strong>Medical Certificate of Death</strong>
          </h5>

          <p>
            This is to certify that Ms. Sonia Chebii, daughter of Mr.
            <Form.Control type="text" className="d-inline mx-2" style={{ width: '100px' }} />
            and Ms.
            <Form.Control type="text" className="d-inline mx-2" style={{ width: '100px' }} />
            spouse of Mr.
            <Form.Control type="text" className="d-inline mx-2" style={{ width: '100px' }} />
            as per hospital record resident of Country
            <strong> Kenya</strong> district
            <strong> Belgut Sub County</strong> village/Sub County and inpatient/Emergency number expired on BS
            <strong> (2023/12/11 AD, YYYY/MM/DD)</strong> time
            <strong> 17:46:00</strong> (24 hours) at the age of
            <strong> 11 days</strong>. Her cause of death was
            <Form.Control type="text" className="d-inline mx-2" style={{ width: '200px' }} />
          </p>

          <h5 className="mt-4">Certified By</h5>
          <Form.Group controlId="formCertifiedBy" className="mb-4">
            <Form.Control type="text" placeholder="Issued By" />
          </Form.Group>

          <h5>Hospital/Health Facility</h5>
          <p>
            <strong>Name:</strong> Demo Hospital
            <br />
            <strong>Address:</strong> <a href="/">P.O Box 1718 RUIRU</a>
          </p>

          <Form.Group controlId="formDoctorSignature" className="mb-4">
            <Form.Label>Doctor Signature:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseCertificateModal}>
          Save and Print
        </Button>
        <Button variant="secondary" onClick={handleCloseCertificateModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
            )
          }

    </div>

    
  );
};



export default BirthList;
