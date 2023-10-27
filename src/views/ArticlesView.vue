<script setup>
import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import ArticleShow from "@/components/common/ArticleShow.vue";

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
  });
  articles.value = articlesArray;
});
</script>

<template>
  <section>
    <section class="bg-primary_white shadow dark:bg-secondary">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                Články
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Místo, kde jsou sdíleny různé články, které se týkají IT. Od
                hardwaru, přes sítě až po programování.
              </p>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-3/4 h-1/2 lg:max-w-2xl"
              src="../assets/img/undraw_article.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary_white shadow dark:bg-secondary">
      <div class="container px-6 py-16 mx-auto">
        <div class="justify-center lg:flex">
          <article class="w-2/3 sm:w-full">
            <h2 class="text-gray-800 dark:text-white lg:text-4xl pb-4">
              Všechny články
            </h2>
            <div>
              <ArticleShow />
            </div>
          </article>

          <aside class="w-1/3 sm:w-full">
            <h2 class="text-gray-800 dark:text-white lg:text-4xl pb-4">
              Jednotlivá témata
            </h2>
            jednot
          </aside>
        </div>
      </div>
    </section>
  </section>
</template>
