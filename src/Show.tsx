import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from './services/pokemon';

export default function Show() {
  const { pokemon }: { pokemon: string } = useParams();
  const { data } = useGetPokemonByNameQuery(pokemon);

  return (
    <div>
      <Link to="/">Go back home</Link>
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>
            Has the abilities:{' '}
            {data.abilities.map((ab: any) => ab.ability.name).join(' and ')}
          </p>
        </>
      )}
    </div>
  );
}
