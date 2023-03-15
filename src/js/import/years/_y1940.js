import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);


let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
        $('.loader').addClass('hide');
    }
});


var initMode;
let addTime = 1300;

let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let s3Width, b1Width, b2Width, b3Width, b4Width;
let s3Height, b1Height, b2Height, b3Height, b4Height;


let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');


function initAnimation(){
    s3Width =  $('.section3').innerWidth();
    b1Width =  $('.section3__block--1').innerWidth();
    b2Width =  $('.section3__block--2').innerWidth();
    b3Width =  $('.section3__block--3').innerWidth();
    b4Width =  $('.section3__block--4').innerWidth();

    s3Height =  $('.section3').innerHeight();
    b1Height =  $('.section3__block--1').innerHeight();
    b2Height =  $('.section3__block--2').innerHeight();
    b3Height =  $('.section3__block--3').innerHeight();
    b4Height =  $('.section3__block--4').innerHeight();


    if (window.innerWidth > 1100){
        initScrollAnimationDesktop();
        initMode = 'desk';
    } else if(window.innerWidth > 699){
        initScrollAnimationTablet();
        initMode = 'tablet';
    } else {
        initScrollAnimationMobile();
        initMode = 'mobile';
    }
}

initAnimation();
checkYearValue();

var dwidth = $(window).width();
$(window).on('resize',function (){
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        if (typeof st1 !== "undefined") st1.kill();
        if (typeof st2 !== "undefined") st2.kill();
        if (typeof st3 !== "undefined") st3.kill();
        tl.clear();
        tl1.clear();
        tl2.clear();
        tl3.clear();
        gsap.set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," +
            ".section1__dates, .section1__circle, .section1__circle-inner, .section2, .section2__numbers," +
            ".section2__photos-item--1, .section2__photos-item--2,.section2__photos-item--3, .section2__year," +
            ".section2__textblock, .section2__letter, .section2__cloud-1, .section2__cloud-2, .section2__textblock2," +
            ".section2__house, .section2__house-birds, .section2__last-img img, .section2__last-label," +
            ".section2__last-overlay, .section3, .section3__block--1, .section3__block--1 .section3__overlay," +
            ".section3__block--2, .section3__block--2 .section3__overlay, .section3__block--3," +
            ".section3__block--3 .section3__label--1 .section3__label-item--1," +
            ".section3__block--3 .section3__label--1 .section3__label-item--2," +
            ".section3__block--3 .section3__label--2, .section3__block--3 .section3__star," +
            ".section3__block--3 .section3__overlay, .section3__block--4, .section3__block--4 .section3__image," +
            ".section3__block--4 .section3__label-item--1, .section3__block--4 .section3__label-item--2," +
            ".section3__block--4 .section3__label-item--3, .section3__block--4 .section3__overlay," +
            ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('body').removeClass('active');
        $('.loader').removeClass('hide');
        $('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
        initAnimation();
    }
});

