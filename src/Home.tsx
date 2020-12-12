import React from 'react';
import { Link } from 'react-router-dom';
import { useGetPokemonListQuery } from './services/pokemon';

export default function Home() {
  const { data, error, isLoading } = useGetPokemonListQuery('');

  return (
    <div>
      <h1>hallo</h1>
      {isLoading && <span>Loadinggggg.....</span>}
      <ul>
        {data &&
          data.map((pokemon: any) => (
            <li>
              <Link to={pokemon.name}>{pokemon.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
