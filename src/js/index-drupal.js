(function ($, Drupal, drupalSettings) {

  /**
   * Progress Bar.
   *
   * @param target
   * @param procent
   */
  function fileLoadStatus(target, procent = 0) {
    let procentInt = parseInt(procent);
    let value = procentInt + '%';
    let procentMinus = 100 - procentInt;
    $(target).find('.file-loader__inner').css('width', value);
    $(target).find('.file-loader__status--cyan').text(value).css({
      "mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
      "-webkit-mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)"
    });
    $(target).find('.file-loader__status--white').text(value).css({
      "mask-image": "linear-gradient(90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
      "-webkit-mask-image": "linear-gradient(90deg, black " + procentInt + "%, transparent " + procentInt + "% 100%)"
    });
  }

  /**
   * Get random num.
   *
   * @param max
   * @returns {number}
   */
  function getInterval(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let intervalProgressId;

  Drupal.behaviors.tiqum = {
    attach: function attach() {
      $('#views-count-result--target').once('views-count').each(function () {
        if ($('#views-count-result--source').length) {
          $(this).html($('#views-count-result--source').html());
        }
      });

      $('.list-block__sort select').once('select2').select2();

      let $form = $('form.node-congratulation-form');
      if ($form.length && $form.find('.file-loader').length) {

        let $trigger = $(this.attach.arguments[0]);

        // For File.
        if ($trigger.parent('.form__fileblock').length && $trigger.find('.js-form-managed-file input[name^="field_video[0][fids]"]').val()) {
          $trigger.find('.js-form-managed-file, label').hide();
          let $progressBar = $trigger.closest('.form__fileblock').find('.file-loader');
          clearInterval(intervalProgressId);
          fileLoadStatus($progressBar, 90);
          $progressBar.removeClass('file-bar-process');

          setTimeout(function(){
            fileLoadStatus($progressBar, 100);

            setTimeout(function(){
              $trigger.find('.js-form-managed-file').show();
              $progressBar.hide();
            }, 1000);

          }, getInterval(1000));
        }

        // For Images.
        if ($trigger.parent('.form__fileblock').length && $trigger.find('.js-form-managed-file input[name^="field_images["][type="hidden"]').val()) {
          let $progressBar = $trigger.closest('.form__fileblock').find('.file-loader');
          if ($progressBar.hasClass('file-bar-process')) {
            $progressBar.removeClass('file-bar-process');
            $trigger.find('.form-item > label').hide();
            clearInterval(intervalProgressId);
            fileLoadStatus($progressBar, 90);

            setTimeout(function(){
              fileLoadStatus($progressBar, 100);

              setTimeout(function(){
                $trigger.find('.form-item > label').show();
                $progressBar.hide();
              }, 1000);

            }, getInterval(800));
          }
        }

        $form.find('.form-managed-file input[type=file]').on('change', function(){
          if (this.files.length) {
            let $el = $(this);

            let $progressBar = $el.closest('.form__fileblock').find('.file-loader');
            let $elParent = $(this).closest('.form-item');
            if (!$progressBar.hasClass('file-bar-process')) {
              if ($el.siblings('.ajax-progress').length) {
                $progressBar.addClass('file-bar-process');
                $elParent.find('>*:not(.description)').hide();
                $progressBar.show();
                let percent = 10;
                fileLoadStatus($progressBar, percent);

                intervalProgressId = setInterval( function() {
                  percent += getInterval(6);
                  if (percent > 90) {
                    percent = 90;
                    clearInterval(intervalProgressId);
                  }
                  fileLoadStatus($progressBar, percent);
                }, getInterval(1500) );

              }
              else {
                $progressBar.hide();
                $elParent.find('>*').show();
                fileLoadStatus($progressBar, 0);
              }
            }
          }
        });
      }

    }
  };
})(jQuery, Drupal, drupalSettings);