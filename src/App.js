import CharacterCard from './CharacterCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-container">
        <h1>
          Rick & Morty Character
        </h1>
        <CharacterCard characterId="800" />
      </main>
    </div>
  );
}

export default App;
