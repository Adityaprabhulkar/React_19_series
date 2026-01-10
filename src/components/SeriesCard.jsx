import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  // const btn = {
  // const ButtonStyle = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

   const ButtonStyle = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    fontWeight: bold;
    cursor: pointer;
  `;

  const Rating = styled.h3`
  font-size: 1.6rem;
  color: #7dcea0;
  text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? "super_hit" : "avarage";
  return (
    <li className="series-card">
      <div className="card-img">
        <img src={img_url} alt={name} width="40%" height="40%x" />
      </div>
      <div>
        <h3 className="card-title">Name: {name}</h3>
        <Rating>
          Rating: <span className={`rating ${ratingClass} `}>{rating}</span>
        </Rating>
        <p className="card-desc"> Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          {/* <button className="btn">Watch Now</button> */}
          <ButtonStyle rating={rating}>Watch Now</ButtonStyle>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
