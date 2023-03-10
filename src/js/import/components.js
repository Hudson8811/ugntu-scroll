import $ from "jquery";
import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import gsap from "gsap";

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
    else if ($('.y1960').length > 0)
    {
        require("./years/_y1960");
    }
    else {
        $('body').addClass('active');
    }


});

$(document).ready(function (){
    if ($('.e-filter').length > 0){
        const eFilterSwiper = new Swiper('.e-filter .swiper', {
            loop: false,
            freeMode: true,
            spaceBetween: 0,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.e-filter__button--next',
                prevEl: '.e-filter__button--prev',
            },
        });
        eFilterSwiper.on('progress', function (swiper, progress) {
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


    $('.sidebar__menu-item > a').on('click',function (){
        event.preventDefault();
        let link = $(this).attr('href');
        nextPageAnimation(link);
    });


    $('.sidebar__menu-dropdown a').on('click',function (){
       event.preventDefault();
        let link = $(this).attr('href');
        if (!$(this).closest('.sidebar__menu-item').hasClass('active')){
            nextPageAnimation(link);
        } else {
            $('.sidebar__menu').removeClass('active');
        }
    });



    if (typeof nextPage !== "undefined"){
        if (nextPage != ''){
            $(window).scroll(function() {
                if(Math.ceil($(window).scrollTop() + $(window).height()) >= Math.floor($(document).height()) ) {
                    nextPageAnimation(nextPage);
                }
            });
        }
    }

});

$(document).ready(function() {
    $('.list-block__sort select').select2();

    /* Partners marquee */
    if ($('.js-marquee').length > 0) {
        if (window.matchMedia('(min-width: 700px)').matches) {
            $('.js-marquee').marquee({
                duration: 15000,
                delayBeforeStart: 0,
                duplicated: true,
                gap: 0,
                startVisible: true,
                direction: 'left'
            });
        }
    }

    /* Photo uploader */
    if (document.querySelector('#file-loader')) {
        document.querySelector('#file-loader').addEventListener('change', function () {
            var splittedFakePath = this.value.split('\\');

            var elem = $('.form__files-item').first().clone(true);
            elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
            elem.appendTo('.form__files').css('display', 'flex');
        });
    }

    $('.form__files-item-remove').on('click', function () {
        $(this).closest('.form__files-item').remove();
    });

    /* Show congratulation form */
    $('.js-congrat').on('click', function (e) {
        e.preventDefault();
        $('.form').addClass('open');
        $('.overlay').addClass('active');
        $('body').addClass('body-scroll-lock');
    });

    $('.form__close-btn,.js-close-modal-form').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.form').removeClass('open');
        $('.overlay').removeClass('active');
        $('body').removeClass('body-scroll-lock');
        $('.form__success').removeClass('active');
        $('.form').removeClass('success');
    });

    $('.overlay').on('click', function () {
        $(this).removeClass('active');
        $('.form').removeClass('open');
        $('body').removeClass('body-scroll-lock');
        $('.form__success').removeClass('active');
        $('.form').removeClass('success');
    });

    /*???????????? ???????????????? ?????????? ?? ?????????? ???????? ???????????????? ????????????????*/
    $('.form').on('submit',function (){
        if (!$(this).hasClass('node-congratulation-form')) {
            event.preventDefault();
        }
        $('.form').scrollTop(0).addClass('success');
        $('.form__success').addClass('active');
    });


    /* Anchor */
    document.querySelectorAll('.anchor').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

$(document).ready(function() {
    if ($('.js-subslider-single').length > 0 && $('.js-slider-single').length > 0){
        const subSlider = new Swiper('.js-subslider-single', {
            slidesPerView: 5.8,
            spaceBetween: 18,
            breakpoints: {
                1024: {
                    slidesPerView: 6.4,
                },
                1280: {
                    slidesPerView: 5.8
                }
            }
        });

        const mainSlider = new Swiper('.js-slider-single', {
            slidesPerView: 1.2,
            spaceBetween: 6,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            thumbs: {
                swiper: subSlider
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false
                },
            }
        });
    }

    Fancybox.bind("[data-fancybox]", {});


    let jsShareElements = document.querySelectorAll('.js-share')
    if (jsShareElements.length > 0 && typeof Ya !== 'undefined'){
        for (var i = 0; i < jsShareElements.length; i++) {
            var yaBlock = document.createElement('div');
            yaBlock.classList.add('yaBlock');
            jsShareElements[i].appendChild(yaBlock);
        }

        let shareButton = document.querySelector('.yaBlock');
        Ya.share2(shareButton, {
            theme: {
                services: 'vkontakte,odnoklassniki,telegram,whatsapp',
                lang: 'ru',
                limit: 0,
                size: 's',
                bare: false
            }
        });
    }
});



function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}


function nextPageAnimation(link){
    disableScroll();
    $('.sidebar__menu-dropdown').hide();
    $('.sidebar__menu').removeClass('active');
    $('.fullPageOverlay').css('pointer-events','auto');
    gsap.to(".fullPageOverlay", {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        onComplete: function (){
            setTimeout(function (){
                window.location.href = link;
            },200)
        }
    });
}
