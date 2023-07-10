import $ from "jquery";
import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import gsap from "gsap";

if ($('.scroll-page').length) {
    addEventListener('beforeunload', (event) => { });
    onbeforeunload = (event) => {
        window.scrollTo(0, 0);
    };
}

if($(".js--card-person--video-server .link-area").length) {
    $(".js--card-person--video-server .link-area").on("mouseover", function(event) {
        let video = $(this).parent().find(".js--card-person__video")[0];
        let prewiew = $(this).parent().find(".card-person__prewiew");
        prewiew.addClass("card-person__prewiew--active")
        video.play()
    
    
    }).on('mouseout', function(event) {
        let video = $(this).parent().find(".js--card-person__video")[0];
        let prewiew = $(this).parent().find(".card-person__prewiew");
        prewiew.removeClass("card-person__prewiew--active")    
        video.pause();
    
    });
}


if($(".js--card-person--video-ruTube .link-area").length) {
    var player = document.getElementById('my-player');
    function doCommand(CommandJSON) {
        player.contentWindow.postMessage(JSON.stringify(CommandJSON), '*');
    }
    $(".js--card-person--video-ruTube .link-area").on("mouseover", function(event) {
        doCommand( {
            type:'player:play',
            data:{}
        } );
        let prewiew = $(this).parent().find(".card-person__prewiew");
        prewiew.addClass("card-person__prewiew--active")
    
    
    }).on('mouseout', function(event) {

        doCommand( {
            type:'player:pause',
            data:{}
        } );
        let prewiew = $(this).parent().find(".card-person__prewiew");
        prewiew.removeClass("card-person__prewiew--active")  
    
    });
}

if($(".single__slider-item--video").length) {
    $(".js--single__slider--play-rutub").on("click", function(event) {
        var player = document.getElementById('my-player');
        function doCommand(CommandJSON) {
            player.contentWindow.postMessage(JSON.stringify(CommandJSON), '*');
        }
        doCommand( {
            type:'player:play',
            data:{}
        } );
        $(this).addClass("single__slider-item--play--active")
        let prewiew = $(this).parent().find(".single__slider-item--prewiew");
        prewiew.addClass("single__slider-item--prewiew--active")
    
    
    })
}
if($(".single__slider-item--video").length) {
    $(".js--single__slider--play").on("click", function(event) {
        let video = $(this).parent().find(".js--card-person__video")[0];
        $(this).addClass("single__slider-item--play--active")
        let prewiew = $(this).parent().find(".single__slider-item--prewiew");
        prewiew.addClass("single__slider-item--prewiew--active")
        video.play()
    
    
    })
}

$(window).on('load', function () {
    setCssRootVars();
    if ($('.home-page').length > 0) {
        require("./years/_y1940");
    }
    else if ($('.y1950').length > 0) {
        require("./years/_y1950");
    }
    else if ($('.y1960').length > 0) {
        require("./years/_y1960");
    }
    else if ($('.y1970').length > 0) {
        require("./years/_y1970");
    }
    else if ($('.y1980').length > 0) {
        require("./years/_y1980");
    }
    else if ($('.y1990').length > 0) {
        require("./years/_y1990");
    }
    else if ($('.y2000').length > 0) {
        require("./years/_y2000");
    }
    else {
        $('body').addClass('active');
    }


});

$(document).ready(function () {
    if ($('.e-filter').length > 0) {
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
            if (progress === 0) {
                $('.e-filter .swiper').addClass('start');
            } else {
                $('.e-filter .swiper').removeClass('start');
            } if (progress === 1) {
                $('.e-filter .swiper').addClass('end');
            } else {
                $('.e-filter .swiper').removeClass('end');
            }
        });
    }


    $('.sidebar__menu-item > a').on('click', function () {
        event.preventDefault();
        let link = $(this).attr('href');
        let bgColor = $(this).closest('.sidebar__menu-item').data('overlay');
        nextPageAnimation(link, bgColor);
    });


    $('.sidebar__menu-dropdown a').on('click', function () {
        event.preventDefault();
        let link = $(this).attr('href');
        if (!$(this).closest('.sidebar__menu-item').hasClass('active')) {
            let bgColor = $(this).closest('.sidebar__menu-item').data('overlay');
            nextPageAnimation(link, bgColor);
        } else {
            $('.sidebar__menu').removeClass('active');
        }
    });



    if (typeof nextPage !== "undefined") {
        if (nextPage != '') {
            $(window).scroll(function () {
                if (Math.ceil($(window).scrollTop() + $(window).height()) >= Math.floor($(document).height())) {
                    nextPageAnimation(nextPage, nextPageBg);
                }
            });
        }
    }

});

