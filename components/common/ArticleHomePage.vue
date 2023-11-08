<template>
  <article class="w-full lg:max-w-sm p-4">
    <div class="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        class="object-cover object-center w-full h-56"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <div class="px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            titulek
          </h1>
          <span class="text-md font-semibold text-gray-800 dark:text-white">čas</span>
        </div>

        <div class="lg:flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <span class="text-sm">autor</span>
        </div>
        <div class="mt-4 text-gray-700 dark:text-gray-200">
          <span class="text-sm"> čtení</span>
        </div>
        <p class="py-2 text-gray-700 dark:text-gray-400 truncate ...">
          content
        </p>

        <button
          class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <RouterLink to="/">Zobrazit</RouterLink>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
