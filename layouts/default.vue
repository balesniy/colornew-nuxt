<template>
  <div class="wrap-all">
    <div class="wrap-content">
      <Header @open-menu="toggleMenu" />
      <Nuxt />
    </div>
    <Footer />
    <UpButton />
    <Menu :is-open="isMenuOpen" @close="toggleMenu" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
