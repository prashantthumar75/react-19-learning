import './App.css';
import './components/Netflix.css';
import ToggleSwitch from "./Projects/ToggleSwitch/ToggleSwtich";
function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading"> Toggle Button</h1>
        <ToggleSwitch />
      </section>
    </>
  );
}

export default App
