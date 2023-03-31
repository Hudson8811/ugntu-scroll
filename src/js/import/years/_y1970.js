import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

var initMode;
let addTime = 1000;


let st1;
let tl1 = gsap.timeline({});
let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
    }
});

let scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width;
let scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height, b8Height, b9Height;

let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');

function initAnimation(){

	scWidth =  $('.scroll-page').innerWidth();
	b1Width =  $('.y4-1').innerWidth();
	b2Width =  $('.y4-2').innerWidth();


	scHeight =  $('.scroll-page').innerHeight();
	b1Height =  $('.y4-1').innerHeight();
	b2Height =  $('.y4-2').innerHeight();

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

function initScrollAnimationDesktop(){
	gsap.to(".fullPageOverlay", {
			duration: 1,
			autoAlpha: 0,
			ease: "none",
			onComplete: function (){
					$('.fullPageOverlay').removeClass('active');
			}
	});

	tl1.fromTo(".y4-1__bg", {
		y: '0%',
}, {
		y: '-200%',
		duration:  4,
		ease: "none",
} , "0");
	tl1.fromTo(".y4-1__bg--1", {
		y: '0%',
}, {
		y: '-200%',
		duration:  8,
		ease: "none",
} , "0");
	tl1.fromTo(".y4-1__title--1 span:nth-child(1)", {
		x: '-60vw',
		y: '60vh'
}, {
		x: '120vw',
		duration:  1,
		ease: "none",
} , "0");
	tl1.fromTo(".y4-1__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '80vh'
}, {
		x: '-120vw',
		duration:  1,
		ease: "none",
} , "0");
	tl1.fromTo(".y4-1 .y4-1__year", {
		y: '2vh'
}, {
		y: '-50vh',
		duration:  1,
		ease: "none",
} , "1");
	tl1.fromTo(".y4-1 .y4-1__text--1", {
		y: '5vh'
}, {
		y: '-50vh',
		duration:  1,
		ease: "none",
} , "1");

tl1.addLabel('1971');




// tl1.fromTo(".y4-2", {
// 		y: "0",
// }, {
// 		y: -1*(b2Height-scHeight),
// 		duration: Math.abs((scHeight-b2Height)/460),
// 		ease: "none",
// } , ">");

tl1.fromTo(".y4-2__title--1 span:nth-child(1)", {
	x: '-90vw',
	y: '30vh'
}, {
	x: '130vw',
	duration:  1,
	ease: "none",
} , ">-0.3");
tl1.fromTo(".y4-2__title--1 span:nth-child(2)", {
	x: '100vw',
	y: '50vh'
}, {
	x: '-130vw',
	duration:  1,
	ease: "none",
} , ">-0.8");

tl1.fromTo(".y4-2", {
		y: "0vh",
}, {
		y: "-190vh",
		duration:  1,
		ease: "none",
} , ">");
tl1.fromTo(".y4-3__text--2", {
		opacity: 1,
}, {
		opacity: 0.1,
		duration:  1,
		ease: "none",
} , ">");
tl1.fromTo(".y4-3__2", {
		opacity: 0,
}, {
		opacity: 1,
		duration:  1,
		ease: "none",
} , "<");
tl1.fromTo(".y4-3__1", {
		opacity: 0,
}, {
		opacity: 1,
		duration:  1,
		ease: "none",
} , ">");
tl1.fromTo(".y4-3__text--1", {
		opacity: 0,
}, {
		opacity: 1,
		duration:  1,
		ease: "none",
} , "<");
tl1.fromTo(".y4-4", {
	y: "0vh",
	x: "100vw"
}, {
	y: "0vh",
	x: "0vw",
	duration:  1,
	ease: "none",
} , ">");
tl1.fromTo(".y4-5", {
	y: "0vh",
	x: "100vw"
}, {
	y: "0vh",
	x: "-104vw",
	duration:  1,
	ease: "none",
} , ">");
tl1.fromTo(".y4-5__3", {
	x: "5vw"
}, {
	x: "70vw",
	duration:  2,
	ease: "none",
} , "<");
// tl1.fromTo(".y4-5__4", {
// 	x: "70vw"
// }, {
// 	x: "100vw",
// 	duration:  1,
// 	ease: "none",
// } , ">");
// tl1.fromTo(".y4-5__text--1", {
// 	x: "70vw"
// }, {
// 	x: "100vw",
// 	duration:  1,
// 	ease: "none",
// } , "<");

	


	st1 = ScrollTrigger.create({
			trigger: ".scroll-page",
			pin: true,
			start: "top top",
			end: () =>   "+="+addTime+"%",
			scrub: 1,
			animation: tl1,
	});
}
function initScrollAnimationTablet(){}
function initScrollAnimationMobile(){}




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
