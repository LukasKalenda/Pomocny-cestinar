<template>
<div class="relative">
    <span class="absolute px-5 py-2 text-center text-gray-600  -translate-x-1/2 bg-white rounded-lg shadow-lg shadow-gray-200">
         {{ content }}
    </span>
</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>

<style lang="scss" scoped>

</style>