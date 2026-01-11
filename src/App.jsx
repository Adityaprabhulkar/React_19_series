// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
import "./components/Netflix.css"
import { EventHandling } from "./components/EventHandling";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />; */}
      <EventHandling/>
    </section>
  )
  //  <Profile/>
};
