
export const SeriesCard = ({ currentElement }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } = currentElement;
  const ratingClass = rating >= 8.5 ? "super_hit" : "average"
  const ButtonThana = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
    };
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
            <button style={ButtonThana}>Watch Now</button>
          </a>
        </div>
      </li>
    </>
  );
};