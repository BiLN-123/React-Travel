import './trip.scss';

function DataTrip(props) {
  return (
    <div className="datatrip">
      <div className="datatrip-card">
        <div className="datatrip-card-image">
          <img src={props.image} alt="trip" />
        </div>
        <div className="datatrip-card-title">
          <h4>{props.heading}</h4>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default DataTrip;
