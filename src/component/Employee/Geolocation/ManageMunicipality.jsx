import React from 'react';
import './ManageMunicipality.css'; 

const usersData = [
    {
        municipality: 'Brihanmumbai Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Pune Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Nagpur Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Solapur Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Kolhapur Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Thane Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Pimpri-Chinchwad Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Nashik Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Aurangabad Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Kalyan-Dombivali Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Amravati Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Navi Mumbai Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Nanded - Waghala Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Ulhas Nagar Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Sangli-Miraj-Kupwada Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Malegaon Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Bhiwandi-Nizampur Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Akola Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Bhayander Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
      {
        municipality: 'Ahmednagar Municipal Corporation',
        country: 'India',
        subDivision: 'Maharashtra',
        type: 'Mahanagarpalika',
        isActive: true,
      },
];

const ManageMunicipality = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCloseModal = () => setShowEditModal(false);

  // Correct the parameter name to match the data being passed
  const handleShowModal = (subDivision) => {
      setSelectedItem(subDivision);
      setShowEditModal(true);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      handleCloseModal();
  };
  return (
   
    <div className="manage-municipality-container">
    <div className="manage-municipality-header">
      <button className="manage-municipality-add-button">+ Add Sub Division</button>
    </div>
    <input type="text" placeholder="Search" className="manage-municipality-search-input" />
    <div className="manage-municipality-span">
      <span>Showing {usserData.length} / {usserData.length} results</span>
    </div>
    <div className="manage-municipality-tab">
      <table className="manage-municipality-users-table">
        <thead>
          <tr>
            <th>Sub Division Name</th>
            <th>Is Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usserData.map((subDivision, index) => (
            <tr key={index}>
              <td>{subDivision["Sub Division Name"]}</td>
              <td>{subDivision["Is Active"]}</td>
              <td className="manage-municipality-action-buttons">
                <button 
                  className="manage-municipality-action-button" 
                  onClick={() => handleShowModal(subDivision)} // Pass the correct parameter
                >
                  Edit
                </button>
                {/* <button className="manage-municipality-action-button">Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="manage-municipality-pagination">
        <div className="manage-municipality-pagination-controls">
          <button>First</button>
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
    <Modal show={showEditModal} onHide={handleCloseModal} dialogClassName="manage-add-employee-role">
      <div className="manage-modal-dialog">
        <div className="manage-modal-modal-header">
          <div className="manage-modal-modal-title">Update Country SubDivision</div>
          <Button onClick={handleCloseModal} className="manage-modal-employee-role-btn">X</Button>
        </div>
        <div className="manage-modal-modal-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="countryName">
              <Form.Label className="manage-modal-form-label">Country Name:</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.Name || ''}
                onChange={(e) => setSelectedItem({ ...selectedItem, Name: e.target.value })}
                placeholder="Country Name"
                className="manage-modal-form-control"
              />
            </Form.Group>

            <Form.Group controlId="countrySymbol">
              <Form.Label className="manage-modal-form-label">Country Sub-Division Name:</Form.Label>
              <Form.Control
                type="text"
                value={selectedItem?.["Country Symbol"] || ''}
                onChange={(e) => setSelectedItem({ ...selectedItem, "Country Symbol": e.target.value })}
                placeholder="Country Symbol"
                className="manage-modal-form-control"
              />
            </Form.Group>

            <Form.Group controlId="isActive">
              <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
              <Form.Check
                type="checkbox"
                checked={selectedItem?.["Is Active"] === "true"}
                onChange={(e) => setSelectedItem({ ...selectedItem, "Is Active": e.target.checked.toString() })}
                className="manage-modal-form-check-input"
              />
            </Form.Group>

            <Button type="submit" className="manage-modal-employee-btn">Update</Button>
          </Form>
        </div>
      </div>
    </Modal>
  </div>
);
};


export default ManageMunicipality;
