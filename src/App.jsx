import './App.css';
import { DedicatedState } from './components/DedicatedState';
import './components/Netflix.css';
function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading"> List of Best Nextflix series</h1>
        {/* <EventHandling></EventHandling> */}
        {/* <NetflixSeries />; */}
        <DedicatedState></DedicatedState>
        {/* <EventProps></EventProps> */}
      </section>
    </>
  );
}

export default App
