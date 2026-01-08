export const SeriesCard = ({ data }) => {
  const {  img_url, name, rating, description, cast, genre, watch_url } =
    data;
  return (
    <li className="series-card">
      <div className="card-img">
        <img src={img_url} alt={name} width="40%" height="40%x" />
      </div>
      <h3 className="card-title">Name: {name}</h3>
      <p>Rating: {rating}</p>
      <p className="card-desc"> Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button className="btn">Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
