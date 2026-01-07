export const App = () => {
  return (
    <div>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
      <NetflixSeries/>
    </div>
  );
};


  const NetflixSeries = () => {

    const name = "Stranger Things";
    const rating = 4.7;
    const summary =
     "Stranger Things is a sci-fi thriller series set in the 1980s. It follows a group of kids in the town of Hawkins whose lives change when a boy named Will disappears.Together, they fight supernatural creatures and government conspiracies while protecting their friends and families.";

     const returnGenre = () => {
      const genre = "Horror";
      return genre;
     }

    return(
       <div>
      <div>
        <img src="stranger.png" alt="st" width="40%" height="40%x" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {2+2.8}</h3>
      <p> Summar: {summary}</p>
      <p>Genre: {returnGenre()}</p>
    </div>
    )
  }