$(document).ready(function(){
  // top nav dropdown
  $(".dropdown-trigger").dropdown();

  // side nav
  //$('.sidenav').sidenav();
  $('.sidenav-trigger').off('click').on('click', function(e){
    e.preventDefault;
    if($('body').hasClass('sidenav-open')) {
      $('.sidenav').css("transform","translateX(-105%)");
      $('body').removeClass('sidenav-open')
    } else {
      $('.sidenav').css("transform","translateX(0%)");
      $('body').addClass('sidenav-open')
    }
  });

  // nav collapsible
   $('.collapsible').collapsible();
});