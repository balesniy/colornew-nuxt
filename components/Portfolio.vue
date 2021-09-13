<template>
  <section class="portfolio section section_py">
    <div class="container">
      <div class="portfolio__title">
        <div class="g-row g-row_bottom g-row_between">
          <div class="g-col">
            <h2 class="h2 section-title">
              Portfolio
            </h2>
          </div>
        </div>
      </div><!-- /portfolio__title -->

      <div class="g-row g-row_wrap g-row_middle">
        <div class="g-col g-col_41 g-col_d-100">
          <div class="portfolio__content js-portfolio-text">
            <div class="portfolio__text">
              <p>
                ColorNew deals with websites development, CRM, ERP, web and mobile applications.
                We are
                located in Russian Federation
                that means lower prices but higher quality. We work with clients from different
                countries
                around the world, and one of
                our leading partners is Searadar.
              </p>
            </div>
            <div class="portfolio-data js-animate-block">
              <div class="g-row">
                <div class="g-col g-col_50 portfolio-data__item">
                  <div class="text-grey-medium portfolio-data__title h6">
                    Projects done:
                  </div>
                  <div class="h4">
                    <span class="js-animate-number" data-number="380">0</span>
                    <span class="js-animate-text hidden">+</span>
                  </div>
                </div>

                <div class="g-col g-col_50 portfolio-data__item">
                  <div class="text-grey-medium portfolio-data__title h6">
                    On the market:
                  </div>
                  <div class="h4">
                    <span class="js-animate-number" data-number="8">0</span>
                    <span class="js-animate-text hidden">year</span>
                  </div>
                </div>
              </div>

              <div class="g-row g-row_between g-row_bottom">
                <div class="g-col g-col_full portfolio-data__item">
                  <div class="text-grey-medium portfolio-data__title h6">
                    The number of
                    employees:
                  </div>
                  <div class="h4">
                    <span class="js-animate-number" :data-number="meta.employees">0</span>
                    <span class="js-animate-text hidden">employees</span>
                  </div>
                </div>

                <!-- <div class="g-col mobile-show">
                    <div class="portfolio-hand">
                        <div class="portfolio-hand__main">
                            <img src="img/drag.svg" alt="drag">
                        </div>
                        <div class="portfolio-hand__arrow">
                            <img src="img/drag-arrow.svg" alt="drag">
                        </div>
                    </div>
                </div> -->
              </div>
            </div>
          </div><!-- /portfolio__content -->
        </div>

        <div class="g-col g-col_59 g-col_d-100">
          <div class="portfolio__slider">
            <div class="portfolio-circle">
              <div class="portfolio-circle__arrow">
                <svg-icon name="sp-arrow-prev" />
              </div>
              <div class="portfolio-circle__text">
                Drag me
              </div>
              <div class="portfolio-circle__arrow">
                <svg-icon name="sp-arrow-next" />
              </div>
            </div>
            <ProjectsList/>
          </div>
        </div>
      </div><!-- /g-row -->
    </div>
    <!-- /container -->
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  computed: {
    meta () {
      return this.$store.state.meta
    }
  }
}
</script>

<style scoped>

</style>
