import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


var initMode;
let addTime = 800;


let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});



function initAnimation(){
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
        gsap.set("" +
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
        y: 0,
        top: "0"
    }, {
        y: "0",
        top: "-100%",
        duration: 2,
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

function initScrollAnimationTablet(){}
function initScrollAnimationMobile(){}