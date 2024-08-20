import React, { useState } from 'react';
import AdmissionCancel from './admission-cancle';

const ParentComponent = () => {
  const [isCancelOpen, setIsCancelOpen] = useState(true);

  const handleCancelClosed = ({ CloseWindow }) => {
    if (CloseWindow) {
      setIsCancelOpen(false);
    }
  };

  return (
    <div>
      {isCancelOpen && (
        <AdmissionCancel 
          patientId="12345" 
          ipVisitId="67890" 
          onCancelClosed={handleCancelClosed} 
        />
      )}
    </div>
  );
};

export default ParentComponent;
