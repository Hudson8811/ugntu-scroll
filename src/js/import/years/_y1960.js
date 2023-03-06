import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);


var initMode;
let addTime = 400;

let st1;
let tl1 = gsap.timeline({});
let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
    }
});

let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');



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




    st1 = ScrollTrigger.create({
        trigger: ".scroll-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 2.5,
        animation: tl1,
    });
}