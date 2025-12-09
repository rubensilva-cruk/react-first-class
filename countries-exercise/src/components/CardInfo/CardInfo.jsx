import React from 'react';
import './CardInfo.css';

export default function CardInfo({ country }) {
  return (
    <div className="country-info">
      <img
        src={country.flags.png}
        alt={country.flags.alt || `${country.name} flag`}
      />
      <h3>{country.name}</h3>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>

      <div className="currency-section">
        <h4>Currencies:</h4>
        {country.currencies ? (
          <ul>
            {Object.entries(country.currencies).map(([code, currency]) => (
              <li key={code}>
                <strong alt={currency.name}>{code}</strong>
                {currency.symbol && ` (${currency.symbol})`}
              </li>
            ))}
          </ul>
        ) : (
          <p>No currency data available</p>
        )}
      </div>

      {/* Language Information */}
      <div className="language-section">
        <h4>Languages:</h4>
        {country.languages ? (
          <ul>
            {Object.entries(country.languages).map(([code, language]) => (
              <li key={code}>
                <strong alt={language}>{code}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>No language data available</p>
        )}
      </div>
    </div>
  );
}
