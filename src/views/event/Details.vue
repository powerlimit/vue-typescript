<template>
  <div>
    <h1>{{event.title}}</h1>
    <p>{{event.description}}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { EventItem } from '../../../types';

export default Vue.extend({
  name: 'Details',
  props: {
    event: {
      type: Object as PropType<EventItem>,
    },
  },
});
</script>

<style scoped>

</style>
