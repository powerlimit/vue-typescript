<template>
  <div>
    <ul class="menu">
      <li><router-link :to="{name: 'EventDetails'}">Details</router-link></li>
      <li><router-link :to="{name: 'EventRegister'}">Register</router-link></li>
      <li><router-link :to="{name: 'EventEdit'}">Edit</router-link></li>
    </ul>
    <router-view :event="event"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EventsService from '@/services/EventsService';
import { EventItem } from '../../../types';

export default Vue.extend({
  props: {
    id: {
      type: Number,
    },
  },
  name: 'Layout',
  data() {
    return {
      event: {} as EventItem,
    };
  },
  created() {
    EventsService.getEvent(this.id).then((r) => {
      this.event = r.data;
    }).catch((e) => {
      this.$router.push({ name: '404Resource', params: { resource: 'event' } });
    });
  },
});
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  padding: 5px;
}
</style>
