import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ allPokemon, search }) {
  return (
    <Card.Group itemsPerRow={6}>
      {allPokemon
        .filter((pokemon) => pokemon.name.includes(search))
        .map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            key={allPokemon.indexOf(pokemon)}
          />
        ))}
    </Card.Group>
  );
}

export default PokemonCollection;
