import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }), // uncomment for brokenness repro ur welcome :)
  baseQuery: async (baseUrl, prepareHeaders, ...rest) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/${baseUrl}`,
      ...rest,
    );
    return { data: await response.json() };
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonList: builder.query({
      query: () => `pokemon`,
      transformResponse: (res: any) => res.results,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;
