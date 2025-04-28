/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function ($) {
  "use strict";

  $(document).ready(function () {
    console.log("Ambar Spa website loaded.");

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for navigation links
    var scrollLinks = document.querySelectorAll('.navbar-nav .nav-link, #back-to-top-btn, .footer-back-to-top');
    scrollLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        // Check if the link is a hash link
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Calculate offset with Bootstrap navbar height
            var navbarHeight = document.querySelector('.navbar').offsetHeight;
            var elementPosition = targetElement.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });

            // Close the mobile menu if it's open
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
              var bsCollapse = new bootstrap.Collapse(navbarCollapse);
              bsCollapse.hide();
            }
          }
        }
      });
    });

    // Add a class to body to manage animations if needed
    $('body').addClass('js-loading');
    $(window).on('load', function () {
      $('body').removeClass('js-loading');
    });

    // Back to Top Button Logic
    var backToTopButton = document.getElementById("back-to-top-btn");

    // Function to check scroll position and toggle button visibility
    var scrollFunction = function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', scrollFunction);

    // Initial check in case the page loads already scrolled down
    scrollFunction();

    // Reset hero animations when scrolling back to top
    var heroElements = document.querySelectorAll('.hero .animate-hero');
    $(backToTopButton).on('click', function () {
      // Remove animation classes
      heroElements.forEach(function (el) {
        el.style.opacity = 0;
        el.style.animation = 'none';
      });

      // Force reflow to restart animations
      setTimeout(function () {
        heroElements.forEach(function (el) {
          el.style.animation = '';
          el.style.opacity = '';
        });
      }, 100);
    });

    // Optional: Parallax effect for hero section
    var heroSection = document.querySelector('.hero');
    $(window).on('scroll', function () {
      if (window.scrollY < window.innerHeight) {
        var scrolled = window.scrollY;
        $(heroSection).css('background-position-y', "".concat(scrolled * 0.5, "px"));
      }
    });

    // Auto-highlight WhatsApp button periodically
    var autoHighlightWhatsApp = function autoHighlightWhatsApp() {
      var whatsappBtns = document.querySelectorAll('.btn-whatsapp');
      if (whatsappBtns.length > 0) {
        whatsappBtns.forEach(function (btn) {
          // Add auto-highlight class
          btn.classList.add('auto-highlight');

          // Remove auto-highlight class after animation duration
          setTimeout(function () {
            btn.classList.remove('auto-highlight');
          }, 2000);
        });
      }
    };

    // Special highlight for hero WhatsApp button
    var highlightHeroWhatsApp = function highlightHeroWhatsApp() {
      var heroWhatsAppBtn = document.querySelector('.hero-whatsapp-btn');
      if (heroWhatsAppBtn) {
        heroWhatsAppBtn.classList.add('auto-highlight');
        setTimeout(function () {
          heroWhatsAppBtn.classList.remove('auto-highlight');
        }, 2000);
      }
    };

    // Trigger highlight after page load and then periodically
    setTimeout(function () {
      autoHighlightWhatsApp(); // Regular highlight for all WhatsApp buttons
      highlightHeroWhatsApp(); // Special highlight for hero button
    }, 2000);

    // Regular WhatsApp buttons
    setInterval(autoHighlightWhatsApp, 10000);

    // Hero WhatsApp button (more frequent)
    setInterval(highlightHeroWhatsApp, 7000);

    // Change navbar background on scroll
    $(window).on('scroll', function () {
      var navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        $(navbar).css({
          'background-color': 'rgba(255, 255, 255, 0.95)',
          'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)'
        });
      } else {
        $(navbar).css({
          'background-color': '#ffffff',
          'box-shadow': '0 2px 5px rgba(0, 0, 0, 0.1)'
        });
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/theme": 0,
/******/ 			"style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkvjs_custom"] = self["webpackChunkvjs_custom"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/js/theme.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;