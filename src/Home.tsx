import React from 'react';
import { useGetPokemonByNameQuery } from './services/pokemon';

export default function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      <h1>hallo</h1>
      {isLoading && <span>Loadinggggg.....</span>}
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}
