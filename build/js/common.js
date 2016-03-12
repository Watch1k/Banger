head.ready(function() {

  /* phoneInd - phone identifier */

  /* Clear placeholder */
  (function() {
    $('input, textarea').focus(function() {
      $(this).data({
        'placeholder': $(this).attr('placeholder')
      });
      return $(this).attr({
        'placeholder': ''
      });
    });
    return $('input, textarea').blur(function() {
      return $(this).attr({
        'placeholder': $(this).data('placeholder')
      });
    });
  });
  return $('.search-btn').on('click', function() {
    return $('.search-inp').toggleClass('is-active');
  });
});
