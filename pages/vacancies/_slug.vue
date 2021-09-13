<template>
  <main>
    <div class="section section_pb">
      <div class="container">
        <div class="page-hero">
          <div class="breadcrumbs text-grey-medium">
            <div class="breadcrumbs__item">
              <a href="#" class="link link_underline">
                <span class="link__text">ColorNew</span>
              </a>
            </div>
            <div class="breadcrumbs__item">
              >
            </div>
            <div class="breadcrumbs__item">
              Vacancies
            </div>
          </div><!-- /breadcrumbs -->

          <h1>{{ vacancy.title }}</h1>
        </div><!-- /page-hero -->

        <div class="vacancy-list">
          <div class="g-row g-row_wrap js-sorting">
            <div class="g-col g-col_50 g-col_m-100 js-sorting-item">
              <div class="vacancy-list__block">
                <div class="vacancy-list__title">
                  Tasks
                </div>
                <ul class="list">
                  <li v-for="task of vacancy.tasks" :key="task">
                    {{ task }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="g-col g-col_50 g-col_m-100 js-sorting-item">
              <div class="vacancy-list__block">
                <div class="vacancy-list__title">
                  Conditions
                </div>
                <ul class="list">
                  <li v-for="item of vacancy.conditions" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="g-col g-col_50 g-col_m-100 js-sorting-item">
              <div class="vacancy-list__block">
                <div class="vacancy-list__title">
                  Requirements
                </div>

                <ul class="list">
                  <nuxt-content :document="vacancy" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /container -->
    </div><!-- /section -->

    <Feedback
      title="Come get acquainted"
      text="We may have a product and the team missing exactly you."
    />

    <Map />
  </main>
</template>
<script>
export default {
  async asyncData (context) {
    const { slug } = context.params
    try {
      const vacancy = await context.$content('vacancies', slug).fetch()
      return { vacancy }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  }
}

</script>
