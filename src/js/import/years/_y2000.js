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


	tl1.fromTo(".y7-1__title--1 span:nth-child(1)", {
		x: '0vw',
		y: '50vh'
	}, {
		x: '120vw',
		y: '50vh',
		duration: 1.5,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-1__title--1 span:nth-child(2)", {
		x: '40vw',
		y: '70vh'
	}, {
		x: '-100%',
		y: '70vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(3)", {
		x: '0vw',
		y: '90vh'
	}, {
		x: '120vw',
		y: '90vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(4)", {
		x: '40vw',
		y: '110vh'
	}, {
		x: '-100%',
		y: '110vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(5)", {
		x: '0vw',
		y: '130vh'
	}, {
		x: '120vw',
		y: '130vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(6)", {
		x: '40vw',
		y: '150vh'
	}, {
		x: '-100%',
		y: '150vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(7)", {
		x: '0vw',
		y: '170vh'
	}, {
		x: '120vw',
		y: '170vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(8)", {
		x: '40vw',
		y: '190vh'
	}, {
		x: '-100%',
		y: '190vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(9)", {
		x: '0vw',
		y: '210vh'
	}, {
		x: '120vw',
		y: '210vh',
		duration: 1.5,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-1__title--1 span:nth-child(10)", {
		x: '40vw',
		y: '230vh'
	}, {
		x: '-100%',
		y: '230vh',
		duration: 1.5,
		ease: "none",
	}, "<");

	tl1.fromTo(".y7-2__bg--1", {
		scale: 1.5,
	}, {
		scale: 1,
		duration: 2,
		ease: "none",
		onComplete: () => {
			let tween = gsap.timeline({});
			tween.to(".y7-2__2", {
				scale: 1,
				rotation: 0,
				opacity: 0.4,
				repeat: 1,
				yoyo: true,
				duration: 1, 
				ease: "bounce.out"
			}, "0");
			tween.to(".y7-2__3--1", {
				scale: 1,
				opacity: 1,
				duration: 0.3, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__3--2", {
				scale: 1,
				opacity: 1,
				duration: 0.5, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__3--3", {
				scale: 1,
				opacity: 1,
				duration: 0.3, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__3--4", {
				scale: 1,
				opacity: 1,
				duration: 0.3, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__3--5", {
				scale: 1,
				opacity: 1,
				duration: 0.5, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__3--6", {
				scale: 1,
				opacity: 1,
				duration: 0.3, 
				ease: "power1.out",
			}, ">");
			tween.to(".y7-2__4", {
				scale: 1,
				opacity: 1,
				duration: 0.3, 
				ease: "power1.out",
			}, ">");

		} 
	}, "<-=0.5");




	tl1.fromTo(".y7-3", {
		x: '0',
		y: '100%'
	}, {
		x: '0',
		y: '0%',
		duration: 1,
		ease: "none",
	}, ">+=0.8");



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

