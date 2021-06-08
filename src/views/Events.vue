<template>
  <div>
    <h1>Events list</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <router-link
      v-if="page > 1" :to="{name: 'Events', query: {page: page - 1}}">Prev</router-link> |
    <router-link
      v-if="hasNextPage" :to="{name: 'Events', query: {page: page + 1}}">Next</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EventsService from '@/services/EventsService';
import { EventItem } from '../../types';
import EventCard from '../components/EventCard.vue';

export default Vue.extend({
  name: 'Events',
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  components: {
    EventCard,
  },
  data(): any {
    return {
      events: {} as EventItem[],
      totalEvents: null,
    };
  },
  created(): void {
    this.getData();
  },
  watch: {
    page(): void {
      this.getData();
    },
  },
  computed: {
    hasNextPage(): boolean {
      return Math.ceil(this.totalEvents / 2) > this.page;
    },
  },
  methods: {
    getData(): void {
      EventsService.getEvents(2, this.page).then((r) => {
        this.events = r.data;
        this.totalEvents = r.headers['x-total-count'];
      });
    },
  },
});
</script>

<style scoped>

</style>
