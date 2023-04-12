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
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.esm.js */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').length) {
  addEventListener('beforeunload', function (event) {});

  onbeforeunload = function onbeforeunload(event) {
    window.scrollTo(0, 0);
  };
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  setCssRootVars();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./years/_y1940 */ "./src/js/import/years/_y1940.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y1950').length > 0) {
    __webpack_require__(/*! ./years/_y1950 */ "./src/js/import/years/_y1950.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y1960').length > 0) {
    __webpack_require__(/*! ./years/_y1960 */ "./src/js/import/years/_y1960.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y1970').length > 0) {
    __webpack_require__(/*! ./years/_y1970 */ "./src/js/import/years/_y1970.js");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter').length > 0) {
    var eFilterSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.e-filter .swiper', {
      loop: false,
      freeMode: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.e-filter__button--next',
        prevEl: '.e-filter__button--prev'
      }
    });
    eFilterSwiper.on('progress', function (swiper, progress) {
      if (progress === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').addClass('start');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').removeClass('start');
      }

      if (progress === 1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').addClass('end');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').removeClass('end');
      }
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item > a').on('click', function () {
    event.preventDefault();
    var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
    var bgColor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').data('overlay');
    nextPageAnimation(link, bgColor);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
    event.preventDefault();
    var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
      var bgColor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').data('overlay');
      nextPageAnimation(link, bgColor);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').removeClass('active');
    }
  });

  if (typeof nextPage !== "undefined") {
    if (nextPage != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
        if (Math.ceil(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) >= Math.floor(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height())) {
          nextPageAnimation(nextPage, nextPageBg);
        }
      });
    }
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()('.list-block__sort select').select2 == 'function') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.list-block__sort select').select2();
  }
  /* Partners marquee */


  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-marquee').length > 0) {
    if (window.matchMedia('(min-width: 700px)').matches) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-marquee').marquee({
        duration: 15000,
        delayBeforeStart: 0,
        duplicated: true,
        gap: 0,
        startVisible: true,
        direction: 'left'
      });
    }
  }
  /* Photo uploader */

  /*if (document.querySelector('#file-loader')) {
      document.querySelector('#file-loader').addEventListener('change', function () {
          var splittedFakePath = this.value.split('\\');
            var elem = $('.form__files-item').first().clone(true);
          elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
          elem.appendTo('.form__files').css('display', 'flex');
      });
  }*/

  /* Show congratulation form */


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-congrat').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').addClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('body-scroll-lock');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__close-btn,.js-close-modal-form').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.form').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-scroll-lock');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('success');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-scroll-lock');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('success');
  });
  /*отмена отправки формы и показ окна успешной отправки*/

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').on('submit', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('node-congratulation-form')) {
      event.preventDefault();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').scrollTop(0).addClass('success');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').addClass('active');
  });
  /* Anchor */

  document.querySelectorAll('.anchor').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-subslider-single').length > 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-slider-single').length > 0) {
    var subSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-subslider-single', {
      slidesPerView: 5.8,
      spaceBetween: 18,
      breakpoints: {
        1024: {
          slidesPerView: 6.4
        },
        1280: {
          slidesPerView: 5.8
        }
      }
    });
    var mainSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-slider-single', {
      slidesPerView: 1.2,
      spaceBetween: 6,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      thumbs: {
        swiper: subSlider
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: false
        }
      }
    });
  }

  _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", {});
  var jsShareElements = document.querySelectorAll('.js-share');

  if (jsShareElements.length > 0 && typeof Ya !== 'undefined') {
    for (var i = 0; i < jsShareElements.length; i++) {
      var yaBlock = document.createElement('div');
      yaBlock.classList.add('yaBlock');
      jsShareElements[i].appendChild(yaBlock);
    }

    var shareButton = document.querySelector('.yaBlock');
    Ya.share2(shareButton, {
      theme: {
        services: 'vkontakte,odnoklassniki,telegram,whatsapp',
        lang: 'ru',
        limit: 0,
        size: 's',
        bare: false
      }
    });
  }

  setCssRootVars();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
    setCssRootVars();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('select').on('change', function () {
    console.log('Выбранное значение: ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
  });
});

function setCssRootVars() {
  var baseRatio = 2010 / 1080;
  var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth();
  var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight();
  var windowRatio = windowWidth / windowHeight;
  var newVW = 1;
  if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(':root').css('--vw', newVW + 'vw');
}

function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function nextPageAnimation(link) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  disableScroll();

  if (bgColor != '') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').css('background', bgColor);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown').hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').css('pointer-events', 'auto');
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 1,
    ease: "none",
    onComplete: function onComplete() {
      setTimeout(function () {
        window.location.href = link;
      }, 200);
    }
  });
}

function fileLoadStatus(target) {
  var procent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var procentInt = parseInt(procent);
  var value = procentInt + '%';
  var procentMinus = 100 - procentInt;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('.file-loader__inner').css('width', value);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('.file-loader__status--cyan').text(value).css({
    "mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
    "-webkit-mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)"
  });
  ;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('.file-loader__status--white').text(value).css({
    "mask-image": "linear-gradient(90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
    "-webkit-mask-image": "linear-gradient(90deg, black " + procentInt + "%, transparent " + procentInt + "% 100%)"
  });
  ;
}

if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.file-loader').length > 0) {
  fileLoadStatus(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.file-loader'), 0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.test-file-loader__btn', function () {
    event.preventDefault();
    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('value');
    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.form__fileblock').find('.file-loader');
    fileLoadStatus(target, value);
  });
}

/***/ }),

