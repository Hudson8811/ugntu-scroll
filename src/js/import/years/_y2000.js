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
let addTime = 2600;

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
			".y7-110,.y7-1__bg--1,.y7-110__numbers,.y7-110__numbers-number,.y7-110__numbers-line,.y7-110__photos,.y7-110__photos-item" +
			".y7-100,.y7-100__numbers,.y7-100__numbers-number,.y7-100__numbers-line," +
			".y7-1__bg,.y7-1__bg--1,.y7-1__title--1 span:nth-child(1),.y7-1__title--1 span:nth-child(2),.y7-1 .y7-1__year,.y7-1 .y7-1__text--1," +
			
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
	b1Width = $('.y7-15').innerWidth();
	b2Width = $('.y4-2').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y7-1').innerHeight();
	b2Height = $('.y7-2').innerHeight();
	b3Height = $('.y7-3').innerHeight();
	b4Height = $('.y7-4').innerHeight();
	b5Height = $('.y7-7').innerHeight();
	b6Height = $('.y7-8').innerHeight();
	b7Height = $('.y7-9').innerHeight();
	b8Height = $('.y7-12').innerHeight();
	b9Height = $('.y7-15').innerHeight();
	b10Height = $('.y7-18').innerHeight();
	b11Height = $('.y7-110').innerHeight();


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

	tl.fromTo(".y7-110__numbers", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");
	tl.fromTo(".y7-110__photos", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");

	tl.fromTo(".y7-110__numbers", {
		x: '100vw',
	}, {
		x: '5vw',
		duration: 1,
		ease: "none",
	}, "0");
	tl.fromTo(".y7-110__photos-item--1", {
		x: '100vw',
	}, {
		x: '50vw',
		duration: 1,
		ease: "none",
	}, "0");



	tl1.fromTo(".y7-110__numbers", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 4,
		ease: "none",
	}, "0");
	tl1.fromTo(".y7-110__photos-item--1", {
		x: '50vw',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y7-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.7");
	tl1.fromTo(".y7-110", {
		x: '0vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-=0.7");




	tl1.fromTo(".y7-1", {
		y: '0%',
	}, {
		y: '-100%',
		duration: 2,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-1__2", {
		x: '45vw',
		y: '70vh'
	}, {
		x: '45vw',
		y: '-200vh',
		duration: 5,
		ease: "none",
	}, "<");

	tl1.fromTo(".y7-1__title--1", {
		x: '-45vw',
		y: '60vh'
	}, {
		x: '120vw',
		y: '60vh',
		duration: 1.5,
		ease: "none",
	}, "<-=0.1");
	tl1.fromTo(".y7-1__title--2", {
		x: '50vw',
		y: '85vh'
	}, {
		x: '-120vw',
		y: '85vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--3", {
		x: '-45vw',
		y: '110vh'
	}, {
		x: '120vw',
		y: '110vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-1__title--4", {
		x: '50vw',
		y: '135vh'
	}, {
		x: '-120vw',
		y: '135vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-1__title--5", {
		x: '-45vw',
		y: '160vh'
	}, {
		x: '120vw',
		y: '160vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.3");
	tl1.fromTo(".y7-1__title--6", {
		x: '50vw',
		y: '185vh'
	}, {
		x: '-120vw',
		y: '185vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-1__title--7", {
		x: '-45vw',
		y: '210vh'
	}, {
		x: '120vw',
		y: '210vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".y7-1__title--8", {
		x: '50vw',
		y: '235vh'
	}, {
		x: '-120vw',
		y: '235vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.2");


	tl1.fromTo(".y7-2", {
		y: "0",
		top: "150%",
		scale: 1.5,
	}, {
		top: "0",
		scale: 1,
		y: -1 * (b2Height - scHeight),
		duration: 0.8,
		ease: "none",
	}, ">-=1.4");


	tl1.fromTo(".y7-3__bg--1", {
		y: "0",
		top: "150%",
		scale: 1.5,
	}, {
		top: "0",
		scale: 1,
		y: -1 * (b3Height - scHeight),
		duration: 2,
		ease: "none",
	}, ">");
	tl1.fromTo(".y7-3__title--1", {
		bottom: "-105%"
	}, {
		bottom: "3%",
		duration: 1,
		ease: "none",
	}, ">-=1.1");
	tl1.fromTo(".y7-3__title--1", {
		x: "0%",
	}, {
		x: "-100%",
		duration: 4,
		ease: "none",
	}, ">-=0.5");


	tl1.fromTo(".y7-4__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 0.6,
		ease: "none",
	}, ">-=0.9");
	
	tl1.addLabel('2001', "+=0.785");

	tl1.fromTo(".y7-4", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-54vw",
		duration: 1.2,
		ease: "none",
	}, ">-=0.1");
	tl1.fromTo(".y7-4__2", {
		// y: "50vh",
		x: "0vw"
	}, {
		// y: "50vh",
		x: "58vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");







	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 2,
		animation: tl1,
	});
}
function initScrollAnimationTablet() {}
function initScrollAnimationMobile() {}




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