function initScrollAnimationDesktop(){

    tl.to(".loader__center", {
        y: "-100%",
        duration: 1.5,
        delay: 1,
        ease: "power3.in",
    });
    tl.to(".loader__back", {
        y: "-100%",
        duration:  1.5,
        ease: "power3.in",
    } , ">-1.3");


    tl.from(".section1__house", {
        y: '-25%',
        duration:  1.7,
        ease: "power1.inOut",
    } , "<");

    tl.from(".section1 .header", {
        y: '-100%',
        duration:  0.8,
        ease: "Sine.in",
    } , ">-0.5");

    tl.from(".sidebar", {
        x: "-100%",
        duration:  0.7,
        ease: "Sine.out",
    } , ">-0.5");

    tl.from(".section1__title", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__dates", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__circle", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">0.1");







    tl1.fromTo(".section1 .header", {
        y: '0',
    },{
        y: '-100%',
        duration:  0.8,
        ease: "none",
    } , "0");

    tl1.fromTo(".section1__circle", {
        y: '0',
    }, {
        y: '50%',
        duration:  0.3,
        ease: "none",
    } , "0");
    tl1.fromTo(".section1__circle-inner", {
        autoAlpha: 1,
    }, {
        autoAlpha: 0,
        duration:  0.3,
        ease: "none",
    } , "0");


    tl1.to(".section1__dates, .section1__title", {
        y: '7vw',
        duration:  2,
        ease: "none",
    } , "0");

    tl1.to(".section1__house", {
        top: '-54.72vw',  //-1100/2010
        duration:  2,
        ease: "none",
    } , "0");



    tl1.from(".section2", {
        autoAlpha: '0',
        duration:  1,
        ease: "none",
    } , ">-1");

    tl1.fromTo(".section2__numbers", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  6,
        ease: "none",
    } , ">-0.5");

    tl1.fromTo(".section2__photos-item--1", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  3,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__photos-item--2", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  3,
        ease: "none",
    } , ">-1.5");
    tl1.fromTo(".section2__photos-item--3", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  3,
        ease: "none",
    } , ">-1.5");


    tl1.fromTo(".section2__year", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");


    tl1.fromTo(".section2__textblock", {
        autoAlpha: '0',
    }, {
        autoAlpha: '1',
        duration:  1,
        ease: "none",
    } , ">-0.2");

    tl1.fromTo(".section2__letter", {
        top: '100%',
        y: '0'
    }, {
        top: '0',
        y:  '-100%',
        duration:  3,
        ease: "none",
    } , ">");

    tl1.to(".section2__textblock", {
        y: '-100%',
        duration:  3,
        ease: "none",
    } , ">0.1");


    tl1.fromTo(".section2__cloud-1", {
        left: '100%',
        x: '0',
        top: '26%'
    }, {
        left: '0',
        x:  '-100%',
        top: '-10%',
        duration:  5,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__cloud-2", {
        left: '100%',
        x: '0',
        top: '10%'
    }, {
        left: '0',
        x:  '-100%',
        top: '-20%',
        duration:  3.5,
        ease: "none",
    } , ">-3.5");

    tl1.fromTo(".section2__textblock2", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration:  1.5,
        ease: "none",
    } , ">-3");
    tl1.fromTo(".section2__textblock2", {
        bottom: '-5%',
    }, {
        bottom: '100%',
        duration:  3,
        ease: "none",
    } , "<");

    tl1.fromTo(".section2__house", {
        top: '100%'
    }, {
        y:  '-100%',
        top: '-0',
        duration:  5,
        ease: "none",
    } , "<");

    tl1.fromTo(".section2__house-birds", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration:  0.5,
        ease: "none",
    } , "<+0.5");
    tl1.fromTo(".section2__house-birds", {
        x: 0
    }, {
        x:  "-50%",
        duration:  4.5,
        ease: "none",
    } , "<");


    tl1.fromTo(".section2__last-img img", {
        scale: 1.5
    }, {
        scale:  1,
        duration:  8,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__last-label", {
        x: 0,
        left: '100%'
    }, {
        x: "-120%",
        left: '0',
        duration:  8,
        ease: "none",
    } , ">-7");
    tl1.fromTo(".section2__last-overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1,
        ease: "none",
    } , ">-2");




    tl1.fromTo(".section3", {
        left: "100%",
    }, {
        left: 0,
        duration:  2,
        ease: "none",
    } , ">-1.5");


    tl1.addLabel('1941','+=0');
    tl1.fromTo(".section3__block--1", {
        x: "0",
    }, {
        x: -1*(b1Width-s3Width),
        duration:  1.5,
        ease: "none",
    } , ">");

    tl1.fromTo(".section3__block--1 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.addLabel('1943','+=0.8');
    tl1.fromTo(".section3__block--2", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b2Width-s3Width),
        duration:  6,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".section3__block--2 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.addLabel('1948','+=1.8');
    tl1.fromTo(".section3__block--3", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b3Width-s3Width),
        duration:  6,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".section3__block--3 .section3__label--1 .section3__label-item--1", {
        x: "20%",
    }, {
        x: "0%",
        duration:  6,
        ease: "none",
    } , "<");

    tl1.fromTo(".section3__block--3 .section3__label--1 .section3__label-item--2", {
        x: "-5%",
    }, {
        x: "15%",
        duration:  6,
        ease: "none",
    } , "<");

    tl1.fromTo(".section3__block--3 .section3__label--2", {
        x: "30%",
    }, {
        x: "-27%",
        duration:  6,
        ease: "none",
    } , "<");
    tl1.fromTo(".section3__block--3 .section3__star", {
        x: "-10%",
    }, {
        x: "10%",
        duration:  6,
        ease: "none",
    } , "<");


    tl1.fromTo(".section3__block--3 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");



    tl1.addLabel('1949','+=0.8');
    tl1.fromTo(".section3__block--4", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b4Width-s3Width),
        duration:  4,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".section3__block--4 .section3__image", {
        x: "-35%",
    }, {
        x: "0",
        duration:  4,
        ease: "none",
    } , "<");
    tl1.fromTo(".section3__block--4 .section3__label-item--1", {
        x: "-65%",
    }, {
        x: "0",
        duration:  4,
        ease: "none",
    } , "<");
    tl1.fromTo(".section3__block--4 .section3__label-item--2", {
        x: "10%",
    }, {
        x: "0",
        duration:  4,
        ease: "none",
    } , "<");
    tl1.fromTo(".section3__block--4 .section3__label-item--3", {
        x: "100%",
    }, {
        x: "-10%",
        duration:  4,
        ease: "none",
    } , "<");


    tl1.fromTo(".section3__block--4 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1,
        ease: "none",
    } , ">");




    st1 = ScrollTrigger.create({
        trigger: ".scroll-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 2.5,
        animation: tl1,
    });
}

