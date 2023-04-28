import $ from "jquery";
import gsap from "gsap";
import Swiper from 'swiper/bundle';
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

var initMode;
let addTime = 2100;


let st1;
let tl1 = gsap.timeline({});
let tl = gsap.timeline({
	onComplete: function () {
		$('body').addClass('active');
	}
});

let scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width, b11Height, b12Height, b13Height, b14Height, b15Height;
let scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height, b8Height, b9Height;

let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');


$(window).on('resize', function () {
	var wwidth = $(window).width();
	if (dwidth !== wwidth) {
		if (typeof st1 !== "undefined") st1.kill();
		tl1.clear();
		tl.clear();
		gsap.set(
			".y5-110,.y5-1__bg--1,.y5-110__numbers,.y5-110__numbers-number,.y5-110__numbers-line,.y5-110__photos,.y5-110__photos-item" +
			".y5-100,.y5-100__numbers,.y5-100__numbers-number,.y5-100__numbers-line," +
			".y5-1__bg,.y5-1__bg--1,.y5-1__title--1 span:nth-child(1),.y5-1__title--1 span:nth-child(2),.y5-1 .y5-1__year,.y5-1 .y5-1__text--1," +
			".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", { clearProps: "all" });
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
function initAnimation() {

	scWidth = $('.scroll-page').innerWidth();
	b1Width = $('.y5-1').innerWidth();
	b2Width = $('.y4-2').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y5-1').innerHeight();
	b2Height = $('.y4-2').innerHeight();


	if (window.innerWidth > 1100) {
		initScrollAnimationDesktop();
		initMode = 'desk';
	} else if (window.innerWidth > 699) {
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

function initScrollAnimationDesktop() {
	gsap.to(".fullPageOverlay", {
		duration: 1,
		autoAlpha: 0,
		ease: "none",
		onComplete: function () {
			$('.fullPageOverlay').removeClass('active');
			$('body').addClass('active');
		}
	});

	tl.fromTo(".y5-110__numbers", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");
	tl.fromTo(".y5-110__photos", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");

	tl.fromTo(".y5-110__numbers", {
		x: '100vw',
	}, {
		x: '5vw',
		duration: 1,
		ease: "none",
	}, "0");
	tl.fromTo(".y5-110__photos-item--1", {
		x: '100vw',
	}, {
		x: '50vw',
		duration: 1,
		ease: "none",
	}, "0");



	tl1.fromTo(".y5-110__numbers", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 4,
		ease: "none",
	}, "0");
	tl1.fromTo(".y5-110__photos-item--1", {
		x: '50vw',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y5-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.7");
	tl1.fromTo(".y5-110", {
		x: '0vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-=0.7");




	tl1.fromTo(".y5-1__bg--1", {
		y: '0%',
	}, {
		y: '-80%',
		duration: 8,
		ease: "none",
	}, ">");
	tl1.fromTo(".y5-1__man", {
		x: "10%",
		y: '53%',
	}, {
		x: "10%",
		y: '-150%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-1 .y5-1__text--1", {
		y: '5vh'
	}, {
		y: '-150vh',
		duration: 1,
		ease: "none",
	}, "<");

	tl1.fromTo(".y5-1__title--1 span:nth-child(1)", {
		x: '-60vw',
		y: '100vh'
	}, {
		x: '120vw',
		y: '-100vh',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-1__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '120vh'
	}, {
		x: '-115vw',
		y: '-120vh',
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-1__title--1 span:nth-child(3)", {
		x: '-40vw',
		y: '125vh'
	}, {
		x: '100vw',
		y: '-125vh',
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-1__title--1 span:nth-child(4)", {
		x: '0vw',
		y: '135vh'
	}, {
		x: '180vw',
		y: '-135vh',
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-1__2", {
		x: "100%",
		y: '70%',
	}, {
		x: "-100%",
		y: '70%',
		duration: 3.5,
		ease: "none",
	}, ">-=1.4");
	tl1.fromTo(".y5-1", {
		y: '0%',
	}, {
		y: '-100%',
		duration: 4,
		ease: "none",
	}, "<+=0.3");


	tl1.fromTo(".y5-2__bg--1", {
		scale: 1.5,
	}, {
		scale: 1,
		duration: 2,
		ease: "none",
	}, ">-=0.5");
	tl1.fromTo(".y5-2__title--1", {
		x: "0%",
		y: '100%',
	}, {
		x: "-100%",
		y: '100%',
		duration: 7,
		ease: "none",
	}, "<-=1.9");


	tl1.fromTo(".y5-3", {
		x: '0',
		y: '100%'
	}, {
		x: '0',
		y: '0%',
		duration: 1,
		ease: "none",
	}, ">-=2");
	tl1.fromTo(".y5-3__title--1 span:nth-child(1)", {
		x: '-110vw',
		y: '20vh'
	}, {
		x: '130vw',
		duration: 1,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".y5-3__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '40vh'
	}, {
		x: '-130vw',
		duration: 1,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y5-3__2", {
		// x: '100vw',
		y: '100vh'
	}, {
		// x: '-130vw',
		y: '35vh',
		duration: 1,
		ease: "none",
	}, ">-=1.3");

	tl1.fromTo(".y5-4", {
		y: "150vh",
	}, {
		y: "-50vh",
		duration: 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y5-5__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");

	tl1.addLabel('1982', "+=0.261");

	tl1.fromTo(".y5-5", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-354vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y5-5__1", {
		y: "0vh",
		x: "75vw"
	}, {
		y: "0vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-5__title--1 span:nth-child(1)", {
		y: "30vh",
		x: "0vw"
	}, {
		y: "30vh",
		x: "120vw",
		duration: 0.9,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-5__title--1 span:nth-child(2)", {
		y: "50vh",
		x: "75vw"
	}, {
		y: "60vh",
		x: "10vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-5__title--1 span:nth-child(3)", {
		y: "70vh",
		x: "70vw"
	}, {
		y: "70vh",
		x: "140vw",
		duration: 0.5,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y5-7__2", {
		// y: "50vh",
		x: "85vw"
	}, {
		// y: "50vh",
		x: "70vw",
		duration: 0.3,
		ease: "none",
	}, ">-=0.2");



	tl1.fromTo(".y5-8__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('1983', "+=0.408");

	tl1.fromTo(".y5-8", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y5-9__2", {
		// y: "50vh",
		x: "95vw"
	}, {
		// y: "50vh",
		x: "50vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");




	tl1.fromTo(".y5-11__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('1984', "+=0.785");

	tl1.fromTo(".y5-11", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-54vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y5-11__2", {
		// y: "50vh",
		x: "0vw"
	}, {
		// y: "50vh",
		x: "58vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");



	tl1.fromTo(".y5-12__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('1985', "+=0.41");

	tl1.fromTo(".y5-12", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y5-14__2", {
		// y: "50vh",
		x: "130vw"
	}, {
		// y: "50vh",
		x: "61vw",
		duration: 1,
		ease: "none",
	}, "<+=0.2");


	
	tl1.fromTo(".y5-15__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('1986', "+=0.41");


	tl1.fromTo(".y5-15", {
		y: "0vh",
		x: "180vw"
	}, {
		y: "0vh",
		x: "-84vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y5-15__1", {
		// y: "10vh",
		x: "0vw"
	}, {
		// y: "0vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<+=0.15");
	tl1.fromTo(".y5-15__title--1 span:nth-child(1)", {
		y: "10vh",
		x: "-2vw"
	}, {
		y: "10vh",
		x: "55vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-15__title--1 span:nth-child(2)", {
		y: "30vh",
		x: "65vw"
	}, {
		y: "30vh",
		x: "150vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y5-15__title--1 span:nth-child(3)", {
		y: "50vh",
		x: "20vw"
	}, {
		y: "50vh",
		x: "95vw",
		duration: 1,
		ease: "none",
	}, "<");






	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 1,
		animation: tl1,
	});
}
function initScrollAnimationTablet() { }
function initScrollAnimationMobile() { }

function checkYearValue() {
	if (yValue !== null) {
		if (initMode === 'desk') {
			tl.progress(1);
			gsap.to(window, {
				scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
				duration: 0
			});
		} else if (initMode === 'tablet') {
			gsap.to(window, {
				scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
				duration: 0
			});
		} else if (initMode === 'mobile') {
			gsap.to(window, {
				scrollTo: '#year' + yValue,
				duration: 0.01
			});
		}
	}
}

function scrollToYear(year) {
	if (year !== null) {
		if (initMode === 'desk' || initMode === 'tablet') {
			gsap.to(window, {
				scrollTo: tl1.scrollTrigger.labelToScroll(year),
			});
		} else if (initMode === 'mobile') {
			gsap.to(window, {
				scrollTo: '#year' + year,
			});
		}
	}
}

$('.sidebar__menu-dropdown a').on('click', function () {
	event.preventDefault();
	let link = $(this).attr('href');
	if ($(this).closest('.sidebar__menu-item').hasClass('active')) {
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

