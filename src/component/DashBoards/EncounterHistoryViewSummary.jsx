import React from 'react';
import './EncounterHistoryViewSummary.css';

const VisitSummary = ({ onClose }) => {
  return (
    <div className="visit-summary">
      <header>
        <div className="title">
          <span role="img" aria-label="menu">☰</span>
          <h1>Visit Summary</h1>
        </div>
        <div className="actions">
          <button className="action-button">Actions</button>
          <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        </div>
      </header>

      <nav>
        <button className="active">
          <span className="icon-wrapper" role="img" aria-label="document">📄</span>
          ACTIVE PROBLEMS
        </button>
        <button>
          <span className="icon-wrapper" role="img" aria-label="stethoscope">🩺</span>
          LAST VITALS
        </button>
        <button>
          <span className="icon-wrapper" role="img" aria-label="image">🖼️</span>
          IMAGING
        </button>
        <button>
          <span className="icon-wrapper" role="img" aria-label="heart">❤️</span>
          ALLERGIES
        </button>
        <button>
          <span className="icon-wrapper" role="img" aria-label="pill">💊</span>
          MEDICATIONS
        </button>
        <button>
          <span className="icon-wrapper" role="img" aria-label="flask">⚗️</span>
          LABS
        </button>
      </nav>

      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Onset Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Malaria, unspecified</td>
            <td>13.08.2024</td>
          </tr>
          <tr>
            <td>Appendicitis</td>
            <td>24.08.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VisitSummary;