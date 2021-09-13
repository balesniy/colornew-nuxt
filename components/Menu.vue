<template>
  <div class="main-menu js-menu">
    <header class="header main-menu__header">
      <div class="container">
        <div class="g-row g-row_middle g-row_between">
          <div class="g-col mobile-hidden">
            <div class="header__logo">
              <NuxtLink to="/" class="logo">
                <img src="~/assets/img/logotype.svg" alt="logo">
              </NuxtLink>
            </div>
          </div><!-- /g-col -->

          <div class="g-col mobile-show">
            <div class="lang js-dropdown">
              <div class="lang__top js-dropdown-button">
                <div class="lang__text">
                  Eng
                </div>
                <div class="lang__icon icon">
                  <svg-icon name="sp-arrow-down" />
                </div>
              </div>
              <div class="lang__dropdown js-dropdown-block">
                <a href="#">Rus</a>
              </div>
            </div><!-- /lang -->
          </div>

          <div class="g-col">
            <div class="header__burger js-menu-close">
              <svg-icon name="sp-menu-close" />
            </div>
          </div><!-- /g-col -->
        </div>
      </div><!-- /container -->
    </header>

    <div class="main-menu__content">
      <div class="container">
        <ul class="main-menu__list">
          <li v-for="page in pages" :key="page.title" class="main-menu__item">
            <NuxtLink
              :to="localePath(page.url)"
              exact
              class="main-menu__link"
            >
              {{ page.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div><!-- /main-menu__content -->

    <div class="container">
      <div class="main-menu__footer">
        <div class="g-row g-row_middle g-row_reverse g-row_between g-row_m-wrap">
          <div class="g-col g-col_m-100">
            <div class="main-menu__title text-grey mobile-show">
              Our contacts:
            </div>
            <div class="g-row g-row_s-wrap">
              <div class="g-col g-col_s-100">
                <a :href="`tel:${meta.tel}`" class="contact-link link link-underline-hover">
                  <span class="link__text text-nowrap">{{ meta.tel }}</span>
                </a>
              </div>

              <div class="g-col g-col_s-100">
                <a :href="`mailto:${meta.mailto}`" class="contact-link link link-underline-hover">
                  <span class="link__text text-nowrap">{{ meta.mailto }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="g-col g-col_m-100">
            <div class="main-menu__title text-grey mobile-show">
              Social media:
            </div>
            <div class="g-row g-row_s-wrap">
              <div class="g-col g-col_s-100">
                <a href="#" target="_blank" class="button button_rounded">Telegram</a>
              </div>

              <div class="g-col g-col_s-100">
                <a href="#" target="_blank" class="button button_rounded">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /main-menu__footer -->
    </div>
  </div><!-- /main-menu -->
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    meta () {
      return this.$store.state.meta
    },
    pages () {
      return [
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'Portfolio',
          url: '/portfolio/'
        },
        {
          title: 'Vacancies',
          url: '/vacancies/'
        },
        {
          title: 'Pricing',
          url: '/pricing/'
        },
        {
          title: 'Processes',
          url: '/processes/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
