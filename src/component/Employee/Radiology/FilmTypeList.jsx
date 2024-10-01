import React, { useState } from 'react';
import './FilmTypeList.css'; // Import custom CSS

const FilmTypeList = () => {
  const [filmTypes, setFilmTypes] = useState([
    {
      filmType: 'X-Ray',
      filmTypeDisplayName: 'X-Ray Film',
      createdDate: '2024-10-01',
      createdTime: '12:00 PM',
      isActive: true,
      imagingType: 'Radiology',
    },
    {
      filmType: 'MRI',
      filmTypeDisplayName: 'MRI Film',
      createdDate: '2024-09-25',
      createdTime: '10:00 AM',
      isActive: true,
      imagingType: 'Radiology',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [filmType, setFilmType] = useState('');
  const [filmTypeDisplayName, setFilmTypeDisplayName] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [createdTime, setCreatedTime] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [imagingType, setImagingType] = useState('');

  const handleAddFilmType = (e) => {
    e.preventDefault();

    const newFilmType = {
      filmType,
      filmTypeDisplayName,
      createdDate,
      createdTime,
      isActive,
      imagingType,
    };

    setFilmTypes([...filmTypes, newFilmType]);

    // Reset form and close modal
    setFilmType('');
    setFilmTypeDisplayName('');
    setCreatedDate('');
    setCreatedTime('');
    setIsActive(true);
    setImagingType('');
    setShowModal(false);
  };

  return (
    <div className="FilmTypeList">
      <h1 className="FilmTypeList__title">Film Types List</h1>
      <button className="FilmTypeList__button" onClick={() => setShowModal(true)}>
        Add Film Type
      </button>
      <table className="FilmTypeList__table">
        <thead>
          <tr>
            <th>Film Type</th>
            <th>Film Type Display Name</th>
            <th>Created Date</th>
            <th>Created Time</th>
            <th>Is Active</th>
            <th>Imaging Type</th>
          </tr>
        </thead>
        <tbody>
          {filmTypes.map((film, index) => (
            <tr key={index}>
              <td>{film.filmType}</td>
              <td>{film.filmTypeDisplayName}</td>
              <td>{film.createdDate}</td>
              <td>{film.createdTime}</td>
              <td>{film.isActive ? 'Yes' : 'No'}</td>
              <td>{film.imagingType}</td>
            </tr>
          ))}
        </tbody>
      </table>

   

      {showModal && (
        <div className="FilmTypeList__modal">
          <div className="FilmTypeList__modal-content">
            <span className="FilmTypeList__close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2 className="FilmTypeList__modal-title">Add Film Type</h2>
            <form onSubmit={handleAddFilmType}>
              <div className="FilmTypeList__modal-field">
                <label>Film Type</label>
                <input
                  type="text"
                  value={filmType}
                  onChange={(e) => setFilmType(e.target.value)}
                  required
                />
              </div>

              <div className="FilmTypeList__modal-field">
                <label>Film Type Display Name</label>
                <input
                  type="text"
                  value={filmTypeDisplayName}
                  onChange={(e) => setFilmTypeDisplayName(e.target.value)}
                  required
                />
              </div>

              <div className="FilmTypeList__modal-field">
                <label>Created Date</label>
                <input
                  type="date"
                  value={createdDate}
                  onChange={(e) => setCreatedDate(e.target.value)}
                  required
                />
              </div>

              <div className="FilmTypeList__modal-field">
                <label>Created Time</label>
                <input
                  type="time"
                  value={createdTime}
                  onChange={(e) => setCreatedTime(e.target.value)}
                  required
                />
              </div>

              <div className="FilmTypeList__modal-field">
                <label>Is Active</label>
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />{' '}
                Yes
              </div>

              <div className="FilmTypeList__modal-field">
                <label>Imaging Type</label>
                <input
                  type="text"
                  value={imagingType}
                  onChange={(e) => setImagingType(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="FilmTypeList__modal-submit">
                Add Film Type
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmTypeList;
