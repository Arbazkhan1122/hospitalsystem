import React, { useRef, useState } from 'react';
import './Activeproblems.css'; // Import the CSS file for styling
import { Label } from 'recharts';
import { startResizing } from '../TableHeadingResizing/resizableColumns';

const ActiveProblems = ({patientId,newPatientVisitId}) => {
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef = useRef(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [activeProblems, setActiveProblems] = useState([]); 
  const [newProblem, setNewProblem] = useState({}); 
  const [newPastProblem, setNewPastProblem] = useState({}); 
  const [isAddPastModalOpen, setIsAddPastModalOpen] = useState(false);
  const [activeProblem, setActiveProblem] = useState({
    searchProblem: '',
    icdCode: '',
    isPrincipalProblem: false,
    currentStatus: '',
    onsetDate: '',
    note: ''
  });

 
  const handleOpenModal = () => {
    setIsAddModalOpen(true);
    setIsAddPastModalOpen(false)
  };

  const handleOpenPastModal = () => {
    setIsAddPastModalOpen(true);
    setIsAddModalOpen(false);
  };


  
  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setNewProblem({}); 
  };

  const handleClosePastModal = () => {
    setIsAddPastModalOpen(false);
    setNewPastProblem({}); // Clear form data
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setActiveProblem({
      ...activeProblem,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProblem = async () => {
    console.log(activeProblem);
    try {
      const response = await fetch('http://localhost:8080/api/active-problems/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activeProblem),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Active Problem added successfully!');
        // Reset the form after submission
        setActiveProblem({
          searchProblem: '',
          icdCode: '',
          isPrincipalProblem: false,
          currentStatus: '',
          onsetDate: '',
          note: ''
        });
        handleCloseModal();
      } else {
        alert('Failed to add Active Problem');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };
  const handleAddPastProblem = () => {
    // Add new past problem to your list (if you have a list for past problems)
    handleClosePastModal(); // Close the modal
  };

  // Function to handle input changes for active problems
  const handlepastInputChange = (e) => {
    setNewProblem({ ...newProblem, [e.target.name]: e.target.value });
  };

  // Function to handle input changes for past problems
  const handlePastInputChange = (e) => {
    setNewPastProblem({ ...newPastProblem, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };


  return (
    <div className="medical-problems-container">
      {/* Active Medical Problems Section */}
      <div className='active-problem-main'>
      <div className='actproblem-table'>
      <section className="activeproblems-problems-section">
        <div className='activeproblems-subdiv'>
        <label className='activeproblems-sectionh5 '>Active Medical Problems</label>
        <button className="activeproblems-add-button" onClick={handleOpenModal}>
          ➕ Add
        </button>
        </div>
        <div className='table-container'>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                "ICD-11 Description",
  "Date",
  "Notes",
  "Resolved",
  "Edit"
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
            {activeProblems.map((problem, index) => (
              <tr key={index}>
                <td className='actproblem-tabledata'>{problem.description}</td>
                <td className='actproblem-tabledata'>{problem.date}</td>
                <td className='actproblem-tabledata'>{problem.notes}</td>
                <td className='actproblem-tabledata'>
                  <input type="checkbox" disabled checked={problem.resolved} />
                </td>
                <td className='actproblem-tabledata'><button>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>

      {/* Past Medical Problems Section */}
      <section className="activeproblems-problems-section">
      <div className='activeproblems-subdiv'>
        <label className='activeproblems-sectionh5 '>Past Medical Problems</label>
        <button className="activeproblems-add-button" onClick={handleOpenPastModal}>➕ Add</button>
        </div>
        <div className='table-container'>
        <table className="patientList-table" ref={tableRef}>
          <thead>
            <tr>
              {[
                 "ICD-11 Description",
                 "On Set Date",
                 "Resolved Date",
                 "Set As Active"
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
            {/* Example data - replace with your state data */}
            <tr>
              <td>(1A02) Intestinal infections due to Shigella</td>
              <td>2024-09-05</td>
              <td>2024-09-15</td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>
      </div>

       {/* Modal for Adding Active Problem */}
       {isAddModalOpen && (
        <div className="activeproblems-modal-overlay">
        <div className="activeproblems-modal-content">
          <h4 className="activeproblems-sectionh5">Add Active Problem</h4>
          <button className="activeproblems-close-button" onClick={handleCloseModal}>
            ❌
          </button>
  
          <div className="activeproblems-form-group">
            <label>Search Problem:</label>
            <input
              type="text"
              name="searchProblem"
              value={activeProblem.searchProblem}
              onChange={handleInputChange}
            />
          </div>
          <div className="activeproblems-form-group">
            <label>ICD-11 Code:</label>
            <input
              type="text"
              name="icdCode"
              value={activeProblem.icdCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="activeproblems-form-group">
            <label>Principal Problem:</label>
            <input
              type="checkbox"
              name="isPrincipalProblem"
              checked={activeProblem.isPrincipalProblem}
              onChange={handleInputChange}
            />
          </div>
          <div className="activeproblems-form-group">
            <label>Current Status:</label>
            <input
              type="text"
              name="currentStatus"
              value={activeProblem.currentStatus}
              onChange={handleInputChange}
            />
          </div>
          <div className="activeproblems-form-group">
            <label>Onset Date:</label>
            <input
              type="date"
              name="onsetDate"
              value={activeProblem.onsetDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="activeproblems-form-group">
            <label>Note:</label>
            <textarea
              name="note"
              value={activeProblem.note}
              onChange={handleInputChange}
            ></textarea>
          </div>
  
          <button className="activeproblems-add-problem-button" onClick={handleAddProblem}>
            Add Problem
          </button>
        </div>
      </div>
      )}

{isAddPastModalOpen && (
  <div className="activeproblems-modal-overlay">
    <div className="activeproblems-modal-content">
      <h4 className='activeproblems-sectionh5 '>Add Past Problem</h4>
      <button className="activeproblems-close-button" onClick={handleClosePastModal}>❌</button>
      <div className="activeproblems-form-group">
        <label>Search Problem*:</label>
        <input type="text" name="description" placeholder="ICD-11" onChange={handlePastInputChange} />
      </div>
      <div className="activeproblems-form-group">
        <label>Mark if Principle Problem:</label>
        <input type="checkbox" name="isPrincipleProblem" onChange={handlePastInputChange} />
      </div>
      <div className="activeproblems-form-group">
        <label>Current Status:</label>
        <input type="text" name="status" onChange={handlePastInputChange} />
      </div>
      <div className="activeproblems-form-group">
        <label>OnSet Date*:</label>
        <input type="date" name="onsetDate" value="2024-09-05" onChange={handlePastInputChange} />
      </div>
      <div className="activeproblems-form-group">
        <label>Resolved Date:</label>
        <input type="date" name="resolvedDate" value="2024-09-05" onChange={handlePastInputChange} />
      </div>
      <div className="activeproblems-form-group">
        <label>Note:</label>
        <textarea name="notes" onChange={handlePastInputChange}></textarea>
      </div>
      <button className="activeproblems-add-problem-button" onClick={handleAddPastProblem}>Add Problem</button>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default ActiveProblems;