function initScrollAnimationTablet(){

    tl.to(".loader__center", {
        y: "-100%",
        duration: 1.5,
        delay: 1,
        ease: "power3.in",
    });
    tl.to(".loader__back", {
        y: "-100%",
        duration:  1.5,
        ease: "power3.in",
    } , ">-1.3");


    tl.from(".section1__house", {
        y: '-25%',
        duration:  1.7,
        ease: "power1.inOut",
    } , "<");

    tl.from(".sidebar", {
        y: "-100%",
        duration:  0.7,
        ease: "Sine.out",
    } , ">-0.2");

    tl.from(".section1__title", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__dates", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__circle", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">0.1");



    tl1.fromTo(".section1__circle", {
        y: '0',
    }, {
        y: '50%',
        duration:  0.3,
        ease: "none",
    } , "0");
    tl1.fromTo(".section1__circle-inner", {
        autoAlpha: 1,
    }, {
        autoAlpha: 0,
        duration:  0.3,
        ease: "none",
    } , "0");


    tl1.to(".section1__dates, .section1__title", {
        y: '7vw',
        duration:  2,
        ease: "none",
    } , "0");

    tl1.to(".section1__house", {
        top: '-27.6vw',
        duration:  2,
        ease: "none",
    } , "0");



    tl1.from(".section2", {
        autoAlpha: '0',
        duration:  1,
        ease: "none",
    } , ">-1");

    tl1.fromTo(".section2__numbers", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  4,
        ease: "none",
    } , ">-0.5");

    tl1.fromTo(".section2__photos-item--1", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  2,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__photos-item--2", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  2,
        ease: "none",
    } , ">-1");
    tl1.fromTo(".section2__photos-item--3", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  2,
        ease: "none",
    } , ">-1");


    tl1.fromTo(".section2__year", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");


    tl1.fromTo(".section2__textblock", {
        autoAlpha: '0',
    }, {
        autoAlpha: '1',
        duration:  1,
        ease: "none",
    } , ">-0.2");

    tl1.fromTo(".section2__letter", {
        top: '100%',
        y: '0'
    }, {
        top: '0',
        y:  '-100%',
        duration:  3,
        ease: "none",
    } , ">");

    tl1.to(".section2__textblock", {
        y: '-100%',
        duration:  3,
        ease: "none",
    } , ">0.1");


    tl1.fromTo(".section2__cloud-1", {
        x: '-33.72vw',
        top: '96.6vw'
    }, {
        x:  '-100%',
        top: '-10%',
        duration:  3.5,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__cloud-2", {
        left: '65vw',
        x: '0',
        top: '113vw'
    }, {
        left: '0',
        top: '-30%',
        duration:  3.5,
        ease: "none",
    } , ">-3.5");

    tl1.fromTo(".section2__textblock2", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration:  1.5,
        ease: "none",
    } , ">-3");
    tl1.fromTo(".section2__textblock2", {
        bottom: '-5%',
    }, {
        bottom: '100%',
        duration:  3,
        ease: "none",
    } , "<");

    tl1.fromTo(".section2__house", {
        top: '100%'
    }, {
        y:  '-100%',
        top: '-0',
        duration:  5,
        ease: "none",
    } , "<");

    tl1.fromTo(".section2__house-birds", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration:  0.5,
        ease: "none",
    } , "<+0.5");
    tl1.fromTo(".section2__house-birds", {
        x: 0
    }, {
        x:  "-50%",
        duration:  4.5,
        ease: "none",
    } , "<");


    tl1.fromTo(".section2__last-img img", {
        scale: 1.5
    }, {
        scale:  1,
        duration:  8,
        ease: "none",
    } , "<");
    tl1.fromTo(".section2__last-label", {
        x: 0,
        left: '100%'
    }, {
        x: "-120%",
        left: '0',
        duration:  8,
        ease: "none",
    } , ">-7");
    tl1.fromTo(".section2__last-overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1,
        ease: "none",
    } , ">-2");




    tl1.fromTo(".section3", {
        top: "100%",
    }, {
        top: 0,
        duration:  2,
        ease: "none",
    } , ">-1.5");


    tl1.addLabel('1941','+=0');
    tl1.fromTo(".section3__block--1", {
        y: "0",
    }, {
        y: -1*(b1Height-s3Height),
        duration: Math.abs((s3Height-b1Height)/460),
        ease: "none",
    } , ">");

    tl1.fromTo(".section3__block--1 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");



    tl1.addLabel('1943','+=0.2');
    tl1.fromTo(".section3__block--2", {
        y: "0",
        top: "100%"
    }, {
        top: "0",
        y: -1*(b2Height-s3Height),
        duration:  Math.abs((s3Height-b2Height)/460)+1.5,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".section3__block--2 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");

    tl1.addLabel('1948','+=0.1');
    tl1.fromTo(".section3__block--3", {
        y: "0",
        top: "100%"
    }, {
        top: "0",
        y: -1*(b3Height-s3Height),
        duration:  Math.abs((s3Height-b3Height)/460)+1.5,
        ease: "none",
    } , ">-1.5");



    tl1.fromTo(".section3__block--3 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");



    tl1.addLabel('1949','+=0');
    tl1.fromTo(".section3__block--4", {
        y: "0",
        top: "100%"
    }, {
        top: "0",
        y: -1*(b4Height-s3Height),
        duration:  Math.abs((s3Height-b4Height)/460)+1.5,
        ease: "none",
    } , ">-1.5");


    tl1.fromTo(".section3__block--4 .section3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");




    st1 = ScrollTrigger.create({
        trigger: ".scroll-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 2.5,
        animation: tl1,
    });
}

