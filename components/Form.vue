<template>
  <form class="form js-validate" name="contact" method="POST">
    <div class="form__message js-validate-message hidden text-red">
      Thank
    </div>
    <div class="form__item">
      <input
        name="login"
        type="text"
        class="required input"
        placeholder="Phone number or E-mail"
        data-msg="You have not entered your E-mail or your Phone number"
      >
    </div>

    <div class="form__item">
      <textarea class="input input_text" placeholder="Message" />
    </div>

    <div class="form__item">
      <div class="file js-file">
        <div class="js-file-wrapper">
          <div class="g-row g-row_between g-row_middle g-row_s-wrap">
            <div class="g-col g-col_s-100">
              <label class="file-button text-grey">
                <span class="file-button__text text-nowrap">Add document</span>

                <span class="file-button__icon">
                  <svg-icon name="sp-plus" />
                </span>
                <input
                  name="file[]"
                  type="file"
                  multiple=""
                  class="file__input js-file-button"
                >
              </label><!-- /file-button -->
            </div>

            <div class="g-col mobile-hidden">
              <div class="text-grey file__note text-nowrap">
                Not less than 50 mb
              </div>
            </div>
          </div>
        </div>

        <div class="js-file-data hidden">
          <div class="g-row g-row_between g-row_middle g-row_s-wrap">
            <div class="g-col g-col_s-100">
              <div class="file-data">
                <div class="file-data__icon">
                  <img src="~/assets/img/doc.png" alt="doc">
                </div>

                <div class="file-data__text js-file-text" />
              </div><!-- /file -->
            </div>

            <div class="g-col g-col_s-100">
              <div class="file-button text-red js-file-remove">
                <div class="file-button__text text-nowrap">
                  Delete document
                </div>
                <div class="file-button__icon">
                  <svg-icon name="sp-trash" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form__button">
      <button class="button button_submit" type="submit">
        Send message
      </button>
    </div>

    <div class="text-grey file__note text-nowrap mobile-show">
      Not less than 50 mb
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  mounted () {
    // file
    $('.js-file-button').each(function () {
      const $fileInput = $(this)
      if ($fileInput.length > 0) {
        let fileCnt = 0
        const $fileParent = $fileInput.closest('.js-file')
        const $fileData = $fileParent.find('.js-file-text')
        const $fileWrapper = $fileParent.find('.js-file-wrapper')
        const $fileDataWrapper = $fileParent.find('.js-file-data')

        $fileInput.on('change', function () {
          for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i]
            fileCnt++
            $fileData.text(file.name)
            $fileWrapper.hide()
            $fileDataWrapper.fadeIn()
          }
        })
      }
    })

    $('.js-file-remove').on('click', function () {
      const $this = $(this)
      const $fileParent = $this.closest('.js-file')
      const $fileWrapper = $fileParent.find('.js-file-wrapper')
      const $fileDataWrapper = $fileParent.find('.js-file-data')

      $fileDataWrapper.hide()
      $fileWrapper.fadeIn()
    })

    // валидация формы и показ сообщения после отправки
    $('.js-validate').validate({
      focusInvalid: false,
      submitHandler () {
        $('.js-validate-message').fadeIn()
        $('.js-validate')[0].reset()
        setTimeout(() => {
          $('.js-validate-message').fadeOut()
        }, 5000)
      }
    })
  }
}
</script>

<style scoped>

</style>
