<template>
  <div>
    <h1>Edit event</h1>
    {{userName}} <br>
    {{email}}
    <input type="text" v-model="name">
<!--    <button @click="submitName">Submit</button>-->
    <br>
    <p>{{counter}}</p>
    <button @click="increaseCounter">increaseCounter</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Edit',
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapState({
      counter: 'counter',
    }),
    userName(): string {
      return this.$store.state.user.name;
    },
    ...mapGetters({
      email: 'getEmail',
    }),
  },
  methods: {
    increaseCounter(): void {
      this.$store.commit('SET_COUNTER', this.counter + 1);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('SET_EMAIL', 'new-email@gmail.com');
    }, 3000);
  },
});
</script>

<style scoped>

</style>
