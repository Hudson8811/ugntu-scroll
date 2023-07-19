import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

var initMode;
// let addTime = 3600;
let addTime = 1600;

let st1;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl = gsap.timeline({
	onComplete: function () {
		$('body').addClass('active');
	}
});

let scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width, b11Height;
let scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height, b8Height, b9Height, b10Height, b12Height, b13Height, b14Height, b15Height;

let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');


$(window).on('resize', function () {
	var wwidth = $(window).width();
	if (dwidth !== wwidth) {
		if (typeof st1 !== "undefined") st1.kill();
		tl1.clear();
		tl.clear();
		tl2.clear();
		gsap.set(
			".y8-110,.y8-1__bg--1,.y8-110__numbers,.y8-110__numbers-number,.y8-110__numbers-line,.y8-110__photos,.y8-110__photos-item" +
			".y8-100,.y8-100__numbers,.y8-100__numbers-number,.y8-100__numbers-line," +
			".y8-1__bg,.y8-1__bg--1,.y8-1__title--1 span:nth-child(1),.y8-1__title--1 span:nth-child(2),.y8-1 .y8-1__year,.y8-1 .y8-1__text--1," +
			
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
	b1Width = $('.y8-15').innerWidth();
	b2Width = $('.y8-20').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y8-1').innerHeight();
	b2Height = $('.y8-2').innerHeight();
	b3Height = $('.y8-3').innerHeight();
	b4Height = $('.y8-4').innerHeight();
	b5Height = $('.y8-5').innerHeight();
	b6Height = $('.y8-10').innerHeight();
	b7Height = $('.y8-14').innerHeight();
	b8Height = $('.y8-18').innerHeight();
	b9Height = $('.y8-19').innerHeight();
	b10Height = $('.y8-20').innerHeight();
	b11Height = $('.y8-110').innerHeight();
	b12Height = $('.y8-22').innerHeight();
	b13Height = $('.y8-25').innerHeight();


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

	tl.fromTo(".y8-110__numbers", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");
	tl.fromTo(".y8-110__photos", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");

	tl.fromTo(".y8-110__numbers", {
		x: '100vw',
	}, {
		x: '5vw',
		duration: 1,
		ease: "none",
	}, "0");
	tl.fromTo(".y8-110__photos-item--1", {
		x: '100vw',
	}, {
		x: '50vw',
		duration: 1,
		ease: "none",
	}, "0");



	tl1.fromTo(".y8-110__numbers", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 4,
		ease: "none",
	}, "0");
	tl1.fromTo(".y8-110__photos-item--1", {
		x: '50vw',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y8-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y8-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.7");
	tl1.fromTo(".y8-110", {
		x: '0vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-=0.7");

	tl1.fromTo(".y8-1__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 0.5,
		ease: "none",
	}, ">");
	tl1.fromTo(".y8-1__1", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 1,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y8-1__2", {
		x: "100%"
	}, {
		x: "-100%",
		duration: 1,
		ease: "none",
	}, ">-=0.4");
	tl1.fromTo(".y8-1__text--1", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 1,
		// x: "150vw",
		duration: 0.5,
		ease: "none",
	}, "<");



	tl1.fromTo(".y8-2", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b2Height - scHeight),
		duration: Math.abs((scHeight - b2Height) / 460) + 1,
		ease: "none",
	}, ">+=0.3");
	tl1.fromTo(".y8-2__bg--1", {
		y: '-50%',
	}, {
		y: '20%',
		duration: 2,
		ease: "none",
	}, "<");
	tl1.fromTo(".y8-2__title--1 span:nth-child(1)", {
		x: '-60vw',
		y: '100vh'
	}, {
		x: '120vw',
		y: '0vh',
		duration: 1,
		ease: "none",
	}, "<+=1.2");
	tl1.fromTo(".y8-2__title--1 span:nth-child(2)", {
		x: '100vw',
		y: '115vh'
	}, {
		x: '-115vw',
		y: '0vh',
		duration: 1,
		ease: "none",
	}, "<+=0.1");


	tl1.fromTo(".y8-3", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b3Height - scHeight),
		duration: Math.abs((scHeight - b3Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y8-10__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2011', "+=0.129");

	tl1.fromTo(".y8-10", {
		y: "0vh",
		x: "360vw"
	}, {
		y: "0vh",
		x: "-184vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");

	tl1.fromTo(".y8-11__title--1 span:nth-child(1)", {
		y: "10vh",
		x: "80vw"
	}, {
		y: "10vh",
		x: "-100vw",
		duration: 1,
		ease: "none",
	}, "<+=0.5");
	tl1.fromTo(".y8-11__1", {
		x: "43vw"
	}, {
		x: "43vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y8-13__1", {
		scale: 1,
	}, {
		scale: 1.5,
		duration: 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y8-14__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2012', "+=0.389");

	tl1.fromTo(".y8-14", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");


	tl1.fromTo(".y8-15__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2014', "+=0.389");

	tl1.fromTo(".y8-15", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");



	tl1.fromTo(".y8-17__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2015', "+=0.465");

	tl1.fromTo(".y8-17", {
		y: "0vh",
		x: "360vw"
	}, {
		y: "0vh",
		x: "-354vw",
		duration: 2.5,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y8-20__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2016', "+=0.1");

	tl1.fromTo(".y8-20", {
		y: "0vh",
		x: "360vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y8-21__2", {
		x: "85vw"
	}, {
		x: "35vw",
		duration: 0.5,
		ease: "none",
	}, "<+=0.7");


	tl1.fromTo(".y8-23__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2017', "+=0.12");

	tl1.fromTo(".y8-23", {
		y: "0vh",
		x: "330vw"
	}, {
		y: "0vh",
		x: "-174vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");


	tl1.fromTo(".y8-26__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2018', "-=0.20");

	tl1.fromTo(".y8-26", {
		y: "0vh",
		x: "360vw"
	}, {
		y: "0vh",
		x: "-484vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y8-27__2", {
		x: "-5vw"
	}, {
		x: "90vw",
		duration: 1,
		ease: "none",
	}, "<+=0.35");
	tl1.fromTo(".y8-28__1", {
		top: "0%",
	}, {
		top: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.35");
	tl1.fromTo(".y8-28__2", {
		bottom: "0"
	}, {
		bottom: "-100%",
		duration: 1,
		ease: "none",
	}, "<");

	tl1.fromTo(".y8-30__title--1 span:nth-child(1)", {
		y: "30vh",
		x: "-5vw",
	}, {
		y: "30vh",
		x: "70vw",
		duration: 0.5,
		ease: "none",
	}, "<+=0.38");
	tl1.fromTo(".y8-30__title--1 span:nth-child(2)", {
		y: "50vh",
		x: "60vw",
	}, {
		y: "50vh",
		x: "-10vw",
		duration: 0.5,
		ease: "none",
	}, "<-=0.1");
	tl1.fromTo(".y8-30__title--2 span:nth-child(1)", {
		y: "70vh",
		x: "15vw"
	}, {
		y: "70vh",
		x: "90vw",
		duration: 0.8,
		ease: "none",
	}, "<-=0.15");

	tl1.fromTo(".y8-30__1", {
		x: "43vw"
	}, {
		x: "43vw",
		duration: 1,
		ease: "none",
	}, "<");



	tl1.fromTo(".y8-31__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">-=0.6");
	
	tl1.addLabel('2019', "+=0.025");

	tl1.fromTo(".y8-31", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-105vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");

	tl1.fromTo(".y8-33__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2021', "+=0.15");

	tl1.fromTo(".y8-33", {
		y: "0vh",
		x: "360vw"
	}, {
		y: "0vh",
		x: "-779vw",
		duration: 3,
		ease: "none",
	}, ">-=0.8");

	tl1.fromTo(".y8-39__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2022', "+=0.389");

	tl1.fromTo(".y8-39", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");


	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 2,
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
	tl1.fromTo(".y8-110__numbers", {
		x: '5%',
	}, {
		x: '-100%',
		duration: 2,
		ease: "none",
	}, "0");

	tl1.fromTo(".y8-110__numbers", {
		y: "-50%"
	}, {
		y: '10%',
		duration: 2,
		ease: "none",
	}, "0");


	tl1.fromTo(".y8-110__photos-item--1", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 0.3,
		ease: "none",
	}, "0");
	tl1.fromTo(".y8-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 0.7,
		ease: "none",
	}, "0");
	tl1.fromTo(".y8-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 0.7,
		ease: "none",
	}, ">-0.3");

	tl1.to(".y8-110", {
	top: '-80vw',
	duration: 2,
	ease: "none",
	}, "0");

	tl1.fromTo(".y8-1", {
		y: "0",
		top: b11Height - 55,
	}, {
		top: "0",
		y: -1 * (b1Height - scHeight),
		duration: Math.abs((scHeight - b1Height) / 460) + 1,
		ease: "none",
	}, "<");

	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 2.5,
		animation: tl1,
	});


}
function initScrollAnimationMobile() {
// 	gsap.to(".fullPageOverlay", {
// 		duration: 1,
// 		autoAlpha: 0,
// 		ease: "none",
// 		onComplete: function () {
// 				$('.fullPageOverlay').removeClass('active');
// 				$('body').addClass('active');
// 		}
// 	});
// 	tl1.fromTo(".y8-110__numbers", {
// 		x: 0,
// }, {
// 		x: '-110%',
// 		duration: 0.6,
// 		ease: "none",
// }, "0");

// tl1.fromTo(".y8-110__numbers", {
// 		y: 0
// }, {
// 		y: '120%',
// 		duration: 0.5,
// 		ease: "none",
// }, "0");



// 	st1 = ScrollTrigger.create({
// 		trigger: ".y8-110__numbers",
// 		pin: false,
// 		start: "-45vw top",
// 		end: () => "bottom top",
// 		scrub: 1,
// 		animation: tl1,
// });	
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

