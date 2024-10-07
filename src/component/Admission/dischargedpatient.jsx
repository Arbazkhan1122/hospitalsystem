/* // neha-ADT-discharge-19/09/24 */
import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import './dischargedpatient.css';
import { FaSearch } from 'react-icons/fa';
import { startResizing } from '../../TableHeadingResizing/ResizableColumns';
import { API_BASE_URL } from '../api/api';

function DischargedPatient() {
  const [modalShow, setModalShow] = useState(false);
  const [summaryData, setSummaryData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState(0);

  const handleShow = (patient) => {
    setSummaryData(patient);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/admissions/discharged-summary/Discharged`);
        console.log('API Response:', response.data); // Debugging API response
        setPatients(response.data);// Assuming the response is an object and needs to be wrapped in an array
        setLoading(false);
        console.log(patients)

      } catch (err) {
        console.error('Error fetching data:', err); // Debugging error
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='discharge-container'>
      <div className="date-utlt">
        <div className="dischage-patient">
          <div className="date-range">
            <label>From: </label>
            <input className="date-range-input" type="date" value="2024-08-05" />
            <label> To: </label>
            <input className="date-range-input" type="date" value="2024-08-12" />
            <button>★</button>
            <button>+</button>
            <button>OK</button>
          </div>
        </div>
        </div>
        </div>
  );
}

export default DischargedPatient;
