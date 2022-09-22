window.onload = function() {
	if(window.location.hash) {
	   elmnt = document.getElementById(window.location.hash.substring(1));
           elmnt.scrollIntoView(true);
	}
};

const swiper = new Swiper('.partners-slider', {
   speed: 400,
   spaceBetween: 100,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
 });

  // Меню бургер
$(document).ready(function(){
   $('.menu__icon').click(function(event){
      $('.menu__icon,.menu__body').toggleClass('_active');
      $('body').toggleClass('_lock');
      $('.overlay').toggleClass('overlay-active');
   });
});

$(document).ready(function(){
   $('.menu__body._active,.menu__link').click(function(event){
      $('.menu__icon,.menu__body').removeClass('_active');
      $('body').removeClass('_lock');
      $('.overlay').removeClass('overlay-active');
   });
});



