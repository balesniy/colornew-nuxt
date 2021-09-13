export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'colornew-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper/swiper-bundle.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.min.css'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        body: true
      },
      {
        src: 'https://unpkg.com/swiper/swiper-bundle.min.js',
        body: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js',
        body: true
      },
      {
        src: 'https://malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
        body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js',
        body: true
      },
      {
        src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  svgSprite: {
    elementClass: null
  },
  router: {
    linkActiveClass: 'is-active'
  }
}
