<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
const articles = ref();
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  let articlesArray = [];

  querySnapshot.forEach((doc) => {
    const article = {
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    };
    articlesArray.push(article);
  })
  articles.value = articlesArray;
});
</script>

<template>
  <div>articles!</div>
  <ul>
    <li v-for="a in articles" :key="a.id">
      <span> {{ a.id }}</span>
      <span>{{ a.title }}</span>
      <span>{{ a.content }}</span>
    </li>
  </ul>
</template>
