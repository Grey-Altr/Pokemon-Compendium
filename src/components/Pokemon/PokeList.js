import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <section>
      {pokemon.map((poke) => (
        <div key={poke._id}>
          <img key={poke.id} src={poke.url_image} />
          <p key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
          </p>
        </div>
      ))}
    </section>
  );
}
