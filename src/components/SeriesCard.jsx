export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } =
    data;

   const ratingClass = rating >= 8.5 ? "super_hit" : "avarage";
  return (
    <li className="series-card">
      <div className="card-img">
        <img src={img_url} alt={name} width="40%" height="40%x" />
      </div>
      <div>
        <h3 className="card-title">Name: {name}</h3>
      <h3>
        Rating: <span className={`rating ${ratingClass} `}>
                  {rating}
                </span>
      </h3>
      <p className="card-desc"> Summary: {description}</p>
      <p>Genre: {genre.join(", ")}</p>
      <p>Cast: {cast.join(", ")}</p>
      <a href={watch_url} target="_blank">
        <button className="btn">Watch Now</button>
      </a>
      </div>
    </li>
  );
};

export default SeriesCard;
