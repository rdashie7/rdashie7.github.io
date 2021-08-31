/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.sass":
/*!****************************!*\
  !*** ./src/sass/main.sass ***!
  \****************************/
/***/ (() => {

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ "./src/sass/main.sass");
/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_sass__WEBPACK_IMPORTED_MODULE_0__);


$(document).ready(function() {
    // $(".offers-slider").slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: false,
    //     prevArrow: document.getElementsByClassName('offers-arrows__item prev-btn')[0],
    //     nextArrow: document.getElementsByClassName('offers-arrows__item next-btn')[0],
    //     responsive: [
    //         {
    //           breakpoint: 493,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             prevArrow: document.getElementsByClassName('offers-arrows__item prev-btn')[0],
    //             nextArrow: document.getElementsByClassName('offers-arrows__item next-btn')[0],
    //             autoplay: true,
    //             autoplaySpeed: 2000,
    //           }
    //         }
    //     ]
    // });

    // $(".feedback-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: false,
    //     prevArrow: document.getElementsByClassName('feedback__slider-btn prev-btn')[0],
    //     nextArrow: document.getElementsByClassName('feedback__slider-btn next-btn')[0],
    //     speed: 300,
    // });
});



let body = document.body,
    arrow = document.getElementsByClassName('arrow')[0];

arrow.onclick = function() {
    this.classList.toggle('down');
    document.getElementsByClassName('socials-laptop-s__moving-block')[0].classList.toggle('opened');
}


let openBurgerBtn = document.getElementsByClassName('header__burger-btn')[0],
    closeBurgerBtn = document.getElementsByClassName('header__close-burger-btn')[0],
    menu = document.getElementsByClassName('header__line__right')[0],
    overlay = document.getElementsByClassName('overlay')[0];

    console.log(overlay)

openBurgerBtn.onclick = function() {
    body.classList.add('overflow-hidden');
    overlay.classList.add('opened');
    menu.classList.add('opened');
};

closeBurgerBtn.onclick = function() {
    body.classList.remove('overflow-hidden');
    overlay.classList.remove('opened');
    menu.classList.remove('opened');
}

overlay.onclick = function(event) {
    if (event.target == this) {
        body.classList.remove('overflow-hidden');
        overlay.classList.remove('opened');
        menu.classList.remove('opened');
    }
};

//кнопка наверх----------------------------------------------------------------
// let scrolltoTopLink = document.getElementById('scroll-to-top');
// scrolltoTopLink.addEventListener('mousedown', function (event) {
//     event.preventDefault();
//     let blockID = scrolltoTopLink.getAttribute('href').substr(1);

//     document.getElementById(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     });
// });

// scrolltoTopLink.addEventListener('click', function (event) {
//     event.preventDefault();
// });

// window.onscroll = function(event) {
//     if (pageYOffset >= document.documentElement.clientHeight) {
//         scrolltoTopLink.classList.add('active');
//     } else {
//         scrolltoTopLink.classList.remove('active');
//     }
// };
//кнопка наверх----------------------------------------------------------------




//плавный переход по якорям----------------------------------------------------------------
// let anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (event) {
//         event.preventDefault();
//         let blockID = anchor.getAttribute('href').substr(1);

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// }
//плавный переход по якорям----------------------------------------------------------------


//все окна----------------------------------------------------------------
// let defaultPopups = document.getElementsByClassName('popup'),
//     popupsWindows = document.getElementsByClassName('popup__window'),
//     mouseDownInPopupWindow = false,
//     mouseDownInCloseBtn = false;

// for(let popupWindow of popupsWindows) {
//     popupWindow.onmousedown = function(event) {
//         if (event.target.className == "video-popup__close-btn") {
//             return;
//         }

//         if (event.target.className == "popup__close-btn") {
//             mouseDownInCloseBtn = true;
//         } else {
//             mouseDownInPopupWindow = true;
//         }
//     };
// }

// for(let popup of defaultPopups) {
//     popup.onmouseup = function(event) {
//         if (mouseDownInPopupWindow) {
//             mouseDownInPopupWindow = false;
//             return;
//         }

//         if (mouseDownInCloseBtn && event.target.className != "popup__close-btn") {
//             mouseDownInCloseBtn = false;
//             return;
//         }

//         if (this == document.getElementsByClassName('video-popup')[0] && event.target == this || event.target == document.getElementsByClassName('video-popup__close-btn')[0]) {
//             player.pauseVideo(); //остановка ютуб-видео
//             body.classList.remove('overflow-hidden');
//             $(".popup.video-popup").fadeOut(300);
//             return;
//         }

