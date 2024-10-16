import React, { useState } from 'react';
import './AddPackagingType.css';

const AddPackagingType = ({onclose}) => {
  const [packagingTypeName, setPackagingTypeName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const packagingType = {
      packagingTypeName,
      description,
      isActive
    };

    try {
      const response = await fetch('http://localhost:8080/api/packageType/savePackageType', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packagingType),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response here (e.g., show a success message or reset the form)
      alert('Packaging Type added successfully!');
      setPackagingTypeName('');
      setDescription('');
      setIsActive(true);
      onclose();
    } catch (error) {
      // Handle error here (e.g., show an error message)
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="MeasssAddItemSubcategory">
      <h2>Add Packaging Type</h2>
      <form onSubmit={handleSubmit}>
        <div className="MeasssFormGroup">
          <label>Packaging Type Name<span className="MeasssRequired">*</span></label>
          <input
            type="text"
            placeholder="Packaging Type Name"
            value={packagingTypeName}
            onChange={(e) => setPackagingTypeName(e.target.value)}
            required
          />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
       
        <div className="MeasssFormGroup">
          <label>Is Active</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>
        <button type="submit" className="MeasssBtnAdd">Add Packaging Type</button>
      </form>
    </div>
  );
}

export default AddPackagingType;

