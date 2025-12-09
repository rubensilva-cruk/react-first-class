import React, { useState, useEffect } from 'react';
import './CountryDropdown.css';

export default function CountryDropdown({ handleSelect }) {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,currencies,languages'
    )
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) return;
        console.log(data[0]);
        console.log(data[1]);
        const list = data
          .map(c => ({
            code: c.cca3,
            name: c.name.common,
            flags: c.flags,
            region: c.region,
            population: c.population,
            currencies: c.currencies,
            languages: c.languages,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountriesList(list);
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = event => {
    const code = event.target.value;
    const country = countriesList.find(c => c.code === code) || null;
    handleSelect(country);
    setSelectedCountry(country);
  };

  return (
    <div className="country-dropdown">
      <select
        value={selectedCountry?.name || ''}
        onChange={handleChange} // Fixed: pass the function directly
      >
        <option value={selectedCountry?.name || ''}>
          {selectedCountry != null
            ? selectedCountry.name
            : 'Select a country...'}
        </option>
        {countriesList.map(c => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
