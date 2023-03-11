import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ allPokemon, setAllPokemon }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const addPokemon = (newPokemon) => {
    setAllPokemon([...allPokemon, newPokemon]);
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search search={search} handleSearch={handleSearch} />
      <br />
      <PokemonCollection
        allPokemon={allPokemon}
        setAllPokemon={setAllPokemon}
        search={search}
      />
    </Container>
  );
}

export default PokemonPage;