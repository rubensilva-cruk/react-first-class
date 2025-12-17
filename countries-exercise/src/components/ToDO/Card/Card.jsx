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

// structure comes on the exercise: dropdown - cardinfo - selector
// they should discuss the logic and how thing will communicate
// will come empty only with the div card-box and maybe the image class
// main div shoulbe be className="card-body flex-center"
// image should be className="card-img"
