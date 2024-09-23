import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { startResizing } from '../../TableHeadingResizing/resizableColumns';


import './ManageMunicipality.css'; 

const usersData = [
    {
      "Country Symbol": "ALB",
      "Name": "Albania",
      "ISD Code": 355,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "DZA",
      "Name": "Algeria",
      "ISD Code": 213,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "AND",
      "Name": "Andorra",
      "ISD Code": 376,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "AGO",
      "Name": "Angola",
      "ISD Code": 244,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "ATG",
      "Name": "Antigua and Barbuda",
      "ISD Code": 268,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "ARG",
      "Name": "Argentina",
      "ISD Code": 54,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "ARM",
      "Name": "Armenia",
      "ISD Code": 374,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "AUS",
      "Name": "Australia",
      "ISD Code": 61,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "AUT",
      "Name": "Austria",
      "ISD Code": 43,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "AZE",
      "Name": "Azerbaijan",
      "ISD Code": 994,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BHS",
      "Name": "Bahamas",
      "ISD Code": 242,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BHR",
      "Name": "Bahrain",
      "ISD Code": 973,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BGD",
      "Name": "Bangladesh",
      "ISD Code": 880,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BRB",
      "Name": "Barbados",
      "ISD Code": 246,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BLR",
      "Name": "Belarus",
      "ISD Code": 375,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BEL",
      "Name": "Belgium",
      "ISD Code": 32,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BLZ",
      "Name": "Belize",
      "ISD Code": 501,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BEN",
      "Name": "Benin",
      "ISD Code": 229,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BTN",
      "Name": "Bhutan",
      "ISD Code": 975,
      "Is Active": true,
      "Action": "Edit"
    },
    {
      "Country Symbol": "BOL",
      "Name": "Bolivia",
      "ISD Code": 591,
      "Is Active": true,
      "Action": "Edit"
    }
  ];
  

const ManageCountry = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [columnWidths,setColumnWidths] = useState({});
  const tableRef=useRef(null);

  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = (country) => {
      setSelectedItem(country);
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
                <button className="manage-municipality-add-button">+ Add Country</button>
            </div>
            <input type="text" placeholder="Search" className="manage-municipality-search-input" />
            <div className="manage-municipality-span">
                <span>Showing {usersData.length} / {usersData.length} results</span>
            </div>
            <div className="table-container">
            <table  ref={tableRef}>
          <thead>
            <tr>
              {[
             'Country Symbol', 'Name', 'ISD Code', 'Is Active', 'Action'
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
                      onMouseDown={startResizing(
                        tableRef,
                        setColumnWidths
                      )(index)}
                    ></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
                    <tbody>
                        {usersData.map((country, index) => (
                            <tr key={index}>
                                <td>{country["Country Symbol"]}</td>
                                <td>{country.Name}</td>
                                <td>{country["ISD Code"]}</td>
                                <td>{country["Is Active"] ? 'true' : 'false'}</td>
                                <td className="manage-municipality-action-buttons">
                                <button 
                                        className="manage-municipality-action-button" 
                                        onClick={() => handleShowModal(country)}
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
                        <div className="manage-modal-modal-title">Update Country</div>
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
                                <Form.Label className="manage-modal-form-label">Country Symbol:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.["Country Symbol"] || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, "Country Symbol": e.target.value })}
                                    placeholder="Country Symbol"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="isdCode">
                                <Form.Label className="manage-modal-form-label">ISD Code:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={selectedItem?.["ISD Code"] || ''}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, "ISD Code": e.target.value })}
                                    placeholder="ISD Code"
                                    className="manage-modal-form-control"
                                />
                            </Form.Group>

                            <Form.Group controlId="isActive">
                                <Form.Label className="manage-modal-form-label">Is Active:</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedItem?.["Is Active"] || false}
                                    onChange={(e) => setSelectedItem({ ...selectedItem, "Is Active": e.target.checked })}
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
    
export default ManageCountry;
