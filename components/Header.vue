<template>
  <header class="header header_main js-header">
    <div class="container">
      <div class="g-row g-row_middle g-row_between">
        <div class="g-col">
          <div class="g-row g-row_middle">
            <div class="g-col">
              <div class="header__logo">
                <NuxtLink to="/" class="logo">
                  <img src="~assets/img/logotype.svg" alt="logo">
                </NuxtLink>
              </div>
            </div>

            <div class="g-col mobile-hidden">
              <a :href="`tel:${meta.tel}`" class="contact-link link link_underline">
                <span class="link__text text-nowrap">{{ meta.tel }}</span>
              </a>
            </div>
          </div>
        </div><!-- /g-col -->

        <div class="g-col">
          <div class="g-row g-row_middle">
            <div class="g-col mobile-hidden">
              <div class="lang js-dropdown">
                <div class="lang__top js-dropdown-button">
                  <div class="lang__text">
                    <nuxt-link :to="switchLocalePath('en')">
                      Eng
                    </nuxt-link>
                  </div>
                  <div class="lang__icon icon">
                    <svg-icon name="sp-arrow-down" />
                  </div>
                </div>

                <div class="lang__dropdown js-dropdown-block">
                  <nuxt-link :to="switchLocalePath('ru')">
                    Rus
                  </nuxt-link>
                </div>
              </div><!-- /lang -->
            </div>

            <div class="g-col">
              <div class="header__burger js-menu-open">
                <svg-icon name="sp-menu" />
              </div>
            </div>
          </div>
        </div><!-- /g-col -->
      </div>
    </div><!-- /container -->
  </header><!-- /header -->
</template>

<script>
export default {
  name: 'Header',
  computed: {
    meta () {
      return this.$store.state.meta
    }
  }
}
</script>

<style scoped>

</style>
