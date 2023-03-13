import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);


var initMode;
let addTime = 600;

let st1;
let tl1 = gsap.timeline({});
let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
    }
});


let scWidth, b1Width, b2Width, b3Width, b4Width, b5Width;
let scHeight, b1Height, b2Height, b3Height, b4Height, b5Height;

let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');



function initAnimation(){

    scWidth =  $('.scroll-page').innerWidth();
    b1Width =  $('.y3-4').innerWidth();
    b2Width =  $('.y3-5').innerWidth();
    b3Width =  $('.y3-6').innerWidth();
    b4Width =  $('.y3-7').innerWidth();
    b5Width =  $('.y3-8').innerWidth();

    scHeight =  $('.scroll-page').innerHeight();
    b1Height =  $('.y3-4').innerHeight();
    b2Height =  $('.y3-5').innerHeight();
    b3Height =  $('.y3-6').innerHeight();
    b4Height =  $('.y3-7').innerHeight();
    b5Height =  $('.y3-8').innerHeight();
    
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


var dwidth = $(window).width();
$(window).on('resize',function (){
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        if (typeof st1 !== "undefined") st1.kill();
        tl1.clear();
        tl.clear();
        gsap.set("" +
            ".scroll-page,.sidebar__menu-dropdown", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('body').removeClass('active');
        $('.fullPageOverlay').addClass('active');
        $('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
        initAnimation();
    }
});


function initScrollAnimationDesktop(){
    gsap.to(".fullPageOverlay", {
        duration: 1,
        autoAlpha: 0,
        ease: "none",
        onComplete: function (){
            $('.fullPageOverlay').removeClass('active');
        }
    });

    tl.fromTo(".y3-1__numbers", {
        x: '100vw',
    }, {
        x: '5vw',
        duration:  1,
        ease: "none",
    } , "0");
    tl.fromTo(".y3-1__photos-item--1", {
        x: '100vw',
    }, {
        x: '50vw',
        duration:  1,
        ease: "none",
    } , "0");



    tl1.fromTo(".y3-1__numbers", {
        x: '5vw',
    }, {
        x: '-100%',
        duration:  4,
        ease: "none",
    } , "0");
    tl1.fromTo(".y3-1__photos-item--1", {
        x: '50vw',
    }, {
        x: '-100%',
        duration:  1,
        ease: "none",
    } , "<");
    tl1.fromTo(".y3-1__photos-item--2", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  1.5,
        ease: "none",
    } , ">-0.3");
    tl1.fromTo(".y3-1__photos-item--3", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  1.5,
        ease: "none",
    } , ">-0.7");


    tl1.fromTo(".y3-2", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.7,
        ease: "none",
    } , "4");


    tl1.fromTo(".y3-1", {
        top: "0",
        autoAlpha: 1,
    }, {
        top: "-100%",
        autoAlpha: 0,
        duration: 0,
        ease: "none",
    } , ">");


    tl1.addLabel('1960');
    tl1.addLabel('startScroll','+=0.3');
    tl1.fromTo(".y3-2__bg", {
        y: 0,
    }, {
        y: "-100%",
        duration: 10,
        ease: "none",
    } , "startScroll+0.7");
    tl1.addLabel('endScroll');

    tl1.fromTo(".y3-2__top", {
        y: 0,
    }, {
        y: "-100%",
        duration: 2,
        ease: "none",
    } , "startScroll");



    tl1.fromTo(".y3-2__top", {
        autoAlpha: 1,
    }, {
        autoAlpha: 0.3,
        duration: 1,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y3-2__title--1", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 2,
        ease: "none",
    } , "<");

    tl1.fromTo(".y3-2__title--1 span:nth-child(1)", {
        x: "100vw"
    }, {
        x: "-10vw",
        duration: 2,
        ease: "none",
    } , "<");
    tl1.fromTo(".y3-2__title--1 span:nth-child(2)", {
        x: "-100%"
    }, {
        x: "40%",
        duration: 2,
        ease: "none",
    } , "<");
    tl1.fromTo(".y3-2__title--1 span:nth-child(3)", {
        x: "50%"
    }, {
        x: "30%",
        duration: 2,
        ease: "none",
    } , "<");
    tl1.fromTo(".y3-2__title--1 span:nth-child(4)", {
        x: "0%"
    }, {
        x: "25%",
        duration: 2,
        ease: "none",
    } , "<");


    tl1.fromTo(".y3-2__text--1", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    } , ">-0.7");

    tl1.fromTo(".y3-2__title--2", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 2,
        ease: "none",
    } , "<+0.5");
    tl1.fromTo(".y3-2__title--2 span:nth-child(1)", {
        x: "50%"
    }, {
        x: "30%",
        duration: 2,
        ease: "none",
    } , "<");
    tl1.fromTo(".y3-2__title--2 span:nth-child(2)", {
        x: "30%"
    }, {
        x: "70%",
        duration: 2,
        ease: "none",
    } , "<");


    tl1.fromTo(".y3-2__azs", {
        y: "100vh"
    }, {
        y: "-200%",
        duration: 2,
        ease: "none",
    } , ">-1.3");
    tl1.fromTo(".y3-2__azs-logo", {
        y: "-50%"
    }, {
        y: "0%",
        duration: 2,
        ease: "none",
    } , "<");


    tl1.fromTo(".y3-2__text--2", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    } , ">-1");

    tl1.fromTo(".y3-2__label-block", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 2.3,
        ease: "none",
    } , "<");

    tl1.fromTo(".y3-2__label", {
        y: "100vh"
    }, {
        y: "-100%",
        duration: 3.3,
        ease: "none",
    } , "<-0.15");

    tl1.fromTo(".y3-2__label", {
        autoAlpha: 0
    }, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , "<1");

    tl1.fromTo(".y3-2__year", {
        autoAlpha: 1
    }, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
    } , "<2");

    tl1.fromTo(".y3-3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration: 0.5,
        ease: "none",
    } , ">3");


    tl1.addLabel('1962');
    tl1.fromTo(".y3-4", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b1Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">");

    tl1.fromTo(".y3-4__first-title", {
        y: '300%',
    }, {
        y: 0,
        duration:  5.5,
        ease: "none",
    } , "<");

    tl1.fromTo(".y3-4__second-image", {
        x: '30%',
    }, {
        x: "-20%",
        duration:  6,
        ease: "none",
    } , "<");

    tl1.fromTo(".y3-4__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.addLabel('1964','+=1.1');
    tl1.fromTo(".y3-5", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b2Width-scWidth),
        duration:  4,
        ease: "none",
    } , ">-1.5");


    tl1.from(".y3-5__title span:nth-child(1)",  {
        x: "-120%",
        duration: 4,
        ease: "none",
    } , "<");
    tl1.from(".y3-5__title span:nth-child(2)", {
        x: "-65%",
        duration: 4,
        ease: "none",
    } , "<");
    tl1.to(".y3-5__image", {
        x: "-30vw",
        duration: 2,
        ease: "none",
    } , "<2");

    tl1.fromTo(".y3-5__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.addLabel('1966','+=1.1');
    tl1.fromTo(".y3-6", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b3Width-scWidth),
        duration:  10,
        ease: "none",
    } , ">-1.5");



    tl1.fromTo(".y3-6__second-image2", {
        x: '150%',
    }, {
        x: '-80%',
        duration: 4,
        ease: "none",
    } , "<3");


    tl1.from(".y3-6__last-title span:nth-child(1)",  {
        left: "50vw",
        duration: 3,
        ease: "none",
    } , ">");
    tl1.from(".y3-6__last-title span:nth-child(2)", {
        left: "0",
        duration: 3,
        ease: "none",
    } , "<");
    tl1.from(".y3-6__last-title span:nth-child(3)", {
        left: "5vw",
        duration: 3,
        ease: "none",
    } , "<");
    tl1.from(".y3-6__last-image", {
        top: "-100%",
        duration: 3,
        ease: "none",
    } , "<");

    tl1.fromTo(".y3-6__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">3");


    tl1.addLabel('1967','+=1.1');
    tl1.fromTo(".y3-7", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b4Width-scWidth),
        duration:  8,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y3-7__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");



    tl1.addLabel('1968','+=1.1');
    tl1.fromTo(".y3-8", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b5Width-scWidth),
        duration: 4,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y3-8__overlay", {
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