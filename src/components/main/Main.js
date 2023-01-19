import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <div>
      <h1>Pokemon Compendium!</h1>
      {/* controls */}
      {/* cards */}
      <section>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon}</p>
        ))}
      </section>
    </div>
  );
}
