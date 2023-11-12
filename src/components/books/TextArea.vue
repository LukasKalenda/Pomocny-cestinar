<template>
<div>
    <label for="Description" class="block text-lg text-black">{{ description }}</label>
    <textarea :placeholder="placeholder" class="block  mt-2 w-full  placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" v-model="content"></textarea>
</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['description', 'placeholder']);
</script>

<style lang="scss" scoped>

</style>