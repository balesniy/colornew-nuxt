<template>
  <section id="contact-form" class="section section_map">
    <div class="container">
      <div class="section-introduce mobile-show">
        <h2 class="h2 section-title">
          Contacts
        </h2>
      </div><!-- /section-introduce -->

      <div class="g-row g-row_middle">
        <div class="g-col g-col_50 g-col_d-auto g-col_m-100">
          <div class="form-wrapper">
            <h6 class="form__title text-blue">
              Feedback form
            </h6>
            <Form/>
          </div><!-- /form-wrapper -->
        </div>
        <div class="g-col g-col_50 g-col_d-auto mobile-hidden">
          <div class="adress">
            <img src="~/assets/img/adress.png" alt="address">
          </div>
        </div>
      </div>
    </div> <!-- /container -->
  </section>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style scoped>

</style>
