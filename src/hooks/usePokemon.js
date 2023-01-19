import { useEffect, useState } from 'react';
import { fetchInitPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitPokemon();
    };
    fetchData();
  }, []);
  return pokemon();
}
