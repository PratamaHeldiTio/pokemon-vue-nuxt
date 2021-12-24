import state from "./state";

const getters = {
  getPokemonDetail: (state) => (id) => {
    return state.pokemons.filter((pokemon) => pokemon.id === parseInt(id))[0];
  },
  getPokemons: (state) => state.pokemons,
  getMyPokemons: (state) => state.myPokemons,
  getMyPokemonDetail: (state) => (id) => {
    return state.myPokemons.filter((pokemon) => pokemon.myPokemonId === id)[0];
  },
  getTotalMyPokemons: (state) => state.myPokemons.length,
};

export default getters;
