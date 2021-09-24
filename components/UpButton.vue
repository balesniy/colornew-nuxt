<template>
  <div v-scroll="handleScroll" class="button-up js-up" :class="{'is-visible': isScrolled}" @click="scrollTop">
    <svg-icon name="arrow" />
  </div>
</template>

<script>
export default {
  name: 'UpButton',
  data () {
    return {
      isScrolled: false
    }
  },
  methods: {
    handleScroll (evt, el) {
      this.isScrolled = window.scrollY > 200
      // return window.scrollY > 100
    },
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