$(document).ready(function () {
    if (typeof $('.list-block__sort select').select2 == 'function') {
        $('.list-block__sort select').select2();
    }

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
    /*if (document.querySelector('#file-loader')) {
        document.querySelector('#file-loader').addEventListener('change', function () {
            var splittedFakePath = this.value.split('\\');

            var elem = $('.form__files-item').first().clone(true);
            elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
            elem.appendTo('.form__files').css('display', 'flex');
        });
    }*/



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

    /*отмена отправки формы и показ окна успешной отправки*/
    
    $('.form').on('submit', function () {
        if (!$(this).hasClass('node-congratulation-form')) {
            event.preventDefault();
        }
        let allowSend = true;
        if ($(this).find('.form__fileblock').length > 0) {
            $(this).find('.form__fileblock').each(function (){
                let block = this;
                let success = checkFileError(block);
                if (success === false) allowSend = false;
            });
        }
        if (allowSend !== true){
            //запрет отправки
            event.preventDefault();
        } else {
            //отправка фомры
            $('.form').scrollTop(0).addClass('success');
            $('.form__success').addClass('active');
        }
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

$(document).ready(function () {
    // if ($('.js-subslider-single').length > 0 && $('.js-slider-single').length > 0) {
    //     const subSlider = new Swiper('.js-subslider-single', {
    //         slidesPerView: 5.8,
    //         spaceBetween: 18,
    //         breakpoints: {
    //             1024: {
    //                 slidesPerView: 6.4,
    //             },
    //             1280: {
    //                 slidesPerView: 5.8
    //             }
    //         }
    //     });


    // }

    const mainSlider = new Swiper('.js-slider-single', {
        slidesPerView: 1.2,
        spaceBetween: 6,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false
            },
        }
    });
    Fancybox.bind("[data-fancybox]", {});


    let jsShareElements = document.querySelectorAll('.js-share')
    if (jsShareElements.length > 0 && typeof Ya !== 'undefined') {
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


    setCssRootVars();
    $(window).on('resize', function () {
        setCssRootVars();
    });


    $('select').on('change', function () {
    })
});


$(document).ready(function () {
    $('.form__fileblock').on('DOMSubtreeModified', function() {
        let block = this;
        checkFileError(block);
    });
});


function checkFileError(block){
    let dontSend = false;
    let mode = checkFileBlock(block);
    if (mode === 2) return false;
    if (mode === 1){
        $(block).removeClass('error');
        dontSend = true;
    } else {
        $(block).addClass('error');
    }
    return dontSend;
}


function checkFileBlock(block){
    let hasFilledFileInput = 0;
    if ($(block).find(('input[name^="field_images"][name$="[fids]"]')).length > 0) {
        //блок изображения, модифицированный
        $(block).find('input[name^="field_images"][name$="[fids]"]').each(function (){
            if ($(this).val() !== '') {
                hasFilledFileInput = 1;
                return false;
            }
        });
    } else if ($(block).find('[id^="edit-field-images"]').length > 0) {
        //блок изображения, изначальный
        $(block).find('input[name^="field_images"][name$="[fids]"]').each(function (){
            if ($(this).val() !== '') {
                hasFilledFileInput = 1;
                return false;
            }
        });
    } else {
        //это не блок изображений
        hasFilledFileInput = 2;
    }
    return hasFilledFileInput;
}



function setCssRootVars() {
    let baseRatio = 2010 / 1080;
    let windowWidth = $(window).innerWidth();
    let windowHeight = $(window).innerHeight();
    let windowRatio = windowWidth / windowHeight;
    let newVW = 1;
    if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
    $(':root').css('--vw', newVW + 'vw');

}



function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}


function nextPageAnimation(link, bgColor = '') {
    disableScroll();
    if (bgColor != '') {
        $('.fullPageOverlay').css('background', bgColor);
    }
    $('.sidebar__menu-dropdown').hide();
    $('.sidebar__menu').removeClass('active');
    $('.fullPageOverlay').css('pointer-events', 'auto');
    gsap.to(".fullPageOverlay", {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        onComplete: function () {
            setTimeout(function () {
                window.location.href = link;
            }, 200)
        }
    });
}




