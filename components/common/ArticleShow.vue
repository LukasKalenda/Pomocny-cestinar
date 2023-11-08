<template>
  <div>
    <div class="bg-c_gray shadow p-6 rounded-xl my-4">
      <RouterLink :to="{ name: 'article'}">
        <div>
          <h3>titulek</h3>
        </div>
        <div class="flex gap-4 py-2">
          <span class="bold">Datum <span></span></span>
          <span class="bold">Kategorie <span></span></span>
        </div>
        <div>
          <p class="show-text">Krátká ukayka texstu</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.bold {
  font-weight: 600;
}
h3 {
  font-size: 1.5rem;
}
</style>
