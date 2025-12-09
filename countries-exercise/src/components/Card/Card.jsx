import { useState, useEffect } from 'react';
import './Card.css';
import CardInfo from '../CardInfo/CardInfo';
import DropdownSelector from '../DropDownSelector/DropdownSelector';
import CountryDropdown from '../CountryDropdown/CountryDropdown';

function Card({ heading, country, assignCategory, selectCountry }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory && selectedCountry) {
      assignCategory(selectedCategory.id, selectedCountry);
    }
  }, [selectedCategory]);

  useEffect(() => {
    console.log('im on conutry use effect  ahhaha');

    console.log('im on conutry use effect');
    setSelectedCountry(country);
  }, [country]);

  const handleSelect = selectedCountry => {
    console.log('Country selected in Card:', selectedCountry);

    setSelectedCountry(selectedCountry);
  };

  return (
    <div className="card-container flex-center">
      <h2>{heading}</h2>

      {selectCountry && <CountryDropdown handleSelect={handleSelect} />}

      <div className="card-body flex-center">
        {selectedCountry ? (
          <CardInfo country={selectedCountry} />
        ) : (
          <>
            {' '}
            <img
              src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg"
              alt="placeholder"
              className="card-img"
            />
            <h2>Select a country</h2>
          </>
        )}
      </div>
      {selectCountry && (
        <DropdownSelector setSelectedCategory={setSelectedCategory} />
      )}
    </div>
  );
}

export default Card;
