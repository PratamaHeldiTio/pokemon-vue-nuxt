import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      pokemonDetail: {},
    }
  },
  mounted() {
    this.pokemonDetail = this.$store.getters.getPokemonDetail(this.$route.params.id);
  },
  methods: {
    catchPokemon() {
      this.$store.dispatch('catchMyPokemons', this.pokemonDetail);
    },
  },
})
