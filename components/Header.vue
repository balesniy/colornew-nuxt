<template>
  <header v-scroll="handleScroll" class="header header_main js-header" :class="{'is-scroll': isScrolled}">
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
              <LangDropdown />
            </div>

            <div class="g-col">
              <div class="header__burger js-menu-open" @click="onOpen">
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
  data () {
    return {
      isScrolled: false
    }
  },
  computed: {
    meta () {
      return this.$store.state.meta[this.$i18n.locale]
    }
  },
  methods: {
    onOpen () {
      this.$emit('open-menu')
    },
    handleScroll (evt, el) {
      this.isScrolled = window.scrollY > 70
      // return window.scrollY > 100
    }
  }
}
</script>

<style scoped>

</style>
