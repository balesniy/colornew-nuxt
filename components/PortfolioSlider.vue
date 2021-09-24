<template>
  <div class="swiper-container js-portfolio-slider">
    <div class="swiper-wrapper">
      <div v-for="project in projects" :key="project.title" class="swiper-slide">
        <div class="project">
          <div class="project__image">
            <img :src="getImgSrc(project.img)" alt="project">
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
                      <NuxtLink
                        :to="localePath(`/portfolio/?tag=${tag.toLowerCase()}`)"
                        class="link link_underline-hover text-grey"
                      >
                        <span class="link__text">#{{ tag }}</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <div class="g-col">
                  <NuxtLink :to="localePath('/portfolio/')" class="link link_underline">
                    <span class="link__text">see more</span>
                    <span class="link__icon">
                      <svg-icon name="sp-chevron-right" />
                    </span>
                  </NuxtLink>
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
      projects: []
    }
  },
  async fetch () {
    const projects = await this.$content('portfolio', this.$i18n.locale).fetch()
    this.projects = projects.map(project => ({ ...project, tags: [...project.technologies, ...project.projects] }))
  },
  mounted () {
    // слайдер портфолио
    // eslint-disable-next-line no-undef
    const swiper = new Swiper('.js-portfolio-slider', {
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 'auto',
          watchSlidesVisibility: true
        }
      }
    })

    swiper.on('slideChange', function () {
      const i = this.realIndex + 1

      if (i === 1) {
        $('.js-portfolio-text').removeClass('is-animate')
      } else {
        $('.js-portfolio-text').addClass('is-animate')
      }
    })
  },
  methods: {
    getImgSrc (img) {
      // return require(`~/assets/img/${img}`)
      return `/img/${img}`
    }
  }
}
</script>
