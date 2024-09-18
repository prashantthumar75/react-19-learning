import './App.css';
import './components/Netflix.css';
import NetflixSeries from "./components/NetflixSeries";

function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading"> List of Best Nextflix series</h1>
        <NetflixSeries />;
      </section>
    </>
  );
}

export default App
