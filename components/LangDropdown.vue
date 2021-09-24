<template>
  <div v-click-outside="close" class="lang js-dropdown" :class="{'is-active': isOpen}">
    <div class="lang__top js-dropdown-button" @click="toggleOpen">
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
</template>

<script>
export default {
  name: 'LangDropdown',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>

</style>
