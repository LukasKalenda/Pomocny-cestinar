<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Cookies />
  </div>
</template>
<script setup>
import Cookies from '@/components/common/Cookies.vue'

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
