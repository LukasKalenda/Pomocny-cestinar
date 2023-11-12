<template>
  <div class="container mx-auto flex gap-12">
    <aside class="flex flex-col profile-data">
      <section class="bg-gray rounded-lg border-solid border-2 border-black profile">
        <div class=""><div class="icon"></div></div>
        <div class="profile-text">
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

<style lang="scss" scoped>
.profile-data {
  min-width: 25%;
}
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  .icon {
    width: 150px;
    border-radius: 100%;
    height: 150px;
    background-color: bisque;
    margin-top: 1rem;
  }
  .profile-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    span {
      margin: 0.5rem;
    }
  }
}
</style>
