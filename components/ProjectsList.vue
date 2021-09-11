<template>
  <div class="swiper-container js-portfolio-slider">
    <div class="swiper-wrapper">
      <div v-for="project in projects" :key="project.title" class="swiper-slide">
        <div class="project">
          <div class="project__image">
            <img :src="project.img" alt="project">
          </div>
          <div class="project__content">
            <div class="project-info">
              <div class="project-info__item project-info__item_half">
                <div class="project-info__title text-grey">
                  Client:
                </div>
                <div class="project-info__text">
                  {{ project.title }}
                </div>
              </div>

              <div class="project-info__item project-info__item_half">
                <div class="project-info__title text-grey">
                  Product:
                </div>
                <div class="project-info__text">
                  {{ project.product }}
                </div>
              </div>

              <div class="project-info__item">
                <div class="project-info__text">
                  {{ project.description }}
                </div>
              </div>

              <div class="project-info__item">
                <div class="project-info__title text-grey">
                  Result:
                </div>
                <div class="project-info__text">
                  {{ project.result }}
                </div>
              </div>
            </div><!-- /project-info -->

            <div class="project__bottom">
              <div class="g-row g-row_middle g-row_between">
                <div class="g-col mobile-hidden">
                  <div class="g-row g-row_middle g-row_between">
                    <div v-for="tag in project.tags" :key="tag" class="g-col">
                      <a
                        :href="`/portfolio/?tag=${tag}`"
                        class="link link_underline-hover text-grey"
                      >
                        <span class="link__text">#{{ tag }}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="g-col">
                  <a href="/portfolio/" class="link link_underline">
                    <span class="link__text">see more</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div><!-- /project__content -->
        </div><!-- /project -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  data () {
    return {
      projects: [
        {
          img: '',
          title: '',
          product: '',
          result: '',
          description: '',
          tags: ['web', 'mobile']
        }
      ]
    }
  },
  mounted () {
    // слайдер портфолио
    var swiper = new Swiper('.js-portfolio-slider', {
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 'auto',
          watchSlidesVisibility: true,
        },
      },
    });

    swiper.on('slideChange', function () {
      const i = this.realIndex + 1;

      if (i == 1) {
        $('.js-portfolio-text').removeClass('is-animate');
      }
      else {
        $('.js-portfolio-text').addClass('is-animate');
      }
    });
  }
}
</script>

<style scoped>

</style>
