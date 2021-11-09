import { useState } from "react";
import PokeList from "./components/Pokelist";
import FetchData from "./components/FetchData";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <div className="App">
      <PokeList list={pokemonList} />
      <FetchData setAppState={setPokemonList} />
    </div>
  );
}

export default App;
