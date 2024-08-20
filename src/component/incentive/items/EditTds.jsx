import React from 'react';
import { useParams } from 'react-router-dom';

function EditTds() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit TDS% for Employee {id}</h1>
      {/* Your form for editing TDS% goes here */}
    </div>
  );
}

export default EditTds;
