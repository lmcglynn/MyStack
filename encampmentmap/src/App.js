import React from 'react';
import popup from './components/popup'

function App() {
  return (
    <div className="App">
      <main>
        <h1>Encampment Map</h1>
        <br/><br/>
        <button>Open Popup</button>
        <popup trigger={true}>
          <h3>My popup</h3>
        </popup>
      </main>
    </div>
  );
}

export default App;
