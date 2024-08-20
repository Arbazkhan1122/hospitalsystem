import React, { useState } from 'react';
import '../LabSetting/defaultSignatories.css';

const DefaultSignatories = () => {
  const [normalSignatories, setNormalSignatories] = useState({
    victorOkech: true,
    beatriceKiio: true,
    collinsMaina: false,
    christineMutoka: true,
  });

  const [histoCytoSignatories, setHistoCytoSignatories] = useState({
    victorOkech: true,
    beatriceKiio: true,
    collinsMaina: false,
    christineMutoka: true,
  });

  const handleCheckboxChange = (setSignatories, signatories, name) => {
    setSignatories({
      ...signatories,
      [name]: !signatories[name],
    });
  };

  return (
    <div className="default-signature-container">
      <div className="section">
        <h3>Default Signatories for Normal Tests:</h3>
        <div className="signatories">
          <label>
            <input
              type="checkbox"
              checked={normalSignatories.victorOkech}
              onChange={() => handleCheckboxChange(setNormalSignatories, normalSignatories, 'victorOkech')}
            />
            VICTOR OKECH
          </label>
          <label>
            <input
              type="checkbox"
              checked={normalSignatories.beatriceKiio}
              onChange={() => handleCheckboxChange(setNormalSignatories, normalSignatories, 'beatriceKiio')}
            />
            Beatrice KIIO
          </label>
          <label>
            <input
              type="checkbox"
              checked={normalSignatories.collinsMaina}
              onChange={() => handleCheckboxChange(setNormalSignatories, normalSignatories, 'collinsMaina')}
            />
            COLLINS MAINA
          </label>
          <label>
            <input
              type="checkbox"
              checked={normalSignatories.christineMutoka}
              onChange={() => handleCheckboxChange(setNormalSignatories, normalSignatories, 'christineMutoka')}
            />
            CHRISTINE MUTOKA
          </label>
        </div>
      </div>
      <div className="section">
        <h3>Default Histo/Cyto Signatories:</h3>
        <div className="signatories">
          <label>
            <input
              type="checkbox"
              checked={histoCytoSignatories.victorOkech}
              onChange={() => handleCheckboxChange(setHistoCytoSignatories, histoCytoSignatories, 'victorOkech')}
            />
            VICTOR OKECH
          </label>
          <label>
            <input
              type="checkbox"
              checked={histoCytoSignatories.beatriceKiio}
              onChange={() => handleCheckboxChange(setHistoCytoSignatories, histoCytoSignatories, 'beatriceKiio')}
            />
            Beatrice KIIO
          </label>
          <label>
            <input
              type="checkbox"
              checked={histoCytoSignatories.collinsMaina}
              onChange={() => handleCheckboxChange(setHistoCytoSignatories, histoCytoSignatories, 'collinsMaina')}
            />
            COLLINS MAINA
          </label>
          <label>
            <input
              type="checkbox"
              checked={histoCytoSignatories.christineMutoka}
              onChange={() => handleCheckboxChange(setHistoCytoSignatories, histoCytoSignatories, 'christineMutoka')}
            />
            CHRISTINE MUTOKA
          </label>
        </div>
      </div>
      <button className="update-button">Update Default Signatories</button>
    </div>
  );
};

export default DefaultSignatories;
