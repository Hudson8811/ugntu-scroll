/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

addEventListener('beforeunload', function (event) {});

onbeforeunload = function onbeforeunload(event) {
  window.scrollTo(0, 0);
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./years/_y1940 */ "./src/js/import/years/_y1940.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y1950').length > 0) {
    __webpack_require__(/*! ./years/_y1950 */ "./src/js/import/years/_y1950.js");
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/years/_y1940.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1940.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').addClass('hide');
  }
});
var initMode;
var addTime = 1300;
var st1, st2, st3;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var s3Width, b1Width, b2Width, b3Width, b4Width;
var s3Height, b1Height, b2Height, b3Height, b4Height;

function initAnimation() {
  s3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3').innerWidth();
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--1').innerWidth();
  b2Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--2').innerWidth();
  b3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--3').innerWidth();
  b4Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--4').innerWidth();
  s3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3').innerHeight();
  b1Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--1').innerHeight();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--2').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--3').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--4').innerHeight();

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
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    if (typeof st3 !== "undefined") st3.kill();
    tl.clear();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".loader__center, .loader__back, .section1__house, .header, .sidebar, .section1__title," + ".section1__dates, .section1__circle, .section1__circle-inner, .section2, .section2__numbers," + ".section2__photos-item--1, .section2__photos-item--2,.section2__photos-item--3, .section2__year," + ".section2__textblock, .section2__letter, .section2__cloud-1, .section2__cloud-2, .section2__textblock2," + ".section2__house, .section2__house-birds, .section2__last-img img, .section2__last-label," + ".section2__last-overlay, .section3, .section3__block--1, .section3__block--1 .section3__overlay," + ".section3__block--2, .section3__block--2 .section3__overlay, .section3__block--3," + ".section3__block--3 .section3__label--1 .section3__label-item--1," + ".section3__block--3 .section3__label--1 .section3__label-item--2," + ".section3__block--3 .section3__label--2, .section3__block--3 .section3__star," + ".section3__block--3 .section3__overlay, .section3__block--4, .section3__block--4 .section3__image," + ".section3__block--4 .section3__label-item--1, .section3__block--4 .section3__label-item--2," + ".section3__block--4 .section3__label-item--3, .section3__block--4 .section3__overlay," + ".scroll-page", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').removeClass('hide');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  tl.to(".loader__center", {
    y: "-100%",
    duration: 1.5,
    delay: 1,
    ease: "power3.in"
  });
  tl.to(".loader__back", {
    y: "-100%",
    duration: 1.5,
    ease: "power3.in"
  }, ">-1.3");
  tl.from(".section1__house", {
    y: '-25%',
    duration: 1.7,
    ease: "power1.inOut"
  }, "<");
  tl.from(".header", {
    y: '-100%',
    duration: 0.8,
    ease: "Sine.in"
  }, ">-0.5");
  tl.from(".sidebar", {
    x: "-100%",
    duration: 0.7,
    ease: "Sine.out"
  }, ">-0.5");
  tl.from(".section1__title", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__dates", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__circle", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.1");
  tl1.fromTo(".header", {
    y: '0'
  }, {
    y: '-100%',
    duration: 0.8,
    ease: "none"
  }, "0");
  tl1.fromTo(".section1__circle", {
    y: '0'
  }, {
    y: '50%',
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.fromTo(".section1__circle-inner", {
    autoAlpha: 1
  }, {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.to(".section1__dates, .section1__title", {
    y: '7vw',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.to(".section1__house", {
    top: '-54.72vw',
    //-1100/2010
    duration: 2,
    ease: "none"
  }, "0");
  tl1.from(".section2", {
    autoAlpha: '0',
    duration: 1,
    ease: "none"
  }, ">-1");
  tl1.fromTo(".section2__numbers", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 6,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".section2__photos-item--1", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 3,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section2__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 3,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section2__year", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".section2__textblock", {
    autoAlpha: '0'
  }, {
    autoAlpha: '1',
    duration: 1,
    ease: "none"
  }, ">-0.2");
  tl1.fromTo(".section2__letter", {
    top: '100%',
    y: '0'
  }, {
    top: '0',
    y: '-100%',
    duration: 3,
    ease: "none"
  }, ">");
  tl1.to(".section2__textblock", {
    y: '-100%',
    duration: 3,
    ease: "none"
  }, ">0.1");
  tl1.fromTo(".section2__cloud-1", {
    left: '100%',
    x: '0',
    top: '26%'
  }, {
    left: '0',
    x: '-100%',
    top: '-10%',
    duration: 5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__cloud-2", {
    left: '100%',
    x: '0',
    top: '10%'
  }, {
    left: '0',
    x: '-100%',
    top: '-20%',
    duration: 3.5,
    ease: "none"
  }, ">-3.5");
  tl1.fromTo(".section2__textblock2", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 1.5,
    ease: "none"
  }, ">-3");
  tl1.fromTo(".section2__textblock2", {
    bottom: '-5%'
  }, {
    bottom: '100%',
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__house", {
    top: '100%'
  }, {
    y: '-100%',
    top: '-0',
    duration: 5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__house-birds", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, "<+0.5");
  tl1.fromTo(".section2__house-birds", {
    x: 0
  }, {
    x: "-50%",
    duration: 4.5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__last-img img", {
    scale: 1.5
  }, {
    scale: 1,
    duration: 8,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__last-label", {
    x: 0,
    left: '100%'
  }, {
    x: "-120%",
    left: '0',
    duration: 8,
    ease: "none"
  }, ">-7");
  tl1.fromTo(".section2__last-overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1,
    ease: "none"
  }, ">-2");
  tl1.fromTo(".section3", {
    left: "100%"
  }, {
    left: 0,
    duration: 2,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--1", {
    x: "0"
  }, {
    x: -1 * (b1Width - s3Width),
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--1 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--2", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b2Width - s3Width),
    duration: 6,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--2 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--3", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b3Width - s3Width),
    duration: 6,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--3 .section3__label--1 .section3__label-item--1", {
    x: "20%"
  }, {
    x: "0%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--3 .section3__label--1 .section3__label-item--2", {
    x: "-5%"
  }, {
    x: "15%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--3 .section3__label--2", {
    x: "30%"
  }, {
    x: "-27%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--3 .section3__star", {
    x: "-10%"
  }, {
    x: "10%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--3 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--4", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b4Width - s3Width),
    duration: 4,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--4 .section3__image", {
    x: "-35%"
  }, {
    x: "0",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--4 .section3__label-item--1", {
    x: "-65%"
  }, {
    x: "0",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--4 .section3__label-item--2", {
    x: "10%"
  }, {
    x: "0",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--4 .section3__label-item--3", {
    x: "100%"
  }, {
    x: "-10%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.fromTo(".section3__block--4 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 2.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  tl.to(".loader__center", {
    y: "-100%",
    duration: 1.5,
    delay: 1,
    ease: "power3.in"
  });
  tl.to(".loader__back", {
    y: "-100%",
    duration: 1.5,
    ease: "power3.in"
  }, ">-1.3");
  tl.from(".section1__house", {
    y: '-25%',
    duration: 1.7,
    ease: "power1.inOut"
  }, "<");
  tl.from(".sidebar", {
    y: "-100%",
    duration: 0.7,
    ease: "Sine.out"
  }, ">-0.2");
  tl.from(".section1__title", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__dates", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__circle", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.1");
  tl1.fromTo(".section1__circle", {
    y: '0'
  }, {
    y: '50%',
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.fromTo(".section1__circle-inner", {
    autoAlpha: 1
  }, {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.to(".section1__dates, .section1__title", {
    y: '7vw',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.to(".section1__house", {
    top: '-27.6vw',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.from(".section2", {
    autoAlpha: '0',
    duration: 1,
    ease: "none"
  }, ">-1");
  tl1.fromTo(".section2__numbers", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 4,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".section2__photos-item--1", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 2,
    ease: "none"
  }, ">-1");
  tl1.fromTo(".section2__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 2,
    ease: "none"
  }, ">-1");
  tl1.fromTo(".section2__year", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".section2__textblock", {
    autoAlpha: '0'
  }, {
    autoAlpha: '1',
    duration: 1,
    ease: "none"
  }, ">-0.2");
  tl1.fromTo(".section2__letter", {
    top: '100%',
    y: '0'
  }, {
    top: '0',
    y: '-100%',
    duration: 3,
    ease: "none"
  }, ">");
  tl1.to(".section2__textblock", {
    y: '-100%',
    duration: 3,
    ease: "none"
  }, ">0.1");
  tl1.fromTo(".section2__cloud-1", {
    x: '-33.72vw',
    top: '96.6vw'
  }, {
    x: '-100%',
    top: '-10%',
    duration: 3.5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__cloud-2", {
    left: '65vw',
    x: '0',
    top: '113vw'
  }, {
    left: '0',
    top: '-30%',
    duration: 3.5,
    ease: "none"
  }, ">-3.5");
  tl1.fromTo(".section2__textblock2", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 1.5,
    ease: "none"
  }, ">-3");
  tl1.fromTo(".section2__textblock2", {
    bottom: '-5%'
  }, {
    bottom: '100%',
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__house", {
    top: '100%'
  }, {
    y: '-100%',
    top: '-0',
    duration: 5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__house-birds", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, "<+0.5");
  tl1.fromTo(".section2__house-birds", {
    x: 0
  }, {
    x: "-50%",
    duration: 4.5,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__last-img img", {
    scale: 1.5
  }, {
    scale: 1,
    duration: 8,
    ease: "none"
  }, "<");
  tl1.fromTo(".section2__last-label", {
    x: 0,
    left: '100%'
  }, {
    x: "-120%",
    left: '0',
    duration: 8,
    ease: "none"
  }, ">-7");
  tl1.fromTo(".section2__last-overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1,
    ease: "none"
  }, ">-2");
  tl1.fromTo(".section3", {
    top: "100%"
  }, {
    top: 0,
    duration: 2,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--1", {
    y: "0"
  }, {
    y: -1 * (b1Height - s3Height),
    duration: Math.abs((s3Height - b1Height) / 460),
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--1 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--2", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b2Height - s3Height),
    duration: Math.abs((s3Height - b2Height) / 460) + 1.5,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--2 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--3", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b3Height - s3Height),
    duration: Math.abs((s3Height - b3Height) / 460) + 1.5,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--3 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".section3__block--4", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b4Height - s3Height),
    duration: Math.abs((s3Height - b4Height) / 460) + 1.5,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".section3__block--4 .section3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 2.5,
    animation: tl1
  });
}

function initScrollAnimationMobile() {
  tl.to(".loader__center", {
    y: "-100%",
    duration: 1.5,
    delay: 1,
    ease: "power3.in"
  });
  tl.to(".loader__back", {
    y: "-100%",
    duration: 1.5,
    ease: "power3.in"
  }, ">-1.3");
  tl.from(".section1__house", {
    y: '-25%',
    duration: 1.7,
    ease: "power1.inOut"
  }, "<");
  tl.from(".sidebar", {
    y: "-100%",
    duration: 0.7,
    ease: "Sine.out"
  }, ">-0.2");
  tl.from(".section1__title", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__dates", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl.from(".section1__circle", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.1");
  tl1.fromTo(".section2__numbers", {
    x: '10%'
  }, {
    x: '-80%',
    duration: 1,
    ease: "none"
  }, "0");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".section2__numbers",
    pin: false,
    start: "top bottom",
    end: function end() {
      return "bottom top";
    },
    scrub: 1,
    animation: tl1
  });
}

/***/ }),

/***/ "./src/js/import/years/_y1950.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1950.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map