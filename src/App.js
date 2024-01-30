import React, { useState } from 'react';

import PersonalInfoForm from './components/PersonalInfoForm';
import CitiesVisitedForm from './components/CitiesVisitedForm';
import Spinner from 'react-bootstrap/Spinner';


function App() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: null,
    citiesVisited: [],
  });

  const handlePersonalInfoChange = (personalInfo) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      personalInfo
    }));
  }

  const handleCitiesVisitedChange = (cities) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      citiesVisited: cities
    }))
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('Save data:', formData);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <PersonalInfoForm onPersonalInfoChange={handlePersonalInfoChange} />
              </div>
              <CitiesVisitedForm onCitiesChange={handleCitiesVisitedChange} />
              <div className="mt-3 row">
                <div className="row justify-content-center">
                  <button
                    className="btn btn-success col-3"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!formData.personalInfo || !formData.citiesVisited.length || loading}
                  >
                    {loading ? 'Saving..' : 'Save'}
                    {loading && <Spinner animation="border" size="sm" />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
