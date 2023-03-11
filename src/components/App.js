import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((allPokemon) => {
        setAllPokemon(allPokemon);
      });
  }, []);
  return (
    <div className="App">
      <PokemonPage allPokemon={allPokemon} setAllPokemon={setAllPokemon} />
    </div>
  );
}

export default App;
