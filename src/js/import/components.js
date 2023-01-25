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

$(document).ready(function (){

    if ($('.home-page').length > 0){

        let tl = gsap.timeline({
            onComplete: function (){
                $('body').addClass('active');
                $('.loader').addClass('hide');
            }
        });


        var initMode;
        let addTime = 2300;

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
                addTime = 2300;
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


            tl.from(".sidebar", {
                x: "-100%",
                duration:  0.7,
                ease: "Sine.out",
            } , ">");


            st1 = ScrollTrigger.create({
                trigger: ".scroll-page",
                pin: true,
                start: "top top",
                end: () =>   "+="+addTime+"%",
                scrub: 1.5,
                animation: tl1,
            });
        }

    }


});
