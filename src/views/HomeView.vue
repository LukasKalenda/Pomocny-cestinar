<template>
  <main>
    <!-- Landing page -->
    <section class="bg-c_gray shadow dark:bg-secondary scroll-smooth">
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                Studijní síť
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Portál, kde je možnost se učit novým věcem. Přes hardwarové
                začátky, po seznámení se s počítačovými sítěmi a jejich
                konfigurace až po programování.
              </p>

              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <a href="#kurzy">Studovat</a>
              </button>
              <button
                class="w-full px-5 py-2 mt-6 lg:ml-4 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Zjistit více ->
              </button>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-full h-full lg:max-w-3xl"
              src="../assets/img/undraw_world.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- kurzy -->
    <section class="bg-c_gray shadow dark:bg-secondary">
      <h2
        class="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl pb-4 pt-4"
        id="kurzy"
      >
        Kurzy
      </h2>
      <div class="container mx-auto">
        <CourseHomePage />
      </div>
    </section>

    <!-- O projektu -->
    <section class="bg-c_gray shadow dark:bg-secondary">
      <div class="container px-6 py-16 mx-auto">
        <div
          class="items-center lg:flex bg-slate-300 dark:bg-blue-800 p-6 rounded-lg"
        >
          <div class="w-full lg:w-1/2 p-3">
            <div class="lg:max-w-lg">
              <h2
                class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
              >
                O projektu
              </h2>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Ahoj, jsme moc rádi, že si navšívil tento web. Tyto stránky jsou
                projekt jak se pokusit lidem přiblížit informační technologie.
                Již i v češtině extistuje spousta skvělých stránek, ale myslím,
                že jim něco chybí.
              </p>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Určitá témata se budu zkusit zpracovat, aby byla více zábavná a
                měla větší kontakt se čtenářem. Jo, pokud se ti projekt líbí,
                neváhej se přidat, kontaky nalezneš níže.
              </p>

              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <RouterLink to="/nas-tym">Náš tým</RouterLink>
              </button>
            </div>
          </div>

          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-full h-full lg:max-w-3xl"
              src="../assets/img/learning_team.svg"
              alt="World Network Ilustration"
            />
          </div>
        </div>
      </div>
    </section>

    <section></section>

    <!-- Novinky a články -->
    <section class="bg-c_gray shadow dark:bg-blue-950">
      <h2
        class="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
      >
        Nejnovější články
      </h2>
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center flex lg:flex-row flex-col flex-wrap">
          <ArticleHomePage />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import ArticleHomePage from "@/components/common/ArticleHomePage.vue";
import CourseHomePage from "@/components/common/CourseHomePage.vue";
</script>
