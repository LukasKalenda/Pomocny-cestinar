<template>
  <section class="container mx-auto">
    <h2 class="text-center">Tvorba rozborů</h2>
    
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
