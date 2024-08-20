import React, { useState } from 'react';
import './OpdTriagePage.css'; // Make sure to create this file for custom styling
import { Modal } from 'react-bootstrap';

function OPDTriagePage({ onClose }) {
  const [isTriageModalOpen, setIsTriageModalOpen] = useState(false);

  const openTriAgeModal = () => setIsTriageModalOpen(true);
  const closeTriAgeModal = () => setIsTriageModalOpen(false);

  return (
    <>
      <Modal show onHide={onClose} size="lg" className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>OPD Triage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="triage-container">
            <header>
              <h2>OPD Triage of S Suresh</h2>
              <p>Doctor Name: Mr. KEPHA OPIYO ODINDO</p>
            </header>
            <main>
              <section className="vitals-list">
                <h3>Vitals List</h3>
                <button className="new-vitals-button">New Vitals</button>
                <ul>
                  <li><strong>Recorded On:</strong> 2024-08-12 03:41 PM</li>
                  <li><strong>Taken On:</strong> 2024-08-12 09:50 AM</li>
                  <li><strong>Height:</strong> 172 cm</li>
                  <li><strong>Weight:</strong> 65 kg</li>
                  <li><strong>BMI:</strong> 22</li>
                  <li><strong>Temperature:</strong> 37 C</li>
                  <li><strong>Pulse:</strong> 86 /min</li>
                  <li><strong>Blood Pressure:</strong> 122 /86</li>
                  <li><strong>Respiratory Rate:</strong> 6 /min</li>
                  <li><strong>SpO2:</strong></li>
                  <li><strong>O<sub>2</sub> Delivery Method:</strong></li>
                  <li><strong>Body Pain Data:</strong> -</li>
                </ul>
                <div className="vitals-actions">
                  <button>Edit</button>
                  <button>Print</button>
                </div>
              </section>

              <section className="add-new-vitals">
                <h3>Add New Vitals</h3>
                <form>
                  <div className="form-group">
                    <label>Added On:</label>
                    <input type="date" />
                    <input type="time" />
                  </div>
                  <div className="form-group">
                    <label>Height:</label>
                    <input type="text" />
                    <select>
                      <option>cm</option>
                      <option>in</option>
                    </select>
                  </div>
                  {/* Add other form fields similarly */}
                  <button type="button">Save</button>
                </form>
              </section>

              <section className="chief-complaint">
                <h3>Chief Complaint:</h3>
                <textarea></textarea>
                <button>Add New Complaint</button>
              </section>

              <section className="allergy-list">
                <h3>Allergy List</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Recorded On</th>
                      <th>Allergen</th>
                      <th>Severity</th>
                      <th>Reaction</th>
                      <th>Verified</th>
                      <th>Comments</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-08-13 13:20</td>
                      <td>Test</td>
                      <td>Mild</td>
                      <td>ANAPHYLAXIS</td>
                      <td>false</td>
                      <td>t</td>
                      <td><button>Edit</button></td>
                    </tr>
                  </tbody>
                </table>
                <button className="add-new-allergy">Add New</button>
              </section>
            </main>
            <footer>
              <button className="add-triage-button">Add Triage</button>
              <button className="discard-button">Discard</button>
            </footer>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OPDTriagePage;
