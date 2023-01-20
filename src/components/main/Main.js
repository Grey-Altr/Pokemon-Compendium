import React from 'react';
import './Main.css';
import { usePokemon } from '../../hooks/usePokemon.js';
import PokeList from '../Pokemon/PokeList.js';
import Select from './controls/select/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();

  return (
    <main>
      <section className="controls">
        <h1>Pokemon Compendium!</h1>
        <Select types={types} handleTypeChange={handleTypeChange} />
      </section>
      <section className="poke-list">
        {pokemon.map((poke) => (
          <PokeList key={poke.id} poke={poke} loading={loading} />
        ))}
      </section>
    </main>
  );
}
