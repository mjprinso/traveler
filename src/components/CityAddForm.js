import React, { useState, useEffect } from 'react';

import DateInput from './inputs/DateInput';
import TextInput from './inputs/TextInput';

const CityAddForm = ({ onAddCity }) => {
  const [newCity, setNewCity] = useState({ dateArrived: '', cityName: '' });
  const [reset, setReset] = useState(false);
  const currentDate = new Date().toISOString().split('T')[0];

  const handleInputChange = (inputName, value) => {
    setNewCity((prevCity) => ({
      ...prevCity,
      [inputName]: value,
    }));
  };

  const handleAddCity = () => {
    onAddCity(newCity);
    setReset(true)
  };

  useEffect(() => {
    if (reset) {
      setNewCity({ dateArrived: '', cityName: '' });
      setReset(false);
    }
  }, [reset]);

  return (
    <div key={reset}>
      <div className="mb-3">
        <TextInput
          inputName="cityName"
          inputLabel="City Name"
          value={newCity.cityName}
          onChange={(value) => handleInputChange('cityName', value)}
        />
      </div>

      <div className="mb-3">
        <DateInput
          inputName="dateArrived"
          inputLabel="Date Arrived"
          value={newCity.dateArrived}
          maxDate={currentDate}
          onChange={(value) => handleInputChange('dateArrived', value)}
        />
      </div>

      <div className="mb-3 row">
        <div className="row justify-content-end">
          <button
            className="btn btn-primary col-4 col-sm-3"
            type="button"
            onClick={handleAddCity}
            disabled={!newCity?.cityName || !newCity?.dateArrived}
          >
            Add City
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityAddForm;
