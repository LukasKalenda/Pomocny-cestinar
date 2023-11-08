<template>
  <div x-data="{ isOpen: false }" class="relative inline-block">
    <!-- Dropdown toggle button -->
    <button
      x-on:click="isOpen = !isOpen"
      class="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
      aria-label="show notifications"
    >
      <svg
        class="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      x-show="isOpen"
      x-on:click.away="isOpen = false"
      x-transition:enter="transition ease-out duration-100"
      x-transition:enter-start="opacity-0 scale-90"
      x-transition:enter-end="opacity-100 scale-100"
      x-transition:leave="transition ease-in duration-100"
      x-transition:leave-start="opacity-100 scale-100"
      x-transition:leave-end="opacity-0 scale-90"
      class="absolute right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
    >
      <div class="py-2">
        <a
          href="#"
          class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          <img
            class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <p class="mx-2 text-sm text-gray-600 dark:text-white">
            <span class="font-bold" href="#">Slick Net</span> start following
            you . 45m
          </p>
        </a>
        <a
          href="#"
          class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          <img
            class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
            src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />
          <p class="mx-2 text-sm text-gray-600 dark:text-white">
            <span class="font-bold" href="#">Jane Doe</span> Like Your reply on
            <span class="text-blue-500 hover:underline" href="#"
              >Test with TDD</span
            >
            artical . 1h
          </p>
        </a>
        <a
          href="#"
          class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <img
            class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
            alt="avatar"
          />
          <p class="mx-2 text-sm text-gray-600 dark:text-white">
            <span class="font-bold" href="#">Abigail Bennett</span> start
            following you . 3h
          </p>
        </a>
      </div>
      <a
        href="#"
        class="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
        >Zobrazit všechny notifikace</a
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
