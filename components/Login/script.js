import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      username: 'user',
      password: 'userPass',
      inputUsername: '',
      inputPass: '',
      errorMessage: 'Password atau Username anda salah',
      hiddenError: true,
    };
  },
  methods: {
    inputValidation() {
      if (this.inputUsername === this.username && this.inputPass === this.password) {
        this.$store.dispatch('getPokemonsAPI');
        this.$router.push('./pokemon');
      } else {
        this.hiddenError = false;
      }
    },
  },
});
