<template>
  <!-- Článek -->
  <section class="bg-c_gray shadow dark:bg-secondary">
    <div class="container md:mx-auto max-w-4xl pt-10 pb-10 px-8">
      <h2
        class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl pb-4 pt-4"
        id="kurzy"
      >
        Kurzy
      </h2>
      <div class="article-content text-gray-800 dark:text-white">
        <h1 class="article-h1">Titulek članku</h1>
        <div class="flex gap-4 py-2">
          <span>Datum</span>
          <span> Kategorie</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            saepe sunt, fuga odit exercitationem aliquam unde quaerat sint nemo
            amet numquam est quos vero eum veritatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            ipsa deserunt debitis ut necessitatibus sint accusamus, officiis,
            ullam voluptatibus consectetur hic distinctio minus perspiciatis
            soluta error! Explicabo alias, temporibus esse corrupti quae
            dolores, eius eum similique incidunt veniam, at iusto impedit
            accusamus nisi? Provident, ipsa.
          </p>
          <h2>Podnadpis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            adipisci recusandae molestias sequi repellendus ullam, fuga
            consectetur itaque esse sapiente hic, deleniti minima incidunt quod.
          </p>
          <ol>
            <li>karel</li>
            <li>pepa</li>
            <li>franta</li>
          </ol>
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
