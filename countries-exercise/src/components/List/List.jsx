import './List.css';

function List({ countryList }) {
  return (
    <div className="list flex-center">
      {countryList.map((item, index) => (
        <div key={index} className="list-item">
          <span className="rank">{index + 1}</span>
          <span className="value">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default List;
