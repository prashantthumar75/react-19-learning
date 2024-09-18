export const SeriesCard = ({ currentElement }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } = currentElement;
  const ratingClass = rating >= 8.5 ? "super_hit" : "average"
  
  return (
    <>
      <li className="card">
        <div>
          <img src={img_url} alt="Money Heist" width="110%" height="50%" />
        </div>
        <div className="card-content">
          <h2> Name: {name}</h2>
          <h3>
            Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
          </h3>
          <p> {description} </p>
          <p>Genre: {genre.join(", ")} </p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </li>
    </>
  );
};