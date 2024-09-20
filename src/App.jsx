import './App.css';
import './components/Netflix.css';
import NetflixSeries from "./components/NetflixSeries";
import { EventHandling } from './components/EventHandling';
function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading"> List of Best Nextflix series</h1>
        <EventHandling></EventHandling>
        {/* <NetflixSeries />; */}
      </section>
    </>
  );
}

export default App
