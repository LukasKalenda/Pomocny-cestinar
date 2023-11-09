<template>
  <!-- Landing page -->
  <div class="bg-white shadow">
    <main class="container mx-auto">
      <section class="">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <!-- HEADLINE -->
                <h1 class="">Studijní síť</h1>

                <p class="mt-3">
                  Píšeme všechno potřebné k maturitě a celé češtině. Rozbory,
                  autory, literární období.
                </p>

                <Button
                  class="mt-3"
                  color="blue_dark"
                  link="#kurzy"
                  text="Studovat"
                />
              </div>
            </div>

            <div
              class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            >
              <!-- SVG MAIN ICON -->
              <img
                class="w-full h-full lg:max-w-lg"
                src="../assets/img/AI-vector-image.png"
                alt="AI Ilustration"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- kurzy -->
      <section class="shadow container mx-auto">
        <CardHomePage />
      </section>
    </main>
  </div>
</template>

<script setup>
import Button from "@/components/common/Button.vue";
import CardHomePage from "../components/common/CardHomePage.vue";
</script>
