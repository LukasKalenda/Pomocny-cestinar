<template>
  <button
    class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-80"
    :class="`bg-${color}-600 hover:bg-blue-500 focus:ring-blue-400`"
  >
    <RouterLink :to="link">{{ text }}</RouterLink>
  </button>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  props: ["color", "link", "text"],
};
</script>

<style lang="scss" scoped></style>
