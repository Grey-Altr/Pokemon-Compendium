import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';

export default function Main() {
  const pokemon = usePokemon();

  return (
    <div>
      <h1>Pokemon Compendium!</h1>
    </div>
  );
}