/***/ "./src/js/import/libs/jquery.marquee.min.js":
/*!**************************************************!*\
  !*** ./src/js/import/libs/jquery.marquee.min.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
          $this = $(this),
          $marqueeWrapper,
          containerWidth,
          animationCss,
          verticalDir,
          elWidth,
          loopCount = 3,
          playState = "animation-play-state",
          css3AnimationIsSupported = false,
          _prefixedEvent = function _prefixedEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      },
          _objToString = function _objToString(obj) {
        var tabjson = [];

        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            tabjson.push(p + ":" + obj[p]);
          }
        }

        tabjson.push();
        return "{" + tabjson.join(",") + "}";
      },
          _startAnimationWithDelay = function _startAnimationWithDelay() {
        $this.timer = setTimeout(animate, o.delayBeforeStart);
      },
          methods = {
        pause: function pause() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "paused");
          } else {
            if ($.fn.pause) {
              $marqueeWrapper.pause();
            }
          }

          $this.data("runningStatus", "paused");
          $this.trigger("paused");
        },
        resume: function resume() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "running");
          } else {
            if ($.fn.resume) {
              $marqueeWrapper.resume();
            }
          }

          $this.data("runningStatus", "resumed");
          $this.trigger("resumed");
        },
        toggle: function toggle() {
          methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout($this.timer);
          $this.find("*").addBack().off();
          $this.html($this.find(".js-marquee:first").html());
        }
      };

      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
          }

          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true;
          }

          methods[options]();
        }

        return;
      }

      var dataAttributes = {},
          attr;
      $.each(o, function (key) {
        attr = $this.attr("data-" + key);

        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true;
              break;

            case "false":
              attr = false;
              break;
          }

          o[key] = attr;
        }
      });

      if (o.speed) {
        o.duration = parseInt($this.width(), 10) / o.speed * 1e3;
      }

      verticalDir = o.direction === "up" || o.direction === "down";
      o.gap = o.duplicated ? parseInt(o.gap) : 0;
      $this.wrapInner('<div class="js-marquee"></div>');
      var $el = $this.find(".js-marquee").css({
        "margin-right": o.gap,
        float: "left"
      });

      if (o.duplicated) {
        $el.clone(true).appendTo($this);
      }

      $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      $marqueeWrapper = $this.find(".js-marquee-wrapper");

      if (verticalDir) {
        var containerHeight = $this.height();
        $marqueeWrapper.removeAttr("style");
        $this.height(containerHeight);
        $this.find(".js-marquee").css({
          float: "none",
          "margin-bottom": o.gap,
          "margin-right": 0
        });

        if (o.duplicated) {
          $this.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
        }

        var elHeight = $this.find(".js-marquee:first").height() + o.gap;

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
          o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration;
        } else {
          o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap;
        containerWidth = $this.width();

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
          o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration;
        } else {
          o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
        }
      }

      if (o.duplicated) {
        o.duration = o.duration / 2;
      }

      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
            animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
            domPrefixes = "Webkit Moz O ms Khtml".split(" "),
            animationString = "animation",
            animationCss3Str = "",
            keyframeString = "";

        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " ";
          css3AnimationIsSupported = true;
        }

        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
              animationString = prefix + animationString;
              playState = prefix + playState;
              keyframeString = "@" + prefix + "keyframes " + animationName + " ";
              css3AnimationIsSupported = true;
              break;
            }
          }
        }

        if (css3AnimationIsSupported) {
          animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
          $this.data("css3AnimationIsSupported", true);
        }
      }

      var _rePositionVertically = function _rePositionVertically() {
        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")");
      },
          _rePositionHorizontally = function _rePositionHorizontally() {
        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")");
      };

      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)");
          } else {
            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")");
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)");
          } else {
            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")");
          }
        }

        if (!o.startVisible) {
          loopCount = 1;
        }
      } else if (o.startVisible) {
        loopCount = 2;
      } else {
        if (verticalDir) {
          _rePositionVertically();
        } else {
          _rePositionHorizontally();
        }
      }

      var animate = function animate() {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration;

            if (verticalDir) {
              o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2;
            } else {
              o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2;
            }

            if (animationCss3Str) {
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
            }

            loopCount++;
          } else if (loopCount === 2) {
            o.duration = o._originalDuration;

            if (animationCss3Str) {
              animationName = animationName + "0";
              keyframeString = $.trim(keyframeString) + "0 ";
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
            }

            loopCount++;
          }
        }

        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")");
            }

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionVertically();
            }
          } else {
            _rePositionVertically();

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
            };
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")");
            }

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionHorizontally();
            }
          } else {
            _rePositionHorizontally();

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
            };
          }
        }

        $this.trigger("beforeStarting");

        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str);
          var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
              $styles = $marqueeWrapper.find("style");

          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss);
          } else {
            $("head").append("<style>" + keyframeCss + "</style>");
          }

          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished");
          });

          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate();
            $this.trigger("finished");
          });
        } else {
          $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () {
            $this.trigger("finished");

            if (o.pauseOnCycle) {
              _startAnimationWithDelay();
            } else {
              animate();
            }
          });
        }

        $this.data("runningStatus", "resumed");
      };

      $this.on("pause", methods.pause);
      $this.on("resume", methods.resume);

      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause);
        $this.on("mouseleave", methods.resume);
      }

      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate();
      } else {
        _startAnimationWithDelay();
      }
    });
  };

  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false
  };
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__burger').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item').on('click', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected').siblings().removeClass('selected');
      getDropdownPositon();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__mobile-year').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').toggleClass('active');
    getDropdownPositon();
  });
});

function getDropdownPositon() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 699) {
    var parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item.selected');
    var element = parent.find('.sidebar__menu-dropdown');
    var menuPadding = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').css('padding-top'));
    var fromTop = parent.offset().top;
    var fromTopMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').offset().top;
    element.css('top', -1 * (fromTop - fromTopMenu - menuPadding - 1));
  }
}

if (typeof Drupal === 'undefined') {
  var grid = document.querySelector('.grid');
  var iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(grid, {
    itemSelector: '.card-person',
    percentPosition: true,
    masonry: {
      columnWidth: ".card-person",
      gutter: 20
    }
  });
} else {
  (function ($, Drupal) {
    Drupal.behaviors.tiqumModule = {
      attach: function attach() {
        var grid = document.querySelector('.grid');
        var iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(grid, {
          itemSelector: '.card-person',
          percentPosition: true,
          masonry: {
            columnWidth: ".card-person",
            gutter: 20
          }
        });
      }
    };
  })(jQuery, Drupal);
}

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
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');

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
checkYearValue();
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
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," + ".section1__dates, .section1__circle, .section1__circle-inner, .section2, .section2__numbers," + ".section2__photos-item--1, .section2__photos-item--2,.section2__photos-item--3, .section2__year," + ".section2__textblock, .section2__letter, .section2__cloud-1, .section2__cloud-2, .section2__textblock2," + ".section2__house, .section2__house-birds, .section2__last-img img, .section2__last-label," + ".section2__last-overlay, .section3, .section3__block--1, .section3__block--1 .section3__overlay," + ".section3__block--2, .section3__block--2 .section3__overlay, .section3__block--3," + ".section3__block--3 .section3__label--1 .section3__label-item--1," + ".section3__block--3 .section3__label--1 .section3__label-item--2," + ".section3__block--3 .section3__label--2, .section3__block--3 .section3__star," + ".section3__block--3 .section3__overlay, .section3__block--4, .section3__block--4 .section3__image," + ".section3__block--4 .section3__label-item--1, .section3__block--4 .section3__label-item--2," + ".section3__block--4 .section3__label-item--3, .section3__block--4 .section3__overlay," + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
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
  tl.from(".section1 .header", {
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
  tl1.fromTo(".section1 .header", {
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
  tl1.addLabel('1941', '+=0');
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
  tl1.addLabel('1943', '+=0.8');
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
  tl1.addLabel('1948', '+=1.8');
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
  tl1.addLabel('1949', '+=0.8');
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
    duration: 1,
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
  tl1.addLabel('1941', '+=0');
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
  tl1.addLabel('1943', '+=0.2');
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
  tl1.addLabel('1948', '+=0.1');
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
  tl1.addLabel('1949', '+=0');
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

function checkYearValue() {
  if (yValue !== null) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').addClass('active');
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      onComplete: function onComplete() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      }
    });

    if (initMode === 'desk' || initMode === 'tablet') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'mobile') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + yValue,
        duration: 0.01
      });
    }
  }
}

function scrollToYear(year) {
  if (year !== null) {
    if (initMode === 'desk' || initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(year)
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + year
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
  event.preventDefault();
  var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
    var _yValue = getParameterFromString(link, "y");

    if (_yValue !== null) {
      scrollToYear(_yValue);
    }
  }
});

function getParameterFromString(urlString, parameterName) {
  var urlParams = new URLSearchParams(urlString.split('?')[1]);
  return urlParams.get(parameterName);
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
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
var initMode;
var addTime = 2100;
var st1;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
var scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width;
var scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height, b8Height, b9Height;
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');

function initAnimation() {
  scWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerWidth();
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-4').innerWidth();
  b2Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-5').innerWidth();
  b3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-6').innerWidth();
  b4Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-7').innerWidth();
  b5Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-8').innerWidth();
  b6Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-9__flex').innerWidth();
  b7Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-10').innerWidth();
  b8Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-11').innerWidth();
  b9Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-12').innerWidth();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerHeight();
  b1Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-4').innerHeight();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-5').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-6').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-7').innerHeight();
  b5Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-8').innerHeight();
  b6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-9').innerHeight();
  b7Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-10').innerHeight();
  b8Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-11').innerHeight();
  b9Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y2-12').innerHeight();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('video').trigger('play');

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
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    if (typeof st1 !== "undefined") st1.kill();
    tl1.clear();
    tl.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".y2-1__numbers,.y2-1__photos-item--1,.y2-1__photos-item--2,.y2-1__photos-item--3,.y2-2,.y2-2__top," + ".y2-2__title,.y2-2__fly,.y2-2__title span,.y2-2__text,.y2-2__diplom,.y2-1,.y2-3__text,.y2-3__label,.y2-3__overlay," + ".y2-4,.y2-4__overlay,.y2-5,.y2-5__overlay,.y2-6,.y2-6__title span,.y2-6__image,.y2-6__overlay,.y2-7,.y2-7__image," + ".y2-7__title span,.y2-7__overlay,.y2-9,.y2-8,.y2-9__flex,.y2-9__title,.y2-9__title span,.y2-10,.y2-10__overlay," + ".y2-11,.y2-11__first-title,.y2-11__second-title span,.y2-11__overlay,.y2-12,.y2-12__title,.y2-12__text-col," + ".y2-12__images-img,.y2-9__overlay,.y2-8__overlay, .y2-1__photos," + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
    }
  });
  tl.fromTo(".y2-1__numbers", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.1,
    ease: "none"
  }, "0.1");
  tl.fromTo(".y2-1__photos", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.1,
    ease: "none"
  }, "0.1");
  tl.fromTo(".y2-1__numbers", {
    x: '100vw'
  }, {
    x: '5vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl.fromTo(".y2-1__photos-item--1", {
    x: '100vw'
  }, {
    x: '50vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__numbers", {
    x: '5vw'
  }, {
    x: '-100%',
    duration: 4,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__photos-item--1", {
    x: '50vw'
  }, {
    x: '-100%',
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-1__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 1.5,
    ease: "none"
  }, ">-0.3");
  tl1.fromTo(".y2-1__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 1.5,
    ease: "none"
  }, ">-0.7");
  tl1.fromTo(".y2-2", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.7,
    ease: "none"
  }, "4");
  tl1.fromTo(".y2-2__top", {
    y: 0
  }, {
    y: "-100%",
    duration: 2,
    ease: "none"
  }, ">0.3");
  tl1.fromTo(".y2-2__title", {
    y: "100vh"
  }, {
    y: "0",
    duration: 2,
    ease: "none"
  }, "<0.2");
  tl1.fromTo(".y2-2__fly", {
    y: 0,
    top: "100%"
  }, {
    y: "-100%",
    top: 0,
    duration: 1,
    ease: "none"
  }, ">-0.4");
  tl1.from(".y2-2__title span:nth-child(1)", {
    x: "130%",
    duration: 3,
    ease: "none"
  }, "<-1.6");
  tl1.from(".y2-2__title span:nth-child(2)", {
    x: "-80%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".y2-2__title span:nth-child(3)", {
    x: "50%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-2__text", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.3,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-2__title", {
    autoAlpha: 1
  }, {
    autoAlpha: 0.2,
    duration: 0.2,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-2__diplom", {
    y: 0,
    top: "100%"
  }, {
    y: "-100%",
    top: 0,
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-1", {
    top: "0",
    autoAlpha: 1
  }, {
    top: "-100%",
    autoAlpha: 0,
    duration: 0,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-2", {
    top: "0"
  }, {
    top: "-120%",
    duration: 2.5,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-3__text", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".y2-3__label", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 0.5,
    ease: "none"
  }, "<");
  tl1.addLabel('1951', '+=2');
  tl1.fromTo(".y2-4", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b1Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-4__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1952', '+=1.1');
  tl1.fromTo(".y2-5", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b2Width - scWidth),
    duration: 4,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y2-5__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-6", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b3Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">-1.5");
  tl1.from(".y2-6__title span:nth-child(1)", {
    x: "70%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.from(".y2-6__title span:nth-child(2)", {
    x: "100%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.from(".y2-6__title span:nth-child(3)", {
    x: "-38%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.from(".y2-6__title span:nth-child(4)", {
    x: "-200%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-6__image", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.7,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-6__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">0.5");
  tl1.addLabel('1954', '+=2.3');
  tl1.fromTo(".y2-7", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b4Width - scWidth),
    duration: 5,
    ease: "none"
  }, ">-1.5");
  tl1.from(".y2-7__image", {
    x: "-35%",
    duration: 5,
    ease: "none"
  }, "<");
  tl1.from(".y2-7__title span:nth-child(1)", {
    x: "40%",
    duration: 5,
    ease: "none"
  }, "<");
  tl1.from(".y2-7__title span:nth-child(2)", {
    x: "-15%",
    duration: 5,
    ease: "none"
  }, "<");
  tl1.from(".y2-7__title span:nth-child(3)", {
    x: "-70%",
    duration: 5,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-7__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1955', '+=0.9');
  tl1.fromTo(".y2-9", {
    left: "100%"
  }, {
    left: 0,
    duration: 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-8", {
    left: "100%"
  }, {
    left: -b5Width,
    duration: 6,
    ease: "none"
  }, "<-1.5");
  tl1.fromTo(".y2-9__flex", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b6Width - scWidth),
    duration: 7,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y2-9__title", {
    x: "200%"
  }, {
    x: "-100%",
    duration: 6,
    ease: "none"
  }, "<+1");
  tl1.to(".y2-9__title span:nth-child(1)", {
    x: "80%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.to(".y2-9__title span:nth-child(3)", {
    x: "90%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.addLabel('1956', '+=3.7');
  tl1.fromTo(".y2-10", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b7Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-10__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1957', '+=0.66');
  tl1.fromTo(".y2-11", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b8Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y2-11__first-title", {
    x: "40%"
  }, {
    x: "-5%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".y2-11__second-title span:nth-child(1)", {
    x: "15%",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.from(".y2-11__second-title span:nth-child(2)", {
    x: "-7%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".y2-11__second-title span:nth-child(3)", {
    x: "-10%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-11__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1958', '+=1.5');
  tl1.fromTo(".y2-12", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b9Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">-1.5");
  tl1.from(".y2-12__title", {
    x: "-75%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.from(".y2-12__text-col", {
    x: "20vw",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.from(".y2-12__images-img", {
    x: "20vw",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".y2-12__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1,
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
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y2-1__numbers", {
    x: '5%'
  }, {
    x: '-100%',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__numbers", {
    y: "-50%"
  }, {
    y: '10%',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__photos-item--1", {
    x: '5vw'
  }, {
    x: '-100%',
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 0.7,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".y2-1", {
    top: '-80vw',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.to(".y2-2", {
    top: '0',
    duration: 2,
    ease: "none"
  }, "<");
  tl1.from(".y2-2__title span:nth-child(1)", {
    x: "130%",
    duration: 3,
    ease: "none"
  }, "0");
  tl1.from(".y2-2__title span:nth-child(2)", {
    x: "-80%",
    duration: 3,
    ease: "none"
  }, "0");
  tl1.from(".y2-2__title span:nth-child(3)", {
    x: "50%",
    duration: 3,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-2__text", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.3,
    ease: "none"
  }, ">-2");
  tl1.fromTo(".y2-2__diplom", {
    y: 0,
    top: "100%"
  }, {
    y: "-100%",
    top: 0,
    duration: 2,
    ease: "none"
  }, ">");
  tl1.to(".y2-2", {
    top: "-150vw",
    duration: 2.5,
    ease: "none"
  }, "2");
  tl1.fromTo(".y2-3__text", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">-0.5");
  tl1.fromTo(".y2-3__label", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 0.5,
    ease: "none"
  }, "<");
  tl1.addLabel('1951', '+=1');
  tl1.fromTo(".y2-4", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b1Height - scHeight),
    duration: Math.abs((scHeight - b1Height) / 460),
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-4__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1952', '+=1.5');
  tl1.fromTo(".y2-5", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b2Height - scHeight),
    duration: Math.abs((scHeight - b2Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-5__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-6", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b3Height - scHeight),
    duration: Math.abs((scHeight - b3Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-6__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1954', '+=1.7');
  tl1.fromTo(".y2-7", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b4Height - scHeight),
    duration: Math.abs((scHeight - b4Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-7__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1955', '+=2');
  tl1.fromTo(".y2-8", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b5Height - scHeight),
    duration: Math.abs((scHeight - b5Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-8__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-9", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b6Height - scHeight),
    duration: Math.abs((scHeight - b6Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-9__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1956', '+=1.5');
  tl1.fromTo(".y2-10", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b7Height - scHeight),
    duration: Math.abs((scHeight - b7Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-10__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1957', '+=1.8');
  tl1.fromTo(".y2-11", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b8Height - scHeight),
    duration: Math.abs((scHeight - b8Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-11__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1958', '+=1.6');
  tl1.fromTo(".y2-12", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b9Height - scHeight),
    duration: Math.abs((scHeight - b9Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y2-12__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1,
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
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y2-1__numbers", {
    x: 0
  }, {
    x: '-80%',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y2-1__numbers", {
    y: 0
  }, {
    y: '50%',
    duration: 0.5,
    ease: "none"
  }, "0");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".y2-1__numbers",
    pin: false,
    start: "-45vw top",
    end: function end() {
      return "bottom top";
    },
    scrub: 1,
    animation: tl1
  });
}

function checkYearValue() {
  if (yValue !== null) {
    if (initMode === 'desk') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + yValue,
        duration: 0.01
      });
    }
  }
}

function scrollToYear(year) {
  if (year !== null) {
    if (initMode === 'desk' || initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(year)
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + year
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
  event.preventDefault();
  var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
    var _yValue = getParameterFromString(link, "y");

    if (_yValue !== null) {
      scrollToYear(_yValue);
    }
  }
});

function getParameterFromString(urlString, parameterName) {
  var urlParams = new URLSearchParams(urlString.split('?')[1]);
  return urlParams.get(parameterName);
}

/***/ }),

