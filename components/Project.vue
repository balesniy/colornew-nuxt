<template>
  <div class="project project_single">
    <div class="project__main">
      <div class="project__logo">
        <img :src="`/img/${project.logo}`" :alt="project.title">
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
      <img :src="`/img/${project.img}`" alt="project">
    </div>

    <div class="tablet-show">
      <div class="button button_secondary js-project-more" :class="{'is-active': isOpened}" @click="showMore">
        <div class="button__text js-project-more-text">
          {{ isOpened ? 'Close information' : 'Show information' }}
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
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    showMore () {
      this.isOpened = !this.isOpened
    }
  }
  // показ скрытых блоков в проектах мобильная версия
  // $('.js-project-more').on('click', function () {
  // const $this = $(this)
  // const $projectItem = $this.closest('.js-sorting-item')
  // const $projectInfo = $projectItem.find('.js-project-content')
  // const heightItem = $projectItem.innerHeight()
  // const heightContent = $projectInfo.innerHeight()
  //
  // if ($this.hasClass('is-active')) {
  //   $this.removeClass('is-active')
  //   $buttonText.text('Show information')
  //   $projectItem.innerHeight(heightItem - heightContent)
  //   $projectInfo.slideUp()
  //   masonryGrid()
  // } else {
  //   $this.addClass('is-active')
  //   $buttonText.text('Close information')
  //   $projectItem.innerHeight(heightItem + heightContent)
  //   $projectInfo.slideDown()
  //   masonryGrid()
  // }
  // })
}
</script>

<style scoped>

</style>
