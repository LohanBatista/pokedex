import {Pokemon, Request} from '../../interfaces';
import api from '../../services/api';

export const getAllPokemon = async () => {
  const response = await api.get('pokemon');
  const {results} = response.data;

  const payloadPokemons = await Promise.all(
    results.map(async (pokemon: Pokemon) => {
      const {id, types} = await getMoreInfo(pokemon.url);
      return {
        name: pokemon.name,
        id,
        types,
      };
    }),
  );

  return payloadPokemons;
};

const getMoreInfo = async (url: string): Promise<Request> => {
  const response = await api.get(url);
  const {id, types} = response.data;
  return {id, types};
};
