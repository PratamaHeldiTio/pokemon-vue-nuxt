import Vue from 'vue';

export default Vue.extend({
  methods: {
    goToPokemonDetail(id) {
      this.$router.push('/pokemon/detail/' + id);
    }
  },
  computed: {
    pokemons() {
      return this.$store.getters.getPokemons;
    },
    totalMyPokemons() {
      return this.$store.getters.getTotalMyPokemons;
    }
  }
})