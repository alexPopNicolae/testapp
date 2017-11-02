$(document).ready(function() {
   $("#menuButton").on('click', function(){
       $(".sidebar_menu_wrapper").toggleClass('opened');
       $(".main_wrapper").toggleClass('opened');
       $('body').toggleClass('no_body_scroll');
   });

   $("#sideMenuCloseButton").on('click', function() {
    $(".sidebar_menu_wrapper").removeClass('opened');
    $(".main_wrapper").removeClass('opened');
    $('body').removeClass('no_body_scroll');
   });

   $("#nextButton").on('click', function() {
       var elements = $('.slider_container > article');
       var numberOfElements = $('.slider_container > article').length;
        var first = elements.eq(0);
        var last = elements.eq(length-1);
        first.insertAfter(last);
        elements.first().addClass("visible");
        elements.first().next().addClass("visible");
        elements.first().next().next().addClass("visible");

   });

   $("#prewButton").on('click', function() {
        var elements = $('.slider_container > article');
        var numberOfElements = $('.slider_container > article').length;
        var first = elements.eq(0);
        var last = elements.eq(length-1);
        
        last.insertBefore(first);
        elements.first().addClass("visible");
        elements.first().next().addClass("visible");
        elements.first().next().next().addClass("visible");
    });
});
