<template>
    <!-- Frequently asked question (FAQ) -->
    <section class="bg-white dark:bg-gray-900">
      <div class="container max-w-4xl px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white"
        >
          Frequently asked questions
        </h1>
  
        <div class="mt-12 space-y-8">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border-2 border-gray-100 rounded-lg dark:border-gray-700"
          >
            <button
              class="flex items-center justify-between w-full p-8"
              @click="toggleFaq(index)"
            >
              <h1 class="font-semibold text-2xl lg:text-4xl text-gray-700 dark:text-white">{{ faq.question }}</h1>
              <span
                class="text-gray-400 bg-gray-200 rounded-full"
                :class="{ 'rotate-45': faq.opened, 'rotate-0': !faq.opened }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </button>
  
            <hr class="border-gray-200 dark:border-gray-700" />
  
            <p
              class="p-8 text-md text-gray-500 dark:text-gray-300"
              v-if="faq.opened"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "Co vše na stránce najdu",
            answer: "Na stránce je možné najít různé kurzy a články zaměřené na IT téma. Vše je zdarma a přístupné pro každého. V případě zájmu o nějaké téma, které zde není, nás neváhejte kontaktovat.",
            opened: true,
          },
          {
            question: "Jak si založit účet?",
            answer: "Účet si můžete založit kliknutím na tlačítko v pravém horním rohu. Následně vyplníte své údaje a účet je založen. V případě, že jste již účet založili, stačí se pouze přihlásit.",
            opened: false,
          },
          {
            question: "Jak si zobrazit své kurzy?",
            answer: "Tato možnost zatím není přidána. Na svém profilu si přidejte svoje zájmy a aktivity. Jakmile je půjde přidat, dáme vědět.",
            opened: false,
          },
          {
            question: "Mohu se přidat do tvorby obsahu?",
            answer: "Samozřejmě, budeme rádi za každou pomoc. Ozvěte se nám prosím na některých z kontaktů.",
            opened: false,
          },
          {
            question: "Našel jsem na stránce chybu, co s tím?",
            answer: "Pokud se jedná o chybu v obsahu, můžete napsat do formuláře na stránce nebo na discord. Pokud se jedná o chybu v kódu, můžete napsat na discord nebo založit issue na githubu.",
            opened: false,
          },
        ],
      };
    },
    methods: {
      toggleFaq(index) {
        this.faqs[index].opened = !this.faqs[index].opened;
      },
    },
  };
  </script>
  
  <style>
  .rotate-45 {
    transform: rotate(45deg);
  }
  .rotate-0 {
    transform: rotate(0deg);
  }
  </style>