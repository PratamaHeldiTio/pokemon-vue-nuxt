const mutations = {
  setPokemons: (state, data) => {
    state.pokemons = data;
  },
  setMyPokemons: (state, data) => {
    state.myPokemons.push(data);
  },
  deleteMyPokemon: (state, index) => {
    state.myPokemons.splice(index, 1);
  }
};

export default mutations;
