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

          <h1>We need promising employees</h1>

          <div class="page-hero__text">
            Our team is our strength. We are glad to cooperate with both experienced and novice
            developers. We love to develop
            ourselves and our team. Cooperation with ColorNew Company is guaranteed to develop you:
          </div>
        </div><!-- /page-hero -->

        <Points />

        <div class="vacancies">
          <div class="vacancies__title">
            Vacancies <span class="text-blue">({{ vacancies.length }})</span>
          </div>
        </div><!-- /vacancies -->

        <div class="nav nav_main">
          <div class="nav__item">
            <button type="button" class="button button_nav js-sorting-button" data-toggle="all">
              All projects
            </button>
          </div>
          <div v-for="item in projectsTypes" :key="item.title" class="nav__item">
            <button type="button" class="button button_nav js-sorting-button" :data-toggle="item.toggle">
              {{ item.title }}
            </button>
          </div>
        </div><!-- /nav -->

        <div class="nav">
          <div class="nav__item">
            <button type="button" class="button button_nav js-sorting-button" data-toggle="all">
              All technologies
            </button>
          </div>
          <div v-for="item in technologiesTypes" :key="item.title" class="nav__item">
            <button type="button" class="button button_nav js-sorting-button" :data-toggle="item.toggle">
              {{ item.title }}
            </button>
          </div>
        </div><!-- /nav -->

        <div class="vacancies-list">
          <div class="g-row g-row_wrap js-sorting">
            <div
              v-for="vacancy in vacancies"
              :key="vacancy.slug"
              class="g-col g-col_33 g-col_t-50 g-col_s-100 js-sorting-item vacancies-list__item"
              :class="vacancy.projects.concat(vacancy.technologies).join(' ')"
            >
              <NuxtLink :to="vacancy.slug" append class="vacancy">
                <span class="vacancy__arrow">
                  <svg-icon name="sp-arrow-up-right" />
                </span>
                <span class="vacancy__label text-grey">ColorNew</span>
                <span class="vacancy__title">{{ vacancy.title }}</span>
                <ul class="list">
                  <nuxt-content :document="vacancy" />
                </ul>
                <div class="g-row g-row_middle g-row_wrap">
                  <div v-for="tag in vacancy.projects.concat(vacancy.technologies)" :key="tag" class="g-col">
                    <div
                      class="vacancy__tag text-grey-medium js-sorting-tag"
                      :data-tag="tag.toLowerCase()"
                    >
                      #{{ tag }}
                    </div>
                  </div>
                </div>
              </NuxtLink><!-- /vacancy -->
            </div>
          </div>
        </div>

        <div class="mobile-show">
          <a href="#" class="button button_secondary">
            <span class="button__text">Show more vacancies</span>
          </a>
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
  async asyncData ({ $content, i18n, error }) {
    const vacancies = await $content('vacancies', i18n.locale).fetch().catch(() => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    const { items: projectsTypes } = await $content('projectsTypes').fetch()
    const { items: technologiesTypes } = await $content('technologiesList').fetch()

    return {
      vacancies, projectsTypes, technologiesTypes
    }
  },
  mounted () {
    function masonryGrid () {
      const $container = $('.js-sorting')
      // initialize
      $container.masonry({
        itemSelector: '.js-sorting-item',
        isAnimated: true,
        columnWidth: '.js-sorting-item'
      })
      $container.masonry('reloadItems')
      $container.masonry('layout')
    }
    // фильтрация проектов
    if ($('.js-sorting').length > 0) {
      masonryGrid()
    }

    if ($('.js-sorting').length > 0) {
      const query = this.$route.query.tag || []
      const tags = Array.isArray(query) ? query : [query]
      const selector = tags.map(tag => `.${tag}`).join(',')
      // eslint-disable-next-line no-undef
      mixitup('.js-sorting', {
        selectors: {
          target: '.js-sorting-item'
        },
        load: {
          filter: selector || 'all'
        },
        animation: {
          enable: false
        },
        classNames: {
          block: '',
          elementToggle: 'is'
        },
        callbacks: {
          onMixEnd (state) {
            masonryGrid()
          }
        }
      })
    }

    function checkActive () {
      $('.js-sorting-button.is-active').each(function () {
        const $this = $(this)
        const params = $this.attr('data-toggle').substr(1)
        $(`.js-sorting-tag[data-tag="${params}"]`).addClass('is-selected')
      })
    }

    checkActive()

    $('.js-sorting-button').on('click', function () {
      const $this = $(this)
      const param = $this.attr('data-toggle').substr(1)
      if ($this.hasClass('is-active')) {
        $('.js-sorting-tag').removeClass('is-selected')
        $(`.js-sorting-tag[data-tag="${param}"]`).addClass('is-selected')
        checkActive()
        $('.js-sorting-item').removeClass('is-down')
      } else {
        $(`.js-sorting-tag[data-tag="${param}"]`).removeClass('is-selected')
        checkActive()
        $('.js-sorting-item').removeClass('is-down')
      }
      $('.js-sorting').masonry('reloadItems')
    })

    // показ скрытых блоков в мобильной версии
    $('.js-project-more').on('click', function () {
      const $this = $(this)
      const $buttonText = $this.find('.js-project-more-text')
      const $projectItem = $this.closest('.js-sorting-item')
      const $projectInfo = $projectItem.find('.js-project-content')
      const heightItem = $projectItem.innerHeight()
      const heightContent = $projectInfo.innerHeight()

      if ($this.hasClass('is-active')) {
        $this.removeClass('is-active')
        $buttonText.text('Show information')
        $projectItem.innerHeight(heightItem - heightContent)
        $projectInfo.slideUp()
        masonryGrid()
      } else {
        $this.addClass('is-active')
        $buttonText.text('Close information')
        $projectItem.innerHeight(heightItem + heightContent)
        $projectInfo.slideDown()
        masonryGrid()
      }
    })
  }
}
</script>