function initScrollAnimationMobile(){

    tl.to(".loader__center", {
        y: "-100%",
        duration: 1.5,
        delay: 1,
        ease: "power3.in",
    });
    tl.to(".loader__back", {
        y: "-100%",
        duration:  1.5,
        ease: "power3.in",
    } , ">-1.3");


    tl.from(".section1__house", {
        y: '-25%',
        duration:  1.7,
        ease: "power1.inOut",
    } , "<");

    tl.from(".sidebar", {
        y: "-100%",
        duration:  0.7,
        ease: "Sine.out",
    } , ">-0.2");

    tl.from(".section1__title", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__dates", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">-0.5");
    tl.from(".section1__circle", {
        autoAlpha: 0,
        duration:  0.5,
        ease: "none",
    } , ">0.1");



    tl1.fromTo(".section2__numbers", {
        x: '10%',
    }, {
        x: '-80%',
        duration:  1,
        ease: "none",
    } , "0");




    st1 = ScrollTrigger.create({
        trigger: ".section2__numbers",
        pin: false,
        start: "top bottom",
        end: () =>   "bottom top",
        scrub: 1,
        animation: tl1,
    });
}






function checkYearValue(){
    if (yValue !== null){
        $('.fullPageOverlay').addClass('active');
        gsap.to(".fullPageOverlay", {
            duration: 1,
            autoAlpha: 0,
            ease: "none",
            onComplete: function (){
                $('.fullPageOverlay').removeClass('active');
            }
        });


        if (initMode === 'desk' || initMode === 'tablet'){
            tl.progress(1);
            gsap.to(window, {
                scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
                duration: 0
            });
        } else if (initMode === 'mobile'){
            tl.progress(1);
            gsap.to(window, {
                scrollTo: '#year'+yValue,
                duration: 0.01
            });
        }
    }
}

function scrollToYear(year){
    if (year !== null){
        if (initMode === 'desk' || initMode === 'tablet'){
            gsap.to(window, {
                scrollTo: tl1.scrollTrigger.labelToScroll(year),
            });
        } else if (initMode === 'mobile'){
            gsap.to(window, {
                scrollTo: '#year'+year,
            });
        }
    }
}

$('.sidebar__menu-dropdown a').on('click',function (){
    event.preventDefault();
    let link = $(this).attr('href');
    if ($(this).closest('.sidebar__menu-item').hasClass('active')){
        let yValue = getParameterFromString(link, "y");
        if (yValue !== null) {
            scrollToYear(yValue);
        }
    }
});

function getParameterFromString(urlString, parameterName) {
    var urlParams = new URLSearchParams(urlString.split('?')[1]);
    return urlParams.get(parameterName);
}
