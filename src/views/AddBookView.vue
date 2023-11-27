<template>
  <section class="container mx-auto">
    <h2 class="text-center">Tvorba rozborů</h2>
    <MarkDown v-model="value" />
  </section>
</template>

<script setup>
import MarkDown from '../components/books/MarkDown.vue';
</script>
