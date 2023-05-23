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
		gsap.set(
			".y6-110,.y6-1__bg--1,.y6-110__numbers,.y6-110__numbers-number,.y6-110__numbers-line,.y6-110__photos,.y6-110__photos-item" +
			".y6-100,.y6-100__numbers,.y6-100__numbers-number,.y6-100__numbers-line," +
			".y6-1__bg,.y6-1__bg--1,.y6-1__title--1 span:nth-child(1),.y6-1__title--1 span:nth-child(2),.y6-1 .y6-1__year,.y6-1 .y6-1__text--1," +
			
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
	b1Width = $('.y6-1').innerWidth();
	b2Width = $('.y4-2').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y6-1').innerHeight();
	b2Height = $('.y6-2').innerHeight();
	b3Height = $('.y6-3').innerHeight();
	b4Height = $('.y6-4').innerHeight();
	b5Height = $('.y6-5').innerHeight();
	b6Height = $('.y6-8').innerHeight();
	b7Height = $('.y6-11').innerHeight();
	b8Height = $('.y6-12').innerHeight();
	b9Height = $('.y6-15').innerHeight();
	b10Height = $('.y6-16').innerHeight();
	b11Height = $('.y6-19').innerHeight();


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

	tl.fromTo(".y6-110__numbers", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");
	tl.fromTo(".y6-110__photos", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		duration: 0.1,
		ease: "none",
	}, "0.1");

	tl.fromTo(".y6-110__numbers", {
		x: '100vw',
	}, {
		x: '5vw',
		duration: 1,
		ease: "none",
	}, "0");
	tl.fromTo(".y6-110__photos-item--1", {
		x: '100vw',
	}, {
		x: '50vw',
		duration: 1,
		ease: "none",
	}, "0");



	tl1.fromTo(".y6-110__numbers", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 4,
		ease: "none",
	}, "0");
	tl1.fromTo(".y6-110__photos-item--1", {
		x: '50vw',
	}, {
		x: '-100%',
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y6-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.3");
	tl1.fromTo(".y6-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-0.7");
	tl1.fromTo(".y6-110", {
		x: '0vw',
	}, {
		x: '-100%',
		duration: 1.5,
		ease: "none",
	}, ">-=0.7");

	tl1.fromTo(".y6-1", {
		y: '0%',
	}, {
		y: '-100%',
		duration: 2,
		ease: "none",
	}, ">-=0.4");


	tl1.fromTo(".y6-1__title--1 span:nth-child(1)", {
		x: '0vw',
		y: '80vh'
	}, {
		x: '120vw',
		y: '80vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.4");
	tl1.fromTo(".y6-1__title--1 span:nth-child(2)", {
		x: '40vw',
		y: '100vh'
	}, {
		x: '-100%',
		y: '100vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y6-1__title--1 span:nth-child(3)", {
		x: '30vw',
		y: '120vh'
	}, {
		x: '-150%',
		y: '120vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y6-1__title--1 span:nth-child(4)", {
		x: '0vw',
		y: '140vh'
	}, {
		x: '120vw',
		y: '140vh',
		duration: 1.5,
		ease: "none",
	}, "<");


	tl1.fromTo(".y6-2__bg--1", {
		scale: 1.5,
	}, {
		scale: 1,
		duration: 2,
		ease: "none",
	}, "<-=0.5");


	tl.to(".y6-2__2", {
		scale: 0.9, 
		opacity: 1, 
		delay: 0.5, 
		duration: 5,
		stagger: 0.2,
		ease: "elastic", 
		force3D: true
	}, ">+=10");



	// tl1.fromTo(".y6-3", {
	// 	x: '0',
	// 	y: '100%'
	// }, {
	// 	x: '0',
	// 	y: '0%',
	// 	duration: 1,
	// 	ease: "none",
	// }, ">-=2");
	// tl1.fromTo(".y6-3__title--1 span:nth-child(1)", {
	// 	x: '-110vw',
	// 	y: '20vh'
	// }, {
	// 	x: '130vw',
	// 	duration: 1,
	// 	ease: "none",
	// }, "<+=0.2");
	// tl1.fromTo(".y6-3__title--1 span:nth-child(2)", {
	// 	x: '100vw',
	// 	y: '40vh'
	// }, {
	// 	x: '-130vw',
	// 	duration: 1,
	// 	ease: "none",
	// }, ">-=0.8");
	// tl1.fromTo(".y6-3__2", {
	// 	// x: '100vw',
	// 	y: '100vh'
	// }, {
	// 	// x: '-130vw',
	// 	y: '35vh',
	// 	duration: 1,
	// 	ease: "none",
	// }, ">-=1.3");

	// tl1.fromTo(".y6-4", {
	// 	y: "150vh",
	// }, {
	// 	y: "-50vh",
	// 	duration: 1,
	// 	ease: "none",
	// }, ">");



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


}
function initScrollAnimationMobile() {

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

