<template>
    <section class="flex flex-col items-center">
      <div class="lg:flex sm:items-center lg:w-3/4 bg-slate-300 dark:bg-blue-800 m-2 p-4 rounded-xl" v-for="c in content">
        <div class="w-full lg:w-1/2 lg:pr-3">
          <img class="rounded-xl" :src="c.image" alt="" />
        </div>
  
        <div class="w-full lg:w-1/2 mt-0 lg:px-7 pt-4 lg:pt-0 ">
          <h3 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{{c.title}}</h3>
          <p class="text-gray-800 dark:text-gray-300">
            {{ c.text }}
          </p>
          <button
            class="w-full px-5 py-2 mt-6  text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            <RouterLink :to="c.link">Vstoupit</RouterLink>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { RouterLink } from 'vue-router';

  const content = [
    {
      title: "Programování",
      text: "Tento kurz se zabývá základy programování. Nejedná se přímo o některý z jazyků, ale pohliží na vstup do vytváření kodu jako obecný, kde si každý zvolí svůj nástroj. V kurzu se naučíte základní principy, které jsou všude stejné a díky tomu se naučíte jakýkoliv jazyk.",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
      link: "/kurzy/programovani",
    },
    {
      title: "Web Development",
      text: "V poslední době velice žhavé téma a tím je Web Develompent. Tato oblast je velice komplexní a dělí se na spoustu podskupin a specifikací. V kurzu se dozvíte základní informace o tom, jak funguje web, jaké jsou jeho části a jak se dá vytvořit.",
      image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/kurzy/web-dev",
    },
    {
      title: "Hardware",
      text: "Hardware je základní kámen všech počítačů, bez toho by nám ostatní projekty fungovaly pouze na papíře. Dozvíte se všechny základní informace a jak pomocí softwaru ovládat hardware zase nazpátek.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/kurzy/hardware",
    },
  ];
  </script>
  
  <style lang="scss" scoped></style>