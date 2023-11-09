<template>
  <div>
    <aside class="flex flex-col w-1/3">
      <section class="bg-gray rounded-lg border-solid border-2 border-black">
        <div>profileicons</div>
        <div>
          <span>name</span>
          <span>Vložených knížek</span>
          <span>ŠKOLA:</span>
        </div>
      </section>

      <section class="bg-gray rounded-lg border-solid border-2 border-black">
        <div>profileicons</div>
        <div>
          <span>name</span>
          <span>Vložených knížek</span>
          <span>ŠKOLA:</span>
        </div>
      </section>
    </aside>

    <div class="flex flex-col">
        <h2>Základní profilové informace</h2>
        <Table />
    </div>
  </div>
</template>

<script setup>
import Table from "@/components/common/Table.vue";
</script>

<style lang="scss" scoped></style>
