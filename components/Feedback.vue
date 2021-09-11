<template>
  <div class="section section_feedback section_bg">
    <div class="container">
      <div class="feedback">
        <div class="g-row g-row_wrap">
          <div class="g-col g-col_50 g-col_d-75 g-col_t-50 g-col_m-100">
            <div class="feedback__title">{{ title }}</div>
          </div>
          <div class="g-col g-col_50 g-col_d-100">
            <div class="feedback__text feedback__text_left">{{ text }}</div>
          </div>
        </div>
      </div><!-- /feedback -->
    </div><!-- /container -->
  </div><!-- /section -->
</template>

<script>
export default {
  name: 'Feedback',
  props: {
    title: {
      type: String,
      default: 'Feedback Title'
    },
    text: {
      type: String,
      default: 'Feedback Text'
    }
  }
}
</script>

<style scoped>

</style>
