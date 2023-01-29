import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


addEventListener('beforeunload', (event) => { });
onbeforeunload = (event) => {
	window.scrollTo(0, 0);
};

$(window).on('load',function (){

    if ($('.home-page').length > 0){

        let tl = gsap.timeline({
            onComplete: function (){
                $('body').addClass('active');
                $('.loader').addClass('hide');
            }
        });


        var initMode;
        let addTime = 1000;

        let st1, st2, st3;
        let tl1 = gsap.timeline({});
        let tl2 = gsap.timeline({});
        let tl3 = gsap.timeline({});


        function initAnimation(){
            if (window.innerWidth > 999){
                initScrollAnimationDesktop();
                initMode = 'desk';
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
                gsap.set(".home-page", {clearProps:"all"});
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
                $('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
                $('body').removeClass('active');
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

            tl.from(".header", {
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







            tl1.fromTo(".header", {
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


            let s3Width =  $('.section3').innerWidth();
            let b1Width =  $('.section3__block--1').innerWidth();
            let b2Width =  $('.section3__block--2').innerWidth();
            let b3Width =  $('.section3__block--3').innerWidth();
            let b4Width =  $('.section3__block--4').innerWidth();

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


            tl1.fromTo(".section3__block--3", {
                x: "0",
                left: "100%"
            }, {
                left: "0",
                x: -1*(b3Width-s3Width),
                duration:  6,
                ease: "none",
            } , ">-1.5");

            tl1.fromTo(".section3__block--3 .section3__label--1  .section3__label-item--1", {
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
                duration:  1.5,
                ease: "none",
            } , ">");

            tl1.fromTo(".section3__block--5", {
                left: "100%"
            }, {
                left: "0",
                duration:  2,
                ease: "none",
            } , ">-1.5");



            st1 = ScrollTrigger.create({
                trigger: ".scroll-page",
                pin: true,
                start: "top top",
                end: () =>   "+="+addTime+"%",
                scrub: 2.5,
                animation: tl1,
            });
        }

    }


});
