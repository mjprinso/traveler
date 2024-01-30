import React, { useState, useEffect } from 'react';
import CityFormAdd from './CityAddForm';
import CitiesList from './CitiesList';

const CitiesVisitedForm = ({ onCitiesChange }) => {
  const [cities, setCities] = useState([]);

  const handleAddCity = (newCity) => {
    setCities([...cities, newCity]);
  };

  const handleRemoveCity = (index) => {
    setCities((prevCities) => prevCities.filter((city, i) => i !== index));
  };

  useEffect(() => {
    onCitiesChange(cities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  return (
    <section>
      <h4>Cities Travelled</h4>
      {Boolean(!cities.length) && <p className="font-monospace text-danger text-sm"> Add atleast one city</p>}
      <CityFormAdd onAddCity={handleAddCity} />
      {Boolean(cities.length) && <CitiesList cities={cities} onRemoveCity={handleRemoveCity} />}
    </section>
  );
};

export default CitiesVisitedForm;
