import $ from "jquery";
import Swiper from 'swiper/bundle';


addEventListener('beforeunload', (event) => { });
onbeforeunload = (event) => {
	window.scrollTo(0, 0);
};

$(window).on('load',function (){

    if ($('.home-page').length > 0)
    {
        require("./years/_y1940");
    }
    else if ($('.y1950').length > 0)
    {
        require("./years/_y1950");
    }
    else {
        $('body').addClass('active');
    }



});

$(document).ready(function (){
    if ($('.e-filter').length > 0){
        const swiper = new Swiper('.e-filter .swiper', {
            loop: false,
            freeMode: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.e-filter__button--next',
                prevEl: '.e-filter__button--prev',
            },
        });
        swiper.on('progress', function (swiper, progress) {
            if (progress === 0){
                $('.e-filter .swiper').addClass('start');
            } else {
                $('.e-filter .swiper').removeClass('start');
            }  if (progress === 1){
                $('.e-filter .swiper').addClass('end');
            } else {
                $('.e-filter .swiper').removeClass('end');
            }
        });

        $('.e-filter__item').on('click',function (){
            $('.e-filter__item').removeClass('active');
            $(this).addClass('active');
        });
    }
});

