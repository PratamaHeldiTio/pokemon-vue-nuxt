import nanoid from 'nanoid';

const actions = {
  async getPokemonsAPI({ commit }) {
    let data = await this.$axios.$get('https://pokedex-bb36f.firebaseio.com/pokemon.json');
    //delete null data
    data.shift()
    commit('setPokemons', data)
  },
  catchMyPokemons({ commit }, pokemon) {
    if (Math.random() > 0.5) {
      const nickName = prompt('Set your pokemon name');
      if (!nickName) {
        alert(`${pokemon.name} run away! Let's find another pokemon!`);
        this.$router.push('/pokemon');
      } else {
        // add store myPokemons
        pokemon['nickName'] = nickName;
        pokemon['myPokemonId'] = nanoid(8);

        commit('setMyPokemons', pokemon);

        alert(`${pokemon.name} with the name ${pokemon.nickName} has been sucessfully added to my pokemon!`);
        this.$router.push('/mypokemon');
      }
    } else {
      alert(`${pokemon.name} run away! Let's find another pokemon`);
      this.$router.push('/pokemon');
    }
  },
  searchMyPokemon: ({ commit, state }, id) => {
    const indexMyPokemon = state.myPokemons.findIndex((pokemon) => pokemon.myPokemonId === id);
    commit('deleteMyPokemon', indexMyPokemon);
  },
}

export default actions
