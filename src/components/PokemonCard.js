import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import PokemonCollection from "./PokemonCollection";

function PokemonCard({ pokemon }) {
  const [seeFront, setSeeFront] = useState(true);
  const handleFlip = () => {
    setSeeFront((cardPic) => !cardPic);
  };

  return (
    <>
      <Card onClick={handleFlip}>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={seeFront ? pokemon.sprites.front : pokemon.sprites.back}
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PokemonCard;