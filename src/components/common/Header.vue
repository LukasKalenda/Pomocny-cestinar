<template>
  <header>
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-white"
    >
      <div class="container py-4 mx-auto">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <RouterLink to="/">
              <div class="flex items-center">
                <img
                  class="w-auto h-6 sm:h-7"
                  src="@/assets/img/book_bulb.png"
                  alt="Pomocny cestinar"
                />
                <span class="text-black text-xl">Pomocný</span> <span class="text-pink text-xl ml-1"> češtinář</span>
              </div>
            </RouterLink>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
              <button
                x-cloak
                x-on:click="isOpen = !isOpen"
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
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
            class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
          >
            <div
              class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8"
            >
              <Dropdown />
              <RouterLink
                :to="{ name: 'addbook' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
                >Vlastní rozbory</RouterLink
              >
              <RouterLink
                :to="{ name: 'project' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
                >Pro školy</RouterLink
              >
              <RouterLink
                :to="{ name: 'project' }"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
                >Kontakt</RouterLink
              >
            </div>

            <!-- Mobile nav -->
            <div class="flex items-center justify-center mt-4 lg:mt-0">
              <div v-if="isLogged">
                <MsgNoti />
                <DropdownProfile @signOut="handleSignOut" />
              </div>
              <div v-if="!isLogged">
                <RouterLink
                  :to="{ name: 'signin' }"
                  class="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div
                    class="w-6 h-6 overflow-hidden border-2 border-gray-400 rounded-full"
                  >
                    <img
                      src="@/assets/img/user.png"
                      class="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                </RouterLink>
              </div>
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

import Dropdown from "./Dropdown.vue";
import DropdownProfile from "./DropdownProfile.vue";

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
    console.log("Sign-out successful.");
    router.push("/");
  });
};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: rgb(130, 143, 216);
}
</style>
