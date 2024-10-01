import React, { useEffect, useState } from "react";
import "./FilmTypeList.css"; // Import custom CSS
import axios from "axios";
import { API_BASE_URL } from "../../api/api";

const FilmTypeList = () => {
  const [filmTypes, setFilmTypes] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [filmType, setFilmType] = useState("");
  const [filmTypeDisplayName, setFilmTypeDisplayName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    // Fetch film types from the API
    fetch(`${API_BASE_URL}/film-types`)
      .then((response) => response.json())
      .then((data) => setFilmTypes(data))
      .catch((error) => {
        console.error("Error fetching film types:", error);
        // Optionally, add UI feedback to inform the user of the error
      });
  }, []);
  const handleAddFilmType = (e) => {
    e.preventDefault();

    const newFilmType = {
      filmType,
      createdDate,
      createdTime,
      isActive,
    };

    try {
      console.log(newFilmType);
      axios.post(`${API_BASE_URL}/film-types/create`,newFilmType)
      console.log("Film Type Added Successfully");
    } catch (error) {
      console.log(error);
      
    }



    setFilmTypes([...filmTypes, newFilmType]);

    // Reset form and close modal
    setFilmType("");
    setFilmTypeDisplayName("");
    setCreatedDate("");
    setCreatedTime("");
    setIsActive(true);
    setShowModal(false);
  };

  return (
    <div className="FilmTypeList">
      <h1 className="FilmTypeList__title">Film Types List</h1>
      <button
        className="FilmTypeList__button"
        onClick={() => setShowModal(true)}
      >
        Add Film Type
      </button>
      <table className="FilmTypeList__table">
        <thead>
          <tr>
            <th>Film Type</th>
            <th>Created Date</th>
            <th>Created Time</th>
            <th>Is Active</th>

          </tr>
        </thead>
        <tbody>
          {filmTypes.map((film, index) => (
            <tr key={index}>
              <td>{film.filmType}</td>
              <td>{film.createdDate}</td>
              <td>{film.createdTime}</td>
              <td>{film.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="FilmTypeList__modal">
          <div className="FilmTypeList__modal-content">
            <span
              className="FilmTypeList__close"
              onClick={() => setShowModal(false)}
            >
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
                />{" "}
                Yes
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
