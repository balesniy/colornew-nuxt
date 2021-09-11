<template>
  <section class="hero js-hero">
    <div class="container">
      <div class="hero__title">
        <div class="hero__expirience text-grey-medium">
          More than 8 years experience
        </div>
        <h1 class="h1">
          Your
        </h1>
        <h1 class="h1">
          <span>comfortable IT</span>
          <span>partner</span>
        </h1>
        <div class="hero__specialization">
          Website, CRM, ERP, WEB & Mobile applications development
        </div>
      </div><!-- /hero__title -->

      <div class="hero__bottom">
        <a href="#contact-form" class="button button_primary js-scroll-link">Contact us</a>
      </div>
    </div>
    <div class="hero-circle js-hero-circle" />
  </section>
</template>

<script>
export default {
  name: 'Hero',
  mounted () {  // aнимация картинки hero
    $('.js-hero').on('mousemove', (event) => {
      $('.js-hero-circle').css({
        'top': `${event.pageY * 1 + 5  }px`,
        'left': `${event.pageX * 1 + 5  }px`,
      });
    });
  }
}
</script>

<style scoped>

</style>
