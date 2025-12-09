import './Body.css';
import Card from '../Card/Card';
import { useState } from 'react';

function Body() {
  const [favCountry, setFavCountry] = useState(null);
  const [originCountry, setOriginCountry] = useState(null);
  const [vacationCountry, setVacationCountry] = useState(null);

  const assignCategory = (category, country) => {
    console.log('im here', country, category);
    if (!country) return;

    switch (category) {
      case 'favCountry':
        setFavCountry(country);
        break;
      case 'originCountry':
        setOriginCountry(country);
        break;
      case 'vacationCountry':
        setVacationCountry(country);
        break;
      default:
        break;
    }
  };

  return (
    <div className="body">
      <div className="card-group ">
        <Card
          className="card"
          key="Fav Country"
          heading="Fav Country"
          country={favCountry}
          selectCountry={false}
        />

        <Card
          className="card"
          key="Dream Destine"
          heading="Dream Destine"
          country={vacationCountry}
          selectCountry={false}
        />

        <Card
          className="card"
          key="Origin Country"
          heading="Origin Country"
          country={originCountry}
          selectCountry={false}
        />

        <Card
          className="card"
          key="Select Country"
          heading="Select Country"
          selectCountry={true}
          assignCategory={assignCategory}
        />
      </div>
    </div>
  );
}

export default Body;
