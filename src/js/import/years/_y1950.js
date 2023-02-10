import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


var initMode;
let addTime = 2100;


let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width;

function initAnimation(){
    scWidth =  $('.scroll-page').innerWidth();
    b1Width =  $('.y2-4').innerWidth();
    b2Width =  $('.y2-5').innerWidth();
    b3Width =  $('.y2-6').innerWidth();
    b4Width =  $('.y2-7').innerWidth();
    b5Width =  $('.y2-8').innerWidth();
    b6Width =  $('.y2-9__flex').innerWidth();
    b7Width =  $('.y2-10').innerWidth();
    b8Width =  $('.y2-11').innerWidth();
    b9Width =  $('.y2-12').innerWidth();


    $('video').trigger('play');

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
        if (typeof st2 !== "undefined") st2.kill();
        if (typeof st3 !== "undefined") st3.kill();
        tl.clear();
        tl1.clear();
        tl2.clear();
        tl3.clear();
        gsap.set(".y2-1__numbers,.y2-1__photos-item--1,.y2-1__photos-item--2,.y2-1__photos-item--3,.y2-2,.y2-2__top," +
            ".y2-2__title,.y2-2__fly,.y2-2__title span,.y2-2__text,.y2-2__diplom,.y2-1,.y2-3__text,.y2-3__label,.y2-3__overlay," +
            ".y2-4,.y2-4__overlay,.y2-5,.y2-5__overlay,.y2-6,.y2-6__title span,.y2-6__image,.y2-6__overlay,.y2-7,.y2-7__image," +
            ".y2-7__title span,.y2-7__overlay,.y2-9,.y2-8,.y2-9__flex,.y2-9__title,.y2-9__title span,.y2-10,.y2-10__overlay," +
            ".y2-11,.y2-11__first-title,.y2-11__second-title span,.y2-11__overlay,.y2-12,.y2-12__title,.y2-12__text-col," +
            ".y2-12__images-img" +
            ".scroll-page", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('body').removeClass('active');
        initAnimation();
    }
});


