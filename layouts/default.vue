<template>
  <div class="wrap-all">
    <div class="wrap-content">
      <Header />
      <Nuxt />
    </div>
    <Footer />
    <div class="button-up js-up">
      <svg-icon name="arrow" />
    </div>
    <Menu />
  </div>
</template>
<script>
export default {
  mounted () {
    // открытие закрытие главного меню
    $('.js-menu-open').on('click', () => {
      $('.js-menu').addClass('is-open')
    })

    $('.js-menu-close').on('click', () => {
      $('.js-menu').removeClass('is-open')
    })

    // открытие и закрытие по клику вне переключения языков
    $('.js-dropdown-button').on('click', function () {
      const $this = $(this)
      const $dropdown = $this.closest('.js-dropdown')
      $dropdown.toggleClass('is-active')
    })

    $(document).click((event) => {
      if ($(event.target).closest('.js-dropdown').length) { return }
      $('.js-dropdown').removeClass('is-active')
      event.stopPropagation()
    })

    // анимация header при скроле
    const $header = $('.js-header')

    function fixedHeader () {
      if ($(window).scrollTop() > 70) {
        $header.addClass('is-scroll')
      } else {
        $header.removeClass('is-scroll')
      }
    }
    fixedHeader()

    $(window).scroll(() => {
      fixedHeader()
    })

    // кнопка вверх
    function showUp () {
      if ($(window).scrollTop() > 200) {
        $('.js-up').addClass('is-visible')
      } else {
        $('.js-up').removeClass('is-visible')
      }
    }

    showUp()

    $(window).scroll(() => {
      showUp()
    })

    $('.js-up').on('click', () => {
      $('body, html').animate({
        scrollTop: 0
      }, 1000)
    })

    // плавный скрол к якорю
    $('.js-scroll-link').on('click', function (e) {
      e.preventDefault()
      const anchor = $(this).attr('href')
      const top = $(anchor).offset().top
      $('html, body').animate({
        scrollTop: top
      }, 1000)
    })

    // кастомизация скрола
    $('.js-scrollbar').mCustomScrollbar()
  }
}
</script>
