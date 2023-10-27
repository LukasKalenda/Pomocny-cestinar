<template>
  <div>
    <div class="bg-c_gray shadow p-6 rounded-xl my-4">
      <RouterLink :to="{ name: 'article'}">
        <div>
          <h3>titulek</h3>
        </div>
        <div class="flex gap-4 py-2">
          <span>Datum</span>
          <span> Kategorie</span>
        </div>
        <div>
          <p class="py-2 truncate ...">obsahssssssssssssssssssssssssssssss</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
