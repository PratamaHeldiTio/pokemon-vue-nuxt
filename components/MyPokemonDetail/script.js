import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      myPokemonDetail: {},
    };
  },
  mounted() {
    this.myPokemonDetail = this.$store.getters.getMyPokemonDetail(this.$route.params.id);
  },
});
