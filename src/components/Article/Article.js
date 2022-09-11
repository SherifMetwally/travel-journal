import "./article.css";

export default function Artice(props) {
    console.log(props)
    
  return (
    <article className="article">
      <img src={`../images/${props.imageUrl}`} alt="mount-Fuji" />
      <div className="artice-details">
        <div className="location">

          <img
            className="location-icon"
            src="../../images/location.svg"
            alt="location"
          />{" "}
          <span className="country"> {props.location} </span>{" "}
          <a href={props.googleMapsUrl} className="link">
  
            View on Google Maps
          </a>
        </div>
        <h2 className="location-name">{props.title}</h2>
        <h5>{props.startDate} - {props.endDate}</h5>
        <p className="article-description">
          {props.description}
        </p>
      </div>
    </article>
  );
}