//         if(event.target == this || event.target.className == "popup__close-btn" && mouseDownInCloseBtn) {
//             mouseDownInCloseBtn = false;
//             body.classList.remove('overflow-hidden');
//             $(this).fadeOut(300);
//         }
//     };
// }
//все окна----------------------------------------------------------------




//открытие окон ----------------------------------------------------------------
// let body = document.getElementsByTagName('body')[0],
//     headerOrderBtn = document.getElementsByClassName('header__order-btn')[0],
//     mainOrderBtn = document.getElementsByClassName('main__order-btn')[0],
//     videoPopupLink = document.getElementsByClassName('main__video-link')[0];

// headerOrderBtn.onclick = mainOrderBtn.onclick = function() {
//     body.classList.add('overflow-hidden');
//     $(".popup.order-popup").fadeIn(300);
// };

// videoPopupLink.onclick = function() {
//     body.classList.add('overflow-hidden');
//     $(".popup.video-popup").fadeIn(300);
// };
//открытие окон ----------------------------------------------------------------


//отправка заказа из модального окна ----------------------------------------------------------
// let confirmOrderBtn = document.getElementsByClassName('order-form__confirm-btn')[0];
// confirmOrderBtn.onclick = function(event) {
//     event.preventDefault();

    
// };
//отправка заказа из модального окна ----------------------------------------------------------


//бургер-меню ----------------------------------------------------------------
// let nav = document.getElementsByClassName('header__nav')[0],
//     openMenuBtn = document.getElementsByClassName('header__open-menu-btn')[0],
//     closeMenuBtn = document.getElementsByClassName('nav__close-menu-btn')[0],
//     anchorLinks = document.getElementsByClassName('nav__item');

// openMenuBtn.onclick = function() {
//     nav.classList.add('menu-opened');
// }

// closeMenuBtn.onclick = function() {
//     nav.classList.remove('menu-opened');
// }

// for (let i = 0; i < anchorLinks.length; i++) {
//     anchorLinks[i].onclick = function() {
//         nav.classList.remove('menu-opened');
//     };
// }
//бургер-меню ----------------------------------------------------------------




//переключатель блока цен----------------------------------------------------------------
// let switcherButtons = document.getElementsByClassName('price__switcher__btn'),
//     activeBtn = switcherButtons[0];

// for (let i = 0; i < switcherButtons.length; i++) {
//     switcherButtons[i].onclick = function() {
//         // console.log(this, activeBtn);
//         activeBtn.classList.remove('active');
//         activeBtn = this;
//         activeBtn.classList.add('active');
//     };
// }
//переключатель блока цен----------------------------------------------------------------


//слайдер отзывов----------------------------------------------------------------
// let feedbackSliderItems = document.getElementsByClassName('feedback-slider__item'),
//     feedbackSliderButtons = document.getElementsByClassName('feedback__slider-btn'),
//     currentSlide = 1;

// if(feedbackSliderItems.length > 1) {
//     console.log(feedbackSliderItems.length)
//     feedbackSliderButtons[1].classList.add('enabled');
// }

// feedbackSliderButtons[0].onclick = function() {
//     if (this.classList.contains('enabled')) {
//         console.log('left');
//         currentSlide--;
//         // feedbackSliderItemsWrap.style.transform = `translateX(${(currentSlide - 1) * -100}%)`;

//         if (currentSlide == 1) {
//             this.classList.remove('enabled');
//         }
//         feedbackSliderButtons[1].classList.add('enabled');
//     }
// }

// feedbackSliderButtons[1].onclick = function() {
//     if (this.classList.contains('enabled')) {
//         // feedbackSliderItemsWrap.style.transform = `translateX(${currentSlide * -100}%)`;
//         currentSlide++;

//         if (currentSlide == feedbackSliderItems.length) {
//             this.classList.remove('enabled');
//         }
//         feedbackSliderButtons[0].classList.add('enabled');
//     }
// }
//слайдер отзывов----------------------------------------------------------------



//faq----------------------------------------------------------------------------------
// let questionsButtons = document.getElementsByClassName('question__plus-btn'),
//     currentQuestion = questionsButtons[0].parentElement;

