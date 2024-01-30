import React, { useState } from 'react';
import { format } from 'date-fns';
import ConfirmModal from './ConfirmModal';


const CitiesList = ({ cities, onRemoveCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [confirmText, setConfirmText] = useState(null);

  const handleRemove = (index) => {
    const { cityName } = cities[index];
    setConfirmText(`Are you sure you want to delete ${cityName}?`);
    setSelectedCity(index);
  }

  const handleRemoveConfirm = () => {
    onRemoveCity(selectedCity);
    resetSelectedCity();
  }

  const resetSelectedCity = () => {
    setConfirmText(null);
    setSelectedCity(null);
  }

  return (
    <div>
      <h5>List of cities travelled</h5>
      <div className="list-group">
        {cities.map((city, index) => (
          <div key={index}>
            <div className="d-flex w-100 justify-content-between">
              <p className="mb-1">{city.cityName}</p>
              <small className="me-3">
                <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemove(index)}>Delete</button>
              </small>
            </div>
            <small>You arrived on {format(new Date(city.dateArrived), 'iii, do MMM, yyyy')}</small>
            <hr />
          </div>
        ))}
      </div>

      {
        confirmText && <ConfirmModal
          show={Boolean(confirmText)}
          title='Confirm Delete'
          confirmText={confirmText}
          confirmButtonText='Yes, Delete'
          onCancel={resetSelectedCity}
          onConfirm={handleRemoveConfirm}
        />
      }
    </div>
  )
};

export default CitiesList;
