
$(function(){

      $('.header__burger, .menu').click(function (){
     $('.header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });

    var mixer = mixitup('.shop-galery__list');
});