import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ManageWard.css';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';
import axios from 'axios';
import { API_BASE_URL } from '../../api/api';

const ManageBed = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBed, setSelectedBed] = useState(null);
  const [bedFeatures, setBedFeatures] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [bedCode, setBedCode] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [wardDepartments, setWardDepartments] = useState([]);
  const [bedFeaturesList, setBedFeaturesList] = useState([]);
  const [selectedWardDepartment, setSelectedWardDepartment] = useState('');
  const [selectedBedFeature, setSelectedBedFeature] = useState('');
  const [columnWidths, setColumnWidths] = useState({});
  const tableRef = useRef(null);

  useEffect(() => {
    fetchBeds(); // Fetch bed data when component mounts
    fetchWardDepartments(); // Fetch ward departments
    fetchBedFeatures(); // Fetch bed features
  }, []);

  const fetchBeds = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/manage-bed/AllManageBed`);
      setData(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error("Error fetching bed data:", error);
    }
  };

  const fetchWardDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ward-department/get-all-ward`);
      setWardDepartments(response.data);
    } catch (error) {
      console.error("Error fetching ward departments:", error);
    }
  };

  const fetchBedFeatures = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ward-bedFeature/getAllWardBed`);
      setBedFeaturesList(response.data);
      
    } catch (error) {
      console.error("Error fetching bed features:", error);
    }
  };

  const handleAddClick = () => {
    setSelectedBed(null);
    setBedFeatures('');
    setBedNumber('');
    setBedCode('');
    setIsActive(false);
    setSelectedWardDepartment('');
    setSelectedBedFeature('');
    setShowModal(true);
  };

  const handleEditClick = (bed) => {
    setSelectedBed(bed);
    setBedFeatures(bed.bedFeatures);
    setBedNumber(bed.bedNumber);
    setBedCode(bed.bedCode);
    setIsActive(bed.isActive);
    setSelectedWardDepartment(bed.wardDepatmentDTO?.wardDepartmentId || '');
    setSelectedBedFeature(bed.wardBedFeatureDTO?.bedId || '');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBed(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    try {
      if (selectedBed) {
        const bedData = {
          bedFeatures,
          bedNumber,
          isActive,
          wardDepatmentDTO:{
            wardDepartmentId:selectedWardDepartment
          },
          wardBedFeatureDTO: {
            bedId:selectedBedFeature
          }
        };
        console.log(bedData);
        
        
        await axios.put(`${API_BASE_URL}/manage-bed/update/${selectedBed.manageBedId}`, bedData);
        console.log('Updated:', bedData);
      } else {
        const bedData = {
          bedFeatures,
          bedNumber,
          isActive,
          wardDepatment:{
            wardDepartmentId:selectedWardDepartment
          },
          wardBedFeature: {
            wardBedFeatureId:selectedBedFeature
          }
        };
        
        console.log();
        
        await axios.post(`${API_BASE_URL}/manage-bed/add-Manage-bed-data`, bedData);
        console.log('Added new bed:', bedData);
      }
      handleCloseModal();
      fetchBeds(); // Refresh bed data after submit
    } catch (error) {
      console.error("Error submitting bed data:", error);
    }
  };

  return (
    <div className="manage-add-ward-page">
      <div className="manage-add-ward-table-container">
        <div className="manage-add-ward-manage-section">
          <Button className="manage-add-ward-btn" onClick={handleAddClick}>
            + Add Bed
          </Button>
        </div>
        <input type="text" placeholder="Search" className="manage-add-ward-search-input" />
        <div className="manage-add-ward-results-info">Showing {data.length} results</div>

        <div className="table-container">
          <table ref={tableRef}>
            <thead>
            <tr>
                {["Ward", "Bed Features", "Bed Number", "Bed Code", "Is Active", "Status", "Action"].map((header, index) => (
                  <th key={index} style={{ width: columnWidths[index] }} className="resizable-th">
                    <div className="header-content">
                      <span>{header}</span>
                      <div className="resizer" onMouseDown={startResizing(tableRef, setColumnWidths)(index)}></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                <td>{item?.wardDepatmentDTO?.wardName}</td>
                <td>{item.wardBedFeatureDTO.featureName}</td>
                <td>{item.bedNumber}</td>
                <td>{item.wardBedFeatureDTO.bedFeatureCode}</td>
                <td>{item.isActive ? 'true' : 'false'}</td>
                <td>{item.isActive ? 'Active' : 'Deactive'}</td>
                <td>
                  <Button className="manage-add-ward-edit-btn" onClick={() => handleEditClick(item)}>
                    Edit
                  </Button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Add/Edit Bed */}
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
        <div className="manage-modal-dialog">
          <div className="manage-modal-modal-header">
            <div className="manage-modal-modal-title">
              {selectedBed ? 'Update Bed' : 'Add New Bed'}
            </div>
            <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">
              X
            </Button>
          </div>
          <div className="manage-modal-modal-body">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="wardDepartment">
                <Form.Label className="manage-modal-form-label">Ward Department:</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedWardDepartment}
                  onChange={(e) => setSelectedWardDepartment(e.target.value)}
                  required
                  className="manage-modal-form-control"
                >
                  <option value="">Select Ward Department</option>
                  {wardDepartments.map((dept) => (
                    <option key={dept.wardDepartmentId} value={dept.wardDepartmentId}>
                      {dept.wardName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="bedFeature">
                <Form.Label className="manage-modal-form-label">Bed Feature:</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedBedFeature}
                  onChange={(e) => setSelectedBedFeature(e.target.value)}
                  required
                  className="manage-modal-form-control"
                >
                  <option value="">Select Bed Feature</option>
                  {bedFeaturesList.map((feature) => (
                    <option key={feature.wardBedFeatureId} value={feature.wardBedFeatureId}>
                      {feature.featureFullName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="bedNumber">
                <Form.Label className="manage-modal-form-label">Bed Number:</Form.Label>
                <Form.Control
                  type="text"
                  value={bedNumber}
                  onChange={(e) => setBedNumber(e.target.value)}
                  placeholder="Bed Number"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="bedCode">
                <Form.Label className="manage-modal-form-label">Bed Code:</Form.Label>
                <Form.Control
                  type="text"
                  value={bedCode}
                  onChange={(e) => setBedCode(e.target.value)}
                  placeholder="Bed Code"
                  className="manage-modal-form-control"
                />
              </Form.Group>

              <Form.Group controlId="isActive" className="manage-modal-form-group">
                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="manage-modal-form-control-checkbox"
                />
              </Form.Group>

              <div className="manage-modal-form-group-btn">
                <Button type="submit" className="manage-modal-save-btn">
                  {selectedBed ? 'Update' : 'Save'}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBed;
