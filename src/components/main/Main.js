import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeList from '../Pokemon/PokeList.js';
import Select from './controls/select/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();

  return (
    <>
      <section className="controls">
        <h1>Pokemon Compendium!</h1>
        <Select types={types} handleTypeChange={handleTypeChange} />
      </section>
      <section>
        {pokemon.map((poke) => (
          <PokeList key={poke.id} poke={poke} loading={loading} />
        ))}
      </section>
    </>
  );
}
