import React, { useState } from 'react';
import './SubCategory.css';
import AddItemSubCategory from '../components/AddItemSubCategory';
import UpdateSubCategory from '../components/UpdateSubCategory';

const SubCategoryList = () => {
  const [isAddingSubCategory, setIsAddingSubCategory] = useState(false);
  const [isUpdatingSubCategory, setIsUpdatingSubCategory] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddingSubCategory(true);
  };

  const handleEditButtonClick = () => {
    setIsUpdatingSubCategory(true);
  };

  const handleCloseAddSubCategory = () => {
    setIsAddingSubCategory(false);
  };

  const handleCloseUpdateSubCategory = () => {
    setIsUpdatingSubCategory(false);
  };

  return (
    <div className="ateg-sub-category-container">
      <div className="ateg-content">
        <button className="ateg-add-button" onClick={handleAddButtonClick}>
          Add Sub Category
        </button>

        <div className="ateg-search-bar">
          <input type="text" placeholder="Search" />
          <button className="ateg-search-button">🔍</button>
        </div>

        <div className="ateg-results-info">
          Showing 7 / 7 results
          <button className="ateg-print-button">Print</button>
        </div>

        <table className="ateg-sub-category-table">
          <thead>
            <tr>
              <th>Sub Category Name</th>
              <th>Code</th>
              <th>Category</th>
              <th>Description</th>
              <th>Ledger Name</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>some sub category</td>
              <td>0001</td>
              <td>Capital</td>
              <td></td>
              <td></td>
              <td>true</td>
              <td>
                <button className="ateg-edit-button" onClick={handleEditButtonClick}>
                  Edit
                </button>
              </td>
            </tr>
            {/* Add other rows similarly */}
          </tbody>
        </table>

        <div className="ateg-pagination">
          <span>1 to 7 of 7</span>
          <button disabled>First</button>
          <button disabled>Previous</button>
          <span>Page 1 of 1</span>
          <button disabled>Next</button>
          <button>Last</button>
        </div>
      </div>

      {isAddingSubCategory && (
        <AddItemSubCategory onClose={handleCloseAddSubCategory} />
      )}

      {isUpdatingSubCategory && (
        <div className="ateg-popup-overlay">
          <div className="ateg-popup">
            <UpdateSubCategory />
            <button className="ateg-close-button" onClick={handleCloseUpdateSubCategory}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategoryList;
