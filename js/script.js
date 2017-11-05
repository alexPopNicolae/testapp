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

   var first = 0;
   var second = 1;
   var third = 2;
   var position = 2;
   var max = $('.carousel_item').length;
   var smallScreen = $(window).width() < 500 ? true:false;
   if(smallScreen) {
    $('.carousel_item').removeClass('visible');
    $('.carousel_item').eq(second).addClass('visible');
   }
   
   $("#nextButton").on('click', function() {
       if(max!=third+1 && smallScreen==false) {
           $('.carousel_item').removeClass('visible');
           first++;
           second++;
           third++;
           position++;
           $('.carousel_item').eq(first).addClass('visible');
           $('.carousel_item').eq(second).addClass('visible');
           $('.carousel_item').eq(third).addClass('visible');
       }
       if(max-1 > position && smallScreen==true) {
        $('.carousel_item').removeClass('visible');
        first++;
        second++;
        third++;
        position++;
        $('.carousel_item').eq(position).addClass('visible');
       }


   });

   $("#prewButton").on('click', function() {
        if(first!=0 && smallScreen==false) {
            $('.carousel_item').removeClass('visible');
            first--;
            second--;
            third--;
            position--;
            $('.carousel_item').eq(first).addClass('visible');
            $('.carousel_item').eq(second).addClass('visible');
            $('.carousel_item').eq(third).addClass('visible');
        }
        if(position > 0 && smallScreen==true) {
            $('.carousel_item').removeClass('visible');
            first--;
            second--;
            third--;
            position--;
            $('.carousel_item').eq(position).addClass('visible');
        }
    });

    $(window).resize(function() {
        var width = $(window).width();
        if(width < 500) {
            smallScreen = true;
            $('.carousel_item').removeClass('visible');
            $('.carousel_item').eq(second).addClass('visible');
        }
        else {
            smallScreen = false;
            $('.carousel_item').removeClass('visible');
            $('.carousel_item').eq(first).addClass('visible');
            $('.carousel_item').eq(second).addClass('visible');
            $('.carousel_item').eq(third).addClass('visible');
        }
    });
});
