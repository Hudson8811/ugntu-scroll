import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

var initMode;
let addTime = 3600;
// let addTime = 1600;

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
	b2Width = $('.y7-20').innerWidth();


	scHeight = $('.scroll-page').innerHeight();
	b1Height = $('.y7-1').innerHeight();
	b2Height = $('.y7-2').innerHeight();
	b3Height = $('.y7-3').innerHeight();
	b4Height = $('.y7-4').innerHeight();
	b5Height = $('.y7-5').innerHeight();
	b6Height = $('.y7-10').innerHeight();
	b7Height = $('.y7-14').innerHeight();
	b8Height = $('.y7-18').innerHeight();
	b9Height = $('.y7-19').innerHeight();
	b10Height = $('.y7-20').innerHeight();
	b11Height = $('.y7-110').innerHeight();
	b12Height = $('.y7-22').innerHeight();
	b13Height = $('.y7-25').innerHeight();


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
		y: '70vh'
	}, {
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
	
	tl1.addLabel('2001', "+=0.48");

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

	tl1.fromTo(".y7-5__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2002', "+=0.41");

	tl1.fromTo(".y7-5", {
		y: "0vh",
		x: "420vw"
	}, {
		y: "0vh",
		x: "-474vw",
		duration: 3,
		ease: "none",
	}, ">-=1");


	tl1.fromTo(".y7-8__title--1", {
		y: "0vh",
		x: "30vw"
	}, {
		y: "0vh",
		x: "-70vw",
		duration: 1.2,
		ease: "none",
	}, "<+=1.8");

	tl1.fromTo(".y7-10__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2003', "-=0.006");

	tl1.fromTo(".y7-10", {
		y: "0vh",
		x: "410vw"
	}, {
		y: "0vh",
		x: "-314vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");

	tl1.fromTo(".y7-11__title--1 span:nth-child(1)", {
		y: "20vh",
		x: "60vw"
	}, {
		y: "20vh",
		x: "10vw",
		duration: 0.5,
		ease: "none",
	}, "<+=0.4");
	tl1.fromTo(".y7-11__title--1 span:nth-child(2)", {
		y: "40vh",
		x: "-5vw"
	}, {
		y: "40vh",
		x: "50vw",
		duration: 1,
		ease: "none",
	}, "<-=0.1");
	tl1.fromTo(".y7-11__title--1 span:nth-child(3)", {
		y: "60vh",
		x: "60vw"
	}, {
		y: "60vh",
		x: "10vw",
		duration: 1,
		ease: "none",
	}, "<-=0.03");
	tl1.fromTo(".y7-11__title--1 span:nth-child(4)", {
		y: "80vh",
		x: "10vw"
	}, {
		y: "80vh",
		x: "50vw",
		duration: 1,
		ease: "none",
	}, "<-=0.03");
	tl1.fromTo(".y7-11__2", {
		x: "60vw"
	}, {
		x: "130vw",
		duration: 1,
		ease: "none",
	}, "<-=0.03");


	tl1.fromTo(".y7-11__1", {
		x: "43vw"
	}, {
		x: "43vw",
		duration: 1,
		ease: "none",
	}, "<");

	
	tl1.fromTo(".y7-14__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2004', "+=0.01");

	tl1.fromTo(".y7-14", {
		y: "0vh",
		x: "280vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");


	tl1.fromTo(".y7-18__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2006', "+=0.389");

	tl1.fromTo(".y7-18", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");



	tl1.fromTo(".y7-19__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2007', "+=0.389");

	tl1.fromTo(".y7-19", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-204vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");

	tl1.fromTo(".y7-20__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2008', "+=0.035");

	tl1.fromTo(".y7-20", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-354vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y7-21__1", {
		y: "0vh",
		x: "-50vw"
	}, {
		y: "0vh",
		x: "0vw",
		duration: 0.5,
		ease: "none",
	}, "<+=0.9");

	tl1.fromTo(".y7-22__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	

	tl1.fromTo(".y7-22", {
		y: "0vh",
		x: "150vw"
	}, {
		y: "0vh",
		x: "-254vw",
		duration: 1.4,
		ease: "none",
	}, ">-=0.8");
	tl1.fromTo(".y7-23__2", {
		x: "0vw"
	}, {
		x: "40vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-23__text--1", {
		x: "0vw"
	}, {
		x: "40vw",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".y7-23__3", {
		x: "60vw"
	}, {
		x: "125vw",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".y7-24__1", {
		x: "25vw"
	}, {
		x: "95vw",
		duration: 0.8,
		ease: "none",
	}, "<+=0.40");

	tl1.fromTo(".y7-25__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2009', "+=0.389");

	tl1.fromTo(".y7-25", {
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
	tl1.fromTo(".y7-110__numbers", {
		x: '5%',
	}, {
		x: '-100%',
		duration: 2,
		ease: "none",
	}, "0");

	tl1.fromTo(".y7-110__numbers", {
		y: "-50%"
	}, {
		y: '10%',
		duration: 2,
		ease: "none",
	}, "0");


	tl1.fromTo(".y7-110__photos-item--1", {
		x: '5vw',
	}, {
		x: '-100%',
		duration: 0.3,
		ease: "none",
	}, "0");
	tl1.fromTo(".y7-110__photos-item--2", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 0.7,
		ease: "none",
	}, "0");
	tl1.fromTo(".y7-110__photos-item--3", {
		x: '100vw',
	}, {
		x: '-100%',
		duration: 0.7,
		ease: "none",
	}, ">-0.3");

	tl1.to(".y7-110", {
	top: '-80vw',
	duration: 2,
	ease: "none",
	}, "0");


	tl1.fromTo(".y7-2", {
		y: "0",
		top: b11Height - 55,
	}, {
		top: "0",
		y: -1 * (b2Height - scHeight),
		duration: Math.abs((scHeight - b2Height) / 460) + 1,
		ease: "none",
	}, "<");

	tl1.fromTo(".y7-3", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b3Height - scHeight),
		duration: Math.abs((scHeight - b3Height) / 460) + 1,
		ease: "none",
	}, ">");

	tl1.fromTo(".y7-4__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2001', "+=0.8");
	
	tl1.fromTo(".y7-4", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b4Height - scHeight),
		duration: Math.abs((scHeight - b4Height) / 460) + 1,
		ease: "none",
	}, ">");

	tl1.fromTo(".y7-5__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2002', "+=0.8");
	
	tl1.fromTo(".y7-5", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b5Height - scHeight),
		duration: Math.abs((scHeight - b5Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-10__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2003', "+=0.8");
	
	tl1.fromTo(".y7-10", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b6Height - scHeight),
		duration: Math.abs((scHeight - b6Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-14__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2004', "+=0.8");
	
	tl1.fromTo(".y7-14", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b7Height - scHeight),
		duration: Math.abs((scHeight - b7Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-18__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2006', "+=0.8");
	
	tl1.fromTo(".y7-18", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b8Height - scHeight),
		duration: Math.abs((scHeight - b8Height) / 460) + 1,
		ease: "none",
	}, ">");

	tl1.fromTo(".y7-19__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2007', "+=0.8");
	
	tl1.fromTo(".y7-19", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b9Height - scHeight),
		duration: Math.abs((scHeight - b9Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-20__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2008', "+=0.8");
	
	tl1.fromTo(".y7-20", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b10Height - scHeight),
		duration: Math.abs((scHeight - b10Height) / 460) + 1,
		ease: "none",
	}, ">");


	tl1.fromTo(".y7-22__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	tl1.fromTo(".y7-22", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b12Height - scHeight),
		duration: Math.abs((scHeight - b12Height) / 460) + 1,
		ease: "none",
	}, ">");

	tl1.fromTo(".y7-25__blockOverlay", {
		opacity: 0,
		// x: "150vw"
	}, {
		opacity: 0.8,
		// x: "150vw",
		duration: 1,
		ease: "none",
	}, ">");
	
	tl1.addLabel('2009', "+=0.8");
	
	tl1.fromTo(".y7-25", {
		y: "0",
		top: "100%"
	}, {
		top: "0",
		y: -1 * (b13Height - scHeight),
		duration: Math.abs((scHeight - b13Height) / 460) + 1,
		ease: "none",
	}, ">");


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
	gsap.to(".fullPageOverlay", {
		duration: 1,
		autoAlpha: 0,
		ease: "none",
		onComplete: function () {
				$('.fullPageOverlay').removeClass('active');
				$('body').addClass('active');
		}
	});
	tl1.fromTo(".y7-110__numbers", {
		x: 0,
}, {
		x: '-110%',
		duration: 0.6,
		ease: "none",
}, "0");

tl1.fromTo(".y7-110__numbers", {
		y: 0
}, {
		y: '120%',
		duration: 0.5,
		ease: "none",
}, "0");



	st1 = ScrollTrigger.create({
		trigger: ".y7-110__numbers",
		pin: false,
		start: "-45vw top",
		end: () => "bottom top",
		scrub: 1,
		animation: tl1,
});	
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

