import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Encampment Map</h1>
        <br/><br/>
        <button>Open Popup</button>
        <Popup trigger={true}>
          <h3>My popup</h3>
        </Popup>
      </main>
    </div>
  );
}

export default App;
