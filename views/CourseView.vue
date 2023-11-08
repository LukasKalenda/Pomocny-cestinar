<template>
  <!-- Kurz:  -->
  <section class="bg-primary_white shadow dark:bg-secondary">
    <div class="container px-6 py-16 mx-auto">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
        <div class="lg:col-span-2">
          <aside
            class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4"
          >
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
              <li>e</li>
            </ul>
          </aside>
        </div>

        <div class="lg:col-span-8">
          <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
            <div class="lg:col-span-8">ruzne věci</div>
            <div class="lg:col-span-2 order-first lg:order-last">
              <nav>navigation</nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.article-content {
  & p {
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 26px;
    letter-spacing: -0.03em;
  }
  ol {
    list-style-type: decimal;
    margin-left: 1rem;
  }
}
</style>
