<template>
  <div @click="navigate" class="card">
    <h2>{{event.title}}</h2>
    <p>@{{event.time}} - {{event.date}}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { EventItem } from '../../types';

export default Vue.extend({
  name: 'EventCard',
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
  methods: {
    navigate(): void {
      this.$router.push({ name: 'EventDetails', params: { id: this.event.id.toString() } });
    },
  },
});
</script>

<style scoped>
  .card {
    width: 400px;
    padding: 30px;
    border: 2px solid teal;
    margin: 0 auto 30px;
    cursor: pointer;
    transition: box-shadow .3s ease;
  }
  .card:hover {
    box-shadow: 0 3px 20px #2c3e50;
  }
</style>
