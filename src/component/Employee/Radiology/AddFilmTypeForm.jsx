import React, { useState } from 'react';
import './AddFilmTypeForm.css'; // Import custom CSS

const AddFilmTypeForm = ({ onAddFilmType, onClose }) => {
  const [filmType, setFilmType] = useState('');
  const [filmTypeDisplayName, setFilmTypeDisplayName] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [createdTime, setCreatedTime] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [imagingType, setImagingType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFilmType = {
      filmType,
      filmTypeDisplayName,
      createdDate,
      createdTime,
      isActive,
      imagingType,
    };

    onAddFilmType(newFilmType);
    onClose();
  };

  return (
    <div className="AddFilmTypeForm">
      <h2 className="AddFilmTypeForm__title">Add Film Type</h2>
      <form onSubmit={handleSubmit}>
        <div className="AddFilmTypeForm__field">
          <label>Film Type</label>
          <input
            type="text"
            value={filmType}
            onChange={(e) => setFilmType(e.target.value)}
            required
          />
        </div>

        <div className="AddFilmTypeForm__field">
          <label>Film Type Display Name</label>
          <input
            type="text"
            value={filmTypeDisplayName}
            onChange={(e) => setFilmTypeDisplayName(e.target.value)}
            required
          />
        </div>

        <div className="AddFilmTypeForm__field">
          <label>Created Date</label>
          <input
            type="date"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
            required
          />
        </div>

        <div className="AddFilmTypeForm__field">
          <label>Created Time</label>
          <input
            type="time"
            value={createdTime}
            onChange={(e) => setCreatedTime(e.target.value)}
            required
          />
        </div>

        <div className="AddFilmTypeForm__field">
          <label>Is Active</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          /> Yes
        </div>

        <div className="AddFilmTypeForm__field">
          <label>Imaging Type</label>
          <input
            type="text"
            value={imagingType}
            onChange={(e) => setImagingType(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="AddFilmTypeForm__button">
          Add Film Type
        </button>

        <button type="button" className="AddFilmTypeForm__cancel-button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddFilmTypeForm;
