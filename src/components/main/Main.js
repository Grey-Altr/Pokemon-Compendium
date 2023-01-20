import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import Select from './controls/select/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange } = usePokemon();

  return (
    <>
      <section className="controls">
        <h1>Pokemon Compendium!</h1>
        <Select types={types} handleTypeChange={handleTypeChange} />
      </section>
      <section className="cards">
        {pokemon.map((poke) => (
          <p key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
          </p>
        ))}
      </section>
    </>
  );
}
