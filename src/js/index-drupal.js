(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tiqum = {
    attach: function attach() {
      $('#views-count-result--target').once('views-count').each(function () {
        if ($('#views-count-result--source').length) {
          $(this).text($('#views-count-result--source').text());
        }
      });

      $('.list-block__sort select').once('select2').select2();
    }
  };
})(jQuery, Drupal, drupalSettings);