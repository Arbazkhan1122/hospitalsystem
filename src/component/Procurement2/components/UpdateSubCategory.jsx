import React from 'react';
import './UpdateSubCategory.css';

const UpdateSubCategory = () => {
  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Update Item SubCategory</h2>
      <form>
        <div className="MeasssFormGroup">
          <label>SubCategory Name<span className="MeasssRequired">*</span></label>
          <input type="text" placeholder="Some Sub Category" />
        </div>

        <div className="MeasssFormGroup">
          <label>SubCategory Code</label>
          <input type="text" placeholder="0001" />
        </div>

        <div className="MeasssFormGroup">
          <label>Accounting Ledger</label>
          <select>
            <option value="option1"> ---Select Ledger---</option>
           
          </select>
        </div>


        <div className="MeasssFormGroup">
          <label>Description</label>
          <input type="text" placeholder="Description" />
        </div>

       
        <div className="MeasssFormGroup">
          <label>Category</label>
          <select>
            <option value="option1">Capital</option>
           
          </select>
        </div>


        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input type="checkbox" defaultChecked />
        </div>
        
        <button type="submit" className="MeasssBtnAdd">Update</button>
      </form>
    </div>
  );
}

export default UpdateSubCategory;
