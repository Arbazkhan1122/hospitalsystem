import React from 'react';
import { useParams } from 'react-router-dom';
import './TripDetails.css';

const TripDetails = () => {
  const { id } = useParams();
  const trip = {
    id: id,
    driver: 'Jane Doe',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    distance: '12 miles',
    patientCondition: 'Stable',
  };

  return (
    <div className="trip-details-ambulance-management">
      <h1>Trip Details for Trip ID: {trip.id}</h1>
      <p>Driver: {trip.driver}</p>
      <p>Start Time: {trip.startTime}</p>
      <p>End Time: {trip.endTime}</p>
      <p>Distance: {trip.distance}</p>
      <p>Patient Condition: {trip.patientCondition}</p>
    </div>
  );
};

export default TripDetails;