/***/ "./src/js/import/years/_y1960.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1960.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
var initMode;
var addTime = 1800;
var st1;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
var scWidth, b1Width, b2Width, b3Width, b4Width, b5Width;
var scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height;
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');

function initAnimation() {
  scWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerWidth();
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-4').innerWidth();
  b2Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-5').innerWidth();
  b3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-6').innerWidth();
  b4Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-7').innerWidth();
  b5Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-8').innerWidth();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerHeight();
  b1Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-4').innerHeight();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-5').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-6').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-7').innerHeight();
  b5Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-8').innerHeight();
  b6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-2').innerHeight();
  b7Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y3-3').innerHeight();

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
    tl1.clear();
    tl.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".y3-1__numbers, .y3-1__photos-item--1, .y3-1__photos-item--1, .y3-1__photos-item--2," + ".y3-1__photos-item--3, .y3-2, .y3-1, .y3-2__bg, .y3-2__top, .y3-2__title--1, .y3-2__title--1 span, .y3-2__text--1," + ".y3-2__title--2, .y3-2__title--2 span, .y3-2__azs, .y3-2__azs-logo ,.y3-2__cloud-1, .y3-2__cloud-2, .y3-2__cloud-3," + ".y3-2__text--2, .y3-2__label-block, .y3-2__label, .y3-2__year, .y3-3, .y3-3__overlay, .y3-4, .y3-4__first-title, " + ".y3-4__second-image, .y3-4__overlay, .y3-5, .y3-5__title span, .y3-5__image, .y3-5__overlay, .y3-6, " + ".y3-6__second-image2, .y3-6__last-title span, .y3-6__last-image, .y3-6__overlay, .y3-7, .y3-7__first-title, " + ".y3-7__second-title span, .y3-7__second-image2, .y3-7__overlay, .y3-8, .y3-8__overlay, .y3-2__overlay, .y3-1__photos," + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
    }
  });
  tl.fromTo(".y3-1__numbers", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.1,
    ease: "none"
  }, "0.1");
  tl.fromTo(".y3-1__photos", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.1,
    ease: "none"
  }, "0.1");
  tl.fromTo(".y3-1__numbers", {
    x: '100vw'
  }, {
    x: '5vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl.fromTo(".y3-1__photos-item--1", {
    x: '100vw'
  }, {
    x: '50vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__numbers", {
    x: '5vw'
  }, {
    x: '-100%',
    duration: 4,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__photos-item--1", {
    x: '50vw'
  }, {
    x: '-100%',
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-1__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 1.5,
    ease: "none"
  }, ">-0.3");
  tl1.fromTo(".y3-1__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 1.5,
    ease: "none"
  }, ">-0.7");
  tl1.fromTo(".y3-2", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.7,
    ease: "none"
  }, "4");
  tl1.fromTo(".y3-1", {
    top: "0",
    autoAlpha: 1
  }, {
    top: "-100%",
    autoAlpha: 0,
    duration: 0,
    ease: "none"
  }, ">");
  tl1.addLabel('1960');
  tl1.addLabel('startScroll', '+=0.3');
  tl1.fromTo(".y3-2__bg", {
    y: 0
  }, {
    y: "-100%",
    duration: 10,
    ease: "none"
  }, "startScroll+0.7");
  tl1.addLabel('endScroll');
  tl1.fromTo(".y3-2__top", {
    y: 0
  }, {
    y: "-100%",
    duration: 2,
    ease: "none"
  }, "startScroll");
  tl1.fromTo(".y3-2__top", {
    autoAlpha: 1
  }, {
    autoAlpha: 0.3,
    duration: 1,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y3-2__title--1", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__title--1 span:nth-child(1)", {
    x: "100vw"
  }, {
    x: "-10vw",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__title--1 span:nth-child(2)", {
    x: "-100%"
  }, {
    x: "40%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__title--1 span:nth-child(3)", {
    x: "50%"
  }, {
    x: "30%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__title--1 span:nth-child(4)", {
    x: "0%"
  }, {
    x: "25%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__text--1", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 1.8,
    ease: "none"
  }, ">-0.7");
  tl1.fromTo(".y3-2__title--2", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 2,
    ease: "none"
  }, "<+0.5");
  tl1.fromTo(".y3-2__title--2 span:nth-child(1)", {
    x: "50%"
  }, {
    x: "30%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__title--2 span:nth-child(2)", {
    x: "30%"
  }, {
    x: "70%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__azs", {
    y: "100vh"
  }, {
    y: "-200%",
    duration: 2,
    ease: "none"
  }, ">-1.3");
  tl1.fromTo(".y3-2__azs-logo", {
    y: "-50%"
  }, {
    y: "0%",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__cloud-1", {
    left: '0',
    x: '0',
    top: '0',
    y: '-100%'
  }, {
    left: '0',
    x: '-100%',
    top: '20%',
    y: '0',
    duration: 3,
    ease: "none"
  }, ">-2");
  tl1.fromTo(".y3-2__cloud-2", {
    left: '100%',
    x: '0',
    top: '10%'
  }, {
    left: '0',
    x: '-100%',
    top: '-20%',
    duration: 5,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__cloud-3", {
    left: '100%',
    x: '0',
    top: '10%'
  }, {
    left: '0',
    x: '-100%',
    top: '-40%',
    duration: 4,
    ease: "none"
  }, "<+1");
  tl1.fromTo(".y3-2__text--2", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 1.8,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__label-block", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-2__label", {
    y: "100vh"
  }, {
    y: "-100%",
    duration: 3.3,
    ease: "none"
  }, "<-0.15");
  tl1.fromTo(".y3-2__label", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, "<1");
  tl1.fromTo(".y3-2__year", {
    autoAlpha: 1
  }, {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, "<2");
  tl1.addLabel('1962');
  tl1.fromTo(".y3-3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 0.5,
    ease: "none"
  }, ">3");
  tl1.fromTo(".y3-4", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b1Width - scWidth),
    duration: 6,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-4__first-title", {
    y: '300%'
  }, {
    y: 0,
    duration: 5.5,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-4__second-image", {
    x: '30%'
  }, {
    x: "-20%",
    duration: 6,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-4__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1964', '+=1.35');
  tl1.fromTo(".y3-5", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b2Width - scWidth),
    duration: 4,
    ease: "none"
  }, ">-1.5");
  tl1.from(".y3-5__title span:nth-child(1)", {
    x: "-120%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.from(".y3-5__title span:nth-child(2)", {
    x: "-65%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.to(".y3-5__image", {
    x: "-30vw",
    duration: 2,
    ease: "none"
  }, "<2");
  tl1.fromTo(".y3-5__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1966', '+=0.5');
  tl1.fromTo(".y3-6", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b3Width - scWidth),
    duration: 10,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y3-6__second-image2", {
    x: '150%'
  }, {
    x: '-80%',
    duration: 4,
    ease: "none"
  }, "<3");
  tl1.from(".y3-6__last-title span:nth-child(1)", {
    left: "50vw",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.from(".y3-6__last-title span:nth-child(2)", {
    left: "0",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".y3-6__last-title span:nth-child(3)", {
    left: "5vw",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".y3-6__last-image", {
    top: "-100%",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-6__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1967', '+=1.1');
  tl1.fromTo(".y3-7", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b4Width - scWidth),
    duration: 8,
    ease: "none"
  }, ">-1.5");
  tl1.from(".y3-7__first-title", {
    x: "100%",
    duration: 5.5,
    ease: "none"
  }, "<");
  tl1.from(".y3-7__second-title span:nth-child(1)", {
    left: "50vw",
    duration: 4,
    ease: "none"
  }, "<4");
  tl1.from(".y3-7__second-title span:nth-child(2)", {
    left: "15vw",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.from(".y3-7__second-title span:nth-child(3)", {
    left: "10vw",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.from(".y3-7__second-image2", {
    y: "150%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.fromTo(".y3-7__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1968', '+=1.1');
  tl1.fromTo(".y3-8", {
    x: "0",
    left: "100%"
  }, {
    left: "0",
    x: -1 * (b5Width - scWidth),
    duration: 4,
    ease: "none"
  }, ">-1.5");
  tl1.fromTo(".y3-8__overlay", {
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
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y3-1__numbers", {
    x: '5%'
  }, {
    x: '-100%',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__numbers", {
    y: "-50%"
  }, {
    y: '10%',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__photos-item--1", {
    x: '5vw'
  }, {
    x: '-100%',
    duration: 0.3,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__photos-item--2", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 0.7,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__photos-item--3", {
    x: '100vw'
  }, {
    x: '-100%',
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".y3-1", {
    top: '-80vw',
    duration: 2,
    ease: "none"
  }, "0");
  tl1.to(".y3-2", {
    top: '0',
    duration: 2,
    ease: "none"
  }, "<");
  tl1.addLabel('1960');
  tl1.fromTo(".y3-2", {
    y: "0"
  }, {
    y: -1 * (b6Height - scHeight),
    duration: Math.abs((scHeight - b6Height) / 460),
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-2__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1962', '+=1.4');
  tl1.fromTo(".y3-3", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b7Height - scHeight),
    duration: Math.abs((scHeight - b7Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-3__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 0.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-4", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b1Height - scHeight),
    duration: Math.abs((scHeight - b1Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-4__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1964', '+=1.7');
  tl1.fromTo(".y3-5", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b2Height - scHeight),
    duration: Math.abs((scHeight - b2Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-5__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1966', '+=2');
  tl1.fromTo(".y3-6", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b3Height - scHeight),
    duration: Math.abs((scHeight - b3Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-6__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1967', '+=2');
  tl1.fromTo(".y3-7", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b4Height - scHeight),
    duration: Math.abs((scHeight - b4Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-7__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1968', '+=1.4');
  tl1.fromTo(".y3-8", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b5Height - scHeight),
    duration: Math.abs((scHeight - b5Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y3-8__overlay", {
    autoAlpha: 0
  }, {
    autoAlpha: 0.7,
    duration: 1,
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
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y3-1__numbers", {
    x: 0
  }, {
    x: '-80%',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y3-1__numbers", {
    y: 0
  }, {
    y: '50%',
    duration: 0.5,
    ease: "none"
  }, "0");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".y3-1__numbers",
    pin: false,
    start: "-45vw top",
    end: function end() {
      return "bottom top";
    },
    scrub: 1,
    animation: tl1
  });
}

function scrollToYear(year) {
  if (year !== null) {
    if (initMode === 'desk' || initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(year)
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + year
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
  event.preventDefault();
  var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
    var _yValue = getParameterFromString(link, "y");

    if (_yValue !== null) {
      scrollToYear(_yValue);
    }
  }
});

function getParameterFromString(urlString, parameterName) {
  var urlParams = new URLSearchParams(urlString.split('?')[1]);
  return urlParams.get(parameterName);
}

/***/ }),

/***/ "./src/js/import/years/_y1970.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1970.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");





gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
var initMode;
var addTime = 2100;
var st1;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
var scWidth, b1Width, b2Width, b3Width, b4Width, b5Width, b6Width, b7Width, b8Width, b9Width;
var scHeight, b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height, b8Height, b9Height;
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    if (typeof st1 !== "undefined") st1.kill();
    tl1.clear();
    tl.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".y4-1__bg,.y4-1__bg--1,.y4-1__title--1 span:nth-child(1),.y4-1__title--1 span:nth-child(2),.y4-1 .y4-1__year,.y4-1 .y4-1__text--1," + ".y4-2__title--1 span:nth-child(1),.y4-2__title--1 span:nth-child(2),.y4-2," + ".y4-3__text--2,.y4-3__2,.y4-3__1,.y4-3__text--1" + ".y4-4,.y4-5,.y4-5__3,.y4-5__4,.y4-5__text--1," + ".y4-6__1,.y4-6__2" + ".y4-7__1,.y4-7__title--1 span:nth-child(1),.y4-7__title--1 span:nth-child(2),.y4-7__2," + ".y4-8__blockOverlay,.y4-8" + ".y4-9__2,.y4-9__3" + ".y4-10__blockOverlay,.y4-10,.y4-10__1,.y4-10__title--1 span:nth-child(1),.y4-10__title--1 span:nth-child(2)" + ".y4-12__2" + ".y4-13__blockOverlay,.y4-13," + ".y4-14__2," + ".y4-15__blockOverlay,.y4-15,.y4-15__1,.y4-15__title--1 span:nth-child(1),.y4-15__title--1 span:nth-child(2),.y4-15__title--1 span:nth-child(3)," + ".y4-16__blockOverlay,.y4-16,.y4-16__2" + ".y4-17__blockOverlay,.y4-17,.y4-17__bg--1" + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
    initAnimation();
  }
});

function initAnimation() {
  scWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerWidth();
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-1').innerWidth();
  b2Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-2').innerWidth();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerHeight();
  b1Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-1').innerHeight();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-2').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-3').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-4').innerHeight();
  b5Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-4--4').innerHeight();
  b6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-5').innerHeight();
  b7Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-6').innerHeight();
  b8Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-7').innerHeight();
  b9Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.y4-8').innerHeight();

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
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

function initScrollAnimationDesktop() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y4-1__bg", {
    y: '0%'
  }, {
    y: '-200%',
    duration: 4,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-1__bg--1", {
    y: '0%'
  }, {
    y: '-200%',
    duration: 8,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-1__title--1 span:nth-child(1)", {
    x: '-60vw',
    y: '60vh'
  }, {
    x: '120vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-1__title--1 span:nth-child(2)", {
    x: '100vw',
    y: '80vh'
  }, {
    x: '-120vw',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-1 .y4-1__year", {
    y: '2vh'
  }, {
    y: '-50vh',
    duration: 1,
    ease: "none"
  }, "1");
  tl1.fromTo(".y4-1 .y4-1__text--1", {
    y: '5vh'
  }, {
    y: '-50vh',
    duration: 1,
    ease: "none"
  }, "1");
  tl1.addLabel('1971', '-=2.1');
  tl1.fromTo(".y4-2__title--1 span:nth-child(1)", {
    x: '-90vw',
    y: '30vh'
  }, {
    x: '130vw',
    duration: 1,
    ease: "none"
  }, ">-0.3");
  tl1.fromTo(".y4-2__title--1 span:nth-child(2)", {
    x: '100vw',
    y: '50vh'
  }, {
    x: '-130vw',
    duration: 1,
    ease: "none"
  }, ">-0.8");
  tl1.fromTo(".y4-2", {
    y: "0vh"
  }, {
    y: "-190vh",
    duration: 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-3__text--2", {
    opacity: 1
  }, {
    opacity: 0.1,
    duration: 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-3__2", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-3__1", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-3__text--1", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-4", {
    y: "0vh",
    x: "100vw"
  }, {
    y: "0vh",
    x: "0vw",
    duration: 1,
    ease: "none"
  }, ">");
  tl1.addLabel('1972', '-=0.48');
  tl1.fromTo(".y4-5", {
    y: "0vh",
    x: "100vw"
  }, {
    y: "0vh",
    x: "-404vw",
    duration: 3.1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-5__3", {
    x: "5vw"
  }, {
    x: "70vw",
    duration: 1.3,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-5__4", {
    x: "65vw"
  }, {
    x: "150vw",
    duration: 1,
    ease: "none"
  }, "<+=0.2");
  tl1.fromTo(".y4-5__text--1", {
    x: "65vw"
  }, {
    x: "150vw",
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-6__1", {
    y: "80vh" // x: "100vw"

  }, {
    y: "20vh",
    // x: "-104vw",
    duration: 1.4,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-6__2", {
    y: "-10vh" // x: "100vw"

  }, {
    y: "20vh",
    // x: "-104vw",
    duration: 1.4,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-7__1", {
    y: "70vh",
    x: "5vw"
  }, {
    y: "40vh",
    x: "5vw",
    duration: 0.6,
    ease: "none"
  }, ">-=0.4");
  tl1.fromTo(".y4-7__title--1 span:nth-child(1)", {
    y: "10vh",
    x: "50vw"
  }, {
    y: "10vh",
    x: "-30vw",
    duration: 0.8,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-7__title--1 span:nth-child(2)", {
    y: "30vh",
    x: "90vw"
  }, {
    y: "30vh",
    x: "-30vw",
    duration: 0.8,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-7__2", {
    y: "-30vh" // x: "150vw"

  }, {
    y: "0vh",
    // x: "150vw",
    duration: 1,
    ease: "none"
  }, ">");
  tl1.addLabel('1973', '+=0.8');
  tl1.fromTo(".y4-8__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.8,
    // x: "150vw",
    duration: 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-8", {
    y: "0vh",
    x: "100vw"
  }, {
    y: "0vh",
    x: "-204vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.6");
  tl1.fromTo(".y4-9__2", {
    y: "0vh",
    x: "-20vw"
  }, {
    y: "0vh",
    x: "33vw",
    duration: 0.8,
    ease: "none"
  }, ">-=0.6");
  tl1.fromTo(".y4-9__3", {
    y: "0vh",
    x: "70vw"
  }, {
    y: "0vh",
    x: "55vw",
    duration: 0.8,
    ease: "none"
  }, ">-=0.8"); // tl1.addLabel('1974');

  tl1.fromTo(".y4-10__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">-=0.2");
  tl1.fromTo(".y4-10", {
    y: "0vh",
    x: "150vw"
  }, {
    y: "0vh",
    x: "-354vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.1");
  tl1.fromTo(".y4-10__1", {
    y: "0vh",
    x: "75vw"
  }, {
    y: "0vh",
    x: "65vw",
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-10__title--1 span:nth-child(1)", {
    y: "30vh",
    x: "0vw"
  }, {
    y: "30vh",
    x: "120vw",
    duration: 0.9,
    ease: "none"
  }, "<+=0.1");
  tl1.fromTo(".y4-10__title--1 span:nth-child(2)", {
    y: "50vh",
    x: "75vw"
  }, {
    y: "50vh",
    x: "10vw",
    duration: 1,
    ease: "none"
  }, "<+=0.1");
  tl1.fromTo(".y4-12__2", {
    // y: "50vh",
    x: "85vw"
  }, {
    // y: "50vh",
    x: "70vw",
    duration: 0.3,
    ease: "none"
  }, ">-=0.2");
  tl1.fromTo(".y4-13__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">-=0.1");
  tl1.addLabel('1975', "+=0.3");
  tl1.fromTo(".y4-13", {
    y: "0vh",
    x: "120vw"
  }, {
    y: "0vh",
    x: "-174vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.2");
  tl1.fromTo(".y4-14__2", {
    y: "0vh",
    x: "100vw"
  }, {
    y: "0vh",
    x: "60vw",
    duration: 0.5,
    ease: "none"
  }, ">-=0.4");
  tl1.addLabel('1976', "+=1.06");
  tl1.fromTo(".y4-15__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">-=0.1");
  tl1.fromTo(".y4-15", {
    y: "0vh",
    x: "160vw"
  }, {
    y: "0vh",
    x: "-64vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.1");
  tl1.fromTo(".y4-15__1", {
    // y: "10vh",
    x: "0vw"
  }, {
    // y: "0vh",
    x: "65vw",
    duration: 1,
    ease: "none"
  }, "<+=0.15");
  tl1.fromTo(".y4-15__title--1 span:nth-child(1)", {
    y: "15vh",
    x: "-2vw"
  }, {
    y: "15vh",
    x: "85vw",
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-15__title--1 span:nth-child(2)", {
    y: "35vh",
    x: "0vw"
  }, {
    y: "35vh",
    x: "65vw",
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-15__title--1 span:nth-child(3)", {
    y: "55vh",
    x: "20vw"
  }, {
    y: "55vh",
    x: "65vw",
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-16__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">");
  tl1.addLabel('1977', "+=0.69");
  tl1.fromTo(".y4-16", {
    y: "0vh",
    x: "200vw"
  }, {
    y: "0vh",
    x: "-104vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.1");
  tl1.fromTo(".y4-16__2", {
    // y: "0vh",
    x: "40vw"
  }, {
    // y: "0vh",
    x: "100vw",
    duration: 1.2,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-17__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.2,
    ease: "none"
  }, ">");
  tl1.addLabel('1978', "+=0.82");
  tl1.fromTo(".y4-17", {
    y: "0vh",
    x: "140vw"
  }, {
    y: "0vh",
    x: "-44vw",
    duration: 1.2,
    ease: "none"
  }, ">-=0.1");
  tl1.fromTo(".y4-17__bg--1", {
    y: "0vh" // x: "160vw"

  }, {
    y: "-50vh",
    // x: "-64vw",
    duration: 1.2,
    ease: "none"
  }, "<");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
  tl1.fromTo(".y4-100__numbers", {
    x: '5%'
  }, {
    x: '-100%',
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-100__numbers", {
    y: "-50%",
    opacity: 1
  }, {
    y: '-80%',
    opacity: 0,
    duration: 1,
    ease: "none"
  }, "0");
  tl1.fromTo(".y4-100", {
    y: "0%" // opacity: 1,

  }, {
    y: '-100%',
    // opacity: 0,
    duration: 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-1", {
    y: "0",
    top: "0vh"
  }, {
    top: "-200vh",
    y: -1 * (b1Height - scHeight),
    duration: Math.abs((scHeight - b1Height) / 460) + 1,
    ease: "none"
  }, "<");
  tl1.fromTo(".y4-2", {
    y: "0",
    top: "0"
  }, {
    top: "0",
    y: -1 * (b2Height - scHeight),
    duration: Math.abs((scHeight - b2Height) / 460) + 1,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-3", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b3Height - scHeight),
    duration: Math.abs((scHeight - b3Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-4", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b4Height - scHeight),
    duration: Math.abs((scHeight - b4Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-4--4", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b5Height - scHeight),
    duration: Math.abs((scHeight - b5Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.addLabel('1972', "+=0.82");
  tl1.fromTo(".y4-4__blockOverlay--mob", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-5", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b6Height - scHeight),
    duration: Math.abs((scHeight - b6Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-6", {
    // y: "0",
    top: "100%"
  }, {
    top: "-4%",
    // y: -1 * (b7Height - scHeight),
    duration: Math.abs((scHeight - b7Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  tl1.fromTo(".y4-7", {
    y: "0",
    top: "100%"
  }, {
    top: "-4%",
    y: -1 * (b8Height - scHeight),
    duration: Math.abs((scHeight - b8Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  console.log(b7Height);
  console.log(-1 * (b7Height - scHeight));
  console.log(-1 * (b7Height - scHeight));
  tl1.addLabel('1973', "+=0.82");
  tl1.fromTo(".y4-8__blockOverlay", {
    opacity: 0 // x: "150vw"

  }, {
    opacity: 0.6,
    // x: "150vw",
    duration: 0.4,
    ease: "none"
  }, ">-=0.9");
  tl1.fromTo(".y4-8", {
    y: "0",
    top: "100%"
  }, {
    top: "0",
    y: -1 * (b9Height - scHeight),
    duration: Math.abs((scHeight - b9Height) / 460) + 1.5,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1,
    animation: tl1
  });
}

function initScrollAnimationMobile() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  }); // tl1.fromTo(".y2-1__numbers", {
  // 		x: 0,
  // }, {
  // 		x: '-80%',
  // 		duration:  1,
  // 		ease: "none",
  // } , "0");
  // tl1.fromTo(".y2-1__numbers", {
  // 		y: 0
  // }, {
  // 		y: '50%',
  // 		duration:  0.5,
  // 		ease: "none",
  // } , "0");	
}

function checkYearValue() {
  if (yValue !== null) {
    if (initMode === 'desk') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + yValue,
        duration: 0.01
      });
    }
  }
}

function scrollToYear(year) {
  if (year !== null) {
    if (initMode === 'desk' || initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(year)
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(window, {
        scrollTo: '#year' + year
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
  event.preventDefault();
  var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
    var _yValue = getParameterFromString(link, "y");

    if (_yValue !== null) {
      scrollToYear(_yValue);
    }
  }
});

function getParameterFromString(urlString, parameterName) {
  var urlParams = new URLSearchParams(urlString.split('?')[1]);
  return urlParams.get(parameterName);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs/jquery.marquee.min */ "./src/js/import/libs/jquery.marquee.min.js");
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
 // import "./import/libs/select2.min";




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