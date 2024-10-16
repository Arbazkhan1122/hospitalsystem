import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import './ManageWard.css';
import { API_BASE_URL } from '../../api/api';

const ManageWard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'add' or 'edit'
  const [selectedWard, setSelectedWard] = useState(null);

  // State variables for form fields
  const [wardName, setWardName] = useState('');
  const [wardCode, setWardCode] = useState('');
  const [wardLocation, setWardLocation] = useState('');
  const [subStore, setSubStore] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [occupied, setOccupied] = useState(0);
  const [vacant, setVacant] = useState(0);
  const [reserved, setReserved] = useState(0);
  const [numberOfBeds, setNumberOfBeds] = useState(0);

  const [wardsData, setWardsData] = useState([]);
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  // Fetch wards data when component mounts
  useEffect(() => {
    fetchWards();
  }, []);

  const fetchWards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/ward-department/get-all-ward`);
      const data = await response.json();
      setWardsData(data); // Update this based on the response structure
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const handleEditClick = (ward) => {
    setModalType('edit');
    setSelectedWard(ward);
    setWardName(ward.wardName);
    setWardCode(ward.wardCode);
    setWardLocation(ward.wardLocation);
    setSubStore(ward.subStore);
    setIsActive(ward.isActive);
    setOccupied(ward.occupied);
    setVacant(ward.vacant);
    setReserved(ward.reserved);
    setNumberOfBeds(ward.numberOfBeds);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setModalType('add');
    setSelectedWard(null);
    setWardName('');
    setWardCode('');
    setWardLocation('');
    setSubStore('');
    setIsActive(false);
    setOccupied(0);
    setVacant(0);
    setReserved(0);
    setNumberOfBeds(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWard(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wardData = {
      wardName,
      wardCode,
      wardLocation,
      subStore,
      isActive,
      occupied,
      vacant,
      reserved,
      numberOfBeds,
    };

    try {
      if (modalType === 'edit') {
        await fetch(`${API_BASE_URL}/ward-department/update/${selectedWard.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(wardData),
        });
        console.log('Updated Ward:', wardData);
      } else if (modalType === 'add') {
        await fetch(`${API_BASE_URL}/ward-department/add-ward-data`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(wardData),
        });
        console.log('Added New Ward:', wardData);
      }
      fetchWards(); // Refresh the list after adding or updating
      handleCloseModal();
    } catch (error) {
      console.error('Error saving ward:', error);
    }
  };

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn" onClick={handleAddClick}>
            + Add Ward
          </Button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="manage-add-ward-search-input"
        />
        <div className="manage-add-ward-results-info">
          Showing {wardsData.length} results
        </div>

        <div className="table-container">
          <table ref={tableRef}>
            <thead>
              <tr>
                {[
                  'Ward Name',
                  'Ward Code',
                  'Ward Location',
                  'Sub Store',
                  'Occupied',
                  'Vacant',
                  'Reserved',
                  'Number of Beds',
                  'Is Active',
                  'Action',
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
                        onMouseDown={startResizing(tableRef, setColumnWidths)(
                          index
                        )}
                      ></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {wardsData.map((ward, index) => (
                <tr key={index}>
                  <td>{ward.wardName}</td>
                  <td>{ward.wardCode}</td>
                  <td>{ward.wardLocation}</td>
                  <td>{ward.subStore}</td>
                  <td>{ward.occupied}</td>
                  <td>{ward.vacant}</td>
                  <td>{ward.reserved}</td>
                  <td>{ward.numberOfBeds}</td>
                  <td>{ward.isActive ? 'True' : 'False'}</td>
                  <td>
                    <Button
                      className="manage-add-ward-edit-btn"
                      onClick={() => handleEditClick(ward)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="manage-add-employee-role"
      >
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {modalType === 'edit' ? 'Update Ward Department' : 'Add New Ward'}
            </div>
            <Button
              onClick={handleCloseModal}
              className="manage-modal-employee-role-btn"
            >
              X
            </Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="wardName">
                <Form.Label className="manage-modal-form-label">
                  Ward Name <span className="manage-modal-text-danger">*</span>:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={wardName}
                  onChange={(e) => setWardName(e.target.value)}
                  placeholder="Ward Name"
                  required
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="wardCode">
                <Form.Label className="manage-modal-form-label">
                  Ward Code:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={wardCode}
                  onChange={(e) => setWardCode(e.target.value)}
                  placeholder="Ward Code"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="wardLocation">
                <Form.Label className="manage-modal-form-label">
                  Ward Location:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={wardLocation}
                  onChange={(e) => setWardLocation(e.target.value)}
                  placeholder="Ward Location"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="subStore">
                <Form.Label className="manage-modal-form-label">
                  Sub Store:
                </Form.Label>
                <Form.Control
                  type="text"
                  value={subStore}
                  onChange={(e) => setSubStore(e.target.value)}
                  placeholder="Sub Store"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="occupied">
                <Form.Label className="manage-modal-form-label">
                  Occupied:
                </Form.Label>
                <Form.Control
                  type="number"
                  value={occupied}
                  onChange={(e) => setOccupied(parseInt(e.target.value))}
                  placeholder="Occupied"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="vacant">
                <Form.Label className="manage-modal-form-label">
                  Vacant:
                </Form.Label>
                <Form.Control
                  type="number"
                  value={vacant}
                  onChange={(e) => setVacant(parseInt(e.target.value))}
                  placeholder="Vacant"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="reserved">
                <Form.Label className="manage-modal-form-label">
                  Reserved:
                </Form.Label>
                <Form.Control
                  type="number"
                  value={reserved}
                  onChange={(e) => setReserved(parseInt(e.target.value))}
                  placeholder="Reserved"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="numberOfBeds">
                <Form.Label className="manage-modal-form-label">
                  Number of Beds:
                </Form.Label>
                <Form.Control
                  type="number"
                  value={numberOfBeds}
                  onChange={(e) => setNumberOfBeds(parseInt(e.target.value))}
                  placeholder="Number of Beds"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive" className="manage-modal-form-group">
                <Form.Label className="manage-modal-form-label">
                  Is Active:
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="manage-modal-form-check"
                />
              </Form.Group>

              <div className="manage-modal-modal-footer">
                <Button type="submit" className="manage-add-modal-employee-role-btn">
                  {modalType === 'edit' ? 'Update Ward' : 'Add Ward'}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageWard;