function initScrollAnimationDesktop(){
    $('body').addClass('active');

    tl1.fromTo(".y2-1__numbers", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  6,
        ease: "none",
    } , "0");
    tl1.fromTo(".y2-1__photos-item--1", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  1.5,
        ease: "none",
    } , "<+1");
    tl1.fromTo(".y2-1__photos-item--2", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  1.5,
        ease: "none",
    } , ">-0.2");
    tl1.fromTo(".y2-1__photos-item--3", {
        x: '100vw',
    }, {
        x: '-100%',
        duration:  1.5,
        ease: "none",
    } , ">-0.7");


    tl1.fromTo(".y2-2", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.7,
        ease: "none",
    } , "6");


    tl1.fromTo(".y2-2__top", {
        y: 0,
    }, {
        y: "-100%",
        duration: 2,
        ease: "none",
    } , ">0.3");

    tl1.fromTo(".y2-2__title", {
        y: "100vh"
    }, {
        y: "0",
        duration: 2,
        ease: "none",
    } , "<0.2");


    tl1.fromTo(".y2-2__fly", {
        y: 0,
        top: "100%"
    }, {
        y: "-100%",
        top: 0,
        duration: 1,
        ease: "none",
    } , ">-0.4");

    tl1.from(".y2-2__title span:nth-child(1)", {
        x: "130%",
        duration: 3,
        ease: "none",
    } , "<-1.6");

    tl1.from(".y2-2__title span:nth-child(2)", {
        x: "-80%",
        duration: 3,
        ease: "none",
    } , "<");

    tl1.from(".y2-2__title span:nth-child(3)", {
        x: "50%",
        duration: 3,
        ease: "none",
    } , "<");



    tl1.fromTo(".y2-2__text", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "none",
    } , ">");

    tl1.fromTo(".y2-2__title", {
        autoAlpha: 1,
    }, {
        autoAlpha: 0.2,
        duration: 0.2,
        ease: "none",
    } , ">");


    tl1.fromTo(".y2-2__diplom", {
        y: 0,
        top: "100%"
    }, {
        y: "-100%",
        top: 0,
        duration: 2,
        ease: "none",
    } , "<");


    tl1.fromTo(".y2-1", {
        top: "0",
        autoAlpha: 1,
    }, {
        top: "-100%",
        autoAlpha: 0,
        duration: 0,
        ease: "none",
    } , ">");
    tl1.fromTo(".y2-2", {
        top: "0"
    }, {
        top: "-120%",
        duration: 2.5,
        ease: "none",
    } , "<");


    tl1.fromTo(".y2-3__text", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">-0.5");

    tl1.fromTo(".y2-3__label", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">");
    tl1.fromTo(".y2-3__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration: 0.5,
        ease: "none",
    } , "<");


    tl1.fromTo(".y2-4", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b1Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">");

    tl1.fromTo(".y2-4__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");



    tl1.fromTo(".y2-5", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b2Width-scWidth),
        duration:  4,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y2-5__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">")


    tl1.fromTo(".y2-6", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b3Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">-1.5");

    tl1.from(".y2-6__title span:nth-child(1)", {
        x: "70%",
        duration: 6,
        ease: "none",
    } , "<");
    tl1.from(".y2-6__title span:nth-child(2)", {
        x: "100%",
        duration: 6,
        ease: "none",
    } , "<");
    tl1.from(".y2-6__title span:nth-child(3)", {
        x: "-38%",
        duration: 6,
        ease: "none",
    } , "<");
    tl1.from(".y2-6__title span:nth-child(4)", {
        x: "-200%",
        duration: 6,
        ease: "none",
    } , "<");


    tl1.fromTo(".y2-6__image", {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration:  0.7,
        ease: "none",
    } , ">");

    tl1.fromTo(".y2-6__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">0.5");


    tl1.fromTo(".y2-7", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b4Width-scWidth),
        duration: 5,
        ease: "none",
    } , ">-1.5");

    tl1.from(".y2-7__image", {
        x: "-35%",
        duration: 5,
        ease: "none",
    } , "<");

    tl1.from(".y2-7__title span:nth-child(1)", {
        x: "40%",
        duration: 5,
        ease: "none",
    } , "<");
    tl1.from(".y2-7__title span:nth-child(2)", {
        x: "-15%",
        duration: 5,
        ease: "none",
    } , "<");
    tl1.from(".y2-7__title span:nth-child(3)", {
        x: "-70%",
        duration: 5,
        ease: "none",
    } , "<");

    tl1.fromTo(".y2-7__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.fromTo(".y2-9", {
        left: "100%"
    }, {
        left: 0,
        duration:  1,
        ease: "none",
    } , ">");

    tl1.fromTo(".y2-8", {
        left: "100%"
    }, {
        left: -b5Width,
        duration:  6,
        ease: "none",
    } , "<-1.5");


    tl1.fromTo(".y2-9__flex", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b6Width-scWidth),
        duration:  7,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y2-9__title", {
        x: "200%",
    },{
        x: "-100%",
        duration: 6,
        ease: "none",
    } , "<+1");
    tl1.to(".y2-9__title span:nth-child(1)", {
        x: "80%",
        duration: 6,
        ease: "none",
    } , "<");
    tl1.to(".y2-9__title span:nth-child(3)", {
        x: "90%",
        duration: 6,
        ease: "none",
    } , "<");


    tl1.fromTo(".y2-10", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b7Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">");



    tl1.fromTo(".y2-10__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");

    tl1.fromTo(".y2-11", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b8Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">-1.5");

    tl1.fromTo(".y2-11__first-title", {
        x: "40%",
    },{
        x: "-5%",
        duration: 3,
        ease: "none",
    } , "<");

    tl1.from(".y2-11__second-title span:nth-child(1)", {
        x: "15%",
        duration: 3,
        ease: "none",
    } , ">");
    tl1.from(".y2-11__second-title span:nth-child(2)", {
        x: "-7%",
        duration: 3,
        ease: "none",
    } , "<");
    tl1.from(".y2-11__second-title span:nth-child(3)", {
        x: "-10%",
        duration: 3,
        ease: "none",
    } , "<");

    tl1.fromTo(".y2-11__overlay", {
        autoAlpha: 0,
    }, {
        autoAlpha: 0.7,
        duration:  1.5,
        ease: "none",
    } , ">");


    tl1.fromTo(".y2-12", {
        x: "0",
        left: "100%"
    }, {
        left: "0",
        x: -1*(b9Width-scWidth),
        duration:  6,
        ease: "none",
    } , ">-1.5");

    tl1.from(".y2-12__title", {
        x: "-75%",
        duration: 6,
        ease: "none",
    } , "<");

    tl1.from(".y2-12__text-col", {
        x: "20vw",
        duration: 6,
        ease: "none",
    } , "<");
    tl1.from(".y2-12__images-img", {
        x: "20vw",
        duration: 6,
        ease: "none",
    } , "<");



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
    $('body').addClass('active');


}
function initScrollAnimationMobile(){}