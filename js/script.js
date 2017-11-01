$(document).ready(function() {
   $("#menuButton").on('click', function(){
       $(".sidebar_menu_wrapper").toggleClass('opened');
       $(".main_wrapper").toggleClass('opened');
   });

   $("#sideMenuCloseButton").on('click', function() {
    $(".sidebar_menu_wrapper").removeClass('opened');
    $(".main_wrapper").removeClass('opened');
   });
});