import { useEffect, useState } from 'react';
import { fetchInitPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchInitPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setLoading(true);
    setSelectedType(type);
    const data = await fetchPokemon(type);
    setPokemon(data);
    setLoading(false);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };

  return {
    pokemon,
    types,
    handleTypeChange,
    loading,
    query,
    setQuery,
    setSelectedType,
    handleButtonClick,
  };
}
