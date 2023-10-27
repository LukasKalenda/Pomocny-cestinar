<template>
  <header>
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-primary_white shadow dark:bg-primary_dark"
    >
      <div class="container px-6 py-4 mx-auto">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <RouterLink to="/">
              <div class="flex items-center">
                <img
                  class="w-auto h-6 sm:h-7"
                  src="@/assets/img/main_logo.png"
                  alt="CZNETWORK Logo"
                />
                <span class="dark:text-gray-200 ml-1 text-xl">CZNETWORK</span>
              </div>
            </RouterLink>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
              <button
                x-cloak
                x-on:click="isOpen = !isOpen"
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            x-cloak
            :class="[
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 -translate-x-full',
            ]"
            class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          >
            <div
              class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8"
            >
              <Dropdown />
              <RouterLink
                :to="{ name: 'articles' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Články</RouterLink
              >
              <RouterLink
                :to="{ name: 'project' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Projekt</RouterLink
              >
              <RouterLink
                :to="{ name: 'contact' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Kontakt</RouterLink
              >
            </div>

            <!-- Mobile nav -->
            <div class="flex items-center justify-center mt-4 lg:mt-0">
              <!-- <DarkModeSwitcher -->
              <div class="flex">
                <img
                  class="dark:hidden moon cursor-pointer w-6 h-6 overflow-hidden border-1 border-gray-400 rounded-full"
                  src="@/assets/img/moon.svg"
                  alt="Moon Icon"
                />
                <img
                  class="sun cursor-pointer w-6 h-6 overflow-hidden border-1 border-gray-400 rounded-full"
                  src="@/assets/img/bulb.svg"
                  alt="Sun Icon"
                />
              </div>
              <MsgNoti />
              <DropdownProfile @signOut="handleSignOut" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../../router";

import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import MsgNoti from "./MsgNoti.vue";
import Dropdown from "./Dropdown.vue";
import DropdownProfile from "./DropdownProfile.vue";

//themeMode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

onMounted(() => {
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");
  moon.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  });
  sun.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  });
});

const isLogged = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLogged.value = true;
    } else {
      isLogged.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: rgb(130, 143, 216);
}
</style>
