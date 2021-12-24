import Vue from 'vue';

export default Vue.extend({
  methods: {
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();

        setTimeout(() => this.$nuxt.$loading.finish(), 500);
      })
    },
    releaseMyPokemon(myPokemonId) {
      this.$store.dispatch('searchMyPokemon', myPokemonId);
    },
    goToMyPokemonDetail(myPokemonId) {
      this.$router.push('/mypokemon/detail/' + myPokemonId);
    },
  },
  computed: {
    myPokemons() {
      return this.$store.getters.getMyPokemons;
    },
  },
})
