import React from 'react';
import './UpdateCurrency.css';

const UpdateCurrency = () => {
  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Update Currency</h2>
      <form>
        <div className="MeasssFormGroup">
          <label>Currency Code<span className="MeasssRequired">*</span></label>
          <input type="text" placeholder="NPR" />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Description</label>
          <input type="text" placeholder="Indian Rupees" />
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

export default UpdateCurrency;
