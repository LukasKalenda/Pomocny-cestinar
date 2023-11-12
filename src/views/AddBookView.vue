<template>
  <section class="container mx-auto">
    <h2 class="text-center">Tvorba rozborů</h2>
    <div class="mx-20">
      <div>
        <div v-for="area in editBook" :key="area.description">
          <label for="Description" class="block text-lg text-black">{{
            area.description
          }}</label>
          <textarea
            :placeholder="area.placeholder"
            class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            v-model="content"
          ></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const editBook = [
  {
    description: "Téma",
    placeholder: "tadz bude tema",
  },
  {
    description: "Motiv",
    placeholder: "tadz bude motiv",
  },
  {
    description: "Místo, čas",
    placeholder: "misto cas",
  },
];
</script>
