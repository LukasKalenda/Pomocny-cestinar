<script setup>
import { db } from "@/firebase"
const articles = useCollection(collection(db, 'articles'))
</script>

<template>
    <div>articles!</div>
  <ul>
    <li v-for="a in articles" :key="a.id">
        <span>{{ a.title }}</span>
      <span>{{ a.content }}</span>
    </li>
  </ul>
</template>