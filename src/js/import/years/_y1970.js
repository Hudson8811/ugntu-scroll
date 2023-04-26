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
			".y4-1__bg,.y4-1__bg--1,.y4-1__title--1 span:nth-child(1),.y4-1__title--1 span:nth-child(2),.y4-1 .y4-1__year,.y4-1 .y4-1__text--1," +
			".y4-2__title--1 span:nth-child(1),.y4-2__title--1 span:nth-child(2),.y4-2," +
			".y4-3__text--2,.y4-3__2,.y4-3__1,.y4-3__text--1" +
			".y4-4,.y4-5,.y4-5__3,.y4-5__4,.y4-5__text--1," +
			".y4-6__1,.y4-6__2" +
			".y4-7__1,.y4-7__title--1 span:nth-child(1),.y4-7__title--1 span:nth-child(2),.y4-7__2," +
			".y4-8__blockOverlay,.y4-8" +
			".y4-9__2,.y4-9__3" +
			".y4-10__blockOverlay,.y4-10,.y4-10__1,.y4-10__title--1 span:nth-child(1),.y4-10__title--1 span:nth-child(2)" +
			".y4-12__2" +
			".y4-13__blockOverlay,.y4-13," +
			".y4-14__2," +
			".y4-15__blockOverlay,.y4-15,.y4-15__1,.y4-15__title--1 span:nth-child(1),.y4-15__title--1 span:nth-child(2),.y4-15__title--1 span:nth-child(3)," +
			".y4-16__blockOverlay,.y4-16,.y4-16__2" +
			".y4-17__blockOverlay,.y4-17,.y4-17__bg--1" +

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
	b1Width = $('.y4-1').innerWidth();
	b2Width = $('.y4-2').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y4-1').innerHeight();
	b2Height = $('.y4-2').innerHeight();
	b3Height = $('.y4-3').innerHeight();
	b4Height = $('.y4-4').innerHeight();
	b5Height = $('.y4-4--4').innerHeight();
	b6Height = $('.y4-5').innerHeight();
	b7Height = $('.y4-6').innerHeight();
	b8Height = $('.y4-7').innerHeight();
	b9Height = $('.y4-8').innerHeight();
	b11Height = $('.y4-10').innerHeight();
	b12Height = $('.y4-13').innerHeight();
	b13Height = $('.y4-15').innerHeight();
	b14Height = $('.y4-16').innerHeight();
	b15Height = $('.y4-17').innerHeight();

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


	tl1.fromTo(".y4-110__numbers", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 4,
		ease: "none",
	}, "0");
	tl1.fromTo(".y4-110__photos-item--1", {
		x: '50vw',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y4-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.7");
	tl1.fromTo(".y4-110", {
		x: '0vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.5");





	tl1.fromTo(".y4-1__bg", {
		y: '0%',
	}, {
		y: '-200%',
		duration: 4,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-1__bg--1", {
		y: '0%',
	}, {
		y: '-200%',
		duration: 8,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-1__title--1 span:nth-child(1)", {
		x: '-60vw',
		y: '60vh'
	}, {
		x: '120vw',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-1__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '80vh'
	}, {
		x: '-120vw',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-1 .y4-1__year", {
		y: '2vh'
	}, {
		y: '-50vh',
		duration: 1,
		ease: "none",
	}, "4");
	tl1.fromTo(".y4-1 .y4-1__text--1", {
		y: '5vh'
	}, {
		y: '-50vh',
		duration: 1,
		ease: "none",
	}, "4");

	tl1.addLabel('1971', '-=2.1');

	tl1.fromTo(".y4-2__title--1 span:nth-child(1)", {
		x: '-90vw',
		y: '20vh'
	}, {
		x: '130vw',
		duration: 1,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y4-2__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '40vh'
	}, {
		x: '-130vw',
		duration: 1,
		ease: "none",
	}, ">-0.8");

	tl1.fromTo(".y4-2", {
		y: "0vh",
	}, {
		y: "-190vh",
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-3__text--2", {
		opacity: 1,
	}, {
		opacity: 0.1,
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-3__2", {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-3__1", {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-3__text--1", {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 1,
		ease: "none",
	}, "<");


	tl1.fromTo(".y4-4", {
		y: "0vh",
		x: "100vw"
	}, {
		y: "0vh",
		x: "0vw",
		duration: 1,
		ease: "none",
	}, ">");



	tl1.addLabel('1972', '-=0.48');


	tl1.fromTo(".y4-5", {
		y: "0vh",
		x: "100vw"
	}, {
		y: "0vh",
		x: "-404vw",
		duration: 3.1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-5__3", {
		x: "5vw"
	}, {
		x: "70vw",
		duration: 1.3,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-5__4", {
		x: "65vw"
	}, {
		x: "150vw",
		duration: 1,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".y4-5__text--1", {
		x: "65vw"
	}, {
		x: "150vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-6__1", {
		y: "80vh",
		// x: "100vw"
	}, {
		y: "20vh",
		// x: "-104vw",
		duration: 1.4,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-6__2", {
		y: "-10vh",
		// x: "100vw"
	}, {
		y: "20vh",
		// x: "-104vw",
		duration: 1.4,
		ease: "none",
	}, "<");

	tl1.fromTo(".y4-7__1", {
		y: "70vh",
		x: "5vw"
	}, {
		y: "10vh",
		x: "5vw",
		duration: 0.6,
		ease: "none",
	}, ">-=0.4");
	tl1.fromTo(".y4-7__title--1 span:nth-child(1)", {
		y: "10vh",
		x: "50vw"
	}, {
		y: "10vh",
		x: "-30vw",
		duration: 0.8,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-7__title--1 span:nth-child(2)", {
		y: "30vh",
		x: "90vw"
	}, {
		y: "30vh",
		x: "-30vw",
		duration: 0.8,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-7__2", {
		y: "-30vh",
		// x: "150vw"
	}, {
		y: "0vh",
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");

	tl1.addLabel('1973', '+=0.8');

	tl1.fromTo(".y4-8__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-8", {
		y: "0vh",
		x: "100vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.6");
	tl1.fromTo(".y4-9__2", {
		y: "0vh",
		x: "-20vw"
	}, {
		y: "0vh",
		x: "33vw",
		duration: 0.8,
		ease: "none",
	}, ">-=0.6");
	tl1.fromTo(".y4-9__3", {
		y: "0vh",
		x: "70vw"
	}, {
		y: "0vh",
		x: "55vw",
		duration: 0.8,
		ease: "none",
	}, ">-=0.8");




	tl1.addLabel('1974', "+=0.46");

	tl1.fromTo(".y4-10__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">-=0.2");
	tl1.fromTo(".y4-10", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-354vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y4-10__1", {
		y: "0vh",
		x: "75vw"
	}, {
		y: "0vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-10__title--1 span:nth-child(1)", {
		y: "30vh",
		x: "0vw"
	}, {
		y: "30vh",
		x: "120vw",
		duration: 0.9,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y4-10__title--1 span:nth-child(2)", {
		y: "50vh",
		x: "75vw"
	}, {
		y: "50vh",
		x: "10vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y4-12__2", {
		// y: "50vh",
		x: "85vw"
	}, {
		// y: "50vh",
		x: "70vw",
		duration: 0.3,
		ease: "none",
	}, ">-=0.2");





	tl1.fromTo(".y4-13__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">-=0.1");
	tl1.addLabel('1975', "+=0.3");
	tl1.fromTo(".y4-13", {
		y: "0vh",
		x: "120vw"
	}, {
		y: "0vh",
		x: "-174vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.2");
	tl1.fromTo(".y4-14__2", {
		y: "0vh",
		x: "100vw"
	}, {
		y: "0vh",
		x: "60vw",
		duration: 0.5,
		ease: "none",
	}, ">-=0.4");

	tl1.addLabel('1976', "+=1.06");


	tl1.fromTo(".y4-15__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y4-15", {
		y: "0vh",
		x: "160vw"
	}, {
		y: "0vh",
		x: "-64vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y4-15__1", {
		// y: "10vh",
		x: "0vw"
	}, {
		// y: "0vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<+=0.15");
	tl1.fromTo(".y4-15__title--1 span:nth-child(1)", {
		y: "15vh",
		x: "-2vw"
	}, {
		y: "15vh",
		x: "85vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-15__title--1 span:nth-child(2)", {
		y: "35vh",
		x: "0vw"
	}, {
		y: "35vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-15__title--1 span:nth-child(3)", {
		y: "55vh",
		x: "20vw"
	}, {
		y: "55vh",
		x: "65vw",
		duration: 1,
		ease: "none",
	}, "<");




	tl1.fromTo(".y4-16__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");


	tl1.addLabel('1977', "+=0.69");


	tl1.fromTo(".y4-16", {
		y: "0vh",
		x: "200vw"
	}, {
		y: "0vh",
		x: "-104vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y4-16__2", {
		// y: "0vh",
		x: "40vw"
	}, {
		// y: "0vh",
		x: "100vw",
		duration: 1.2,
		ease: "none",
	}, "<");



	tl1.fromTo(".y4-17__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.2,
		ease: "none",
	}, ">");

	tl1.addLabel('1978', "+=0.82");
	tl1.fromTo(".y4-17", {
		y: "0vh",
		x: "140vw"
	}, {
		y: "0vh",
		x: "-44vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y4-17__bg--1", {
		y: "0vh",
		// x: "160vw"
	}, {
		y: "-50vh",
		// x: "-64vw",
		duration: 1.2,
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
function initScrollAnimationTablet() {
	gsap.to(".fullPageOverlay", {
		duration: 1,
		autoAlpha: 0,
		ease: "none",
		onComplete: function () {
			$('.fullPageOverlay').removeClass('active');
			$('body').addClass('active');
		}
	});

	tl1.fromTo(".y4-100__numbers", {
		x: '5%',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "0");

	tl1.fromTo(".y4-100__numbers", {
		y: "-50%",
		opacity: 1,
	}, {
		y: '-50%',
		opacity: 0,
		duration: 1,
		ease: "none",
	}, "0");
	tl1.fromTo(".y4-100", {
		y: "0%",
		// opacity: 1,
	}, {
		y: '-100%',
		// opacity: 0,
		duration: 1,
		ease: "none",
	}, "<+=0.5");

	tl1.fromTo(".y4-1", {
		y: "0",
		top: "0vh"
	}, {
		top: "-200vh",
		y: -1 * (b1Height - scHeight),
		duration: Math.abs((scHeight - b1Height) / 460) + 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y4-2", {
		y: "0",
		top: "0",
	}, {
		top: "0",
		y: -1 * (b2Height - scHeight),
		duration: Math.abs((scHeight - b2Height) / 460) + 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-3", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b3Height - scHeight),
		duration: Math.abs((scHeight - b3Height) / 460) + 1.5,
		ease: "none",
	}, ">");

	tl1.fromTo(".y4-4", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b4Height - scHeight),
		duration: Math.abs((scHeight - b4Height) / 460) + 1.5,
		ease: "none",
	}, ">");


	tl1.fromTo(".y4-4--4", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b5Height - scHeight),
		duration: Math.abs((scHeight - b5Height) / 460) + 1.5,
		ease: "none",
	}, ">");

	tl1.addLabel('1972', "+=0.82");
	tl1.fromTo(".y4-4__blockOverlay--mob", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-5", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b6Height - scHeight),
		duration: Math.abs((scHeight - b6Height) / 460) + 1.5,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-6", {
		// y: "0",
		top: "100%",
	}, {
		top: "-4%",
		// y: -1 * (b7Height - scHeight),
		duration: Math.abs((scHeight - b7Height) / 460) + 1.5,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-7", {
		y: "0",
		top: "100%",
	}, {
		top: "-4%",
		y: -1 * (b8Height - scHeight),
		duration: Math.abs((scHeight - b8Height) / 460) + 1.5,
		ease: "none",
	}, ">");


	tl1.addLabel('1973', "+=0.82");

	tl1.fromTo(".y4-8__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">-=0.9");

	tl1.fromTo(".y4-8", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b9Height - scHeight),
		duration: Math.abs((scHeight - b9Height) / 460) + 1.5,
		ease: "none",
	}, ">");

	tl1.fromTo(".y4-10__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");

	tl1.addLabel('1974', "+=0.82");
	tl1.fromTo(".y4-10", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b11Height - scHeight),
		duration: Math.abs((scHeight - b11Height) / 460) + 1.5,
		ease: "none",
	}, ">-=0.3");



	tl1.fromTo(".y4-13__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");

	tl1.addLabel('1975', "+=0.82");

	tl1.fromTo(".y4-13", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b12Height - scHeight),
		duration: Math.abs((scHeight - b12Height) / 460) + 1.5,
		ease: "none",
	}, ">");

	tl1.fromTo(".y4-15__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");

	tl1.addLabel('1976', "+=0.82");

	tl1.fromTo(".y4-15", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b13Height - scHeight),
		duration: Math.abs((scHeight - b13Height) / 460) + 1.5,
		ease: "none",
	}, ">");


	tl1.fromTo(".y4-16__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");

	tl1.addLabel('1977', "+=0.82");

	tl1.fromTo(".y4-16", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b14Height - scHeight),
		duration: Math.abs((scHeight - b14Height) / 460) + 1.5,
		ease: "none",
	}, ">");
	tl1.fromTo(".y4-17__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.6,
		// x: "150vw",
		duration: 0.4,
		ease: "none",
	}, ">");

	tl1.addLabel('1978', "+=0.82");

	tl1.fromTo(".y4-17", {
		y: "0",
		top: "100%",
	}, {
		top: "0",
		y: -1 * (b15Height - scHeight),
		duration: Math.abs((scHeight - b15Height) / 460) + 1.5,
		ease: "none",
	}, ">");



	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 1,
		animation: tl1,
	});
}

function initScrollAnimationMobile() {
	gsap.to(".fullPageOverlay", {
		duration: 1,
		autoAlpha: 0,
		ease: "none",
		onComplete: function () {
			$('.fullPageOverlay').removeClass('active');
			$('body').addClass('active');
		}
	});

	tl1.fromTo(".y4-100__numbers", {
		x: '20%',
	}, {
		x: '-120%',
		duration: 1.2,
		ease: "none",
	}, "0");

	tl1.fromTo(".y4-100__numbers", {
		y: "0%",
		opacity: 1,
	}, {
		y: '70%',
		opacity: 0.3,
		duration: 1,
		ease: "none",
	}, "0");
	tl1.fromTo(".y4-100", {
		y: "5%",
		// opacity: 1,
	}, {
		y: '-75%',
		// opacity: 0,
		duration: 3.3,
		ease: "none",
	}, "<");


	st1 = ScrollTrigger.create({
		trigger: ".y4-100__numbers",
		pin: false,
		start: "-45vw top",
		end: () => "bottom top",
		scrub: 1.5,
		animation: tl1,
	});

	var academicList;
	$('.js--y4-7').each(function () {
		var slider = $(this)
		var academicList = new Swiper(slider[0], {
			slidesPerView: "1",
			spaceBetween: 16,
			loop: false,
			pagination: false,
			autoHeight: true,
			navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
			},
			// thumbs: {
			// 		swiper: galleryThumbs
			// },
			pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
			},

		});
	})

}




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

