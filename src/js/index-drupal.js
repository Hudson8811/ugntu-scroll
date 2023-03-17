
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.tiqum = {
    attach: function attach() {
      $('#views-count-result--target').once('views-count').each(function () {
        if ($('#views-count-result--source').length) {
          $(this).text($('#views-count-result--source').text());
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);