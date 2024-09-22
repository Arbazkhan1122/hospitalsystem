import React, { useState } from 'react';
import Modal from 'react-modal';
import './Items.css';
import AddItem from '../components/AddItem';
import UpdateUnitOfMeasurement from './UpdateUnitOfMeasurement';
import UpdateItem from '../components/UpdateItem';

const ItemList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to hold the item to be edited

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedItem(null);
  };

  const dummyItemData = {
    itemCategory: 'Capital Goods',
    itemSubCategory: 'Some Subcategory',
    itemName: 'Towel',
    itemCode: '0001001',
    unitOfMeasurement: 'Piece',
    description: '',
    minStockQuantity: 100,
    standardRate: 0,
    isVatApplicable: false,
    isActive: true,
    inventory: 'Common',
  };

  return (
    <div className="item-list-container">
      <div className="header">
        <button className="add-button" onClick={openAddModal}>Add Item</button>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">🔍</button>
        </div>
        <div className="results-info">
          Showing 8 / 8 results
          <button className="export-button">Export</button>
          <button className="print-button">Print</button>
        </div>
      </div>
      
      <table className="item-table">
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Subcategory Name</th>
            <th>Item Name</th>
            <th>Item Code</th>
            <th>Unit</th>
            <th>Description</th>
            <th>Min Stock</th>
            <th>Standard Rate</th>
            <th>Is VAT Applicable</th>
            <th>Is Active</th>
            <th>Inventory Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dummyItemData.itemCategory}</td>
            <td>{dummyItemData.itemSubCategory}</td>
            <td>{dummyItemData.itemName}</td>
            <td>{dummyItemData.itemCode}</td>
            <td>{dummyItemData.unitOfMeasurement}</td>
            <td>{dummyItemData.description}</td>
            <td>{dummyItemData.minStockQuantity}</td>
            <td>{dummyItemData.standardRate}</td>
            <td>{dummyItemData.isVatApplicable ? 'true' : 'false'}</td>
            <td>{dummyItemData.isActive ? 'true' : 'false'}</td>
            <td>{dummyItemData.inventory}</td>
            <td>
              <button className="edit-button" onClick={() => openEditModal(dummyItemData)}>
                Edit
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      
      <div className="pagination">
        <span>1 to 8 of 8</span>
        <button disabled>First</button>
        <button disabled>Previous</button>
        <span>Page 1 of 1</span>
        <button disabled>Next</button>
        <button disabled>Last</button>
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Item Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <AddItem/>
        <button className="close-modal-button" onClick={closeAddModal}>
          Close
        </button>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Item Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <UpdateItem />
        <button className="close-modal-button" onClick={closeEditModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ItemList;
