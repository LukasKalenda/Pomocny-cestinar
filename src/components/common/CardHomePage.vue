<template>
  <RouterLink :to="link">
    <div
      class="flex max-w-sm bg-gray rounded-lg shadow-md border-solid border-4 border-blue_light transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <div
        class="flex flex-col items-center text-center my-3 mx-4 justify-center"
      >
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <div class="w-6 rounded-full border-2 border-solid border-blue-500">
          ->
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: ["title", "description", "link"],
};
</script>
