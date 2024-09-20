import './App.css';
import { EventProps } from './components/EventProps';
import './components/Netflix.css';
function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading"> List of Best Nextflix series</h1>
        {/* <EventHandling></EventHandling> */}
        {/* <NetflixSeries />; */}
        <EventProps></EventProps>
      </section>
    </>
  );
}

export default App
