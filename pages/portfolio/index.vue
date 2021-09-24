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

        <SortingButtons class="nav_main" :items="projectsTypes" @change="changeFilters($event, 'projectsTypesSelected')" />
        <SortingButtons :items="technologiesTypes" @change="changeFilters($event, 'technologiesTypesSelected')" />

        <ProjectsList :projects="selectedProjects" />

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
  async asyncData ({
    $content,
    i18n,
    error
  }) {
    const projects = await $content('portfolio', i18n.locale).fetch().catch(() => {
      error({
        statusCode: 404,
        message: 'Page not found'
      })
    })

    const { items: projectsTypes } = await $content('projectsTypes').fetch()
    const { items: technologiesTypes } = await $content('technologiesList').fetch()

    return {
      projects,
      projectsTypes,
      technologiesTypes
    }
  },
  data () {
    return {
      projectsTypesSelected: [],
      technologiesTypesSelected: []
    }
  },
  created () {
    this.projectsTypesSelected = this.getTogglesWithoutAll(this.projectsTypes)
    this.technologiesTypesSelected = this.getTogglesWithoutAll(this.technologiesTypes)
  },
  computed: {
    selectedProjects () {
      return this.projects.filter(el => this.isProjectSelected(el))
    }
  },
  mounted () {
    // const redraw = () => this.$redrawVueMasonry()

    // function checkActive () {
    //   $('.js-sorting-button.is-active').each(function () {
    //     const $this = $(this)
    //     const params = $this.attr('data-toggle').substr(1)
    //     $(`.js-sorting-tag[data-tag="${params}"]`).addClass('is-selected')
    //   })
    // }
    //
    // checkActive()

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
  },
  methods: {
    getTogglesWithoutAll (items) {
      return items.map(el => el.toggle).filter(el => el !== 'all')
    },
    changeFilters (items, type) {
      this[type] = items
    },
    isProjectSelected (project) {
      return this.checkType(project) || this.checkTechnology(project)
    },
    checkType (project) {
      return this.projectsTypesSelected.some(el => project.projects.includes(el.slice(1)))
    },
    checkTechnology (project) {
      return this.technologiesTypesSelected.some(el => project.technologies.includes(el.slice(1)))
    }
  }
}
</script>
