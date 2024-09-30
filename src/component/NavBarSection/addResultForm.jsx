import React, { useState } from 'react';
import './addResultFrom.css';
import { useNavigate } from 'react-router-dom';

const Lab1 = () => {
  const [components, setComponents] = useState([{ name: '', value: '', unit: '', range: '', completed: false }]);
  const [error, setError] = useState(null);

  const handleInputChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newComponents = [...components];
    newComponents[index][name] = type === 'checkbox' ? checked : value;
    setComponents(newComponents);
  };

  const handleRemoveComponent = (index) => {
    const newComponents = components.filter((_, i) => i !== index);
    setComponents(newComponents);
  };

  const handleAddComponent = () => {
    setComponents([...components, { name: '', value: '', unit: '', range: '', completed: false }]);
  };

  const navigate = useNavigate();

  const gotoPage = () => {
    navigate('/labResult');
  };

  const handleBackToGrid = () => {
    navigate('/add-results'); // Replace with actual path
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (components.some(component => !component.name)) {
      setError('Please fill out all component names.');
      return;
    }

    setError(null); // Clear error on successful validation
    console.log('Submitted Components:', components);
  };

  return (
    <div className="lab-addResult-page1">
      <button className="lab-addResult-back-button" onClick={handleBackToGrid}>← Back To Grid</button>
      <div className="lab-addResult-header">
        <div className="lab-addResult-container">
          <div className="lab-addResult-ward">Ward: Outpatient</div>
          <div className="lab-addResult-prescribed-by">Prescribed By: Dr. Pooja Mishra</div>
          <div className="lab-addResult-left">
            <button className="lab-addResult-load-button">Load Machine Result Q</button>
            <button className="lab-addResult-save-button" onClick={handleSubmit}>Save Result 💾</button>
          </div>
        </div>
      </div>

      {error && <div className="lab-addResult-error">{error}</div>} {/* Display error message */}

      <div className="lab-addResult-content">
        <div className="lab-addResult-bio">Biochemistry</div>
        <div className="lab-addResult-row1">
          <div className="lab-addResult-component">Component</div>
          <div className="lab-addResult-value">Value</div>
          <div className="lab-addResult-unit">Unit</div>
          <div className="lab-addResult-range">Range</div>
          <div className="lab-addResult-completed">Completed</div>
        </div>

        <div className="lab-addResult-row2">
          <div className="lab-addResult-testing">1. Sugar Testing</div>
          <div className="lab-addResult-requested">Requested On: 2024-07-27 09:49 AM</div>
          <div className="lab-addResult-collected">Sample Collected By: admin admin</div>
          
            <input type='checkbox' />
      
        </div>

        <div className="lab-addResult-form">
          <h5>MP SMEAR</h5>
          {components.map((component, index) => (
            <section className="lab-addResult-row" key={index}>
              <div className="lab-addResult-row1">
                <input
                  type="text"
                  name="name"
                  placeholder="Component Name"
                  value={component.name}
                  onChange={(event) => handleInputChange(index, event)}
                  required
                />
                <input
                  type="text"
                  name="value"
                  placeholder="Enter Value"
                  value={component.value}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <input
                  type="text"
                  name="unit"
                  placeholder="Unit"
                  value={component.unit}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <input
                  type="text"
                  name="range"
                  placeholder="Range"
                  value={component.range}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <input
                  type="checkbox"
                  name="completed"
                  checked={component.completed}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <button
                  type="button"
                  className="lab-addResult-remove-btn"
                  onClick={() => handleRemoveComponent(index)}
                >
                  &#10060;
                </button>
              </div>
            </section>
          ))}

          <div className="lab-addResult-form-actions">
            <button type="button" className="lab-addResult-add-btn" onClick={handleAddComponent}>
              Add Row ➕
            </button>
            <button type="button" className="lab-addResult-save-btn" onClick={gotoPage}>
              Save Result
            </button>
            <button
              type="button"
              className="lab-addResult-cancel-btn"
              onClick={() => setComponents([{ name: '', value: '', unit: '', range: '', completed: false }])}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab1;
