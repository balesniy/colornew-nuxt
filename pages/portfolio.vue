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
              Portfolio
            </div>
          </div><!-- /breadcrumbs -->

          <h1>Projects <br>developed by us</h1>
        </div><!-- /page-hero -->

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

        <div class="projects-list">
          <div class="g-row g-row_wrap js-sorting">
            <div
              v-for="project in projects"
              :key="project.title"
              class="g-col g-col_50 g-col_m-100 js-sorting-item projects-list__item"
              :class="project.projects.concat(project.technologies).join(' ')"
            >
              <div class="project project_single">
                <div class="project__main">
                  <div class="project__logo">
                    <img :src="project.logo" :alt="project.title">
                  </div>

                  <div class="project__name">
                    {{ project.title }}
                  </div>

                  <div class="g-row g-row_middle g-row_wrap">
                    <div v-for="tag in project.projects.concat(project.technologies)" :key="tag" class="g-col">
                      <div
                        class="vacancy__tag text-grey-medium js-sorting-tag"
                        :data-tag="tag.toLowerCase()"
                      >
                        #{{ tag }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="project__image">
                  <img :src="project.img" alt="project">
                </div>

                <div class="tablet-show">
                  <div class="button button_secondary js-project-more">
                    <div class="button__text js-project-more-text">
                      Show information
                    </div>
                    <div class="button__arrow">
                      <svg-icon name="sp-arrow-down" />
                    </div>
                  </div>
                </div>

                <div class="project__content tablet-hidden js-project-content">
                  <div class="project-info">
                    <div class="project-info__item">
                      <div class="project-info__title text-grey">
                        Product:
                      </div>
                      <div class="project-info__text">
                        {{ project.product }}
                      </div>
                    </div>

                    <div class="project-info__item">
                      <div class="project-info__text">
                        <nuxt-content :document="project" />
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

                    <div class="project__tags">
                      <div class="g-row g-row_middle g-row_wrap">
                        <div v-for="tag in project.projects.concat(project.technologies)" :key="tag" class="g-col">
                          <div
                            class="project__tag text-grey js-sorting-tag"
                            :data-tag="tag.toLowerCase()"
                          >
                            #{{ tag }}
                          </div>
                        </div>
                      </div>
                    </div><!-- /project__tags -->
                  </div><!-- /project-info -->

                  <div class="project__bottom">
                    <a href="#" class="link link_underline">
                      <span class="link__text">View project</span>
                      <span class="link__icon">
                        <svg-icon name="sp-chevron-right" />
                      </span>
                    </a>
                  </div>
                </div><!-- /project__content -->
              </div><!-- /project -->
            </div>
          </div>
        </div>

        <div class="mobile-show">
          <a href="#" class="button button_secondary">
            <span class="button__text">
              Show more projects
            </span>
          </a>
        </div>
      </div><!-- /container -->
    </div><!-- /section -->

    <Feedback
      title="Are you ready to discover?"
      text="Are you interested in working with us? Write what you need and we will contact you."
    />
    <Map />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    const projects = await $content('portfolio').fetch().catch(() => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    const { items: projectsTypes } = await $content('projectsTypes').fetch()
    const { items: technologiesTypes } = await $content('technologiesList').fetch()

    return {
      projects, projectsTypes, technologiesTypes
    }
  },
  head () {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js',
          body: true
        },
        {
          src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js',
          body: true
        }
      ]
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
      // eslint-disable-next-line no-undef
      mixitup('.js-sorting', {
        selectors: {
          target: '.js-sorting-item'
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

    const tag = (new URL(window.location)).searchParams.get('tag')
    if (tag) {
      const button = $(`.js-sorting-button[data-toggle=".${tag}"]`)
      const nav = button.closest('.nav')
      const current = nav.find('.js-sorting-button.is-active')
      current.removeClass('is-active')
      button.addClass('is-active')
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

    // показ скрытых блоков в проектах мобильная версия
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
