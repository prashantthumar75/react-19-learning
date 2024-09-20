import styled from "styled-components";

export const SeriesCard = ({ currentElement }) => {
  const { name, img_url, rating, description, cast, genre, watch_url } = currentElement;
  const ratingClass = rating >= 8.5 ? "super_hit" : "average"

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;
  // const ButtonThana = {
  const ButtonComponent = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;
  // const ButtonComponent = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   })
  return (
    <>
      <li className="card">
        <div>
          <img src={img_url} alt="Money Heist" width="110%" height="50%" />
        </div>
        <div className="flex flex-col gap-6 p-6">
          <h2> Name: {name}</h2>
          <Rating>
            Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
          </Rating>
          <p className="text-3xl font-bold underline"> {description} </p>
          <p>Genre: {genre.join(", ")} </p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank">
            <ButtonComponent>Watch Now</ButtonComponent>
          </a>
        </div>
      </li>
    </>
  );
};