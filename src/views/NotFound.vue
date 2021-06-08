<template>
  <div>
    <h1>The {{resource}} you are looking for does not exists.</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFound',
  props: {
    resource: {
      type: String,
      default: 'page',
    },
  },
});
</script>

<style scoped>

</style>
