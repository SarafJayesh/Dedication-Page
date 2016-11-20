$(document).ready(function(){
  $('.content').hide();
  $('li').click(
    function(){
      $('li').removeClass('active');
      var className=$(this).attr("class");
      $(this).addClass('active');
      $('.content').hide()
        $('#'+className).show();
    }
  );
});
