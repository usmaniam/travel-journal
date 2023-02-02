import location from "../assets/position.png"

function Card(props) {
    return (
      <div className="card">
        <div className="card--img-box">
          <img className="card--img" src={props.imageUrl}/>
        </div>
        <div className="card--info">
          <img src={location} />
          <h2 className="card--location">{props.location}</h2>
          <a className="card--location-url" href={props.googleMapsUrl}> 
          View on Google Maps
          </a>  
          <h3 ClassName="card--title">{props.title}</h3>
          <p className="card--date">
              {props.startDate} - {props.endDate}
          </p>
            <p className="card--description">{props.description}</p> 
        </div>         
      </div>
    )
}

export default Card