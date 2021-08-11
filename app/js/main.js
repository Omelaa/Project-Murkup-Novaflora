
$(function(){

   if ($(window).scrollTop() > 1){
    $('.header').addClass("sticky");
    }

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });

      $('.header__burger, .menu').click(function (){
     $('.header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });

   $(".menu a, .header__logo, .footer-menu a, .footer__logo").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
  

    var mixer = mixitup('.shop-galery__list');
});