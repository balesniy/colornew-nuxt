<template>
  <div class="projects-list">
    <client-only placeholder="Loading...">
      <div
        v-masonry
        transition-duration="1s"
        item-selector=".js-sorting-item"
        column-width=".js-sorting-item"
        class="g-row g-row_wrap js-sorting"
      >
        <div
          v-for="project in projects"
          :key="project.title"
          v-masonry-tile
          class="g-col g-col_50 g-col_m-100 js-sorting-item projects-list__item"
          :class="project.projects.concat(project.technologies).join(' ')"
        >
          <Project :project="project" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ProjectsList',
  props: {
    projects: Array
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
    const redraw = () => this.$redrawVueMasonry()
    // if ($('.js-sorting').length > 0) {
    //   const query = this.$route.query.tag || []
    //   const tags = Array.isArray(query) ? query : [query]
    //   const selector = tags.map(tag => `.${tag}`).join(',')
    //   // eslint-disable-next-line no-undef
    //   mixitup('.js-sorting', {
    //     selectors: {
    //       target: '.js-sorting-item'
    //     },
    //     load: {
    //       filter: selector || 'all'
    //     },
    //     animation: {
    //       enable: false
    //     },
    //     classNames: {
    //       block: '',
    //       elementToggle: 'is'
    //     },
    //     callbacks: {
    //       onMixEnd: redraw
    //     }
    //   })
    // }
    //
    // function checkActive () {
    //   $('.js-sorting-button.is-active').each(function () {
    //     const $this = $(this)
    //     const params = $this.attr('data-toggle').substr(1)
    //     $(`.js-sorting-tag[data-tag="${params}"]`).addClass('is-selected')
    //   })
    // }
    //
    // checkActive()
    //
    // $('.js-sorting-button').on('click', function () {
    //   const $this = $(this)
    //   const param = $this.attr('data-toggle').substr(1)
    //   if ($this.hasClass('is-active')) {
    //     $('.js-sorting-tag').removeClass('is-selected')
    //     $(`.js-sorting-tag[data-tag="${param}"]`).addClass('is-selected')
    //   } else {
    //     $(`.js-sorting-tag[data-tag="${param}"]`).removeClass('is-selected')
    //   }
    //   checkActive()
    //   $('.js-sorting-item').removeClass('is-down')
    //   redraw()
    // })

    // показ скрытых блоков в проектах мобильная версия
    $('.js-project-more').on('click', function () {
      const $this = $(this)
      const $projectItem = $this.closest('.js-sorting-item')
      const $projectInfo = $projectItem.find('.js-project-content')
      const heightItem = $projectItem.innerHeight()
      const heightContent = $projectInfo.innerHeight()

      if ($this.hasClass('is-active')) {
        $projectItem.innerHeight(heightItem - heightContent)
        $projectInfo.slideUp()
      } else {
        $projectItem.innerHeight(heightItem + heightContent)
        $projectInfo.slideDown()
      }
      redraw()
    })
  }
}
</script>

<style scoped>

</style>
