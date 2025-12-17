import React, { useState, useEffect } from 'react';
import './CountryDropdown.css';

export default function CountryDropdown({ handleSelect }) {
  return <div className="country-dropdown"></div>;
}

//   <select
//     value={selectedCountry?.name || ''}
//     onChange={handleChange}
//   >
//     <option value={selectedCountry?.name || ''}>
//       {selectedCountry != null
//         ? selectedCountry.name
//         : 'Select a country...'}
//     </option>
//     {countriesList.map(c => (
//       <option key={c.code} value={c.code}>
//         {c.name}
//       </option>
//     ))}
//   </select>
