import './Card.css';

function Card({ heading, country, assignCategory, selectCountry }) {
  return (
    <div className="card-container flex-center">
      <div className="card-body flex-center"></div>
    </div>
  );
}

export default Card;

// structure comes on the exercise: dropdown - cardinfo - selector
// they should discuss the logic and how thing will communicate
// will come empty only with the div card-box and maybe the image class
// main div shoulbe be className="card-body flex-center"
// image should be className="card-img"
