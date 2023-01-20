import React from 'react';

export default function PokeList({ pokemon, loading }) {
  if (loading) return <p>Loading...</p>;
  return (
    <section>
      {pokemon.map((poke) => (
        <div key={poke._id}>
          <img key={poke.id} src={poke.url_image} />
          <h2>{poke.pokemon}</h2>
          <p>
            Type: {poke.type_1}, {poke.type_2}
          </p>
          <p>
            Ability: {poke.ability_1}, {poke.ability_2}
          </p>
        </div>
      ))}
    </section>
  );
}
