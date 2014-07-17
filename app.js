$(function() {

  $('[expandable-section] article').hide();
  $('[expandable-section] h2').click(function() {
    $(this).parent().find('article').toggle();
  });

});
