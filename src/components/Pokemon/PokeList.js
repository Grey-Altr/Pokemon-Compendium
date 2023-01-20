import React from 'react';

export default function PokeList({
  poke: { _id, url_image, pokemon, type_1, type_2, ability_1, ability_2 },
  loading,
}) {
  if (loading) return <p>Loading...</p>;
  return (
    <section>
      <div key={_id}>
        <img key={_id} src={url_image} />
        <h2>
          {pokemon
            .split(' ')
            .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
            .join(' ')}
        </h2>
        <p>
          Type: {type_1}, {type_2}
        </p>
        <p>
          Ability: {ability_1}, {ability_2}
        </p>
      </div>
    </section>
  );
}