// for (let i = 0; i < questionsButtons.length; i++) {
//     questionsButtons[i].onclick = function() {
//         currentQuestion.classList.remove('opened');
//         currentQuestion = this.parentElement;
//         currentQuestion.classList.add('opened');
//     };
// }
//faq----------------------------------------------------------------------------------
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3RvcmN5Y2xlcy8uL3NyYy9zYXNzL21haW4uc2Fzcz83MmU2Iiwid2VicGFjazovL21vdG9yY3ljbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vdG9yY3ljbGVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vdG9yY3ljbGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb3RvcmN5Y2xlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vdG9yY3ljbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW90b3JjeWNsZXMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ04wQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQzs7OztBQUlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7QUFDUjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDBCQUEwQjs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0Usb0JBQW9CO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zYXNzL21haW4uc2FzcydcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gJChcIi5vZmZlcnMtc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAvLyAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgLy8gICAgIHByZXZBcnJvdzogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2ZmZXJzLWFycm93c19faXRlbSBwcmV2LWJ0bicpWzBdLFxyXG4gICAgLy8gICAgIG5leHRBcnJvdzogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2ZmZXJzLWFycm93c19faXRlbSBuZXh0LWJ0bicpWzBdLFxyXG4gICAgLy8gICAgIHJlc3BvbnNpdmU6IFtcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ5MyxcclxuICAgIC8vICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgLy8gICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgLy8gICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgICAgICAgICAgICBwcmV2QXJyb3c6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29mZmVycy1hcnJvd3NfX2l0ZW0gcHJldi1idG4nKVswXSxcclxuICAgIC8vICAgICAgICAgICAgIG5leHRBcnJvdzogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2ZmZXJzLWFycm93c19faXRlbSBuZXh0LWJ0bicpWzBdLFxyXG4gICAgLy8gICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAvLyAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIF1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vICQoXCIuZmVlZGJhY2stc2xpZGVyXCIpLnNsaWNrKHtcclxuICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAvLyAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgLy8gICAgIHByZXZBcnJvdzogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX3NsaWRlci1idG4gcHJldi1idG4nKVswXSxcclxuICAgIC8vICAgICBuZXh0QXJyb3c6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX19zbGlkZXItYnRuIG5leHQtYnRuJylbMF0sXHJcbiAgICAvLyAgICAgc3BlZWQ6IDMwMCxcclxuICAgIC8vIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxubGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgYXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnJvdycpWzBdO1xyXG5cclxuYXJyb3cub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdkb3duJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb2NpYWxzLWxhcHRvcC1zX19tb3ZpbmctYmxvY2snKVswXS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxufVxyXG5cclxuXHJcbmxldCBvcGVuQnVyZ2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19idXJnZXItYnRuJylbMF0sXHJcbiAgICBjbG9zZUJ1cmdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fY2xvc2UtYnVyZ2VyLWJ0bicpWzBdLFxyXG4gICAgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbGluZV9fcmlnaHQnKVswXSxcclxuICAgIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdmVybGF5JylbMF07XHJcblxyXG4gICAgY29uc29sZS5sb2cob3ZlcmxheSlcclxuXHJcbm9wZW5CdXJnZXJCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW5lZCcpO1xyXG59O1xyXG5cclxuY2xvc2VCdXJnZXJCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpO1xyXG59XHJcblxyXG5vdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL9C60L3QvtC/0LrQsCDQvdCw0LLQtdGA0YUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGxldCBzY3JvbGx0b1RvcExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXRvLXRvcCcpO1xyXG4vLyBzY3JvbGx0b1RvcExpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgbGV0IGJsb2NrSUQgPSBzY3JvbGx0b1RvcExpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpO1xyXG5cclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpLnNjcm9sbEludG9WaWV3KHtcclxuLy8gICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbi8vICAgICAgICAgYmxvY2s6ICdzdGFydCdcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vIHNjcm9sbHRvVG9wTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gfSk7XHJcblxyXG4vLyB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbihldmVudCkge1xyXG4vLyAgICAgaWYgKHBhZ2VZT2Zmc2V0ID49IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuLy8gICAgICAgICBzY3JvbGx0b1RvcExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHNjcm9sbHRvVG9wTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy/QutC90L7Qv9C60LAg0L3QsNCy0LXRgNGFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuLy/Qv9C70LDQstC90YvQuSDQv9C10YDQtdGF0L7QtCDQv9C+INGP0LrQvtGA0Y/QvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGV0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG4vLyBmb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4vLyAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBsZXQgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XHJcblxyXG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpLnNjcm9sbEludG9WaWV3KHtcclxuLy8gICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4vLyAgICAgICAgICAgICBibG9jazogJ3N0YXJ0J1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuLy/Qv9C70LDQstC90YvQuSDQv9C10YDQtdGF0L7QtCDQv9C+INGP0LrQvtGA0Y/QvC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vL9Cy0YHQtSDQvtC60L3QsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGV0IGRlZmF1bHRQb3B1cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cCcpLFxyXG4vLyAgICAgcG9wdXBzV2luZG93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcHVwX193aW5kb3cnKSxcclxuLy8gICAgIG1vdXNlRG93bkluUG9wdXBXaW5kb3cgPSBmYWxzZSxcclxuLy8gICAgIG1vdXNlRG93bkluQ2xvc2VCdG4gPSBmYWxzZTtcclxuXHJcbi8vIGZvcihsZXQgcG9wdXBXaW5kb3cgb2YgcG9wdXBzV2luZG93cykge1xyXG4vLyAgICAgcG9wdXBXaW5kb3cub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCkge1xyXG4vLyAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwidmlkZW8tcG9wdXBfX2Nsb3NlLWJ0blwiKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwicG9wdXBfX2Nsb3NlLWJ0blwiKSB7XHJcbi8vICAgICAgICAgICAgIG1vdXNlRG93bkluQ2xvc2VCdG4gPSB0cnVlO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIG1vdXNlRG93bkluUG9wdXBXaW5kb3cgPSB0cnVlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGZvcihsZXQgcG9wdXAgb2YgZGVmYXVsdFBvcHVwcykge1xyXG4vLyAgICAgcG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgICBpZiAobW91c2VEb3duSW5Qb3B1cFdpbmRvdykge1xyXG4vLyAgICAgICAgICAgICBtb3VzZURvd25JblBvcHVwV2luZG93ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChtb3VzZURvd25JbkNsb3NlQnRuICYmIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgIT0gXCJwb3B1cF9fY2xvc2UtYnRuXCIpIHtcclxuLy8gICAgICAgICAgICAgbW91c2VEb3duSW5DbG9zZUJ0biA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZiAodGhpcyA9PSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlby1wb3B1cCcpWzBdICYmIGV2ZW50LnRhcmdldCA9PSB0aGlzIHx8IGV2ZW50LnRhcmdldCA9PSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlby1wb3B1cF9fY2xvc2UtYnRuJylbMF0pIHtcclxuLy8gICAgICAgICAgICAgcGxheWVyLnBhdXNlVmlkZW8oKTsgLy/QvtGB0YLQsNC90L7QstC60LAg0Y7RgtGD0LEt0LLQuNC00LXQvlxyXG4vLyAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4vLyAgICAgICAgICAgICAkKFwiLnBvcHVwLnZpZGVvLXBvcHVwXCIpLmZhZGVPdXQoMzAwKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaWYoZXZlbnQudGFyZ2V0ID09IHRoaXMgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcInBvcHVwX19jbG9zZS1idG5cIiAmJiBtb3VzZURvd25JbkNsb3NlQnRuKSB7XHJcbi8vICAgICAgICAgICAgIG1vdXNlRG93bkluQ2xvc2VCdG4gPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuLy8gICAgICAgICAgICAgJCh0aGlzKS5mYWRlT3V0KDMwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG4vL9Cy0YHQtSDQvtC60L3QsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8v0L7RgtC60YDRi9GC0LjQtSDQvtC60L7QvSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSxcclxuLy8gICAgIGhlYWRlck9yZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19vcmRlci1idG4nKVswXSxcclxuLy8gICAgIG1haW5PcmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5fX29yZGVyLWJ0bicpWzBdLFxyXG4vLyAgICAgdmlkZW9Qb3B1cExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluX192aWRlby1saW5rJylbMF07XHJcblxyXG4vLyBoZWFkZXJPcmRlckJ0bi5vbmNsaWNrID0gbWFpbk9yZGVyQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbi8vICAgICAkKFwiLnBvcHVwLm9yZGVyLXBvcHVwXCIpLmZhZGVJbigzMDApO1xyXG4vLyB9O1xyXG5cclxuLy8gdmlkZW9Qb3B1cExpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuLy8gICAgICQoXCIucG9wdXAudmlkZW8tcG9wdXBcIikuZmFkZUluKDMwMCk7XHJcbi8vIH07XHJcbi8v0L7RgtC60YDRi9GC0LjQtSDQvtC60L7QvSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/QvtGC0L/RgNCw0LLQutCwINC30LDQutCw0LfQsCDQuNC3INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGV0IGNvbmZpcm1PcmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29yZGVyLWZvcm1fX2NvbmZpcm0tYnRuJylbMF07XHJcbi8vIGNvbmZpcm1PcmRlckJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHJcbi8vIH07XHJcbi8v0L7RgtC/0YDQsNCy0LrQsCDQt9Cw0LrQsNC30LAg0LjQtyDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy/QsdGD0YDQs9C10YAt0LzQtdC90Y4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19uYXYnKVswXSxcclxuLy8gICAgIG9wZW5NZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19vcGVuLW1lbnUtYnRuJylbMF0sXHJcbi8vICAgICBjbG9zZU1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2Nsb3NlLW1lbnUtYnRuJylbMF0sXHJcbi8vICAgICBhbmNob3JMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdl9faXRlbScpO1xyXG5cclxuLy8gb3Blbk1lbnVCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ21lbnUtb3BlbmVkJyk7XHJcbi8vIH1cclxuXHJcbi8vIGNsb3NlTWVudUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuZWQnKTtcclxuLy8gfVxyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhbmNob3JMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgYW5jaG9yTGlua3NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW5lZCcpO1xyXG4vLyAgICAgfTtcclxuLy8gfVxyXG4vL9Cx0YPRgNCz0LXRgC3QvNC10L3RjiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG4vL9C/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMINCx0LvQvtC60LAg0YbQtdC9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBsZXQgc3dpdGNoZXJCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJpY2VfX3N3aXRjaGVyX19idG4nKSxcclxuLy8gICAgIGFjdGl2ZUJ0biA9IHN3aXRjaGVyQnV0dG9uc1swXTtcclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpdGNoZXJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICBzd2l0Y2hlckJ1dHRvbnNbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMsIGFjdGl2ZUJ0bik7XHJcbi8vICAgICAgICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgIGFjdGl2ZUJ0biA9IHRoaXM7XHJcbi8vICAgICAgICAgYWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4vLyAgICAgfTtcclxuLy8gfVxyXG4vL9C/0LXRgNC10LrQu9GO0YfQsNGC0LXQu9GMINCx0LvQvtC60LAg0YbQtdC9LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8v0YHQu9Cw0LnQtNC10YAg0L7RgtC30YvQstC+0LItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGxldCBmZWVkYmFja1NsaWRlckl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2stc2xpZGVyX19pdGVtJyksXHJcbi8vICAgICBmZWVkYmFja1NsaWRlckJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fc2xpZGVyLWJ0bicpLFxyXG4vLyAgICAgY3VycmVudFNsaWRlID0gMTtcclxuXHJcbi8vIGlmKGZlZWRiYWNrU2xpZGVySXRlbXMubGVuZ3RoID4gMSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coZmVlZGJhY2tTbGlkZXJJdGVtcy5sZW5ndGgpXHJcbi8vICAgICBmZWVkYmFja1NsaWRlckJ1dHRvbnNbMV0uY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xyXG4vLyB9XHJcblxyXG4vLyBmZWVkYmFja1NsaWRlckJ1dHRvbnNbMF0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbmFibGVkJykpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xyXG4vLyAgICAgICAgIGN1cnJlbnRTbGlkZS0tO1xyXG4vLyAgICAgICAgIC8vIGZlZWRiYWNrU2xpZGVySXRlbXNXcmFwLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KGN1cnJlbnRTbGlkZSAtIDEpICogLTEwMH0lKWA7XHJcblxyXG4vLyAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT0gMSkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZmVlZGJhY2tTbGlkZXJCdXR0b25zWzFdLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZmVlZGJhY2tTbGlkZXJCdXR0b25zWzFdLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZW5hYmxlZCcpKSB7XHJcbi8vICAgICAgICAgLy8gZmVlZGJhY2tTbGlkZXJJdGVtc1dyYXAuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjdXJyZW50U2xpZGUgKiAtMTAwfSUpYDtcclxuLy8gICAgICAgICBjdXJyZW50U2xpZGUrKztcclxuXHJcbi8vICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA9PSBmZWVkYmFja1NsaWRlckl0ZW1zLmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2VuYWJsZWQnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZmVlZGJhY2tTbGlkZXJCdXR0b25zWzBdLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL9GB0LvQsNC50LTQtdGAINC+0YLQt9GL0LLQvtCyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4vL2ZhcS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGV0IHF1ZXN0aW9uc0J1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdxdWVzdGlvbl9fcGx1cy1idG4nKSxcclxuLy8gICAgIGN1cnJlbnRRdWVzdGlvbiA9IHF1ZXN0aW9uc0J1dHRvbnNbMF0ucGFyZW50RWxlbWVudDtcclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25zQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgcXVlc3Rpb25zQnV0dG9uc1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgY3VycmVudFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW5lZCcpO1xyXG4vLyAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuLy8gICAgICAgICBjdXJyZW50UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbi8vICAgICB9O1xyXG4vLyB9XHJcbi8vZmFxLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJzb3VyY2VSb290IjoiIn0=