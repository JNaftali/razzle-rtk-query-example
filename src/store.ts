import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';

let data: any = undefined;
if (typeof document !== 'undefined') {
  data = JSON.parse(document.getElementById('redux')?.textContent || '');
}

export const store = configureStore({
  preloadedState: data,
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
