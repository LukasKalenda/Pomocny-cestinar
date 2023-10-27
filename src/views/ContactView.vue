<template>
  <section
    class="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
  >
    <div class="container flex flex-col min-h-screen px-6 py-12 mx-auto">
      <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
        <div class="text-white lg:w-1/2 lg:mx-6">
          <h1 class="text-2xl font-semibold capitalize lg:text-3xl">
            Napište nám
          </h1>

          <p class="max-w-xl mt-6">
            Zaujala Vás naše práce nebo jen máte dozaz?
          </p>

          <div class="mt-6 space-y-8 md:mt-8">
            <p class="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <!-- Mailová adresa -->
              <span class="mx-2 text-white truncate w-72"
                >info@cznetwork.cz</span
              >
            </p>
          </div>

          <div class="mt-6 md:mt-8">
            <h3 class="text-gray-300">Sledujte nás</h3>

            <div class="flex mt-4 -mx-1.5">
              <a
                class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                target="_blank"
                href="https://www.linkedin.com/in/lukas-kalenda/"
              >
                <svg
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:w-1/2 lg:mx-6">
          <div
            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl"
          >
            <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200">
              Kontaktní formulář
            </h1>

            <form
              class="mt-4"
              name="contact"
              action="/success"
              method="POST"
              data-netlify="true"
            >
              <div class="flex-1">
                <label
                  for="name"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Vaše jméno</label
                >
                <input
                  id="name"
                  type="text"
                  placeholder="František Kovář"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  name="name"
                  required
                />
              </div>

              <input type="hidden" name="contact" value="contact" />
              <div class="flex-1 mt-6">
                <label
                  for="inputEmail"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >E-mail adresa</label
                >
                <input
                  id="inputEmail"
                  type="email"
                  placeholder="franta.kovar@email.cz"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  name="email"
                  required
                />
              </div>

              <div class="w-full mt-6">
                <label
                  for="message"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Zpráva pro nás</label
                >
                <textarea
                  id="message"
                  class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  placeholder="Právě jsem se připojil k ost..."
                  name="message"
                  required
                ></textarea>
              </div>

              <button
                class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                type="submit"
              >
                Odeslat!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
